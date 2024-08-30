import { Module } from '@nestjs/common';
import { JsonRpcProvider } from './json-rpc-provider';

@Module({
  providers: [JsonRpcProvider],
  exports: [JsonRpcProvider],
})
export class JsonRpcModule {}
