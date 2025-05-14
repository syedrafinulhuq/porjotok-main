import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'rafi@gmail.com' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 'rafinul123456' })
  @IsNotEmpty()
  @IsString()
  password: string;
}