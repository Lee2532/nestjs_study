import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { UserInfoDto } from './dto/user.user-info.dto';
import { CreateUserDto } from './dto/user.creat-user.dto';
import { UserRO } from './interfaces/users.interface';
import { UsersService } from './users.service';
import { ApiTags, ApiOperation, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { Response } from 'express';

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
  async findAll(@Res() res:Response) {
    return res.json({userinfo : await this.usersService.findAll()});
  }

  @Post('info')
  @ApiOperation({ summary: '유저 정보', description: '해당하는 유저 정보'})
  async findOne(@Body() user:UserInfoDto){
    return this.usersService.userinfo(user);
  }
}