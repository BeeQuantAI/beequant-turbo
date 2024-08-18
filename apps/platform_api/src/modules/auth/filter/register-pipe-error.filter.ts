import { Catch, ExceptionFilter } from '@nestjs/common';
import { NOT_EMPTY, VALIDATE_ERROR, UNKNOWN_ERROR } from '@/common/constants/code';
import { EmptyFiledException } from '@/exceptions/empty-field.exception';
import { InvalidInputException } from '@/exceptions/invalid-input.exception';
import { GraphQLError } from 'graphql';

@Catch(EmptyFiledException, InvalidInputException)
export class RegisterPipeErrorFilter implements ExceptionFilter {
  catch(exception: EmptyFiledException | InvalidInputException) {
    let errorCode: number;
    let errorMessage: string;
    switch (exception.constructor) {
      case EmptyFiledException:
        errorCode = NOT_EMPTY;
        errorMessage = exception.message;
        break;
      case InvalidInputException:
        errorCode = VALIDATE_ERROR;
        errorMessage = exception.message;
        break;
      default:
        errorCode = UNKNOWN_ERROR;
        errorMessage = exception.message;
    }

    throw new GraphQLError(errorMessage, {
      extensions: { code: errorCode },
    });
  }
}
