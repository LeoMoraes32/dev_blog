import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('User')
export class UsersController {
  @Get()
  findAll() {
    return 'Listagem de users';
  }
}
