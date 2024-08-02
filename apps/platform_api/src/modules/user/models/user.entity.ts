import { CommonEntity } from '@/common/entities/common.entity';
import { ExchangeKey } from '@/modules/exchangeKey/models/exchangeKey.entity';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('PortalUser')
export class User extends CommonEntity {
  @Column({
    comment: 'Login email',
    default: '',
    unique: true,
  })
  @IsNotEmpty()
  email: string;

  @Column({
    comment: 'User is referred by',
    default: '',
  })
  ref: string;

  @Column({
    comment: 'Real name',
    nullable: true,
  })
  realName: string;

  @Column({
    comment: 'Display name',
    nullable: true,
  })
  displayName: string;

  @Column({
    comment: 'User password',
    default: '',
  })
  @IsNotEmpty()
  password: string;

  @Column({
    comment: 'Mobile number',
    default: '',
    nullable: true,
  })
  mobile: string;

  @Column({
    comment: 'WeChat',
    default: '',
    nullable: true,
  })
  wechat: string;

  @Column({
    comment: 'QQ',
    default: '',
    nullable: true,
  })
  qq: string;

  @Column({
    comment: 'Last login date',
    nullable: true,
  })
  lastLoginTime: Date;

  @Column({
    comment: 'Vip expire date',
    nullable: true,
  })
  vipExpireDate: Date;

  @Column({
    comment: 'IP of the last login',
    nullable: true,
  })
  lastLoginIP: string;

  @Column({
    comment: 'Is account activated',
    default: false,
  })
  isActivated: boolean;

  @Column({
    comment: 'Is account deleted',
    default: false,
  })
  isDeleted: boolean;

  @Column({
    comment: 'Verification code',
    nullable: true,
  })
  captcha: string;

  @Column({
    comment: 'Create date of captcha',
    nullable: true,
  })
  captchaCreateAt: Date;

  @OneToMany(() => ExchangeKey, (key) => key.user)
  keys: ExchangeKey[];
}
