import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-local';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super({usernameField: 'email'})
    }


    async validate(email: string, password: string): Promise<any> {
        const user = await this.authService.validateCredentials(email,password)
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}