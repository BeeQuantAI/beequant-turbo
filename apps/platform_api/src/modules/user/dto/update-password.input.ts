import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdatePasswordInput {
  @Field({ description: 'Old Password' })
  oldPassword: string;
  @Field({ description: 'New Password' })
  newPassword: string;
}
