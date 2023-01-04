import React from "react";

export const Input = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Type here"
            className="mr-2 input input-bordered"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
          />
          <button className="px-8 text-base text-white normal-case border-none btn btn-square bg-primary">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
