'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@trading-cup/ui';

export default function CupsLobbyPage() {
  return (
    <main className="container mx-auto max-w-lg px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Cup Lobby</h1>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Cup #1 - IZKY/USDT</CardTitle>
            <CardDescription>Coming soon</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">大会情報がここに表示されます</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
