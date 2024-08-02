import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateExchangeKeyInput {
  @Field({ description: 'Exchange name' })
  exchangeName: string;
  @Field({ description: 'Access key' })
  accessKey: string;
  @Field({ description: 'Secret key' })
  secretKey: string;
  @Field({ description: 'Remarks', nullable: true })
  remarks?: string;
}
