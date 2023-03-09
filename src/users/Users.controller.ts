import {
  Controller,
  Get,
  Query,
  Body,
  Param,
  Delete,
  Post,
  Put,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from './dto/CreateUserDTO';
import { UserEntity } from './entities/UserEntity';
import { UsersService } from './Users.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() body: CreateUserDTO): Promise<UserEntity> {
    return await this.usersService.create(body);
  }

  @ApiQuery({
    name: 'withPagination',
    type: Boolean,
    required: false,
  })
  @ApiQuery({
    name: 'search',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'amount',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
  })
  @Get()
  async findAll(
    @Query('withPagination') withPagination: boolean,
    @Query('search') search: string,
    @Query('amount') amount: number,
    @Query('page') page: number,
  ) {
    return await this.usersService.findAll({
      withPagination,
      amount,
      page,
      search,
    });
  }

  @Get('/:id')
  async findById(@Param('id') id: number): Promise<UserEntity> {
    return await this.usersService.findById(id);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() body: CreateUserDTO) {
    this.usersService.update(id, body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    await this.usersService.delete(id);
  }
}
