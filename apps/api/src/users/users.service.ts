import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../common/firebase/firebase.service';

@Injectable()
export class UsersService {
  private readonly collection = 'users';

  constructor(private readonly firebaseService: FirebaseService) {}

  async findByWalletAddress(walletAddress: string) {
    const snapshot = await this.firebaseService.firestore
      .collection(this.collection)
      .where('walletAddress', '==', walletAddress.toLowerCase())
      .limit(1)
      .get();

    if (snapshot.empty) return null;
    return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
  }

  async create(walletAddress: string) {
    const docRef = await this.firebaseService.firestore
      .collection(this.collection)
      .add({
        walletAddress: walletAddress.toLowerCase(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });

    return { id: docRef.id, walletAddress };
  }
}
