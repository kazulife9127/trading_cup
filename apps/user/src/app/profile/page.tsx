'use client';

import { useAccount } from 'wagmi';

export default function ProfilePage() {
  const { address } = useAccount();

  return (
    <main className="container mx-auto max-w-lg px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Profile</h1>
      <p className="text-muted-foreground">
        Wallet: {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Not connected'}
      </p>
    </main>
  );
}
