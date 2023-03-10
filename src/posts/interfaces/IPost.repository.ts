import { PostEntity } from '../entities/PostEntity';

export interface IPostsRepository {
  create(post): Promise<void>;
  // findAll({ withPagination, amount, page, search }: IParamsPaginationDTO);
  // findById(id: number): Promise<UserEntity>;
  // update(id: number, body: CreateUserDTO): Promise<void>;
  // delete(id: number): Promise<void>;
}
