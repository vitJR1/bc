import { Injectable } from '@nestjs/common';
import { CosmosBlockResponseDto } from './dto/cosmos-block.response.dto';
import { CosmosTransactionsResponseDto } from './dto/cosmos-transactions.response.dto';
import { CosmosRestApiProvider } from './cosmos.rest-api.provider';

@Injectable()
export class CosmosService {
  constructor(private readonly cosmosRestApiProvider: CosmosRestApiProvider) {}

  async getBlockByHeight(height: string): Promise<CosmosBlockResponseDto> {
    const block = await this.cosmosRestApiProvider.getBlockByHeight(height);
    return {
      height: block.block.header.height,
      time: block.block.header.time,
      hash: block.block_id.hash,
      proposedAddress: block.block.header.proposer_address,
    };
  }

  async getTransactionByHash(
    hash: string,
  ): Promise<CosmosTransactionsResponseDto> {
    const tx = await this.cosmosRestApiProvider.getTransactionByHash(hash);
    return {
      hash: tx.tx_response.txhash,
      height: tx.tx_response.height,
      time: tx.tx_response.timestamp,
      gasUsed: tx.tx_response.gas_used,
      gasWanted: tx.tx_response.gas_wanted,
      fee: tx.tx.auth_info.fee,
      sender: tx.tx.auth_info.signer_infos,
    };
  }
}
