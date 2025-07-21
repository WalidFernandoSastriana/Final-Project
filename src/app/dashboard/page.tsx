'use client'

import Link from 'next/link'

const movies = [
  {
    id: '1',
    title: 'Smurfs',
    image: '/img/image.png',
  },
  {
    id: '2',
    title: 'Forest',
    image: '/img/img_forest.jpg',
  },
  {
    id: '3',
    title: 'Northern Lights',
    image: '/img/img_lights.jpg',
  },
  {
    id: '4',
    title: 'Mountains',
    image: '/img/img_mountains.jpg',
  },
]

export default function DashboardPage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
        <a href="/dashboard" className="text-xl font-bold">W-Movie</a>
        <div className="space-x-4">
          <a href="/dashboard" className="hover:underline">Home</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/login" className="hover:underline">Login</a>
        </div>
      </nav>

      {/* Home Content */}
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to the W-MovieCollection!</h1>
        <h2 className="text-2xl font-semibold mb-6">Sedang Tayang</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <Link key={movie.id} href={`/movie/${movie.id}`}>
              <div className="border rounded overflow-hidden shadow hover:shadow-lg cursor-pointer">
                <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover" />
                <div className="p-2 text-center font-semibold">{movie.title}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit, aliquid
            voluptatum provident consequatur totam.
          </p>
        </div>
      </div>
    </div>
  )
}
