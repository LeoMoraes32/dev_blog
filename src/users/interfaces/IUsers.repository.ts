import { CreateUserDTO } from '../dto/CreateUserDTO';
import { IParamsPaginationDTO } from '../dto/IParamsPaginationDTO';
import { UserEntity } from '../entities/UserEntity';

export interface IUsersRepository {
  create(user: CreateUserDTO): Promise<UserEntity>;
  findAll({ withPagination, amount, page, search }: IParamsPaginationDTO);
  findById(id: number): Promise<UserEntity>;
  update(id: number, body: CreateUserDTO): Promise<void>;
  delete(id: number): Promise<void>;
}
