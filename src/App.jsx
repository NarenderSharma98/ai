import { useState } from 'react'
export default function App() {
  const [count, setCount] = useState(0)
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 640, margin: '80px auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <h1 style={{ margin: 0, color: '#1e3a8a' }}>AI</h1>
      <p style={{ margin: 0, color: '#374151' }}>Starter app running in Docker for Alloy sessions.</p>
      <button onClick={() => setCount(c => c + 1)} style={{ alignSelf: 'flex-start', padding: '10px 18px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
        Clicked {count} times
      </button>
    </main>
  )
}
