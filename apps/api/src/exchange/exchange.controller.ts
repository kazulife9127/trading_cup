import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ExchangeService } from './exchange.service';
import { AuthGuard } from '../common/guards/auth.guard';
import { RegisterApiKeyDto } from './dto/register-api-key.dto';

@ApiTags('Exchange')
@Controller('exchange')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}

  @Post('api-key')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'API Key登録' })
  async registerApiKey(@Req() req: any, @Body() dto: RegisterApiKeyDto) {
    return this.exchangeService.registerApiKey(req.user.uid, dto.apiKey, dto.apiSecret);
  }

  @Post('test-connection')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: '接続テスト' })
  async testConnection(@Req() req: any) {
    return this.exchangeService.testConnection(req.user.uid);
  }
}
