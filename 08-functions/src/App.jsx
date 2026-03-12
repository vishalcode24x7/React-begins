import React from "react";

const App = () => {
  return (
    <div
      onWheel={(elem) => {
        console.log(elem.deltaY);
      }}
    >
      {/* <input onChange={(elem)=>{
        console.log(elem.nativeEvent.data)
      }} type="text" placeholder='Enter Name' /> */}

      {/* <div onMouseMove={(elem)=>{
        console.log("x = ",elem.clientX)
        console.log("y = ",elem.clientY)
      }} className="box"></div> */}

      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  );
};

export default App;
