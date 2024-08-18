import { passwordUpdateSchema } from './password.update';
import * as dotenv from 'dotenv';
dotenv.config();

describe('passwordUpdateSchema', () => {
  const validPassword = 'validPass123!';
  const invalidPassword = 'invalid';

  it('should validate correct password update', () => {
    const data = {
      oldPassword: validPassword,
      newPassword: validPassword,
    };
    const validatedData = passwordUpdateSchema.parse(data);
    expect(validatedData).toEqual(data);
  });

  it('should fail when oldPassword is missing', () => {
    const data = {
      newPassword: validPassword,
    };
    const result = passwordUpdateSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  it('should fail when newPassword is missing', () => {
    const data = {
      oldPassword: validPassword,
    };
    const result = passwordUpdateSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  it('should fail when oldPassword does not match pattern', () => {
    const data = {
      oldPassword: invalidPassword,
      newPassword: validPassword,
    };
    const result = passwordUpdateSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  it('should fail when newPassword does not match pattern', () => {
    const data = {
      oldPassword: validPassword,
      newPassword: invalidPassword,
    };
    const result = passwordUpdateSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  it('should fail when oldPassword is empty', () => {
    const data = {
      oldPassword: '',
      newPassword: validPassword,
    };
    const result = passwordUpdateSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  it('should fail when newPassword is empty', () => {
    const data = {
      oldPassword: validPassword,
      newPassword: '',
    };
    const result = passwordUpdateSchema.safeParse(data);
    expect(result.success).toBe(false);
  });
});
