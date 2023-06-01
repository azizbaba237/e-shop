import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { Input, Checkbox, Button, Typography, Textarea } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="  mt-19 pt-32 pb-48 bg-gray-300">
      <div className=" sm:mx-[150px] mx-auto md:mx-[240px] ">
        <div className="border-b-slate border-b-2 flex mb-12 justify-center items-center md:text-center sm:text-center  ">
          <h1 className="text-6xl font-medium pb-6 mx-auto  ">Contact us</h1>
        </div>
      </div>
      <div className=" bg-gray-600 mx-32 px-6 pt-6 h-[850px] flex-col justify-center items-center">
        <div className="flex gap-4 first-letter:mx-auto justify-between ">
          <div className=" rounded-lg flex flex-col justify-center items-center border-2 border-white p-2 h-[150px]">
            <GoLocation className="text-white font-semibold text-2xl " />
            <span className="text-white pt-4 text-xl d border-b">
              202 harry rue des pavees
            </span>
          </div>
          <div className=" rounded-lg flex flex-col justify-center items-center border-2 border-white p-2 h-[150px]">
            <BsFillTelephoneFill className="text-white font-semibold text-2xl " />
            <span className="text-white pt-4 text-xl  border-b">
              +237 695 74 29 78
            </span>
          </div>
          <div className=" rounded-lg flex flex-col justify-center items-center border-2 border-white p-2 h-[150px]">
            <AiFillMail className="text-white font-semibold text-2xl " />
            <span className="text-white pt-4 text-xl border-b">
              abdoulazizbaba227@gmail.com
            </span>
          </div>
        </div>
        {/* form */}
        <div className="bg-white h-[600px] flex justify-center items-center px12 mt-6 rounded-lg ">
          <form className=" max-w-screen-lg sm:w-96">
            <div className="mb-2 flex flex-col gap-6">
              <Input size="lg" label="Name" />
              <Input size="lg" label="Email" />
              <Textarea label="Message" />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <Link
                    to={"/"}
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terms and Conditions
                  </Link>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button
              className="mt-6 text-primary bg-pink-200 hover:bg-gray-800 hover:text-white border-2 border-black"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
