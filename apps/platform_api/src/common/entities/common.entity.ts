import { validateOrReject, IsDate, IsOptional } from 'class-validator';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';

export class CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    comment: 'Create date',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    comment: 'Created by',
    nullable: true,
  })
  @IsOptional()
  createdBy: string;

  @Column({
    comment: 'Update date',
    type: 'timestamp',
    nullable: true,
  })
  updatedAt: Date;

  @Column({
    comment: 'Updated by',
    nullable: true,
  })
  @IsOptional()
  updatedBy: string;

  @Column({
    comment: 'Delete date',
    type: 'timestamp',
    nullable: true,
  })
  @DeleteDateColumn()
  @IsDate()
  @IsOptional()
  deletedAt: Date;

  @Column({
    comment: 'Delete by',
    nullable: true,
  })
  @IsOptional()
  deletedBy: string;

  @BeforeInsert()
  setCreatedAt() {
    const now = new Date();
    this.createdAt = now;
    this.updatedAt = now;
  }

  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedAt = new Date();
  }

  @BeforeInsert()
  async validateBeforeInsert() {
    await validateOrReject(this);
  }

  @BeforeUpdate()
  async validateBeforeUpdate() {
    await validateOrReject(this, { skipMissingProperties: true });
  }
}
