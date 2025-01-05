import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGuestUserDto } from './dto/create-guest-user.dto';
import { UpdateGuestUserDto } from './dto/update-guest-user.dto';
import { GuestUser } from './entities/guest-user.entity';

@Injectable()
export class GuestUserService {
  constructor(
    @InjectRepository(GuestUser)
    private userRepository: Repository<GuestUser>,
  ) {}

  async create(createGuestUserDto: CreateGuestUserDto) {
    // console.log('Received Payload:', createUserDto);
    const user = this.userRepository.create(createGuestUserDto);
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id: id });
  }

  async update(id: number, updateGuestUserDto: UpdateGuestUserDto) {
    let guestUser = await this.userRepository.findOneBy({ id: id });
    guestUser = {
      ...guestUser,
      ...updateGuestUserDto,
    };
    const toUpdate = await this.userRepository.save(guestUser);
    return toUpdate;
  }

  remove(id: number) {
    return `This action removes a #${id} guestUser`;
  }
}
