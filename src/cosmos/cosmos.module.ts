import { Module } from '@nestjs/common';
import { CosmosService } from './cosmos.service';
import { CosmosController } from './cosmos.controller';
import { CosmosRestApiProvider } from './cosmos.rest-api.provider';
import { AxiosModule } from '../axios/axios.module';

@Module({
  imports: [AxiosModule],
  controllers: [CosmosController],
  providers: [CosmosService, CosmosRestApiProvider],
})
export class CosmosModule {}
