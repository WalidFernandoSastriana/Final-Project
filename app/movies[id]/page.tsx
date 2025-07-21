export default function MovieDetailPage({ params }: { params: { id: string } }) {
  const movieId = params.id;
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">Movie Detail</h1>
      <p className="mt-2">Movie ID: {movieId}</p>
      {/* You can fetch and display real movie data later */}
    </main>
  );
}