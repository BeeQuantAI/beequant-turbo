import { CommonType } from '@/common/dto/common.type';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('ExchangeKey')
export class ExchangeKeyType extends CommonType {
  @Field({ description: 'Exchange name' })
  exchangeName: string;
  @Field({ description: 'Access key' })
  accessKey: string;
  @Field({ description: 'Secret key' })
  secretKey: string;
  @Field({ description: 'Remarks' })
  remarks?: string;
}
