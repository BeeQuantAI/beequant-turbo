import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import * as Joi from 'joi';
import { EmptyFiledException } from '@/exceptions/empty-field.exception';
import { InvalidInputException } from '@/exceptions/invalid-input.exception';

@Injectable()
export class PasswordValidationPipe implements PipeTransform {
  constructor(private schema: Joi.ObjectSchema) {}
  transform(value: any) {
    const { error } = this.schema.validate(value);
    if (error) {
      if (
        error.message === '"Old Password" is required' ||
        error.message === '"New Password" is required'
      ) {
        throw new EmptyFiledException(error.message);
      }
      if (
        error.message.match(
          /^"Old Password" with value.*fails to match the required pattern: .*/
        ) ||
        error.message.match(/^"New Password" with value.*fails to match the required pattern: .*/)
      ) {
        throw new InvalidInputException(
          'Validation failed: password must contain 8 to 32 characters, ' +
            'including letter, number and special character.'
        );
      }
      throw new BadRequestException(`Validation failed: ${error.message}`);
    }
    return value;
  }
}
