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
    console.log(user);
    const userCreated = await this.UsersRepository.create(user);
    const userSaved = await this.UsersRepository.save(userCreated);
    return userSaved;
  }
}
