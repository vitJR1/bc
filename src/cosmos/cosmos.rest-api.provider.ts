import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CosmosBlockOutput } from './types/block/cosmos.block.output';
import { CosmosTransactionsOutput } from './types/transactions/cosmos.transactions.output';
import * as path from 'path';
import { AxiosProvider } from '../axios/axios.provider';

@Injectable()
export class CosmosRestApiProvider {
  constructor(
    private readonly configService: ConfigService,
    private readonly axiosProvider: AxiosProvider,
  ) {}

  async getBlockByHeight(height: string): Promise<CosmosBlockOutput> {
    const uri = path.join(
      this.getUrl(),
      '/cosmos/base/tendermint/v1beta1/blocks/',
      height,
    );
    return await this.axiosProvider.get<CosmosBlockOutput>(uri);
  }

  async getTransactionByHash(hash: string): Promise<CosmosTransactionsOutput> {
    const uri = path.join(this.getUrl(), '/cosmos/tx/v1beta1/txs/', hash);
    return await this.axiosProvider.get<CosmosTransactionsOutput>(uri);
  }

  private getUrl() {
    return this.configService.get<string>('publicCosmosRpcNode');
  }
}
