import { Controller, Get, Param } from '@nestjs/common';
import { CosmosService } from './cosmos.service';
import { ApiTags } from '@nestjs/swagger';
import { CosmosBlockResponseDto } from './dto/cosmos-block.response.dto';
import { CosmosTransactionsResponseDto } from './dto/cosmos-transactions.response.dto';
import { PathParameterRegexValidationPipe } from '../utils/path-parameter-validation-pipe.service';

@ApiTags('Cosmos')
@Controller('cosmos')
export class CosmosController {
  constructor(private readonly cosmosService: CosmosService) {}

  @Get('block/:height')
  async getBlockByHeight(
    @Param(
      'height',
      new PathParameterRegexValidationPipe(new RegExp('^[0-9]+$')),
    )
    height: string,
  ): Promise<CosmosBlockResponseDto> {
    return await this.cosmosService.getBlockByHeight(height);
  }

  @Get('transactions/:hash')
  async getTransactionByHash(
    @Param('hash')
    hash: string,
  ): Promise<CosmosTransactionsResponseDto> {
    return await this.cosmosService.getTransactionByHash(hash);
  }
}
