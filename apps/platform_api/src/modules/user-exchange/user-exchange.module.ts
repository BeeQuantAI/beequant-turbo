import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserExchange } from './models/user-exchange.entity';
import { UserExchangeService } from './user-exchange.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserExchange])],
  providers: [UserExchangeService],
  exports: [UserExchangeService],
})
export class UserExchangeModule {}
