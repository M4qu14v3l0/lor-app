'use client'


import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'smeagol' && password === 'gollum') {
      // Aquí iría la lógica para redirigir al usuario a la página principal
      router.push('/')
    } else {
      setError('Incorrect username or password');
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e1e1e]">
      <div className="bg-[#333333] p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-white">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Login
        </button>
      </div>
    </div>
  );
}