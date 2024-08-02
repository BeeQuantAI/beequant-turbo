import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '@/modules/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }
  async validate(user): Promise<any> {
    if (!user.id) {
      throw new UnauthorizedException('Login first to access this endpoint.');
    }
    const userChecked = await this.userService.find(String(user.id));
    if (!userChecked) {
      throw new UnauthorizedException('User not found.');
    }
    return user;
  }
}
