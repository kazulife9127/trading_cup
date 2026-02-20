'use client';

import { Button } from '@trading-cup/ui';

export default function ApiSetupPage() {
  return (
    <main className="container mx-auto max-w-lg px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">API Key Registration</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="apiKey" className="mb-1 block text-sm font-medium">
            API Key (Read-only)
          </label>
          <input
            id="apiKey"
            type="text"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            placeholder="Enter your read-only API key"
          />
        </div>
        <div>
          <label htmlFor="apiSecret" className="mb-1 block text-sm font-medium">
            API Secret
          </label>
          <input
            id="apiSecret"
            type="password"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            placeholder="Enter your API secret"
          />
        </div>
        <Button type="submit" className="w-full">
          Test Connection
        </Button>
      </form>
    </main>
  );
}
