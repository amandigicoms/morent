import React, { useState } from "react";
import { BsArrowDownUp } from "react-icons/bs";

const Filters = () => {
  const isMobile = window.innerWidth <= 768;
  // Left Section State
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");

  // Right Section State
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");
  return (
    <>
      <div className="lg:flex">
        {/* -------------------------------Left section----------------------------- */}
        <div className="w-full lg:w-[45%] bg-white p-5 rounded-md">
          <div className="flex items-center xl:ml-8">
            <input
              defaultChecked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-lg font-medium text-gray-900"
            >
              Pick - Up
            </label>
          </div>
          {/* -------------------input fields starting------------------- */}
          <div className="flex mt-2">
            <div className="border-r w-[33%]">
              <div className="w-max mx-auto ">
                <label
                  htmlFor="locations"
                  className="font-bold text-sm lg:text-lg "
                >
                  Locations
                </label>
                <br />
                <select
                  name="locations"
                  id="locations"
                  className="text-sm text-gray-400 focus:border-transparent border-none"
                  value={isMobile ? "Semarang" : pickUpLocation}
                  onChange={(e) => setPickUpLocation(e.target.value)}
                >
                  <option value="" hidden>
                    {isMobile ? "Semarang" : "Select your city"}
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="border-r w-[33%]">
              <div className="w-max mx-auto ">
                <label htmlFor="date" className="font-bold text-sm lg:text-lg ">
                  Date
                </label>
                <br />
                <select
                  name="date"
                  id="date"
                  className="text-sm text-gray-400 focus:border-transparent border-none"
                  value={isMobile ? "20 July 2022" : pickUpDate}
                  onChange={(e) => setPickUpDate(e.target.value)}
                >
                  <option value="" hidden>
                    {isMobile ? "20 July 2022" : "Select your date"}
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className=" w-[33%]">
              <div className="w-max mx-auto ">
                <label htmlFor="time" className="font-bold text-sm lg:text-lg ">
                  Time
                </label>
                <br />
                <select
                  name="time"
                  id="time"
                  className="text-sm text-gray-400 focus:border-transparent border-none"
                  value={isMobile ? "07:00" : pickUpTime}
                  onChange={(e) => setPickUpTime(e.target.value)}
                >
                  <option value="" hidden>
                    {isMobile ? "07:00" : "Select your time"}
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
          {/* -------------------input fields Ending------------------- */}
        </div>
        {/* -------------------------------Center section----------------------------- */}
        <div className="w-full lg:w-[10%] flex items-center place-content-center">
          <div className="bg-blue-700 text-white rounded-lg w-max p-5 shadow-lg absolute mt-8 lg:mt-0">
            <BsArrowDownUp />
          </div>
        </div>
        {/* -------------------------------Right section----------------------------- */}
        <div className="w-full lg:w-[45%] bg-white p-5 rounded-md mt-8 lg:mt-0">
          <div className="flex items-center xl:ml-8">
            <input
              defaultChecked
              id="default-radio-3"
              type="radio"
              value=""
              name="default-radio-2"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-lg font-medium text-gray-900 "
            >
              Drop - Off
            </label>
          </div>
          {/* -------------------input fields starting------------------- */}
          <div className="flex mt-2">
            <div className="border-r w-[33%]">
              <div className="w-max mx-auto ">
                <label
                  htmlFor="locations"
                  className="font-bold text-sm lg:text-lg "
                >
                  Locations
                </label>
                <br />
                <select
                  name="locations"
                  id="locations"
                  className="text-sm text-gray-400 focus:border-transparent border-none"
                  value={isMobile ? "Semarang" : dropOffLocation}
                  onChange={(e) => setDropOffLocation(e.target.value)}
                >
                  <option value="" hidden>
                    {isMobile ? "Semaramg" : "Select your city"}
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="border-r w-[33%]">
              <div className="w-max mx-auto ">
                <label htmlFor="date" className="font-bold text-sm lg:text-lg ">
                  Date
                </label>
                <br />
                <select
                  name="date"
                  id="date"
                  className="text-sm text-gray-400 focus:border-transparent border-none"
                  value={isMobile ? "21 July 2022" : dropOffDate}
                  onChange={(e) => setDropOffDate(e.target.value)}
                >
                  <option value="" hidden>
                    {isMobile ? "21 July 2022" : "Select your date"}
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className=" w-[33%]">
              <div className="w-max mx-auto ">
                <label htmlFor="time" className="font-bold text-sm lg:text-lg ">
                  Time
                </label>
                <br />
                <select
                  name="time"
                  id="time"
                  className="text-sm text-gray-400 focus:border-transparent border-none"
                  value={isMobile ? "01:00" : dropOffTime}
                  onChange={(e) => setDropOffTime(e.target.value)}
                >
                  <option value="" hidden>
                    {isMobile ? "01:00" : "Select your date"}
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
          {/* -------------------input fields Ending------------------- */}
        </div>
      </div>
    </>
  );
};

export default Filters;
