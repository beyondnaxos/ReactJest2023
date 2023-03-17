import React, { useState } from 'react'

export const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

    const decrement = () => {
    setCount(prevCount => prevCount - 1)
    }

    const restart = () => {
    setCount(0)
    }

    const switchSign = () => {
    setCount(prevCount => prevCount * -1)
    }

  return <div>
    <h1> Count: <h3 data-testid="count">{count}</h3> </h1>
    <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSign}>Switch Sign</button>
    </div>
  </div>
}
