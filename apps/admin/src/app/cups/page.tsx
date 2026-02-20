'use client';

import Link from 'next/link';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@trading-cup/ui';

export default function CupsListPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Cup一覧</h1>
        <Link href="/cups/new">
          <Button>新規作成</Button>
        </Link>
      </div>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Cup #1 - IZKY/USDT</CardTitle>
            <CardDescription>下書き</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">大会一覧がここに表示されます</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
