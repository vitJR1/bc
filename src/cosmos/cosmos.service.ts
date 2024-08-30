import { Injectable } from '@nestjs/common';
import { CreateCosmoDto } from './dto/create-cosmo.dto';
import { UpdateCosmoDto } from './dto/update-cosmo.dto';

@Injectable()
export class CosmosService {
  create(createCosmoDto: CreateCosmoDto) {
    return 'This action adds a new cosmo';
  }

  findAll() {
    return `This action returns all cosmos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cosmo`;
  }

  update(id: number, updateCosmoDto: UpdateCosmoDto) {
    return `This action updates a #${id} cosmo`;
  }

  remove(id: number) {
    return `This action removes a #${id} cosmo`;
  }
}
