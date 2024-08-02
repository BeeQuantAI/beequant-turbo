import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { GqlArgumentsHost } from '@nestjs/graphql';
import { NOT_EMPTY, VALIDATE_ERROR } from '@/common/constants/code';
import { EmptyFiledException } from '@/exceptions/empty-field.exception';
import { InvalidInputException } from '@/exceptions/invalid-input.exception';

@Catch(EmptyFiledException, InvalidInputException)
export class PasswordPipeErrorFilter implements ExceptionFilter {
  catch(exception: EmptyFiledException | InvalidInputException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    const ctx = gqlHost.getContext();
    const response = ctx.req.res;

    if (exception instanceof EmptyFiledException) {
      response.json({
        data: {
          changePassword: {
            code: NOT_EMPTY,
            message: exception.message,
            data: null,
          },
        },
      });
    }

    if (exception instanceof InvalidInputException) {
      response.json({
        data: {
          changePassword: {
            code: VALIDATE_ERROR,
            message: exception.message,
            data: null,
          },
        },
      });
    }
  }
}
