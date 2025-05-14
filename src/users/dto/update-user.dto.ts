import { IsEmail, IsString, IsOptional, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: 'rafinulhuq@gmail.com', required: false })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ example: 'password123', required: false })
  @IsString()
  @MinLength(8)
  @IsOptional()
  password?: string;

  @ApiProperty({ example: 'rafinul', required: false })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({ example: 'huq', required: false })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({ example: 'Travel enthusiast and photographer', required: false })
  @IsString()
  @IsOptional()
  bio?: string;

  @ApiProperty({ example: 'https://example.com/profile.jpg', required: false })
  @IsString()
  @IsOptional()
  profilePicture?: string;

  @ApiProperty({ example: 'https://example.com/cover.jpg', required: false })
  @IsString()
  @IsOptional()
  coverPhoto?: string;
}