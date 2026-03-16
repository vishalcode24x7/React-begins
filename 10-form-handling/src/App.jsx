import React from 'react'

const App = () => {
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("helllooooo")
  }
  return (
    <div>
      <form onSubmit={(e) =>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='write your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
