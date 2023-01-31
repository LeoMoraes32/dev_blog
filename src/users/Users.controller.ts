import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from './dto/CreateUserDTO';
import { UsersService } from './Users.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() body: CreateUserDTO) {
    return await this.usersService.create(body);
  }

  @Get()
  findAll() {
    console.log('teste');
    return 'Listagem de users';
  }
}
