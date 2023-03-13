import { Inject } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { CreateUserDTO } from './dto/CreateUserDTO';
import { IParamsPaginationDTO } from './dto/IParamsPaginationDTO';
import { UserEntity } from './entities/UserEntity';
import { IUsersRepository } from './interfaces/IUsers.repository';

class UsersService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,
  ) {}

  async create(body): Promise<UserEntity> {
    const findUserByEmail = await this.usersRepository.findAll(body.email);
    if (findUserByEmail) {
      throw new Error('Email must be unique');
    }
    const userCreated = await this.usersRepository.create(body);
    return userCreated;
  }

  async findAll({
    withPagination,
    amount,
    page,
    search,
  }: IParamsPaginationDTO) {
    const users = await this.usersRepository.findAll({
      withPagination,
      amount,
      page,
      search,
    });
    return users;
  }

  async findById(id: number): Promise<UserEntity> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new BadRequestException('Id not found');
    }
    return user;
  }

  async update(id: number, body: CreateUserDTO) {
    await this.usersRepository.update(id, body);
  }

  async delete(id: number) {
    await this.usersRepository.delete(id);
  }
}
export { UsersService };
