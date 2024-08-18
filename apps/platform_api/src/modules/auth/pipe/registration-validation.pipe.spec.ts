import { InvalidInputException } from './../../../exceptions/invalid-input.exception';
import { ValidationPipe } from './registration-validation.pipe';
import { userSchema } from '../../../validation/schemas/auth/user.request';
import { EmptyFiledException } from '@/exceptions/empty-field.exception';
import { DisplayErrorMsgs, EmailErrorMsgs, PasswordErrorMsgs } from '@/common/utils/helpers';

describe('ValidationPipe', () => {
  let pipe: ValidationPipe;

  const validData = {
    displayName: 'test',
    email: 'test@example.com',
    password: 'password123!',
    ref: 'ADMIN',
  };

  beforeAll(() => {
    pipe = new ValidationPipe(userSchema);
  });

  it('should transform value if validation passes', () => {
    expect(pipe.transform(validData)).toEqual(validData);
  });

  it('should pass when displayName is empty', () => {
    const value = { ...validData, displayName: '' };
    expect(() => pipe.transform(value)).not.toThrow();
  });

  it('should throw EmptyFiledException if email is empty', () => {
    const value = { ...validData, email: '' };
    expect(() => pipe.transform(value)).toThrow(EmptyFiledException);
    expect(() => pipe.transform(value)).toThrow(EmailErrorMsgs.Required);
  });

  it('should throw EmptyFiledException if password is empty', () => {
    const value = { ...validData, password: '' };
    expect(() => pipe.transform(value)).toThrow(EmptyFiledException);
    expect(() => pipe.transform(value)).toThrow(PasswordErrorMsgs.Required);
  });

  it('should throw InvalidInputException with invalid error message if email is not valid', () => {
    const value = { ...validData, email: '123' };
    expect(() => pipe.transform(value)).toThrow(InvalidInputException);
    expect(() => pipe.transform(value)).toThrow(EmailErrorMsgs.Invalid);
  });

  it('should throw InvalidInputException with invalid error message if password is not valid', () => {
    const value = { ...validData, password: '123452362' };
    expect(() => pipe.transform(value)).toThrow(InvalidInputException);
    expect(() => pipe.transform(value)).toThrow(PasswordErrorMsgs.Invalid);
  });

  it('should throw InvalidInputException with invalid error message if displayName is not valid', () => {
    const value = { ...validData, displayName: 'ab12!' };
    expect(() => pipe.transform(value)).toThrow(InvalidInputException);
    expect(() => pipe.transform(value)).toThrow(DisplayErrorMsgs.Invalid);
  });

  it('should throw InvalidInputException with minLength error message if password is too short', () => {
    const value = { ...validData, password: 'sh1' };
    expect(() => pipe.transform(value)).toThrow(InvalidInputException);
    expect(() => pipe.transform(value)).toThrow(PasswordErrorMsgs.MinLength);
  });

  it('should throw InvalidInputException with maxLength error message if password is too long', () => {
    const value = { ...validData, password: 'abcdefghigklmn0123456790qwer!@#$%' };
    expect(() => pipe.transform(value)).toThrow(InvalidInputException);
    expect(() => pipe.transform(value)).toThrow(PasswordErrorMsgs.MaxLength);
  });

  it('should throw InvalidInputException with minLength error message if displayName is not short', () => {
    const value = { ...validData, displayName: '22' };
    expect(() => pipe.transform(value)).toThrow(InvalidInputException);
    expect(() => pipe.transform(value)).toThrow(DisplayErrorMsgs.MinLength);
  });

  it('should throw InvalidInputException with maxLength error message if displayName is not long', () => {
    const value = { ...validData, displayName: 'seiseijia-australia' };
    expect(() => pipe.transform(value)).toThrow(InvalidInputException);
    expect(() => pipe.transform(value)).toThrow(DisplayErrorMsgs.MaxLength);
  });
});
