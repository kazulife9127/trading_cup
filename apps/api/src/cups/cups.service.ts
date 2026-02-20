import { Injectable, NotFoundException } from '@nestjs/common';
import { FirebaseService } from '../common/firebase/firebase.service';
import type { CupStatus } from '@trading-cup/shared';

@Injectable()
export class CupsService {
  private readonly collection = 'cups';

  constructor(private readonly firebaseService: FirebaseService) {}

  async findAll() {
    const snapshot = await this.firebaseService.firestore
      .collection(this.collection)
      .orderBy('createdAt', 'desc')
      .get();

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  async findById(id: string) {
    const doc = await this.firebaseService.firestore
      .collection(this.collection)
      .doc(id)
      .get();

    if (!doc.exists) throw new NotFoundException('Cup not found');
    return { id: doc.id, ...doc.data() };
  }

  async create(data: {
    name: string;
    description?: string;
    startAt: Date;
    endAt: Date;
    minVolume: number;
  }) {
    const cup = {
      ...data,
      exchange: 'default',
      pair: 'IZKY/USDT',
      status: 'draft' as CupStatus,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const docRef = await this.firebaseService.firestore
      .collection(this.collection)
      .add(cup);

    return { id: docRef.id, ...cup };
  }

  async updateStatus(id: string, status: CupStatus) {
    await this.firebaseService.firestore
      .collection(this.collection)
      .doc(id)
      .update({ status, updatedAt: new Date() });

    return this.findById(id);
  }
}
