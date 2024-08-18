import { userSchema } from './user.request';
import * as dotenv from 'dotenv';
dotenv.config();
const envRef = process.env.DEFAULT_REFERENCE;
const envDisplayName = process.env.DEFAULT_DISPLAY_NAME;

describe('userSchema', () => {
  const validateData = {
    displayName: '',
    email: 'test@example.com',
    password: 'Test123!',
  };

  it('should allow displayName being empty', () => {
    const result = userSchema.safeParse(validateData);
    expect(result.success).toEqual(true);
    expect(result.data.displayName).toBe(envDisplayName || 'New User');
  });

  it('should validate displayName correctly, when displayName is valid', () => {
    const data = { ...validateData, displayName: 'testUser' };
    const result = userSchema.safeParse(data);
    expect(result.success).toEqual(true);
  });

  it('should validate displayName correctly, when displayName is invalid', () => {
    const data = { ...validateData, displayName: 'a' };
    const result = userSchema.safeParse(data);
    expect(result.success).toEqual(false);
  });

  it('should validate email correctly, when email is empty', () => {
    const data = { ...validateData, email: '' };
    const result = userSchema.safeParse(data);
    expect(result.success).toEqual(false);
  });

  it('should validate password correctly, when password is empty', () => {
    const data = { ...validateData, password: '' };
    const result = userSchema.safeParse(data);
    expect(result.success).toEqual(false);
  });

  it('should validate password correctly, when password is invalid', () => {
    const data = { ...validateData, password: 'test123' };
    const result = userSchema.safeParse(data);
    expect(result.success).toEqual(false);
  });

  it('should have default value for ref', () => {
    const result = userSchema.safeParse(validateData);
    expect(result.success).toEqual(true);
    expect(result.data.ref).toBe(envRef || 'Default_Reference_Name');
  });
});
