import { PasswordValidationPipe } from './password-validation.pipe';
import { passwordUpdateSchema } from '@/validation/schemas/auth/password.update';
import { EmptyFiledException } from '@/exceptions/empty-field.exception';
import { InvalidInputException } from '@/exceptions/invalid-input.exception';

describe('PasswordValidationPipe', () => {
  let pipe: PasswordValidationPipe;

  beforeEach(() => {
    pipe = new PasswordValidationPipe(passwordUpdateSchema);
  });

  it('should return value when validation succeeds', () => {
    const value = {
      oldPassword: 'oldPass123!',
      newPassword: 'newPass123!',
    };
    expect(pipe.transform(value)).toEqual(value);
  });

  it('should throw EmptyFiledException when oldPassword is missing', () => {
    const value = {
      oldPassword: '',
      newPassword: 'newPass123!',
    };
    expect(() => pipe.transform(value)).toThrow(EmptyFiledException);
    expect(() => pipe.transform(value)).toThrow('"Old Password" is required');
  });

  it('should throw EmptyFiledException when newPassword is missing', () => {
    const value = {
      oldPassword: 'oldPass123!',
      newPassword: '',
    };
    expect(() => pipe.transform(value)).toThrow(EmptyFiledException);
    expect(() => pipe.transform(value)).toThrow('"New Password" is required');
  });

  it('should throw InvalidInputException when oldPassword does not match pattern', () => {
    const value = {
      oldPassword: 'invalid',
      newPassword: 'validPass123!',
    };
    expect(() => pipe.transform(value)).toThrow(InvalidInputException);
    expect(() => pipe.transform(value)).toThrow(
      'Validation failed: password must contain 8 to 32 characters, including letter, number and special character.'
    );
  });

  it('should throw InvalidInputException when newPassword does not match pattern', () => {
    const value = {
      oldPassword: 'validPass123!',
      newPassword: 'invalid',
    };
    expect(() => pipe.transform(value)).toThrow(InvalidInputException);
    expect(() => pipe.transform(value)).toThrow(
      'Validation failed: password must contain 8 to 32 characters, including letter, number and special character.'
    );
  });
});
