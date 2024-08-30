import { IConfig } from './interface/config.interface';
import * as process from 'process';

export const config = (): IConfig => ({
  port: parseInt(process.env.PORT, 10) || 8080,
  publicRpcNode: String(process.env.PUBLIC_NODE_URL),
});
