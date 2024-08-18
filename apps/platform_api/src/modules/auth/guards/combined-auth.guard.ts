import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthService } from '@/modules/auth/auth.service';
import { AccessTokenGuard } from './jwt-access-auth.guard';
import { RefreshJwtAuthGuard } from './jwt-refresh-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@/modules/user/user.service';
import { TokenService } from '@/modules/auth/token.service';

@Injectable()
export class CombinedAuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly accessTokenGuard: AccessTokenGuard,
    private readonly refreshJwtAuthGuard: RefreshJwtAuthGuard,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly tokenService: TokenService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlContext = GqlExecutionContext.create(context);
    const ctx = gqlContext.getContext();
    const res = ctx.res;
    const req = ctx.req;

    const { accessTokenFromRequest, accessTokenFromDB } = await this.tokenService.processToken(req);

    if (accessTokenFromRequest !== accessTokenFromDB) {
      res.setHeader('x-auth-status', 'invalid');
      throw new UnauthorizedException('Access token is invalid');
    }

    try {
      const canActivate = await this.accessTokenGuard.canActivate(context);
      if (canActivate) {
        return true;
      }
    } catch (err) {
      if (err instanceof UnauthorizedException) {
        try {
          const canActivate = await this.refreshJwtAuthGuard.canActivate(context);
          if (canActivate) {
            const user = ctx.req.user;
            const newAccessToken = await this.authService.generateAccessToken(user);
            res.setHeader('x-new-access-token', newAccessToken);
            return true;
          }
        } catch (refreshTokenErr) {
          res.setHeader('x-auth-status', 'invalid');
          throw new UnauthorizedException('Both tokens are invalid');
        }
      }
    }
    return false;
  }
}
