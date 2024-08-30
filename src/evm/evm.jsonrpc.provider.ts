import { Injectable } from '@nestjs/common';
import { EvmJsonRpcTransactionResult } from './types/evm.json-rpc-transaction.result';
import { JsonRpcProvider } from '../json-rpc/json-rpc-provider.service';

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
}
