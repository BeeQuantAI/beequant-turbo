import { CommonEntity } from '@/common/entities/common.entity';
import { User } from '@/modules/user/models/user.entity';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, Index, ManyToOne } from 'typeorm';

@Entity('PortalUserKey')
@Index(['accessKey', 'secretKey'], { unique: true })
export class ExchangeKey extends CommonEntity {
  @Column({
    comment: 'Exchange name',
    default: '',
  })
  @IsNotEmpty()
  exchangeName: string;

  @Column({
    comment: 'Access key',
    default: '',
  })
  accessKey: string;

  @Column({
    comment: 'Secret key',
    default: '',
  })
  @IsNotEmpty()
  secretKey: string;

  @Column({
    comment: 'Remarks',
    default: '',
    nullable: true,
  })
  remarks: string;

  @ManyToOne(() => User, (user) => user.keys, {
    cascade: true,
  })
  user: User;
}
