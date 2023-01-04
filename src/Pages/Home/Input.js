import React from "react";

export const Input = () => {
  return (
    <div className="flex justify-center mt-8 ">
      <div className="form-control">
        <div className="flex flex-col w-96 md:w-1/3 lg:w-1/2 sm:flex-row">
          <input
            type="text"
            placeholder="Type here"
            className="flex-none w-full mt-2 md:mr-2 lg:mr-2 input input-bordered"
          />
          <input
            type="text"
            placeholder="Type here"
            className="flex-none mt-2 input input-bordered md:mr-2 lg:mr-2"
          />
          <button className="px-8 mt-2 text-base text-white normal-case border-none btn bg-primary grow">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
