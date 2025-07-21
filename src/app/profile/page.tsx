'use client'

import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const router = useRouter()

  // Simulasi data user (ganti dengan data dari Firebase kalau sudah integrasi)
  const user = {
    name: 'Walid Fernando',
    email: 'walid@example.com',
    avatar: '/img/avatar-default.png', // pastikan gambar ini ada di public/img/
  }

  const handleLogout = () => {
    // Simulasi logout (nanti pakai Firebase logout)
    console.log('User logged out')
    router.push('/login')
  }

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

      {/* Profile Section */}
      <div className="max-w-xl mx-auto mt-10 bg-white rounded shadow p-6 text-center">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
        <p className="text-gray-600 mb-4">{user.email}</p>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
