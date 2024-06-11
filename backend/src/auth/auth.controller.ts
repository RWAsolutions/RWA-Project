import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){
    }


    @Post('login')
    @UseGuards(LocalGuard)
    async login(@Request() req) {
        // console.log(req)
        return req.user
    }

    @Get('user/info')
    @UseGuards(JwtAuthGuard)
    getUser(@Request() req) {
        // console.log(req)
        return req.user
    }
}
