import { Module, ConsoleLogger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserService } from '../user/user.service';
import { AccessJwtStrategy } from './strategies/access-jwt.strategy';
import { User } from '../user/models/user.entity';
import { RefreshJwtStrategy } from './strategies/refresh-jwt.strategy';
import { AccessTokenGuard } from '@/modules/auth/guards/jwt-access-auth.guard';
import { RefreshJwtAuthGuard } from '@/modules/auth/guards/jwt-refresh-auth.guard';
import { CombinedAuthGuard } from '@/modules/auth/guards/combined-auth.guard';
import { TokenService } from '@/modules/auth/token.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: 60 * 60 * 24 + 's',
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    ConsoleLogger,
    AuthService,
    AuthResolver,
    UserService,
    AccessJwtStrategy,
    RefreshJwtStrategy,
    AccessTokenGuard,
    RefreshJwtAuthGuard,
    CombinedAuthGuard,
    TokenService,
  ],
  exports: [
    AuthService,
    AccessTokenGuard,
    RefreshJwtAuthGuard,
    CombinedAuthGuard,
    JwtModule,
    UserService,
    TokenService,
  ],
})
export class AuthModule {}
