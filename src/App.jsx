import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [count, setCount] = useState(0);


  function isPrime() {
    if (count < 2) return false;
    for (let i = 2; i <= Math.trunc(count / 2); i++) {
      if (count % i == 0) return false
    }
    return true
  }
  return (
    <>
      <div className='container'>
        <div className='first-div'>
          <button onClick={() => { setCount(count - 1) }}>Decrement</button>
          <h1>{count}</h1>
          <button onClick={() => { setCount(count + 1) }}>Increment</button>

          {
            count > 0 ? <p>Count is Positive</p> :
              count === 0 ? <p>Count is Zero</p> :
                <p>Count is Negative</p>
          }
          {
            count % 2 == 0 ? <p>Count is Even</p> :
              <p>Count is Odd</p>
          }
          {
            isPrime() && <p>Count is Prime</p>
          }



        </div>
      </div>

    </>
  )
}

export default App