import { Controller, Get, Post, UseGuards, Request, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){
    }


    @Post('login')
    @UseGuards(AuthGuard('local'))
    async login(@Request() req) {
        return this.authService.login(req.body)
    }

    @Get('user/info')
    @UseGuards(AuthGuard('jwt'))
    getUser(@Request() req) {
        return req.user
    }

}
