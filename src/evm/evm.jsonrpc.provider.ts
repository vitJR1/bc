import { Injectable } from '@nestjs/common';
import { EvmJsonRpcTransactionResult } from './types/transactions/evm.json-rpc-transaction.result';
import { EvmJsonRpcBlockResult } from './types/block/evm-json-rpc-block.result';
import { ConfigService } from '@nestjs/config';
import { JsonRpcProvider } from '../json-rpc/json-rpc-provider';

@Injectable()
export class EvmJsonrpcProvider {
  constructor(
    private readonly jsonRpcProvider: JsonRpcProvider,
    private readonly configService: ConfigService,
  ) {}

  async getTransactionByHash(
    hash: string,
  ): Promise<EvmJsonRpcTransactionResult | null> {
    return await this.jsonRpcProvider.call<EvmJsonRpcTransactionResult>(
      this.getUrl(),
      {
        method: 'eth_getTransactionByHash',
        params: [hash],
        id: 1,
      },
    );
  }

  async getBlockByNumber(num: string): Promise<EvmJsonRpcBlockResult | null> {
    return await this.jsonRpcProvider.call<EvmJsonRpcBlockResult>(
      this.getUrl(),
      {
        method: 'eth_getBlockByNumber',
        params: [num, false],
        id: 1,
      },
    );
  }

  private getUrl() {
    return this.configService.get<string>('publicEvmRpcNode');
  }
}
