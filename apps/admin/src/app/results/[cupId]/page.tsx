'use client';

import { Button } from '@trading-cup/ui';

export default function ResultsPage({ params }: { params: { cupId: string } }) {
  return (
    <main className="container mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">結果確定</h1>
      <p className="mb-4 text-muted-foreground">Cup ID: {params.cupId}</p>
      <Button>結果を確定する</Button>
    </main>
  );
}
