import { IsString, IsNotEmpty, IsNumber, IsDateString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCupDto {
  @ApiProperty({ description: '大会名' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: '説明', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: '開始日時 (ISO 8601)' })
  @IsDateString()
  startAt: string;

  @ApiProperty({ description: '終了日時 (ISO 8601)' })
  @IsDateString()
  endAt: string;

  @ApiProperty({ description: '最低出来高 (USDT)', default: 100 })
  @IsNumber()
  minVolume: number;
}
