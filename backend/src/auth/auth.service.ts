import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { access } from 'fs';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthPayloadDto } from './dto/auth.dto';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService    
    ){}


    async validateUser({ email, password }: AuthPayloadDto) {
        
        const findUser = await this.userService.getUserByEmail(email)

        if(!findUser) {
            throw new NotFoundException("The user does not exist.......")
        }

        if (findUser.password === password) {
            const { password, ...user } = findUser
            return {accessToken:  this.jwtService.sign(user)}

        }

        throw new UnauthorizedException("Wrong email or password!")
    }
    
}
