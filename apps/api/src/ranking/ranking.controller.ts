import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { RankingService } from './ranking.service';

@ApiTags('Ranking')
@Controller('ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}

  @Get(':cupId')
  @ApiOperation({ summary: 'Cupのランキング取得' })
  async getRanking(@Param('cupId') cupId: string) {
    return this.rankingService.getRanking(cupId);
  }
}
