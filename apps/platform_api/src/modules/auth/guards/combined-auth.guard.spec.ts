import { Test, TestingModule } from '@nestjs/testing';
import { CombinedAuthGuard } from './combined-auth.guard';
import { AuthService } from '../auth.service';
import { AccessTokenGuard } from './jwt-access-auth.guard';
import { RefreshJwtAuthGuard } from './jwt-refresh-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../user/user.service';
import { TokenService } from '../token.service';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';

describe('CombinedAuthGuard', () => {
  let guard: CombinedAuthGuard;
  let authService: AuthService;
  let accessTokenGuard: AccessTokenGuard;
  let refreshJwtAuthGuard: RefreshJwtAuthGuard;
  let tokenService: TokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CombinedAuthGuard,
        {
          provide: AuthService,
          useValue: {
            generateAccessToken: jest.fn(),
          },
        },
        {
          provide: AccessTokenGuard,
          useValue: {
            canActivate: jest.fn(),
          },
        },
        {
          provide: RefreshJwtAuthGuard,
          useValue: {
            canActivate: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
            verify: jest.fn(),
          },
        },
        {
          provide: UserService,
          useValue: {
            findUserById: jest.fn(),
          },
        },
        {
          provide: TokenService,
          useValue: {
            processToken: jest.fn(),
          },
        },
      ],
    }).compile();

    guard = module.get<CombinedAuthGuard>(CombinedAuthGuard);
    authService = module.get<AuthService>(AuthService);
    accessTokenGuard = module.get<AccessTokenGuard>(AccessTokenGuard);
    refreshJwtAuthGuard = module.get<RefreshJwtAuthGuard>(RefreshJwtAuthGuard);
    tokenService = module.get<TokenService>(TokenService);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  describe('canActivate', () => {
    it('should return true if access token is valid', async () => {
      const context = createMockGqlExecutionContext();

      (tokenService.processToken as jest.Mock).mockResolvedValue({
        accessTokenFromRequest: 'validToken',
        accessTokenFromDB: 'validToken',
      });

      (accessTokenGuard.canActivate as jest.Mock).mockResolvedValue(true);

      const result = await guard.canActivate(context);

      expect(result).toBe(true);
      expect(accessTokenGuard.canActivate).toHaveBeenCalledWith(context);
    });

    it('should return true if refresh token is valid', async () => {
      const context = createMockGqlExecutionContext();

      (tokenService.processToken as jest.Mock).mockResolvedValue({
        accessTokenFromRequest: 'invalidToken',
        accessTokenFromDB: 'invalidToken',
      });

      (accessTokenGuard.canActivate as jest.Mock).mockRejectedValue(new UnauthorizedException());

      (refreshJwtAuthGuard.canActivate as jest.Mock).mockImplementation(async () => {
        const args = context.getArgs();
        args[2].req.user = { id: 1 };
        return true;
      });

      const result = await guard.canActivate(context);

      expect(result).toBe(true);
      expect(refreshJwtAuthGuard.canActivate).toHaveBeenCalledWith(context);
      expect(authService.generateAccessToken).toHaveBeenCalledWith(context.getArgs()[2].req.user);
    });

    it('should throw UnauthorizedException if both tokens are invalid', async () => {
      const context = createMockGqlExecutionContext();

      (tokenService.processToken as jest.Mock).mockResolvedValue({
        accessTokenFromRequest: 'invalidToken',
        accessTokenFromDB: 'invalidToken',
      });

      (accessTokenGuard.canActivate as jest.Mock).mockRejectedValue(new UnauthorizedException());
      (refreshJwtAuthGuard.canActivate as jest.Mock).mockRejectedValue(new UnauthorizedException());

      await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
    });
  });
});

// Helper function to create a mock GraphQL ExecutionContext
function createMockGqlExecutionContext(): ExecutionContext {
  const req = { headers: {}, user: { id: 1 } };
  const res = {
    setHeader: jest.fn(),
  };
  const gqlContext = { req, res };

  const executionContext = {
    switchToHttp: jest.fn().mockReturnValue({ getRequest: () => req }),
    getType: jest.fn().mockReturnValue('graphql'),
    getHandler: jest.fn(),
    getClass: jest.fn(),
    getArgs: jest.fn(() => [null, null, gqlContext]),
    getContext: jest.fn().mockReturnValue(gqlContext),
  } as unknown as ExecutionContext;

  jest.spyOn(GqlExecutionContext, 'create').mockImplementation(
    () =>
      ({
        getContext: jest.fn().mockReturnValue(gqlContext),
        getArgs: jest.fn(() => [null, null, gqlContext]),
      }) as any
  );

  return executionContext;
}
