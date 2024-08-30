import { Module } from '@nestjs/common';
import { JsonRpcProvider } from './json-rpc-provider.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [JsonRpcProvider],
  exports: [JsonRpcProvider],
})
export class JsonRpcModule {}
