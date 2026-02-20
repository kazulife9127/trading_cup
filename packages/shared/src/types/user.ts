export interface User {
  id: string;
  walletAddress: string;
  displayName?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiKeyRegistration {
  id: string;
  userId: string;
  exchange: string;
  isValid: boolean;
  createdAt: Date;
}
