import React from "react";

export const Nav = () => {
  return (
    <div className="px-2 lg:px-16 md:px-12 navbar bg-base-100">
      <div className="navbar-start">
        <a className="text-3xl font-semibold normal-case">tuggl</a>
      </div>

      <div className="navbar-end">
        <a className="text-white border-none btn bg-primary">Sign in</a>
      </div>
    </div>
  );
};
