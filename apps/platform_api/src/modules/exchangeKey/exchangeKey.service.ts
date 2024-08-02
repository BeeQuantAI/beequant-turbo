import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { ExchangeKey } from './models/exchangeKey.entity';
import * as ccxt from 'ccxt';

@Injectable()
export class ExchangeKeyService {
  constructor(
    @InjectRepository(ExchangeKey)
    private ExchangeKeyRepository: Repository<ExchangeKey>
  ) {}

  // create an exchange key
  async create(entity: DeepPartial<ExchangeKey>): Promise<boolean> {
    const verify = this.verifyExchangeKey(entity.exchangeName, entity.accessKey, entity.secretKey);
    if (!verify) {
      return false;
    }
    const res = await this.ExchangeKeyRepository.insert(entity);
    if (res && res.raw.length > 0) {
      return true;
    }
    return false;
  }

  async verifyExchangeKey(exchangeName: string, apiKey: string, secret: string): Promise<boolean> {
    try {
      // TODO Verify that the exchangeName is correct.
      const exchange = new ccxt[exchangeName]({
        apiKey: apiKey,
        secret: secret,
        timeout: 5000,
      });
      // Try making a simple API call to verify the key
      await exchange.fetchBalance();
      //If there are no errors, the key verification is considered successful
      return true;
    } catch (error) {
      console.error(`Error verifying key for exchange ${exchangeName}:`, error);
      //If there are errors, it is considered that the key verification has failed
      return false;
    }
  }

  // delete an user key
  async del(id: string): Promise<boolean> {
    const res = await this.ExchangeKeyRepository.delete(id);
    if (res.affected > 0) {
      return true;
    }
    return false;
  }

  // update an user key
  async update(id: string, entity: DeepPartial<ExchangeKey>): Promise<boolean> {
    const res = await this.ExchangeKeyRepository.update(id, entity);
    console.log(res);
    if (res.affected > 0) {
      return true;
    }
    return false;
  }

  // get all user keys
  async findAll(): Promise<ExchangeKey[]> {
    const res = await this.ExchangeKeyRepository.find();
    return res;
  }

  // find an exchange key by id
  async find(id: string): Promise<ExchangeKey> {
    const res = await this.ExchangeKeyRepository.findOne({
      where: {
        id,
      },
    });
    return res;
  }
}
