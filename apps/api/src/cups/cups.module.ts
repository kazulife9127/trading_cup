import { Module } from '@nestjs/common';
import { CupsController } from './cups.controller';
import { CupsService } from './cups.service';

@Module({
  controllers: [CupsController],
  providers: [CupsService],
  exports: [CupsService],
})
export class CupsModule {}
