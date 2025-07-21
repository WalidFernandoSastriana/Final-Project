const movies = [
  { id: 1, title: 'Inception', year: 2010 },
  { id: 2, title: 'The Matrix', year: 1999 },
];

export default function MovieListPage() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Movie List</h1>
      <ul className="space-y-2">
        {movies.map((movie) => (
          <li key={movie.id}>
            <a href={`/movies/${movie.id}`} className="text-blue-600 hover:underline">
              {movie.title} ({movie.year})
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}