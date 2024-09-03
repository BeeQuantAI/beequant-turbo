import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserExchange } from './models/user-exchange.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserExchangeService {
  constructor(
    @InjectRepository(UserExchange)
    private userExchangeRepository: Repository<UserExchange>
  ) {}

  async establishRelations(
    userId: string,
    exchangeKeyId: string,
    exchangeId: string
  ): Promise<UserExchange> {
    const newUserExchange = this.userExchangeRepository.create({
      user: { id: userId },
      exchangeKey: { id: exchangeKeyId },
      exchange: { id: exchangeId },
    });
    return await this.userExchangeRepository.save(newUserExchange);
  }

  async findUserExchange(userId: string): Promise<
    {
      name: string;
      id: string;
    }[]
  > {
    const res = await this.userExchangeRepository.find({
      where: { user: { id: userId } },
      relations: ['exchange'],
    });
    return res.map((exchange) => ({
      name: exchange.exchange.name,
      id: exchange.exchange.id,
    }));
  }
}
