import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CupsModule } from './cups/cups.module';
import { RankingModule } from './ranking/ranking.module';
import { ExchangeModule } from './exchange/exchange.module';
import { FirebaseModule } from './common/firebase/firebase.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    FirebaseModule,
    AuthModule,
    UsersModule,
    CupsModule,
    RankingModule,
    ExchangeModule,
  ],
})
export class AppModule {}
