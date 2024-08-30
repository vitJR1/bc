import { Controller, Get, Param } from '@nestjs/common';
import { EvmService } from './evm.service';
import { EvmTransactionsResponseDto } from './dto/evm-transactions.response.dto';
import { EvmBlockResponseDto } from './dto/evm-block.response.dto';
import { ApiTags } from '@nestjs/swagger';
import { PathParameterRegexValidationPipe } from '../utils/path-parameter-validation-pipe.service';

@ApiTags('Evm')
@Controller('evm')
export class EvmController {
  constructor(private readonly evmService: EvmService) {}

  @Get('block/:number')
  async getBlockByNumber(
    @Param(
      'number',
      new PathParameterRegexValidationPipe(
        new RegExp('^0x([1-9a-f]+[0-9a-f]*|0)$'),
      ),
    )
    num: string,
  ): Promise<EvmBlockResponseDto | null> {
    return await this.evmService.getBlockByNumber(num);
  }

  @Get('transactions/:hash')
  async getTransactionByHash(
    @Param(
      'hash',
      new PathParameterRegexValidationPipe(new RegExp('^0x[0-9a-f]{64}$')),
    )
    hash: string,
  ): Promise<EvmTransactionsResponseDto | null> {
    return await this.evmService.getTransactionByHash(hash);
  }
}
