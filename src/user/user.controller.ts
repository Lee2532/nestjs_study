import { HttpCode, Header, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async hello(): Promise<string>{
        return this.userService.getHello();

    }

}
