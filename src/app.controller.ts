import { Request } from 'express';
import { Redirect, Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service'
 
@Controller()
export class AppController {
  constructor(private readonly appService : AppService) {}

  @Redirect('cats')
  @Get()
  getHello(@Req() req:Request): string {
    console.log(req)
    return this.appService.getHello();
  }
}
