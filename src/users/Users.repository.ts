import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { CreateUserDTO } from './dto/CreateUserDTO';
import { UserEntity } from './entities/UserEntity';
import { IUsersRepository } from './interfaces/IUsers.repository';

@EntityRepository(UserEntity)
export class UsersRepository implements IUsersRepository {
  private UsersRepository: Repository<UserEntity>;

  constructor(manager: EntityManager) {
    this.UsersRepository = manager.getRepository(UserEntity);
  }

  async create(user: CreateUserDTO): Promise<UserEntity> {
    const userCreated = await this.UsersRepository.create(user);
    const userSaved = await this.UsersRepository.save(userCreated);
    return userSaved;
  }

  async findAll({ withPagination, amount, page, search }) {
    const queryBuilder = this.UsersRepository.createQueryBuilder('users');

    if (withPagination === 'true' && search) {
      const [users, total] = await this.UsersRepository.findAndCount({
        where: { email: search },
        take: amount,
        skip: (+page - 1) * +amount,
      });
      return { users, total };
    }

    if (withPagination === 'true') {
      const newQueryBuilder = paginate(amount, page, queryBuilder);
      const [users, total] = await newQueryBuilder.getManyAndCount();
      return { users, total };
    }

    if (search) {
      return this.UsersRepository.find({ where: { email: search } });
    }
    return this.UsersRepository.find();
  }

  async findById(id: number): Promise<UserEntity> {
    return await this.UsersRepository.findOne({ where: { idUser: id } });
  }

  async update(id: number, body: CreateUserDTO): Promise<void> {
    await this.UsersRepository.update(id, body);
  }

  async delete(id: number): Promise<void> {
    await this.UsersRepository.delete(id);
  }
}

function paginate(amount = 20, page = 1, queryBuilder) {
  queryBuilder.take(amount).skip((+page - 1) * +amount);
  return queryBuilder;
}
