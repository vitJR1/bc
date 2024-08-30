import { PartialType } from '@nestjs/mapped-types';
import { CreateEvmDto } from './create-evm.dto';

export class UpdateEvmDto extends PartialType(CreateEvmDto) {}
