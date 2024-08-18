import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/new-user.input';
import { UserType } from './dto/user.type';
import { UserService } from './user.service';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { CombinedAuthGuard } from '@/modules/auth/guards/combined-auth.guard';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserType], { description: 'Get all users' })
  async getUsers(): Promise<UserType[]> {
    return await this.userService.findAll();
  }

  @Query(() => UserType, { description: 'Find user by email' })
  async getUserByEmail(@Args('email') email: string): Promise<UserType> {
    return await this.userService.findByEmail(email);
  }

  @Query(() => UserType, { description: 'Find user by id' })
  @UseGuards(CombinedAuthGuard)
  async getUserById(@Args('id') id: string): Promise<UserType> {
    return await this.userService.find(id);
  }

  @Query(() => UserType, { description: 'Find user by context' })
  @UseGuards(CombinedAuthGuard)
  async getUserInfo(@Context() cxt: any): Promise<UserType> {
    const id = cxt.req.user.id;
    return await this.userService.find(id);
  }

  @Mutation(() => Boolean, { description: 'Create new user' })
  async createUser(@Args('input') input: CreateUserInput): Promise<boolean> {
    return await this.userService.create(input);
  }

  @Mutation(() => Boolean, { description: 'Update user info' })
  @UseGuards(CombinedAuthGuard)
  async updateUser(
    @Args('id') id: string,
    @Args('input') input: UpdateUserInput
  ): Promise<boolean> {
    return await this.userService.update(id, input);
  }

  @Mutation(() => Boolean, { description: 'Hard delete an user' })
  async deleteUser(@Args('id') id: string): Promise<boolean> {
    return await this.userService.del(id);
  }
}
