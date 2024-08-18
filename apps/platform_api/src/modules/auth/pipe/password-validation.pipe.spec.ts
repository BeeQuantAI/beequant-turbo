import { PasswordValidationPipe } from './password-validation.pipe';
import { passwordUpdateSchema } from '@/validation/schemas/auth/password.update';
import { EmptyFiledException } from '@/exceptions/empty-field.exception';
import { InvalidInputException } from '@/exceptions/invalid-input.exception';
import { PasswordErrorMsgs, PasswordUpdateErrorMsgs } from '@/common/utils/helpers';

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
    expect(() => pipe.transform(value)).toThrow(PasswordUpdateErrorMsgs.OldPasswordRequired);
  });

  it('should throw EmptyFiledException when newPassword is missing', () => {
    const value = {
      oldPassword: 'oldPass123!',
      newPassword: '',
    };
    expect(() => pipe.transform(value)).toThrow(EmptyFiledException);
    expect(() => pipe.transform(value)).toThrow(PasswordUpdateErrorMsgs.NewPasswordRequired);
  });

  it('should throw InvalidInputException when newPassword is too short', () => {
    const value = {
      oldPassword: 'invalid12!',
      newPassword: 'validPa',
    };
    expect(() => pipe.transform(value)).toThrow(InvalidInputException);
    expect(() => pipe.transform(value)).toThrow(PasswordErrorMsgs.MinLength);
  });

  it('should throw InvalidInputException when newPassword is too long', () => {
    const value = {
      oldPassword: 'invalid12!',
      newPassword: 'validPaabcedfs01234567890!!abcdefghi0123',
    };
    expect(() => pipe.transform(value)).toThrow(InvalidInputException);
    expect(() => pipe.transform(value)).toThrow(PasswordErrorMsgs.MaxLength);
  });

  it('should throw InvalidInputException when oldPassword does not match pattern', () => {
    const value = {
      oldPassword: 'invalid12',
      newPassword: 'validPass123!',
    };
    expect(() => pipe.transform(value)).toThrow(InvalidInputException);
    expect(() => pipe.transform(value)).toThrow(PasswordErrorMsgs.Invalid);
  });

  it('should throw InvalidInputException when newPassword does not match pattern', () => {
    const value = {
      oldPassword: 'validPass123!',
      newPassword: 'invalid12',
    };
    expect(() => pipe.transform(value)).toThrow(InvalidInputException);
    expect(() => pipe.transform(value)).toThrow(PasswordErrorMsgs.Invalid);
  });
});
