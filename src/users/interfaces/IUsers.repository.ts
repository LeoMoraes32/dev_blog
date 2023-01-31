import { CreateUserDTO } from '../dto/CreateUserDTO';
import { UserEntity } from '../entities/UserEntity';

export interface IUsersRepository {
  create(user: CreateUserDTO): Promise<UserEntity>;
}
