import { PartialType } from '@nestjs/mapped-types';
import { CreateCosmoDto } from './create-cosmo.dto';

export class UpdateCosmoDto extends PartialType(CreateCosmoDto) {}
