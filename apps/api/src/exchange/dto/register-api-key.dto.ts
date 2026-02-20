import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterApiKeyDto {
  @ApiProperty({ description: 'Read-only API Key' })
  @IsString()
  @IsNotEmpty()
  apiKey: string;

  @ApiProperty({ description: 'API Secret' })
  @IsString()
  @IsNotEmpty()
  apiSecret: string;
}
