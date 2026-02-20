export default function RankingPage({ params }: { params: { cupId: string } }) {
  return (
    <main className="container mx-auto max-w-lg px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Ranking</h1>
      <p className="text-muted-foreground">Cup ID: {params.cupId}</p>
    </main>
  );
}
