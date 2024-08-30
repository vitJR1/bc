class EvmJsonRpcBlockWithdrawalsResult {
  index: string;
  validatorIndex: string;
  address: string;
  amount: string;
}

export class EvmJsonRpcBlockResult {
  baseFeePerGas: string;
  blobGasUsed: string;
  difficulty: string;
  excessBlobGas: string;
  extraData: string;
  gasLimit: string;
  gasUsed: string;
  hash: string;
  logsBloom: string;
  miner: string;
  mixHash: string;
  nonce: string;
  number: string;
  parentBeaconBlockRoot: string;
  parentHash: string;
  receiptsRoot: string;
  sha3Uncles: string;
  size: string;
  stateRoot: string;
  timestamp: string;
  totalDifficulty: string;
  transactions: string[];
  transactionsRoot: string;
  uncles: any[];
  withdrawals: EvmJsonRpcBlockWithdrawalsResult[];
  withdrawalsRoot: string;
}
