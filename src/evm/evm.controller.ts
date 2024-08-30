import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvmService } from './evm.service';
import { CreateEvmDto } from './dto/create-evm.dto';
import { UpdateEvmDto } from './dto/update-evm.dto';

@Controller('evm')
export class EvmController {
  constructor(private readonly evmService: EvmService) {}

  @Post()
  create(@Body() createEvmDto: CreateEvmDto) {
    return this.evmService.create(createEvmDto);
  }

  @Get()
  findAll() {
    return this.evmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvmDto: UpdateEvmDto) {
    return this.evmService.update(+id, updateEvmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evmService.remove(+id);
  }
}
