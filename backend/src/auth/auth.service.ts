import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { access } from 'fs';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService    
    ){}


    async validateCredentials(email: string, password: string ): Promise<boolean> {
        
        const user = await this.userService.getUserByEmail(email)

        if(!user) {
            throw new NotFoundException
        }

        if (user.password === password) {
            return true
        }

        return false
    }


    async login(user: any) {
        const payload = {email: user.email, password: user.password}

        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    
}
