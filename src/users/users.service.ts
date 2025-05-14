import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, username, password } = createUserDto;

    // Checking if user with email or username already exists
    const existingUser = await this.usersRepository.findOne({
      where: [{ email }, { username }],
    });
    
    if (existingUser) {
      const field = existingUser.email === email ? 'email' : 'username';
      throw new ConflictException(`User with this ${field} already exists`);
    }

    // Hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creating new user
    const user = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async findByUsername(username: string): Promise<User> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    Object.assign(user, updateUserDto);
    return this.usersRepository.save(user);
  }

  async requestDeletion(id: string): Promise<void> {
    // In a real-world scenario, we might set a flag and send an email
    // For now, we'll just mark the user as inactive
    const user = await this.findOne(id);
    user.isActive = false;
    await this.usersRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await this.usersRepository.softRemove(user);
  }
}