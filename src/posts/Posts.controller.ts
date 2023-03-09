import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { PostsService } from './Posts.service';
import { CreatePostDTO } from './dto/CreatePostDTO';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  async createPost(@Body() post: CreatePostDTO) {
    return await this.postsService.createPost(post);
  }
}
