import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PostEntity } from './entities/PostEntity';
import { PostsController } from './Posts.controller';
import { PostsRepository } from './Posts.repository';
import { PostsService } from './Posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [PostsController],
  providers: [
    PostsService,
    {
      provide: 'PostsRepository',
      useClass: PostsRepository,
    },
  ],
  exports: [
    {
      provide: 'PostsRepository',
      useClass: PostsRepository,
    },
  ],
})
export class PostModule {}
