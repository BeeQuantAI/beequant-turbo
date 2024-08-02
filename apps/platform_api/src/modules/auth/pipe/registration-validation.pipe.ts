import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import * as Joi from 'joi';
import { EmptyFiledException } from '../../../exceptions/empty-field.exception';
import { InvalidInputException } from '../../../exceptions/invalid-input.exception';

@Injectable()
export class ValidationPipe implements PipeTransform {
  constructor(private schema: Joi.ObjectSchema) {}

  transform(value: any) {
    const { error, value: validatedValue } = this.schema.validate(value);

    if (error) {
      if (
        error.details[0].message === '"Email" is required' ||
        error.details[0].message === '"Password" is required'
      ) {
        throw new EmptyFiledException(error.details[0].message);
      }

      if (
        error.details[0].message ===
        '"Display Name" with value "11" fails to match the required pattern: /^([a-zA-Z0-9-_]{4,15})?$/'
      ) {
        throw new InvalidInputException('"Display Name" fails to match the required pattern');
      }
      throw new BadRequestException(error.details[0].message);
    }
    return validatedValue;
  }
}
