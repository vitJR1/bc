import { Injectable } from '@nestjs/common';
import { CosmosBlockResponseDto } from './dto/cosmos-block.response.dto';
import { CosmosTransactionsResponseDto } from './dto/cosmos-transactions.response.dto';

@Injectable()
export class CosmosService {
  findOneCosmosBlock(height: string): CosmosBlockResponseDto {
    return {
      height: `${height}`,
      time: `${height}-t`,
      hash: `${height}-h`,
      proposedAddress: `${height}-pa`,
    };
  }

  findOneCosmosTransaction(hash: string): CosmosTransactionsResponseDto {
    return {
      hash: `${hash}`,
      height: `${hash}-h`,
      time: `${hash}-t`,
      gasUsed: `${hash}-gu`,
      gasWanted: `${hash}-gw`,
      fee: `${hash}-f`,
      sender: `${hash}-s`,
    };
  }
}
