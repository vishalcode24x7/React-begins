import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:'vishal',age:17})
  const btnClicked = ()=>{
    setNum(prev=>({...prev,age:50}))
  }

  return (
    <div className='main'>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
