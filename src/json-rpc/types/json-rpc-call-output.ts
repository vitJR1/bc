import { JsonRpcVersions } from './json-rpc-versions';
import { JsonRpcError } from '../json-rpc-error';

export interface JsonRpcCallOutput<TResult> {
  jsonrpc: JsonRpcVersions;
  id: number;
  error?: JsonRpcError;
  result?: TResult;
}
