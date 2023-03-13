import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { CreatePostDTO } from './dto/CreatePostDTO';
import { PostEntity } from './entities/PostEntity';
import { IPostsRepository } from './interfaces/IPost.repository';

@EntityRepository(PostEntity)
export class PostsRepository implements IPostsRepository {
  private PostsRepository: Repository<PostEntity>;

  constructor(manager: EntityManager) {
    this.PostsRepository = manager.getRepository(PostEntity);
  }

  async create(post: CreatePostDTO): Promise<void> {
    const postEntity = new PostEntity();

    Object.assign(postEntity, {
      ...post,
    });
    const postCreated = await this.PostsRepository.create(postEntity);
    await this.PostsRepository.save(postCreated);
  }
}
