interface PartSetHeader {
  total: number;
  hash: string;
}

interface BlockId {
  hash: string;
  part_set_header: PartSetHeader;
}

interface Version {
  block: string;
  app: string;
}

interface Header {
  version: Version;
  chain_id: string;
  height: string;
  time: string;
  last_block_id: BlockId;
  last_commit_hash: string;
  data_hash: string;
  validators_hash: string;
  next_validators_hash: string;
  consensus_hash: string;
  app_hash: string;
  last_results_hash: string;
  evidence_hash: string;
  proposer_address: string;
}

interface Data {
  txs: string[];
}

interface Evidence {
  evidence: any[]; // Adjust type if you know the structure of evidence items
}

interface Signature {
  block_id_flag: string;
  validator_address: string | null;
  timestamp: string;
  signature: string | null;
}

interface LastCommit {
  height: string;
  round: number;
  block_id: BlockId;
  signatures: Signature[];
}

interface Block {
  header: Header;
  data: Data;
  evidence: Evidence;
  last_commit: LastCommit;
}

interface SdkBlock {
  header: Header;
  data: Data;
  evidence: Evidence;
  last_commit: LastCommit;
}

export class CosmosBlockOutput {
  block_id: BlockId;
  block: Block;
  sdk_block: SdkBlock;
}
