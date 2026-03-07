import React from "react";
import Card from "./components/card";

const App = () => {
  return (
    <div className="parent">
      <Card user="vishal" age={25} />
      <Card user="John kumar" age={30} />
      <Card user="Nihal" age={30} />
    </div>
  );
};

export default App;
