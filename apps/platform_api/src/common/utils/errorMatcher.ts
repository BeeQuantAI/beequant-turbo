import { EmptyFiledException } from '@/exceptions/empty-field.exception';
import { InvalidInputException } from '@/exceptions/invalid-input.exception';
import { BadRequestException, HttpException } from '@nestjs/common';
import { z } from 'zod';

type errorMatcherProps = {
  code: z.ZodIssueCode;
  message?: string;
  min?: number;
};

const actions = {
  invalid_string: (message: string) => {
    throw new InvalidInputException(message);
  },
  too_small: (message: string, min: number) => {
    throw min === 1 ? new EmptyFiledException(message) : new InvalidInputException(message);
  },
  too_big: (message: string) => {
    throw new InvalidInputException(message);
  },
};

export function errorMatcher({ code, message, min }: errorMatcherProps): HttpException {
  for (const key in actions) {
    if (key === code) {
      return actions[key](message, min);
    }
  }
  throw new BadRequestException(message);
}
