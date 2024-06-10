import { Controller, Get, Post, UseGuards, Request, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){
    }


    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.body)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('user/info')
    getUser(@Request() req) {
        return req.user
    }

}
