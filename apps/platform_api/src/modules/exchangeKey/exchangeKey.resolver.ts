import { Args, Mutation, Query, Resolver, Context } from '@nestjs/graphql';
import { CreateExchangeKeyInput } from './dto/new-exchangeKey.input';
import { ExchangeKeyType } from './dto/exchangeKey.type';
import { ExchangeKeyService } from './exchangeKey.service';
import { UpdateExchangeKeyInput } from './dto/update-exchangeKey.input';
import { Result } from '@/common/dto/result.type';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '@/common/guards/auth.guard';

@Resolver()
@UseGuards(GqlAuthGuard)
export class ExchangeKeyResolver {
  constructor(private readonly exchangeKeyService: ExchangeKeyService) {}

  @Query(() => ExchangeKeyType, { description: 'Find exchange key by id' })
  async getExchangeKeyById(@Args('id') id: string): Promise<ExchangeKeyType> {
    return await this.exchangeKeyService.find(id);
  }

  @Mutation(() => Result, { description: 'Create exchange key' })
  async createExchangeKey(
    @Context() cxt,
    @Args('input') input: CreateExchangeKeyInput
  ): Promise<Result> {
    const id = cxt.req.user.id;
    return await this.exchangeKeyService.createNewExchangeKey(id, input);
  }

  @Mutation(() => Boolean, { description: 'Update exchange key info' })
  async updateExchangeKey(
    @Context() cxt: { req: Partial<Request> & { user: { id: string } } },
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
