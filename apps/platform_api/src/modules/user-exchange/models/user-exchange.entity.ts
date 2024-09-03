import { Exchange } from '@/modules/exchange/models/exchange.entity';
import { CommonEntity } from '@/common/entities/common.entity';
import { User } from '@/modules/user/models/user.entity';
import { Entity, ManyToOne } from 'typeorm';
import { ExchangeKey } from '@/modules/exchangeKey/models/exchangeKey.entity';

@Entity('PortalUserExchange')
export class UserExchange extends CommonEntity {
  @ManyToOne(() => Exchange, (exchange) => exchange.userExchange)
  exchange: Exchange;

  @ManyToOne(() => User, (user) => user.userExchange)
  user: User;

  @ManyToOne(() => ExchangeKey, (exchangeKey) => exchangeKey.userExchange, { onDelete: 'CASCADE' })
  exchangeKey: ExchangeKey;
}
