import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { UserEntity } from 'src/users/entities/UserEntity';

class CreatePostDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  body: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: true })
  userId: number;
}
export { CreatePostDTO };
