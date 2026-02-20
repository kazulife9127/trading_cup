'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push('/cups');
    }
  }, [isConnected, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Trading Cup</h1>
          <p className="text-muted-foreground">IZKY Token Trading Competition</p>
        </div>
        <div className="flex justify-center">
          <ConnectButton />
        </div>
      </div>
    </main>
  );
}
