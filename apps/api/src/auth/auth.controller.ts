import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Web3ウォレットでログイン' })
  async login(@Body() dto: LoginDto) {
    const token = await this.authService.verifyWalletSignature(
      dto.walletAddress,
      dto.signature,
      dto.message,
    );
    return { token };
  }
}
