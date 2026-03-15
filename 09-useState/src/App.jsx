import React from 'react'

const App = () => {

  let a = 20;
  function cahngeA(){
    a = 30
  }

  return (
    <div>
      <button onClick={cahngeA}>Click</button>
      <h1>Value of a = {a}</h1>
    </div>
  )
}

export default App
