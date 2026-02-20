import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../common/firebase/firebase.service';

@Injectable()
export class ExchangeService {
  private readonly collection = 'apiKeys';

  constructor(private readonly firebaseService: FirebaseService) {}

  async registerApiKey(userId: string, apiKey: string, apiSecret: string) {
    // TODO: Encrypt apiKey/apiSecret using GCP Secret Manager KMS
    const docRef = await this.firebaseService.firestore
      .collection(this.collection)
      .add({
        userId,
        exchange: 'default',
        encryptedKey: apiKey,
        encryptedSecret: apiSecret,
        isValid: false,
        createdAt: new Date(),
      });

    return { id: docRef.id };
  }

  async testConnection(userId: string): Promise<{ success: boolean; message: string }> {
    // TODO: Use stored API keys to verify connection to exchange
    return { success: true, message: 'Connection test placeholder' };
  }
}
