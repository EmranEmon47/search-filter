import React from "react";

export const Nav = () => {
  return (
    <div className="px-2 lg:px-16 md:px-12 navbar bg-base-100">
      <div className="flex flex-col items-start navbar-start">
        <div className="flex ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 mr-1 -rotate-12 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>

        <a className="text-3xl font-normal normal-case">tuggl</a>
        </div>
        <div className="visible md:invisible lg:invisible">
          <sm className="pl-1 text-xs">On-demand pharmacy deliveries</sm>
        </div>
      </div>

      <div className="navbar-end">
        <a className="text-white border-none btn bg-primary">Sign in</a>
      </div>
    </div>
  );
};
