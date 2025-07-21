'use client'

import { useParams } from 'next/navigation'

export default function MovieDetailPage() {
  const { id } = useParams()

  const movie = {
    id,
    title: 'SMURFS',
    image: '/img/image.png',
    description: 'Ketika Papa Smurf (John Goodman) diculik oleh penyihir jahat, Razamel dan Gargamel, Smurfette (Rihanna) memimpin para Smurf dalam sebuah misi ke dunia nyata untuk menyelamatkannya. Dengan bantuan teman-teman baru, para Smurf bertualang mencari Papa Smurf dan menemukan momen jati diri, kekuatan dan persahabatan sejati.',
  }

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
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col items-center">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full max-w-2xl rounded shadow-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-700 text-lg text-center">{movie.description}</p>
      </div>
    </div>
    </div>
  )
}
