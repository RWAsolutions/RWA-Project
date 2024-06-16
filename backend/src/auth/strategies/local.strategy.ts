import { PassportStrategy } from '@nestjs/passport';
import { HttpException, ImATeapotException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super({usernameField: 'email'})
    }

    async validate(email: string, password: string) {
        const result = await this.authService.validateUser({ email, password });
    
        if (result instanceof HttpException) {
          throw result;
        }
    
        return result;
      }
}