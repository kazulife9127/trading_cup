import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, type Auth } from 'firebase/auth';

let _app: FirebaseApp | null = null;
let _auth: Auth | null = null;

function getFirebaseApp(): FirebaseApp {
  if (_app) return _app;

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'demo-key',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'localhost',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'trading-cup-dev',
  };

  _app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  return _app;
}

function getFirebaseAuth(): Auth {
  if (_auth) return _auth;

  _auth = getAuth(getFirebaseApp());

  if (
    typeof window !== 'undefined' &&
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST
  ) {
    connectAuthEmulator(
      _auth,
      `http://${process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST}`,
    );
  }

  return _auth;
}

export { getFirebaseApp as app, getFirebaseAuth as auth };
