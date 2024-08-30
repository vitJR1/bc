import { Injectable } from '@nestjs/common';
import { EvmBlockResponseDto } from './dto/evm-block.response.dto';
import { EvmTransactionsResponseDto } from './dto/evm-transactions.response.dto';
import { EvmJsonrpcProvider } from './evm.jsonrpc.provider';

@Injectable()
export class EvmService {
  constructor(private readonly evmJsonrpcProvider: EvmJsonrpcProvider) {}

  findOneEvmBlock(height: string): EvmBlockResponseDto {
    return {
      gasUsed: `${height}-gas`,
      hash: `${height}-hash`,
      height: `${height}`,
      gasLimit: `${height}-gasL`,
      size: `${height}-size`,
      parentHash: `${height}-ph`,
    };
  }

  /**
   * Find transactions by cache
   * @url https://haqq-evm.publicnode.com/
   * @url https://ethereum.github.io/execution-apis/api-documentation
   *
   *
   * */
  async getTransactionByHash(
    hash: string,
  ): Promise<EvmTransactionsResponseDto> {
    const transaction =
      await this.evmJsonrpcProvider.getTransactionByHash(hash);
    console.log(transaction);
    return {
      hash: transaction.hash,
      value: transaction.value,
      from: transaction.from,
      input: transaction.input,
      maxFeePerGas: transaction.maxFeePerGas,
      gasPrice: transaction.gasPrice,
      maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
      to: transaction.to,
    };
  }
}
