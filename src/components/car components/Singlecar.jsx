import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { PiSteeringWheelBold } from "react-icons/pi";
import { ImUsers } from "react-icons/im";

const Singlecar = ({
  title,
  category,
  fuel_capacity,
  sitting,
  drive,
  per_day_price,
  image,
  favourite,
  original_price,
  layout,
}) => {
  return (
    <>
      <div
        className={`${
          layout ? "w-auto lg:w-[300px] h-[300px]" : "w-[300px] "
        } h-[350px] md:h-[360px] lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow p-4`}
      >
        <div className="flex justify-between">
          <div>
            <h5 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 ">
              {title}
            </h5>
            <h6 className="font-semibold text-gray-400 text-md md:text-lg">
              {category}
            </h6>
          </div>
          <div className="">
            <AiFillHeart
              className={`h-6 w-6 ${
                favourite ? "text-red-500" : "text-gray-500"
              }`}
            />
          </div>
        </div>
        <div
          className={`grid md:grid-cols-6 ${
            layout ? "grid-cols-6" : "grid-cols-1"
          }`}
        >
          {/* ----------------------------image-------------------------- */}
          <div
            className={`${layout ? "col-span-4 md:col-span-6" : "col-span-6"}`}
          >
            <div className="my-6">
              <img className="h-[100px] mx-auto" src={image} alt="" />
            </div>
          </div>

          {/* ----------------------------details-------------------------- */}
          <div
            className={`${layout ? "col-span-2 md:col-span-6" : "col-span-6"}`}
          >
            <div
              className={`${
                layout ? "md:flex" : "flex"
              } justify-around text-sm lg:text-lg my-2`}
            >
              <div
                className={`${
                  layout ? "mt-4 md:mt-0" : ""
                } flex items-center text-gray-400 `}
              >
                <BsFillFuelPumpDieselFill className="mr-2" />
                <span>{fuel_capacity}L</span>
              </div>
              <div
                className={`${
                  layout ? "mt-4 md:mt-0" : ""
                } flex items-center text-gray-400 `}
              >
                <PiSteeringWheelBold className="mr-2" />
                <span>{drive}</span>
              </div>
              <div
                className={`${
                  layout ? "mt-4 md:mt-0" : ""
                } flex items-center text-gray-400 `}
              >
                <ImUsers className="mr-2" />
                <span>{sitting} People</span>
              </div>
            </div>
          </div>
        </div>

        {/* ------Price and Button------ */}
        <div className="flex items-center mt-7">
          <div className="">
            <div className="flex items-center">
              <h5 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight  ">
                ${per_day_price} /
              </h5>
              <h6 className="ml-1 font-semibold text-gray-400">day</h6>
            </div>
            {original_price && (
              <div className="text-gray-400 font-semibold line-through">
                ${original_price}
              </div>
            )}
          </div>

          <button
            type="button"
            className="ml-auto text-white bg-blue-600 hover:bg-blue-800 transition-all duration-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2"
          >
            Rental Car
          </button>
        </div>
      </div>
    </>
  );
};

export default Singlecar;
