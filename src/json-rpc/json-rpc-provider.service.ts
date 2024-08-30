import { Injectable } from '@nestjs/common';
import { JsonRpcCallInput } from './types/json-rpc-call.input';
import { JsonRpcCallOutput } from './types/json-rpc-call-output';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosResponse } from 'axios';
import { JsonRpcError } from './types/json-rpc-error';

@Injectable()
export class JsonRpcProvider {
  constructor(private readonly configService: ConfigService) {}

  async call<TResult>(body: JsonRpcCallInput): Promise<TResult> {
    const publicRpcNode = this.configService.get<string>('publicRpcNode');

    return await axios
      .post<JsonRpcCallInput, AxiosResponse<JsonRpcCallOutput<TResult>>>(
        publicRpcNode,
        {
          jsonrpc: '2.0',
          ...body,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((result) => result.data)
      .then((result) => {
        if (result.error != null) {
          throw new JsonRpcError(result.error.message, result.error.code);
        }
        return result.result;
      });
  }
}
