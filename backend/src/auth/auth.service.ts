import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthPayloadDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser({ email, password }: AuthPayloadDto): Promise<any> {
    try {
      const findUser = await this.userService.getUserByEmail(email);
      if (!findUser) {
        return new NotFoundException('User not found!');
      }

      if (findUser.password !== password) {
        return new UnauthorizedException('Wrong email or password!');
        }
        
      const { password: userPassword, ...user } = findUser;
      return { accessToken: this.jwtService.sign(user) };
      } catch (error) {
        return new UnauthorizedException('Wrong email or password!');
    }
  }
}
