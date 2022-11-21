import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { CreateUserDto } from 'src/users/users.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(CreateUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(CreateUserDto);

    return this.userRepository.save(newUser);
  }

  findUserById(id: number) {
    console.log('userRepository => ', this.userRepository);
    // return this.userRepository.findOne();
  }
}
