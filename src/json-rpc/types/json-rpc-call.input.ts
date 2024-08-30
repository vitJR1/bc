import { JsonRpcVersions } from './json-rpc-versions';

export interface JsonRpcCallInput {
  jsonrpc?: JsonRpcVersions;
  method: string;
  params?: any[];

  // integer
  id: number;
}
