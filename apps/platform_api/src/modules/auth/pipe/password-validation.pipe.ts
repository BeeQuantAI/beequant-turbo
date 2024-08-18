import { Injectable, PipeTransform } from '@nestjs/common';
import { z, ZodIssue, ZodSchema } from 'zod';
import { errorMatcher } from '@/common/utils/errorMatcher';

@Injectable()
export class PasswordValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}
  transform(value: unknown) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      const issues: ZodIssue = error.issues;
      const code: z.ZodIssueCode = issues[0].code;
      const message: string = issues[0].message;
      if (code === 'too_small') {
        const min: number = issues[0].minimum;
        return errorMatcher({ code, message, min });
      }
      return errorMatcher({ code, message });
    }
  }
}
