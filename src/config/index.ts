import { IConfig } from './interface/config.interface';
import * as process from 'process';

export const config = (): IConfig => ({
  port: parseInt(process.env.PORT, 10) || 8080,
  publicEvmRpcNode: String(process.env.PUBLIC_EVM_NODE_URL),
  publicCosmosRpcNode: String(process.env.PUBLIC_COSMOS_NODE_URL),
});
