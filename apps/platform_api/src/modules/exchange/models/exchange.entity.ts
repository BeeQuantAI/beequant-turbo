import { CommonEntity } from '@/common/entities/common.entity';
import { UserExchange } from '@/modules/user-exchange/models/user-exchange.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity('PortalExchange')
export class Exchange extends CommonEntity {
  @Column({ comment: 'Exchange name, like Binance' })
  name: string;

  @OneToMany(() => UserExchange, (userExchange) => userExchange.exchange)
  userExchange: UserExchange[];
}
