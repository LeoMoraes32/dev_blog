import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

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
  @ApiProperty({ required: true })
  @ValidateNested()
  userId: number;
}
export { CreatePostDTO };
