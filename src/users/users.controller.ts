import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRO } from './interfaces/users.interface';
import { UsersService } from './users.service';
import { ApiTags, ApiOperation, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';


@Controller('users')
@ApiTags('유저 정보 API')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post()
  @ApiOperation({ summary: '유저 생성', description: '새로운 유저를 생성한다.' })
  async create(@Body() userData: CreateUserDto) {
    return this.usersService.create(userData);
  }

  @Get()
  @ApiOperation({ summary: '전체 유저 정보', description: '유저 전체를 보여준다' })
  public async findAll():Promise<string> {
    return '유저 관리 페이지'
  }

  @Post('info')
  @ApiOperation({ summary: '유저 정보', description: 'ID에 해당하는 유저 정보'})
  async findOne(@Body('user') user:string){
    return this.usersService.userinfo(user);
  }

  @Post('1')
  @ApiOperation({ summary: '테스트', description: '테스트' })
  async bodyTest(@Body('user') user:string){
    let data:object = this.usersService.test(user);
    return this.usersService.test(user);
  }

}