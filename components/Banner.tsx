import React from "react";

function Banner() {
  return (
    <div className="px-8">
      <div className="flex flex-col lg:flex-row font-bold text-pink-50 rounded-lg items-center justify-between gap-4 bg-pink-800 p-4">
        <div className="flex flex-col">
          <h4 className="text-lg leading-none md:text-2xl lg:text-4xl uppercase">
            Welcome to my blog
          </h4>
          <p className="flex text-sm leading-none md:text-lg lg:text-xl justify-center lg:justify-end italic">
            Developer`s Journey
          </p>
        </div>
        <div className="flex divide-x-2 divide-pink-50 gap-2 text-sm md:text-lg lg:text-xl">
          <p className="p-1 md:p-2 flex justify-end">How to Code</p>
          <p className="p-1 md:p-2">Career tips</p>
          <p className="p-1 md:p-2">Developer Lifestyle</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
