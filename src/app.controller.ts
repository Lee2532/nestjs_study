import { Request } from 'express';
import { Controller, Get, Res, HttpStatus, Render } from '@nestjs/common';
import { AppService } from './app.service'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';


@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService : AppService) {}

  @Get()
  @ApiOperation({summary: 'Main Page', description: '메인 화면'})
  root(@Res() res: Response) {
    console.log(this.appService.getHello())

    return res.render(
      this.appService.getHello(),
      { message: "Hello world" },
    );
  }
}
