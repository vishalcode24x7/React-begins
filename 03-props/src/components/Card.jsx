import React from 'react'

const card = (prop) => {
    
    console.dir(prop);
    return (
        <div className="card">
        <img src="https://images.unsplash.com/photo-1648900965408-d70c5f566a96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" alt="" />
        <h2>MY NAME IS {prop.user}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, placeat.</p>
        <button>view profile
        </button>
      </div>
  )
}

export default card
