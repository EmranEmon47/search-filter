import React from "react";
import logo from "../../assets/images/pharmacy-logo.jpg";
import logo1 from "../../assets/images/pharmacy-2.jpg";
import logo2 from "../../assets/images/pharmacy-3.jpg";
import logo3 from "../../assets/images/pharmacy-4.jpg";

export const Pharmacy = () => {
  return (
    <div>
      <hr className="visible mx-2 mt-2 font-bold border bg-slate-300 lg:invisible md:invisible" />
      <div className="flex items-center justify-around px-2 mt-4 md:mt-8 lg:mt-12 md:justify-around lg:justify-evenly">
        <div className="w-28 lg:w-52 md:w-40">
          <img src={logo} alt="logo" />
        </div>
        <div className="invisible lg:mr-8 md:visible lg:visible">
          <h3 className="font-medium">Creelmans Pharmacy</h3>
          <p className="font-medium">456 items</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 pr-2 lg:mr-4 font-bolder"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>{" "}
      <hr className="visible mx-2 mt-2 font-bold border lg:invisible md:invisible bg-slate-300" />
      <div className="flex items-center justify-around px-2 mt-4 md:mt-4 lg:mt-4 md:justify-around lg:justify-evenly">
        <div className="w-20 lg:w-44 md:w-32">
          <img  src={logo1} alt="logo" />
        </div>
        <div className="invisible md:visible lg:visible">
          <h3 className="font-medium">Creelmans Pharmacy</h3>
          <p className="font-medium">456 itemss</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 pr-2 font-bolder"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>{" "}
      <hr className="visible mx-2 mt-2 font-bold border lg:invisible md:invisible" />
      <div className="flex items-center justify-around px-2 mt-4 md:mt-4 lg:mt-4 md:justify-around lg:justify-evenly">
        <div className="w-28 lg:w-52 md:w-40">
          <img src={logo2} alt="logo" />
        </div>
        <div className="invisible lg:mr-4 md:visible lg:visible">
          <h3 className="font-medium">Creelmans Pharmacy</h3>
          <p className="font-medium">456 itemss</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 pr-2 lg:mr-2 font-bolder"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>{" "}
      <hr className="visible mx-2 mt-2 font-bold border lg:invisible md:invisible bg-slate-300" />
      <div className="flex items-center justify-around px-2 mt-4 md:mt-4 lg:mt-4 md:justify-around lg:justify-evenly">
        <div className="w-28 lg:w-52 md:w-40">
          <img src={logo3} alt="logo" />
        </div>
        <div className="invisible md:visible lg:visible lg:mr-4">
          <h3 className="font-medium">Creelmans Pharmacy</h3>
          <p className="font-medium">456 itemss</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 pr-2 font-bolder"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>{" "}
      <hr className="visible mx-2 mt-2 font-bold border lg:invisible md:invisible bg-slate-300" />
    </div>
  );
};
