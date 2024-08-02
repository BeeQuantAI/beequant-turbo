import { Args, Mutation, Query, Resolver, Context } from '@nestjs/graphql';
import { CreateExchangeKeyInput } from './dto/new-exchangeKey.input';
import { ExchangeKeyType } from './dto/exchangeKey.type';
import { ExchangeKeyService } from './exchangeKey.service';
import { UpdateExchangeKeyInput } from './dto/update-exchangeKey.input';

@Resolver()
export class ExchangeKeyResolver {
  constructor(private readonly exchangeKeyService: ExchangeKeyService) {}

  @Query(() => ExchangeKeyType, { description: 'Find exchange key by id' })
  async getExchangeKeyById(@Args('id') id: string): Promise<ExchangeKeyType> {
    return await this.exchangeKeyService.find(id);
  }

  @Mutation(() => Boolean, { description: 'Create exchange key' })
  async createExchangeKey(@Args('input') input: CreateExchangeKeyInput): Promise<boolean> {
    return await this.exchangeKeyService.create(input);
  }

  @Mutation(() => Boolean, { description: 'Update exchange key info' })
  async updateExchangeKey(
    @Context() cxt: any,
    @Args('input') input: UpdateExchangeKeyInput
  ): Promise<boolean> {
    const id = cxt.req.user.id;
    return await this.exchangeKeyService.update(id, input);
  }

  @Mutation(() => Boolean, { description: 'Hard delete an user key' })
  async deleteUserKey(@Context() cxt: any): Promise<boolean> {
    const id = cxt.req.user.id;
    return await this.exchangeKeyService.del(id);
  }
}
