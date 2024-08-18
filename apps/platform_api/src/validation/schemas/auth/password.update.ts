import { newPasswordSchema, oldPasswordSchema } from '@/common/utils/helpers';
import * as z from 'zod';

export const passwordUpdateSchema = z.object({
  oldPassword: oldPasswordSchema,
  newPassword: newPasswordSchema,
});
