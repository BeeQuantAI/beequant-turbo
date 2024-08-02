import * as Joi from 'joi';
import { displayNamePatten, passwordPatten } from '@/common/utils/helpers';
import * as dotenv from 'dotenv';
dotenv.config();

export const userSchema = Joi.object({
  displayName: Joi.string()
    .pattern(displayNamePatten)
    .empty('')
    .default(process.env.DEFAULT_DISPLAY_NAME || 'New User')
    .label('Display Name'),
  email: Joi.string().email().required().empty('').label('Email'),
  password: Joi.string().pattern(passwordPatten).required().empty('').label('Password'),
  ref: Joi.string()
    .empty('')
    .default(process.env.DEFAULT_REFERENCE || 'Default_Reference_Name'),
});
