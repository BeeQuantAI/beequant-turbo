import * as Joi from 'joi';
import { passwordPatten } from '@/common/utils/helpers';
import * as dotenv from 'dotenv';
dotenv.config();

export const passwordUpdateSchema = Joi.object({
  oldPassword: Joi.string().pattern(passwordPatten).required().empty('').label('Old Password'),
  newPassword: Joi.string().pattern(passwordPatten).required().empty('').label('New Password'),
});
