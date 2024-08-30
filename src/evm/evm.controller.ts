import { Controller, Get, Param } from '@nestjs/common';
import { EvmService } from './evm.service';
import { EvmTransactionsResponseDto } from './dto/evm-transactions.response.dto';
import { EvmBlockResponseDto } from './dto/evm-block.response.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Evm')
@Controller('evm')
export class EvmController {
  constructor(private readonly evmService: EvmService) {}

  @Get('block/:height')
  findOneEvmBlock(@Param('height') height: string): EvmBlockResponseDto {
    return this.evmService.findOneEvmBlock(height);
  }

  @Get('transactions/:hash')
  async getTransactionByHash(
    @Param('hash') hash: string,
  ): Promise<EvmTransactionsResponseDto> {
    return await this.evmService.getTransactionByHash(hash);
  }
}
