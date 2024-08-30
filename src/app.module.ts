import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CosmosModule } from './cosmos/cosmos.module';
import { EvmModule } from './evm/evm.module';

@Module({
  imports: [CosmosModule, EvmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
