import * as uuid from 'uuid';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { Repository, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInfoDto } from './dto/user.user-info.dto';
import { CreateUserDto } from './dto/user.creat-user.dto';
import { UserRO } from './interfaces/users.interface';
import { validate } from 'class-validator';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}
  
  async findAll(): Promise<UserEntity[]> {
    
    return this.userRepository.find();
  }


  async create(dto: CreateUserDto): Promise<UserRO> {
    // check uniqueness of username/email
    const {username, email, password} = dto;
    const qb = await getRepository(UserEntity)
      .createQueryBuilder('user')
      .where('user.username = :username', { username })
      .orWhere('user.email = :email', { email });

    const user = await qb.getOne();

    //cheak user where username or email
    if (user) {
      const errors = {username: 'Username and email must be unique.'};
      throw new HttpException({message: 'Input data validation failed', errors}, HttpStatus.BAD_REQUEST);
    }

    // create new user
    let newUser = new UserEntity();
    newUser.username = username;
    newUser.email = email;
    newUser.password = password;
    newUser.uuid = uuid.v4();
    newUser.create_date = new Date();
    
    const errors = await validate(newUser);
    if (errors.length > 0) {
      const _errors = {username: 'Userinput is not valid.'};
      throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);

    } else {
      const savedUser = await this.userRepository.save(newUser);
      return this.buildUserRO(savedUser);
    }

  }


  async userinfo(user):Promise<object> {
    let username = user.username;
    let password = user.password;

    const query = await getRepository(UserEntity)
      .createQueryBuilder()
      .where("username = :username", {username})
      .andWhere("password = :password", {password})
    
    let result = await query.getOne();
    console.log(result);
    if (result == undefined) {
      let result_data = {
        'msg' : "아이디 또는 패스워드를 체크해주세요"
      }
  
      return result_data
    }
    return result
  }

  private buildUserRO(user: UserEntity) {
    const userRO = {
      id: user.id,
      username: user.username,
      uuid: user.uuid,
      email: user.email,
      create_date: user.create_date,
      bio: user.bio,
      image: user.image,
    };

    return {user: userRO};
  }
}