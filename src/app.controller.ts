import { Request } from 'express';
import { Redirect, Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService : AppService) {}

  @Get()
  @ApiOperation({summary: 'Main Page', description: '메인 화면'})
  getHello(@Req() req:Request): string {
    console.log(req)
    return this.appService.getHello();
  }
}
