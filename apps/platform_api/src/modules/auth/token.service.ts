import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@/modules/user/user.service';
import { Request } from 'express';

export interface RefreshTokenResponse {
  id: string;
  accessTokenFromRequest: string;
  accessTokenFromDB: string;
}

@Injectable()
export class TokenService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  async processToken(req: Request): Promise<RefreshTokenResponse> {
    const authHeader = req.headers.authorization;
    let id: string;
    let accessTokenFromDB: string;
    let accessTokenFromRequest: string;
    let refreshTokenFromDB: string;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      accessTokenFromRequest = authHeader.split(' ')[1];
      const decoded = this.jwtService.decode(accessTokenFromRequest);
      id = decoded.id;
      const user = await this.userService.find(id);
      if (!user) {
        throw new Error('User not found');
      }
      refreshTokenFromDB = user.refreshToken;
      accessTokenFromDB = user.accessToken;
      req.headers['x-refresh-token'] = refreshTokenFromDB;
    }
    return { accessTokenFromRequest, accessTokenFromDB, id };
  }
}
