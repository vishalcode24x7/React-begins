import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {

    const navigate = useNavigate();

  return (
    <div className='py-3 px-5 bg-cyan-900'>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-green-500  rounded px-5 py-2 m-2 cursor-pointer active:scale-90"
      >
        Return to home Page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-green-500  rounded px-5 py-2 m-2 cursor-pointer active:scale-90"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-amber-500  rounded px-5 py-2 m-2 cursor-pointer active:scale-90"
      >
        Next
      </button>
    </div>
  )
}

export default Navbar2
