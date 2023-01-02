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
          <button className="text-white border-none btn btn-square bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
