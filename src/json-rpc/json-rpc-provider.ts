import { Injectable } from '@nestjs/common';
import { JsonRpcCallInput } from './types/json-rpc-call.input';
import { JsonRpcCallOutput } from './types/json-rpc-call-output';
import axios, { AxiosResponse } from 'axios';
import { JsonRpcError } from './json-rpc-error';

@Injectable()
export class JsonRpcProvider {
  async call<TResult>(url: string, body: JsonRpcCallInput): Promise<TResult> {
    return await axios
      .post<JsonRpcCallInput, AxiosResponse<JsonRpcCallOutput<TResult>>>(
        url,
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
          console.log(result.error);
          throw new JsonRpcError(result.error.message, result.error.code);
        }
        return result.result;
      });
  }
}
