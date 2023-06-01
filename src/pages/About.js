import React from "react";
// import image
import woman from "../img/woman.jpg";

export const About = () => {
  return (
    <div className=" mt-20 pt-12 pb-12 bg-gray-300">
      <div className=" sm:mx-[150px] mx-auto md:mx-[240px] ">
        <div className="border-b-slate border-b-2 flex justify-center items-center md:text-center sm:text-center flex-col   ">
          <h1 className="text-6xl font-medium pb-2 mx-auto ">About us</h1>
          <p className="pb-4">Lorem ipsum dolor at atmet </p>
        </div>
        <div className=" w-full  text-black ">
          <div className="max-w-[1240px] mx-auto lg:grid-cols-3 lg:mt-12 md:w-full flex justify-center items-center ">
            {/* title & text */}
            <div className="w-[400px] py-12 px-8 lg:col-span-2">
              <h2 className="md:text-4xl md:text-center sm:text-3xl text-2xl font-bold py-2">
                Our vision
              </h2>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            {/* image */}
            <div className="py-12 pr-6 md:ml-6 md:pr-0 md:py-0">
              <img
                src={woman}
                alt=""
                className="md:w-[400px] md:h-[350px] lg:w-[200px] lg:h-[250px] "
              />
            </div>
          </div>
        </div>
        <div className=" w-full  text-black ">
          <div className="max-w-[1240px] mx-auto lg:grid-cols-3 lg:mt-12 md:w-full flex justify-center items-center ">
            {/* image */}
            <div className="py-12 pr-6 md:ml-6 md:pr-0 md:py-0">
              <img
                src={woman}
                alt=""
                className="md:w-[400px] md:h-[350px] lg:w-[200px] lg:h-[250px] "
              />
            </div>

            {/* title & text */}
            <div className="w-[400px] py-12 px-8 lg:col-span-2">
              <h2 className="md:text-4xl md:text-center sm:text-3xl text-2xl font-bold py-2">
                Our vision
              </h2>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full  text-black ">
          <div className="max-w-[1240px] mx-auto lg:grid-cols-3 lg:mt-12 md:w-full flex justify-center items-center ">
            {/* title & text */}
            <div className="w-[400px] py-12 px-8 lg:col-span-2">
              <h2 className="md:text-4xl md:text-center sm:text-3xl text-2xl font-bold py-2">
                Our vision
              </h2>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            {/* image */}
            <div className="py-12 pr-6 md:ml-6 md:pr-0 md:py-0">
              <img
                src={woman}
                alt=""
                className="md:w-[400px] md:h-[350px] lg:w-[200px] lg:h-[250px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
