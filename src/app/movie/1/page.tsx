'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function MovieDetailPage() {
  const { id } = useParams()

  // Simulasi data film
  const movie = {
    id,
    title: 'SMURFS',
    image: '/img/smurfs.png',
    description:
      'Ketika Papa Smurf (John Goodman) diculik oleh penyihir jahat, Razamel dan Gargamel, Smurfette (Rihanna) memimpin para Smurf dalam sebuah misi ke dunia nyata untuk menyelamatkannya. Dengan bantuan teman-teman baru, para Smurf bertualang mencari Papa Smurf dan menemukan momen jati diri, kekuatan dan persahabatan sejati.',
    youtube: 'https://www.youtube.com/watch?app=desktop&v=108UjvIzE64&t=0',
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
        <a href="/dashboard" className="text-xl font-bold">W-Movie</a>
        <div className="space-x-4">
          <a href="/dashboard" className="hover:underline">Home</a>
          <a href="/profile" className="hover:underline">Profile</a>
          <a href="/login" className="hover:underline">Login</a>
        </div>
      </nav>

      {/* Detail Movie */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col items-center text-center">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full max-w-sm md:max-w-md rounded shadow-lg mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-gray-700 text-lg mb-4">{movie.description}</p>

          <a
            href={movie.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
          >
            Tonton Film
          </a>
        </div>
      </div>
    </div>
  )
}
