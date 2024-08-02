import { ValidationPipe } from './registration-validation.pipe';
import { userSchema } from '../../../validation/schemas/auth/user.request';

describe('ValidationPipe', () => {
  let pipe: ValidationPipe;

  beforeEach(() => {
    pipe = new ValidationPipe(userSchema);
  });

  it('should transform value if validation passes', () => {
    const value = {
      displayName: 'test',
      email: 'test@example.com',
      password: 'password123!',
      ref: 'COREINTERNAL',
    };

    expect(pipe.transform(value)).toEqual(value);
  });

  it('should throw HttpException if validation fails', () => {
    const value = {
      displayName: 'te',
      email: 'test@example',
      password: 'password123!',
    };

    try {
      pipe.transform(value);
      fail('Expected HttpException to be thrown');
    } catch (error) {
      expect(error.message).toEqual(
        '"Display Name" with value "te" fails to match the required pattern: /^([a-zA-Z0-9-_]{4,15})?$/'
      );
      expect(error.getStatus()).toEqual(400);
    }
  });

  it('should throw HttpException if validation fails', () => {
    const value = {
      displayName: '',
      email: '',
      password: 'password123!',
    };

    try {
      pipe.transform(value);
      fail('Expected HttpException to be thrown');
    } catch (error) {
      expect(error.getStatus()).toEqual(400);
    }
  });
});
