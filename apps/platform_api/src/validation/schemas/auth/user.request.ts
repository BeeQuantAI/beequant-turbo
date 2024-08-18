import * as z from 'zod';
import { displayNameSchema, emailSchema, passwordSchema, refSchema } from '@/common/utils/helpers';

export const userSchema = z.object({
  displayName: displayNameSchema,
  email: emailSchema,
  password: passwordSchema,
  ref: refSchema,
});
