import React from 'react'
// import { useState } from 'react'
import useCounter from './UseCounter'


const Counter = () => {
    const [counter, increase,decrease,result] = useCounter(0,5)
  return (
    <div>
        <h1>Counter {counter}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={result}>result</button>
    </div>
  )
}

export default Counter