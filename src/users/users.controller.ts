import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRO } from './interfaces/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post()
  async create(@Body() userData: CreateUserDto) {
    return this.usersService.create(userData);
  }

  @Get()
  public async findAll():Promise<string> {
    return '유저 관리 페이지'
  }

  @Post('info')
  async findOne(@Body('user') user:string){
    return this.usersService.userinfo(user);
  }

  @Post('1')
  async bodyTest(@Body('user') user:string){
    return this.usersService.test(user);
  }

}