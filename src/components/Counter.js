import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count => count - 1)}>-</button>
      <span style={{ padding: '0 6px' }}>count: {count}</span>
      <button onClick={() => setCount(count => count + 1)}>+</button>
    </div>
  )
}
