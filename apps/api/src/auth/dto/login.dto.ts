import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: 'ウォレットアドレス' })
  @IsString()
  @IsNotEmpty()
  walletAddress: string;

  @ApiProperty({ description: '署名' })
  @IsString()
  @IsNotEmpty()
  signature: string;

  @ApiProperty({ description: '署名対象メッセージ' })
  @IsString()
  @IsNotEmpty()
  message: string;
}
