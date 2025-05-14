import { IsEmail, IsNotEmpty, MinLength, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'rafinulhuq@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Rafinul Huq' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ example: 'Rafi' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Nul' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: 'Travel enthusiast and photographer', required: false })
  @IsString()
  @IsOptional()
  bio?: string;
}