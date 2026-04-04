import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <h3 className="font-bold text-3xl mx-[45%] my-[20%]">Loading...</h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-50 w-64 gap-5 bg-white overflow-hidden rounded-xl">
              <img
                className="h-full object-cover"
                src={elem.download_url}
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <h1 className="mb-5 font-bold text-2xl">Gallery page {index}</h1>
      <div className="flex h-[80%] flex-wrap gap-4">{printUserData}</div>

      <div className="flex justify-center items-center gap-6 mt-6 text-sm text-black ">
        <button
        style={{opacity:index == 1?0.5:1}}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-500 active:scale-95 hover:bg-amber-600 font-bold py-2 px-4 rounded"
        >
          Prev
        </button>
        <h4 className="text-white">Page {index}</h4>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
          className="bg-amber-500 active:scale-95 hover:bg-amber-600 font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
