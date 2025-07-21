'use client'

import Link from 'next/link'

const movies = [
  { id: '1', title: 'Smurfs', image: '/img/smurfs.png' },
  { id: '2', title: 'Forest', image: '/img/forest.png' },
  { id: '3', title: 'Top Gun Maverick', image: '/img/topgun.png' },
  { id: '4', title: 'Avatar', image: '/img/avatar.png' },
  { id: '5', title: 'The Batman', image: '/img/batman.png' },
  { id: '6', title: 'Avengers: Endgame', image: '/img/endgame.png' },
  { id: '7', title: 'Up', image: '/img/up.png' },
  { id: '8', title: 'Black Panther', image: '/img/blackpanther.jpg' },
  { id: '9', title: 'Coco', image: '/img/coco.jpg' },
  { id: '14', title: 'Toy Story 4', image: '/img/toystory4.jpg' },
  { id: '10', title: 'Cars 3', image: '/img/cars3.jpg' },
  { id: '11', title: 'Turning Red', image: '/img/turningred.jpg' },
  { id: '12', title: 'Elemental', image: '/img/elemental.jpg' },
  { id: '13', title: 'Luca', image: '/img/luca.jpg' },
  { id: '14', title: 'Encanto', image: '/img/encanto.jpg' },
  { id: '15', title: 'Moana', image: '/img/moana.jpg' },
]

export default function DashboardPage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
        <a href="/dashboard" className="text-xl font-bold">W-Movie</a>
        <p>by Walid Fernando Sastriana</p>
        <div className="space-x-4">
          <a href="/dashboard" className="hover:underline">Home</a>
          <a href="/profile" className="hover:underline">Profile</a>
          <a href="/login" className="hover:underline">Login</a>
        </div>
      </nav>

      {/* Home Content */}
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6">Sedang Tayang</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <Link key={movie.id} href={`/movie/${movie.id}`}>
              <div className="cursor-pointer border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-2 text-center font-semibold text-lg">{movie.title}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-gray-600">
          <p>
            Selamat datang di W-Movie! Temukan berbagai film menarik yang sedang tayang.
          </p>
        </div>
      </div>
    </div>
  )
}
