import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CosmosModule } from './cosmos/cosmos.module';
import { EvmModule } from './evm/evm.module';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { JsonRpcModule } from './json-rpc/json-rpc.module';
import { AxiosModule } from './axios/axios.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    CosmosModule,
    EvmModule,
    JsonRpcModule,
    AxiosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
