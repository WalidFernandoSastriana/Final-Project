'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== repeatPassword) {
      alert("Passwords do not match!")
      return
    }

    // Simulasi proses registrasi (ganti dengan Firebase Auth nanti)
    console.log('Registering:', email, password)

    // Setelah sukses, redirect ke dashboard
    router.push('/dashboard')
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
        <a href="/dashboard" className="text-xl font-bold">CompanyLogo</a>
        <div className="space-x-4">
          <a href="/dashboard" className="hover:underline">Home</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/login" className="hover:underline">Login</a>
        </div>
      </nav>

      {/* Register Form */}
      <div className="max-w-md mx-auto mt-8 p-6 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <p className="mb-4">Please fill in this form to create an account.</p>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              className="border p-2 w-full rounded"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Password</label>
            <input
              type="password"
              className="border p-2 w-full rounded"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Repeat Password</label>
            <input
              type="password"
              className="border p-2 w-full rounded"
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
            Register
          </button>
        </form>

        <p className="mt-4 text-sm">
          Sudah Punya Akun?{' '}
          <a href="/login" className="text-blue-600 underline">Login</a>.
        </p>
      </div>
    </div>
  )
}
