import { Module, ConsoleLogger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeKey } from './models/exchangeKey.entity';
import { ExchangeKeyService } from './exchangeKey.service';
import { ExchangeKeyResolver } from './exchangeKey.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ExchangeKey])],
  providers: [ConsoleLogger, ExchangeKeyService, ExchangeKeyResolver],
  exports: [ExchangeKeyService],
})
export class ExchangeKeyModule {}
