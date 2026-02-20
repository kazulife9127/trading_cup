export type CupStatus = 'draft' | 'upcoming' | 'active' | 'ended' | 'finalized';

export interface Cup {
  id: string;
  name: string;
  description: string;
  exchange: string;
  pair: string;
  startAt: Date;
  endAt: Date;
  status: CupStatus;
  minVolume: number;
  createdAt: Date;
  updatedAt: Date;
}
