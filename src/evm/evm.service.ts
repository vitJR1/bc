import { Injectable } from '@nestjs/common';
import { CreateEvmDto } from './dto/create-evm.dto';
import { UpdateEvmDto } from './dto/update-evm.dto';

@Injectable()
export class EvmService {
  create(createEvmDto: CreateEvmDto) {
    return 'This action adds a new evm';
  }

  findAll() {
    return `This action returns all evm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evm`;
  }

  update(id: number, updateEvmDto: UpdateEvmDto) {
    return `This action updates a #${id} evm`;
  }

  remove(id: number) {
    return `This action removes a #${id} evm`;
  }
}
