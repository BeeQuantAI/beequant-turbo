import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { User } from './models/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  // create a user
  async create(entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.userRepository.save(this.userRepository.create(entity));
    return !!res;
  }

  // delete an user
  async del(id: string): Promise<boolean> {
    const res = await this.userRepository.delete(id);
    return res.affected > 0;
  }

  // update a user
  async update(id: string, entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.userRepository.update(id, entity);
    return res.affected > 0;
  }

  // get all users
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // find a user by id
  async find(id: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  // find a user by email
  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        email,
      },
    });
  }
}
