import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form submitted by", title)
    settitle('')
  }
  return (
    <div>
      <form onSubmit={(e) =>{
        submitHandler(e)
      }}>
        <input value={title} onChange={(e)=>{
          settitle(e.target.value)
        }} type="text" placeholder='write your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
