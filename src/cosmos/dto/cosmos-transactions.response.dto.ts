import {
  TxAuthInfoFee,
  TxAuthInfoSignerInfo,
} from '../types/transactions/cosmos.transactions.output';

export class CosmosTransactionsResponseDto {
  hash: string;
  height: string;
  time: string;
  gasUsed: string;
  gasWanted: string;
  fee: TxAuthInfoFee;
  sender: TxAuthInfoSignerInfo[];
}
