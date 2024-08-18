import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { CombinedAuthGuard } from '@/modules/auth/guards/combined-auth.guard';
import { AuthService } from '@/modules/auth/auth.service';
import { AccessTokenGuard } from '@/modules/auth/guards/jwt-access-auth.guard';
import { RefreshJwtAuthGuard } from '@/modules/auth/guards/jwt-refresh-auth.guard';
import { TokenService } from '@/modules/auth/token.service';

describe('UserResolver', () => {
  let resolver: UserResolver;
  let userService: UserService;

  const mockUserService = {
    find: jest.fn((id: string) => ({
      id,
      email: 'test@example.com',
      ref: 'ref123',
      displayName: 'Test User',
    })),
  };

  const mockContext = {
    req: {
      user: {
        id: '1332332',
      },
    },
  };

  const mockAccessTokenGuard = {
    canActivate: jest.fn(() => true),
  };

  const mockRefreshJwtAuthGuard = {
    canActivate: jest.fn(() => true),
  };

  const mockAuthService = {
    generateAccessToken: jest.fn().mockResolvedValue('newAccessToken'),
  };

  const mockTokenService = {
    processToken: jest.fn().mockResolvedValue(true),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        {
          provide: UserService,
          useValue: mockUserService,
        },
        {
          provide: CombinedAuthGuard,
          useValue: {
            canActivate: (context: ExecutionContext) => {
              const ctx = GqlExecutionContext.create(context);
              ctx.getContext().req.user = mockContext.req.user;
              return true;
            },
          },
        },
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
        {
          provide: AccessTokenGuard,
          useValue: mockAccessTokenGuard,
        },
        {
          provide: RefreshJwtAuthGuard,
          useValue: mockRefreshJwtAuthGuard,
        },
        {
          provide: TokenService,
          useValue: mockTokenService,
        },
        JwtService,
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
    userService = module.get<UserService>(UserService);
  });

  it('should return the current user information', async () => {
    const result = await resolver.getUserInfo(mockContext);
    expect(result).toEqual({
      id: '1332332',
      email: 'test@example.com',
      ref: 'ref123',
      displayName: 'Test User',
    });
    expect(userService.find).toHaveBeenCalledWith('1332332');
  });
});
