'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@trading-cup/ui';

export default function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/cups">
          <Card className="cursor-pointer transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle>Cup管理</CardTitle>
              <CardDescription>大会の作成・管理</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                大会の作成、編集、複製、状態管理を行います
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </main>
  );
}
