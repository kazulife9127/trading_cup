import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CupsService } from './cups.service';
import { CreateCupDto } from './dto/create-cup.dto';

@ApiTags('Cups')
@Controller('cups')
export class CupsController {
  constructor(private readonly cupsService: CupsService) {}

  @Get()
  @ApiOperation({ summary: 'Cup一覧取得' })
  async findAll() {
    return this.cupsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Cup詳細取得' })
  async findById(@Param('id') id: string) {
    return this.cupsService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cup新規作成' })
  async create(@Body() dto: CreateCupDto) {
    return this.cupsService.create({
      ...dto,
      startAt: new Date(dto.startAt),
      endAt: new Date(dto.endAt),
    });
  }

  @Patch(':id/finalize')
  @ApiOperation({ summary: '結果確定' })
  async finalize(@Param('id') id: string) {
    return this.cupsService.updateStatus(id, 'finalized');
  }
}
