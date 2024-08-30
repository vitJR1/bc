import { HttpException, HttpStatus } from '@nestjs/common';

export class AxiosResponseError extends HttpException {
  constructor(message: string, code?: number) {
    super(message, code ?? HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
