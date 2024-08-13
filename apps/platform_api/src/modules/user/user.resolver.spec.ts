import { GqlAuthGuard } from '@/common/guards/auth.guard';
import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

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

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        {
          provide: UserService,
          useValue: mockUserService,
        },
        {
          provide: GqlAuthGuard,
          useValue: {
            canActivate: (context: ExecutionContext) => {
              const ctx = GqlExecutionContext.create(context);
              ctx.getContext().req.user = mockContext.req.user;
              return true;
            },
          },
        },
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
