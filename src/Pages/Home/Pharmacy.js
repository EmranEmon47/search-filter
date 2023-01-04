import React from "react";
import logo from "../../assets/images/pharmacy-logo.jpg";

export const Pharmacy = () => {
  return (
    <div>
      <div className="flex items-center px-8 mt-12 justify-evenly">
        <div>
          <img width={200} src={logo} alt="logo" />
        </div>
        <div className="invisible md:visible lg:visible">
          <h3 className="font-medium">Creelmans Pharmacy</h3>
          <p className="font-medium">456 itemss</p>
        </div>
        <div>
          <h4 className="font-medium">--- </h4>
        </div>
      </div>{" "}
      <div className="flex items-center px-8 mt-4 justify-evenly">
        <div>
          <img width={200} src={logo} alt="logo" />
        </div>
        <div className="invisible md:visible lg:visible">
          <h3 className="font-medium">Creelmans Pharmacy</h3>
          <p className="font-medium">456 itemss</p>
        </div>
        <div>
          <h4 className="font-medium">--- </h4>
        </div>
      </div>{" "}
      <div className="flex items-center px-8 mt-4 justify-evenly">
        <div>
          <img width={200} src={logo} alt="logo" />
        </div>
        <div className="invisible md:visible lg:visible">
          <h3 className="font-medium">Creelmans Pharmacy</h3>
          <p className="font-medium">456 itemss</p>
        </div>
        <div>
          <h4 className="font-medium">--- </h4>
        </div>
      </div>
    </div>
  );
};
