import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){
    }


    @Post('login')
    @Public()
    @UseGuards(LocalGuard)
    async login(@Request() req) {
        // console.log(req)
        return req.user
    }

    @Get('user/info')
    //@UseGuards(JwtAuthGuard)
    //! We commented out the UseGuards() decorator because we applied the JwtAuthGuard globally 
    //! to protect all routes located in the auth module
    getUser(@Request() req) {
        // console.log(req)
        return req.user
    }
}
