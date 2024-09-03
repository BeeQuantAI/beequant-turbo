import { CommonEntity } from '@/common/entities/common.entity';
import { UserExchange } from '@/modules/user-exchange/models/user-exchange.entity';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('PortalUserKey')
export class ExchangeKey extends CommonEntity {
  @Column({
    comment: 'Exchange name',
  })
  @IsNotEmpty()
  exchangeName: string;

  @Column({
    comment: 'Access key',
  })
  @IsNotEmpty()
  accessKey: string;

  @Column({
    comment: 'Secret key',
  })
  @IsNotEmpty()
  secretKey: string;

  @Column({
    comment: 'Remarks',
    nullable: true,
  })
  remarks: string;

  @OneToMany(() => UserExchange, (userExchange) => userExchange.exchangeKey, {
    cascade: true,
  })
  userExchange: UserExchange[];
}
