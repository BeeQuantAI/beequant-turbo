import { Test, TestingModule } from '@nestjs/testing';
import { UserExchangeService } from './user-exchange.service';

describe('UserExchangeService', () => {
  let service: UserExchangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserExchangeService],
    }).compile();

    service = module.get<UserExchangeService>(UserExchangeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
