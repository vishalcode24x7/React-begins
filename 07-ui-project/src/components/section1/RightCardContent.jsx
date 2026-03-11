import React from "react";
import { MoveRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl">
        {props.id+1}
      </h2>
      <div>
        <p className="text-sl leading-relaxed text-white mb-14">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quam
          delectus voluptas, voluptate facilis maxime!
        </p>
        <div className="flex items-center justify-between">
          <button className="bg-blue-600 text-white font-semibold px-8 py-2 rounded-full">
           {props.tag}
          </button>
          <button className="bg-blue-600 text-white font-semibold px-3 py-2 rounded-full">
            <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
