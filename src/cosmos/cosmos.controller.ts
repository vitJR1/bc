import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CosmosService } from './cosmos.service';
import { CreateCosmoDto } from './dto/create-cosmo.dto';
import { UpdateCosmoDto } from './dto/update-cosmo.dto';

@Controller('cosmos')
export class CosmosController {
  constructor(private readonly cosmosService: CosmosService) {}

  @Post()
  create(@Body() createCosmoDto: CreateCosmoDto) {
    return this.cosmosService.create(createCosmoDto);
  }

  @Get()
  findAll() {
    return this.cosmosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cosmosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCosmoDto: UpdateCosmoDto) {
    return this.cosmosService.update(+id, updateCosmoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cosmosService.remove(+id);
  }
}
