export type ParticipantStatus = 'active' | 'disqualified_deposit' | 'disqualified_volume' | 'disqualified_manual';

export interface Participant {
  id: string;
  userId: string;
  cupId: string;
  startBalance: number;
  currentBalance: number;
  pnl: number;
  pnlPercent: number;
  volume: number;
  rank: number | null;
  status: ParticipantStatus;
  registeredAt: Date;
  updatedAt: Date;
}

export interface RankingEntry {
  rank: number;
  userId: string;
  displayName: string;
  walletAddress: string;
  pnl: number;
  pnlPercent: number;
  volume: number;
}
