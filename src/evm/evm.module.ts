import { Module } from '@nestjs/common';
import { EvmService } from './evm.service';
import { EvmController } from './evm.controller';
import { EvmJsonrpcProvider } from './evm.jsonrpc.provider';
import { JsonRpcModule } from '../json-rpc/json-rpc.module';

@Module({
  imports: [JsonRpcModule],
  controllers: [EvmController],
  providers: [EvmService, EvmJsonrpcProvider],
})
export class EvmModule {}
