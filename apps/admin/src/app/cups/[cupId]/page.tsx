export default function CupDetailAdminPage({ params }: { params: { cupId: string } }) {
  return (
    <main className="container mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Cup詳細管理</h1>
      <p className="text-muted-foreground">Cup ID: {params.cupId}</p>
    </main>
  );
}
