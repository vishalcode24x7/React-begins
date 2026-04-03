import React from 'react'

const App = () => {

  localStorage.removeItem('user')
  const user = {
    username: 'zhangsan',
    age: 20,
    city: 'beijing'
  }
  localStorage.setItem('user', JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem('user'))
  console.log(usera)
  return (
    <div>
      hello world
    </div>
  )
}

export default App
