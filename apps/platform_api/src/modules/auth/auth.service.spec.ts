import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/models/user.entity';
import * as bcrypt from 'bcryptjs';
import {
  ACCOUNT_EXIST,
  ACCOUNT_NOT_EXIST,
  LOGIN_ERROR,
  REGISTER_ERROR,
  SUCCESS,
  UPDATE_PASSWORD_ERROR,
} from '@/common/constants/code';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UserService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: {
            findByEmail: jest.fn(),
            create: jest.fn(),
            find: jest.fn(),
            update: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('login', () => {
    it('should return error if user does not exist', async () => {
      jest.spyOn(userService, 'findByEmail').mockResolvedValueOnce(null);
      expect(await service.login('test@example.com', 'password')).toEqual({
        code: 10002,
        message: "account doesn't exist",
      });
    });

    it('should return error if password is invalid', async () => {
      jest.spyOn(userService, 'findByEmail').mockResolvedValueOnce({
        id: 'a9868b30-51bd-4070-8dbb-043a56e21bcb',
        email: 'wethanw.001@gmail.com',
        password: 'YourSecurePassword',
      } as User);

      jest.spyOn(bcrypt, 'compare' as any).mockResolvedValueOnce(false);

      expect(await service.login('test@example.com', 'wrongpassword')).toEqual({
        code: 10003,
        message: 'login failed, wrong password',
      });
    });

    it('should return token if login is successful', async () => {
      jest.spyOn(userService, 'findByEmail').mockResolvedValueOnce({
        id: 'a9868b30-51bd-4070-8dbb-043a56e21bcb',
        email: 'wethanw.001@gmail.com',
        password: 'YourSecurePassword',
      } as User);
      jest.spyOn(bcrypt, 'compare' as any).mockResolvedValueOnce(true);
      jest.spyOn(jwtService, 'sign').mockReturnValue('token');

      expect(await service.login('test@example.com', 'password')).toEqual({
        code: 200,
        message: 'login successful',
        data: 'token',
      });
    });
  });

  describe('register', () => {
    it('should register a new user successfully', async () => {
      const newUserInput = {
        email: 'test@example.com',
        password: 'password',
        displayName: 'Test User',
        ref: 'Default_Ref_Value',
      };
      (userService.findByEmail as jest.Mock).mockResolvedValueOnce(null);
      (userService.create as jest.Mock).mockResolvedValueOnce({
        id: 1,
        ...newUserInput,
      });

      const result = await service.register(newUserInput);

      expect(result.code).toBe(SUCCESS);
    });

    it('should return ACCOUNT_EXIST error when user already exists', async () => {
      const existingUserInput = {
        email: 'existing@example.com',
        password: 'password',
        displayName: 'Default_Display_Name',
        ref: 'Default_Ref_Value',
      };
      (userService.findByEmail as jest.Mock).mockResolvedValueOnce(existingUserInput);

      const result = await service.register(existingUserInput);

      expect(result.code).toBe(ACCOUNT_EXIST);
    });

    it('should return SUCCESS when displayName is an empty string', async () => {
      const newUserInput = {
        email: 'existing@example.com',
        password: 'password',
        displayName: '',
        ref: 'Default_Ref_Value',
      };
      (userService.findByEmail as jest.Mock).mockResolvedValueOnce(null);
      (userService.create as jest.Mock).mockResolvedValueOnce({
        id: 1,
        ...newUserInput,
      });

      const result = await service.register(newUserInput);

      expect(result.code).toBe(SUCCESS);
    });

    it('should return registration failed error when mandatory fields are missing', async () => {
      const incompleteUserInput = {
        email: '',
        password: 'password',
        displayName: 'Incomplete User',
        ref: 'Default_Ref_Value',
      };
      const expectedErrorMessage = 'registration failed';

      const result = await service.register(incompleteUserInput);

      expect(result.code).toBe(REGISTER_ERROR);
      expect(result.message).toBe(expectedErrorMessage);
    });
  });

  describe('change password', () => {
    const mockContext = {
      req: {
        user: {
          id: 'user-id',
        },
      },
    };

    const updatePasswordInput = {
      oldPassword: 'oldPass123!',
      newPassword: 'newPass123!',
    };

    it('should fail to change password if user does not exist', async () => {
      jest.spyOn(userService, 'find').mockResolvedValue(null);
      const result = await service.changePassword(mockContext, updatePasswordInput);
      expect(result).toEqual({
        code: ACCOUNT_NOT_EXIST,
        message: "account doesn't exist",
      });
    });

    it('should fail if current password is incorrect', async () => {
      jest
        .spyOn(userService, 'find')
        .mockResolvedValue({ id: 'user-id', password: 'hash' } as User);
      jest.spyOn(bcrypt, 'compare' as any).mockResolvedValue(false);
      const result = await service.changePassword(mockContext, updatePasswordInput);
      expect(result).toEqual({
        code: LOGIN_ERROR,
        message: 'the current password is incorrect',
      });
    });

    it('should successfully update password', async () => {
      jest
        .spyOn(userService, 'find')
        .mockResolvedValue({ id: 'user-id', password: 'hash' } as User);
      jest.spyOn(bcrypt, 'compare' as any).mockResolvedValue(true);
      jest.spyOn(bcrypt, 'hash' as any).mockResolvedValue('newHash');
      jest.spyOn(userService, 'update').mockResolvedValue(true);
      const result = await service.changePassword(mockContext, updatePasswordInput);
      expect(result).toEqual({
        code: SUCCESS,
        message: 'password updated',
      });
    });

    it('should report an error if the password update fails', async () => {
      jest
        .spyOn(userService, 'find')
        .mockResolvedValue({ id: 'user-id', password: 'hash' } as User);
      jest.spyOn(bcrypt, 'compare' as any).mockResolvedValue(true);
      jest.spyOn(bcrypt, 'hash' as any).mockResolvedValue('newHash');
      jest.spyOn(userService, 'update').mockResolvedValue(false);
      const result = await service.changePassword(mockContext, updatePasswordInput);
      expect(result).toEqual({
        code: UPDATE_PASSWORD_ERROR,
        message: 'password update failed',
      });
    });
  });
});
