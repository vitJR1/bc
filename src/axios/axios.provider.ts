import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { AxiosResponseError } from './axios-response.error';

@Injectable()
export class AxiosProvider {
  async get<TResult>(uri: string): Promise<TResult> {
    return await axios
      .get<any, AxiosResponse<TResult>>(uri, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((result) => result.data)
      .catch((err) => {
        if (err?.response?.data?.message) {
          return new AxiosResponseError(
            err?.response?.data?.message,
            err.status,
          );
        }
        throw Error(err.message);
      })
      .then((result) => {
        if (result instanceof AxiosResponseError) {
          throw result;
        }
        return result;
      });
  }
}
