import { Inject } from '@nestjs/common';
import { IUsersRepository } from './interfaces/IUsers.repository';

class UsersService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,
  ) {}
  async create(body) {
    const userCreated = await this.usersRepository.create(body);
    return userCreated;
  }
}
export { UsersService };
