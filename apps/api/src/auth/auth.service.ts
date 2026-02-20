import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../common/firebase/firebase.service';

@Injectable()
export class AuthService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async verifyWalletSignature(
    walletAddress: string,
    _signature: string,
    _message: string,
  ): Promise<string> {
    // TODO: Verify EIP-712 / personal_sign signature with viem
    const uid = walletAddress.toLowerCase();

    try {
      await this.firebaseService.auth.getUser(uid);
    } catch {
      await this.firebaseService.auth.createUser({
        uid,
        displayName: walletAddress,
      });
    }

    const customToken = await this.firebaseService.auth.createCustomToken(uid);
    return customToken;
  }
}
