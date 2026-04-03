import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title, details);
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    console.log(task);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }

  return (
    <div className="h-screen flex  bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-5 items-start p-10 w-1/2"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <div className="gap-4 flex w-1/2 items-start flex-col">
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 w-full py-2 font-medium border-2 outline-none rounded"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            type="text"
            placeholder="Write Details"
            className="px-5 w-full h-32 font-medium py-2 border-2 outline-none rounded"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
          <button className="bg-white active:bg-gray-200 active:scale-95 w-full font-medium text-black px-5 py-2 outline-none rounded">
            Add Notes
          </button>
        </div>
        <img
          className="h-50"
          src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
          alt=""
        />
      </form>
      <div className="flex border-l-2 p-10 flex-col gap-5 w-1/2">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 overflow-auto h-[90%]">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative flex justify-between flex-col items-start text-black h-52 w-40 p-3 pt-8 border-2 rounded-xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-4 leading-tight font-medium text-gray-500">
                    {elem.details}
                  </p>
                </div>
                <button onClick={() => {
                  deleteNote(idx)
                }} className="w-full active:bg-red-800 cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white">Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
