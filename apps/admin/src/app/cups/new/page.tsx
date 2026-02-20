'use client';

import { Button } from '@trading-cup/ui';

export default function CreateCupPage() {
  return (
    <main className="container mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Cup新規作成</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            大会名
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            placeholder="Cup #1 - IZKY/USDT"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="startAt" className="mb-1 block text-sm font-medium">
              開始日時
            </label>
            <input
              id="startAt"
              type="datetime-local"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label htmlFor="endAt" className="mb-1 block text-sm font-medium">
              終了日時
            </label>
            <input
              id="endAt"
              type="datetime-local"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
        </div>
        <div>
          <label htmlFor="minVolume" className="mb-1 block text-sm font-medium">
            最低出来高 (USDT)
          </label>
          <input
            id="minVolume"
            type="number"
            defaultValue={100}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
        <Button type="submit" className="w-full">
          作成
        </Button>
      </form>
    </main>
  );
}
