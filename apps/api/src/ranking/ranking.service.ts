import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { FirebaseService } from '../common/firebase/firebase.service';

@Injectable()
export class RankingService {
  private readonly logger = new Logger(RankingService.name);
  private readonly collection = 'rankings';

  constructor(private readonly firebaseService: FirebaseService) {}

  async getRanking(cupId: string) {
    const snapshot = await this.firebaseService.firestore
      .collection(this.collection)
      .where('cupId', '==', cupId)
      .orderBy('rank', 'asc')
      .get();

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  @Cron(CronExpression.EVERY_30_MINUTES)
  async updateRankings() {
    this.logger.log('Starting ranking batch update...');

    const cupsSnapshot = await this.firebaseService.firestore
      .collection('cups')
      .where('status', '==', 'active')
      .get();

    for (const cupDoc of cupsSnapshot.docs) {
      await this.updateCupRanking(cupDoc.id);
    }

    this.logger.log('Ranking batch update completed');
  }

  private async updateCupRanking(cupId: string) {
    this.logger.log(`Updating ranking for cup: ${cupId}`);
    // TODO: Fetch balances from exchange API, calculate PNL, update rankings
  }
}
