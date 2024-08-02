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
    const { error } = passwordUpdateSchema.validate(data);
    expect(error).toBeUndefined();
  });

  it('should fail when oldPassword is missing', () => {
    const data = {
      newPassword: validPassword,
    };
    const { error } = passwordUpdateSchema.validate(data);
    expect(error).toBeDefined();
  });

  it('should fail when newPassword is missing', () => {
    const data = {
      oldPassword: validPassword,
    };
    const { error } = passwordUpdateSchema.validate(data);
    expect(error).toBeDefined();
  });

  it('should fail when oldPassword does not match pattern', () => {
    const data = {
      oldPassword: invalidPassword,
      newPassword: validPassword,
    };
    const { error } = passwordUpdateSchema.validate(data);
    expect(error).toBeDefined();
  });

  it('should fail when newPassword does not match pattern', () => {
    const data = {
      oldPassword: validPassword,
      newPassword: invalidPassword,
    };
    const { error } = passwordUpdateSchema.validate(data);
    expect(error).toBeDefined();
  });

  it('should fail when oldPassword is empty', () => {
    const data = {
      oldPassword: '',
      newPassword: validPassword,
    };
    const { error } = passwordUpdateSchema.validate(data);
    expect(error).toBeDefined();
  });

  it('should fail when newPassword is empty', () => {
    const data = {
      oldPassword: validPassword,
      newPassword: '',
    };
    const { error } = passwordUpdateSchema.validate(data);
    expect(error).toBeDefined();
  });
});
