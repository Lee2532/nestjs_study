import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Cat } from 'src/cats/schemas/cat.schema';

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

}