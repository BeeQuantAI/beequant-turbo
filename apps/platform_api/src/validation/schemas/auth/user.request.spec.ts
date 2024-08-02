import { userSchema } from './user.request';
import * as dotenv from 'dotenv';
dotenv.config();
const envReference = process.env.DEFAULT_REFERENCE;
const envDisplayName = process.env.DEFAULT_DISPLAY_NAME;

describe('userSchema', () => {
  it('should allow displayName being empty', () => {
    const result = userSchema.validate({
      displayName: '',
      email: 'test@example.com',
      password: 'Test123!',
    });
    expect(result.error).toBeFalsy();
    expect(result.value.displayName).toBe(envDisplayName || 'New User');
  });

  it('should validate displayName correctly, when displayName is valid', () => {
    const result = userSchema.validate({
      displayName: 'testUser',
      email: 'test@example.com',
      password: 'Test123!',
    });
    expect(result.error).toBeFalsy();
    expect(result.value.displayName).toBe('testUser');
  });

  it('should validate displayName correctly, when displayName is invalid', () => {
    const result = userSchema.validate({ displayName: 'a' });
    expect(result.error).toBeTruthy();
  });

  it('should validate email correctly, when email is empty', () => {
    const result = userSchema.validate({ email: '' });
    expect(result.error).toBeTruthy();
  });

  it('should validate email correctly, when email is valid', () => {
    const validEmail = 'test@example.com';
    const validResult = userSchema.validate({
      email: validEmail,
      displayName: 'testUser',
      password: 'Test123!',
    });
    expect(validResult.error).toBeFalsy();
    expect(validResult.value.email).toBe(validEmail);
  });

  it('should validate password correctly, when password is empty', () => {
    const result = userSchema.validate({ password: '' });
    expect(result.error).toBeTruthy();
  });

  it('should validate password correctly, when password is valid', () => {
    const validPassword = 'Test123!';
    const validResult = userSchema.validate({
      password: validPassword,
      displayName: 'testUser',
      email: 'test@example.com',
    });
    expect(validResult.error).toBeFalsy();
    expect(validResult.value.password).toBe(validPassword);
  });

  it('should validate password correctly, when password is invalid', () => {
    const validPassword = 'Test1234';
    const validResult = userSchema.validate({
      password: validPassword,
      displayName: 'testUser',
      email: 'test@example.com',
    });
    expect(validResult.error).toBeTruthy();
  });

  it('should have default value for ref', () => {
    const result = userSchema.validate({
      email: 'test@example.com',
      password: 'Test123!',
    });

    expect(result.error).toBeFalsy();
    expect([envReference, 'Default_Reference_Name']).toContain(result.value.ref);
  });
});
