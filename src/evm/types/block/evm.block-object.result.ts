class Withdrawal {
  // Validator index
  // Add pattern based on the requirement
  index: string;

  // index of validator that generated withdrawal
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]{0,15})|0$
  validatorIndex: string;

  // Validator withdrawal address
  // Must match pattern ^0x[0-9a-fA-F]{40}$
  address: string;

  // Withdrawal amount
  // Add pattern based on the requirement
  amount: string;
}

export class BlockObject {
  // Hash of the block
  // Must match pattern ^0x[0-9a-f]{64}$
  hash: string;

  // Parent block hash
  // Must match pattern ^0x[0-9a-f]{64}$
  parentHash: string;

  // Ommers hash (sha3Uncles)
  // Must match pattern ^0x[0-9a-f]{64}$
  sha3Uncles: string;

  // Coinbase (miner address)
  // Must match pattern ^0x[0-9a-fA-F]{40}$
  miner: string;

  // State root hash
  // Must match pattern ^0x[0-9a-f]{64}$
  stateRoot: string;

  // Transactions root hash
  // Must match pattern ^0x[0-9a-f]{64}$
  transactionsRoot: string;

  // Receipts root hash
  // Must match pattern ^0x[0-9a-f]{64}$
  receiptsRoot: string;

  // Bloom filter
  // Must match pattern ^0x[0-9a-f]{512}$
  logsBloom: string;

  // Block difficulty
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  difficulty: string;

  // Block number
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  number: string;

  // Gas limit for the block
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  gasLimit: string;

  // Gas used in the block
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  gasUsed: string;

  // Block timestamp
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  timestamp: string;

  // Extra data associated with the block
  // Must match pattern ^0x[0-9a-f]*$
  extraData: string;

  // Mix hash used in the mining process
  // Must match pattern ^0x[0-9a-f]{64}$
  mixHash: string;

  // Nonce used in the mining process
  // Must match pattern ^0x[0-9a-f]{16}$
  nonce: string;

  // Total difficulty of the chain up to and including this block
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  totalDifficulty?: string;

  // Base fee per gas in the block
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  baseFeePerGas?: string;

  // Withdrawals root hash
  // Must match pattern ^0x[0-9a-f]{64}$
  withdrawalsRoot?: string;

  // Blob gas used in the block
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  blobGasUsed?: string;

  // Excess blob gas in the block
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  excessBlobGas?: string;

  // Parent beacon block root hash
  // Must match pattern ^0x[0-9a-f]{64}$
  parentBeaconBlockRoot?: string;

  // Size of the block
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  size: string;

  // Array of transaction hashes or transaction objects
  // Also might to be transaction an object
  transactions: string[];

  // Array of withdrawal objects
  withdrawals?: Withdrawal[];

  // Array of uncles (ommers) hashes
  // Each uncle must match pattern ^0x[0-9a-f]{64}$
  uncles?: string[];
}
