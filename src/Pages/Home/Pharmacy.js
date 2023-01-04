import React from "react";
import logo from "../../assets/images/pharmacy-logo.jpg";

export const Pharmacy = () => {
  return (
    <div>
         <hr className="visible mx-2 mt-2 font-bold border lg:invisible md:invisible" />
      <div className="flex items-center justify-around px-2 mt-4 md:mt-8 lg:mt-12 md:justify-around lg:justify-evenly">
        <div className="w-28 lg:w-52 md:w-40">
          <img src={logo} alt="logo" />
        </div>
        <div className="invisible md:visible lg:visible">
          <h3 className="font-medium">Creelmans Pharmacy</h3>
          <p className="font-medium">456 items</p>
        </div>
        <div>
          <h4 className="pr-4 font-medium">--- </h4>
        </div>
      </div>{" "}
      <hr className="visible mx-2 mt-2 font-bold border lg:invisible md:invisible" />
      <div className="flex items-center justify-around px-2 mt-4 md:mt-8 lg:mt-12 md:justify-around lg:justify-evenly">
        <div className="w-28 lg:w-52 md:w-40">
          <img src={logo} alt="logo" />
        </div>
        <div className="invisible md:visible lg:visible">
          <h3 className="font-medium">Creelmans Pharmacy</h3>
          <p className="font-medium">456 itemss</p>
        </div>
        <div>
          <h4 className="pr-4 font-medium">--- </h4>
        </div>
      </div>{" "}
      <hr className="visible mx-2 mt-2 font-bold border lg:invisible md:invisible" />
      <div className="flex items-center justify-around px-2 mt-4 md:mt-8 lg:mt-12 md:justify-around lg:justify-evenly">
        <div className="w-28 lg:w-52 md:w-40">
          <img src={logo} alt="logo" />
        </div>
        <div className="invisible md:visible lg:visible">
          <h3 className="font-medium">Creelmans Pharmacy</h3>
          <p className="font-medium">456 itemss</p>
        </div>
        <div>
          <h4 className="pr-4 font-medium">--- </h4>
        </div>
      </div>{" "}
      <hr className="visible mx-2 mt-2 font-bold border lg:invisible md:invisible" />
    </div>
  );
};
