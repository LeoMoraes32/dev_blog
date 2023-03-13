import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

class CreateUserDTO {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  password: string;
}
export { CreateUserDTO };
