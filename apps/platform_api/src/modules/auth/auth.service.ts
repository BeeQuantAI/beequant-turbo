import * as bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserInput } from '../user/dto/new-user.input';
import { UserService } from '../user/user.service';
import { Result } from '@/common/dto/result.type';
import { UpdatePasswordInput } from '../user/dto/update-password.input';
import * as dotenv from 'dotenv';
dotenv.config();

import {
  ACCOUNT_EXIST,
  ACCOUNT_NOT_EXIST,
  LOGIN_ERROR,
  REGISTER_ERROR,
  SUCCESS,
  UPDATE_PASSWORD_ERROR,
  UNKNOWN_ERROR,
} from '@/common/constants/code';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async login(email: string, password: string): Promise<Result> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      return {
        code: ACCOUNT_NOT_EXIST,
        message: "account doesn't exist",
      };
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const token = this.jwtService.sign({ id: user.id });
      return {
        code: SUCCESS,
        message: 'login successful',
        data: token,
      };
    }
    return {
      code: LOGIN_ERROR,
      message: 'login failed, wrong password',
    };
  }

  async register(input: CreateUserInput): Promise<Result> {
    const user = await this.userService.findByEmail(input.email);
    if (user) {
      return {
        code: ACCOUNT_EXIST,
        message: 'account already exists',
      };
    }
    const hashedPassword = await bcrypt.hash(input.password, 10);
    const res = await this.userService.create({
      ...input,
      password: hashedPassword,
    });
    if (res) {
      return {
        code: SUCCESS,
        message: 'register successfully',
      };
    }
    return {
      code: REGISTER_ERROR,
      message: 'registration failed',
    };
  }

  async changePassword(
    cxt: { req: Partial<Request> & { user: { id: string } } },
    input: UpdatePasswordInput
  ): Promise<Result> {
    try {
      const id = cxt.req.user.id;
      const user = await this.userService.find(id);
      if (!user) {
        return {
          code: ACCOUNT_NOT_EXIST,
          message: "account doesn't exist",
        };
      }
      const isPasswordValid = await bcrypt.compare(input.oldPassword, user.password);
      if (!isPasswordValid) {
        return {
          code: LOGIN_ERROR,
          message: 'the current password is incorrect',
        };
      }
      const hashedPassword = await bcrypt.hash(input.newPassword, 10);
      const res = await this.userService.update(id, { password: hashedPassword });
      if (res) {
        return {
          code: SUCCESS,
          message: 'password updated',
        };
      } else {
        return {
          code: UPDATE_PASSWORD_ERROR,
          message: 'password update failed',
        };
      }
    } catch (error) {
      return {
        code: UNKNOWN_ERROR,
        message: 'an unexpected error occurred during password update',
      };
    }
  }
}
