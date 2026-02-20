import { Injectable, OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService implements OnModuleInit {
  private app: admin.app.App;

  onModuleInit() {
    if (admin.apps.length === 0) {
      this.app = admin.initializeApp({
        projectId: process.env.GCP_PROJECT_ID || 'trading-cup-dev',
      });
    } else {
      this.app = admin.apps[0]!;
    }
  }

  get firestore(): admin.firestore.Firestore {
    return this.app.firestore();
  }

  get auth(): admin.auth.Auth {
    return this.app.auth();
  }
}
