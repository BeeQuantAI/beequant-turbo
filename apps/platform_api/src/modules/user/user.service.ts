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

  // create an user
  async create(entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.userRepository.save(this.userRepository.create(entity));
    if (res) {
      return true;
    }
    return false;
  }

  // delete an user
  async del(id: string): Promise<boolean> {
    const res = await this.userRepository.delete(id);
    if (res.affected > 0) {
      return true;
    }
    return false;
  }

  // update an user
  async update(id: string, entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.userRepository.update(id, entity);
    console.log(res);
    if (res.affected > 0) {
      return true;
    }
    return false;
  }

  // get all users
  async findAll(): Promise<User[]> {
    const res = await this.userRepository.find();
    return res;
  }

  // find an user by id
  async find(id: string): Promise<User> {
    const res = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    return res;
  }

  // find an user by email
  async findByEmail(email: string): Promise<User> {
    const res = await this.userRepository.findOne({
      where: {
        email,
      },
    });
    return res;
  }
}
