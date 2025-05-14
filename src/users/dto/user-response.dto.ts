import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

@Exclude()
export class UserResponseDto {
  @Expose()
  @ApiProperty()
  id: string;

  @Expose()
  @ApiProperty()
  email: string;

  @Expose()
  @ApiProperty()
  username: string;

  @Expose()
  @ApiProperty()
  firstName: string;

  @Expose()
  @ApiProperty()
  lastName: string;

  @Expose()
  @ApiProperty()
  bio: string;

  @Expose()
  @ApiProperty()
  profilePicture: string;

  @Expose()
  @ApiProperty()
  coverPhoto: string;

  @Expose()
  @ApiProperty()
  createdAt: Date;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}