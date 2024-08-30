import { Injectable } from '@nestjs/common';
import { EvmJsonRpcTransactionResult } from './types/transactions/evm.json-rpc-transaction.result';
import { JsonRpcProvider } from '../json-rpc/json-rpc-provider.service';
import { EvmJsonRpcBlockResult } from './types/block/evm-json-rpc-block.result';

@Injectable()
export class EvmJsonrpcProvider {
  constructor(private readonly jsonRpcProvider: JsonRpcProvider) {}

  async getTransactionByHash(
    hash: string,
  ): Promise<EvmJsonRpcTransactionResult | null> {
    return await this.jsonRpcProvider.call<EvmJsonRpcTransactionResult>({
      method: 'eth_getTransactionByHash',
      params: [hash],
      id: 1,
    });
  }

  async getBlockByNumber(num: string): Promise<EvmJsonRpcBlockResult | null> {
    return await this.jsonRpcProvider.call<EvmJsonRpcBlockResult>({
      method: 'eth_getBlockByNumber',
      params: [num, false],
      id: 1,
    });
  }
}
