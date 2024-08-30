import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PathParameterRegexValidationPipe implements PipeTransform<string> {
  constructor(private readonly regex: RegExp) {}

  transform(value: string): string {
    if (!this.regex.test(value)) {
      throw new BadRequestException(
        `Invalid format: ${value}, does not match with ${this.regex.source}`,
      );
    }
    return value;
  }
}
