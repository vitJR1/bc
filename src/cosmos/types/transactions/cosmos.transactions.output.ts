interface TxAuthInfoFeeAmount {
  amount: string;
  denom: string;
}

export interface TxAuthInfoFee {
  amount: TxAuthInfoFeeAmount[];
  gas_limit: string;
  granter: string;
  payer: string;
}

export interface TxAuthInfoSignerInfo {
  mode_info: {
    single: {
      mode: string;
    };
  };
  public_key: {
    '@type': string;
    key: string;
  };
  sequence: string;
}

interface Tx {
  auth_info: {
    fee: TxAuthInfoFee;
    signer_infos: TxAuthInfoSignerInfo[];
  };
}

interface TxResponse {
  height: string;
  txhash: string;
  gas_wanted: string;
  gas_used: string;
  timestamp: string;
}

export class CosmosTransactionsOutput {
  tx: Tx;
  tx_response: TxResponse;
}
