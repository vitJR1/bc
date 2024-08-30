import { Controller, Get, Param } from '@nestjs/common';
import { CosmosService } from './cosmos.service';
import { CosmosBlockResponseDto } from './dto/cosmos-block.response.dto';
import { CosmosTransactionsResponseDto } from './dto/cosmos-transactions.response.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cosmos')
@Controller('cosmos')
export class CosmosController {
  constructor(private readonly cosmosService: CosmosService) {}

  @Get('block/:height')
  findOneCosmosBlock(@Param('height') height: string): CosmosBlockResponseDto {
    return this.cosmosService.findOneCosmosBlock(height);
  }

  @Get('transactions/:hash')
  findOneCosmosTransaction(
    @Param('hash') hash: string,
  ): CosmosTransactionsResponseDto {
    return this.cosmosService.findOneCosmosTransaction(hash);
  }
}
