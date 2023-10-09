import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <nav className="bg-white border-gray-200 w-[95%] mx-auto">
        <div className=" flex flex-wrap items-center mx-auto p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-bold whitespace-nowrap text-blue-700 ">
              MORENT
            </span>
          </Link>
          {/* ---------------------------------------Searc Input for Desktop------------------------- */}
          <>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative w-[40%] lg:w-[30%] ml-[10%] mr-auto hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search something here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center rotate-90 pt-7 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
            </div>
          </>
          {/* -----------------------------------icons-------------------------- */}
          <div className="hidden md:flex">
            <div className="rounded-full border p-1 text-lg text-gray-600 mx-3">
              <AiFillHeart />
            </div>
            <div className="relative rounded-full border p-1 text-lg text-gray-600 mx-3">
              <div className="rounded-full p-1 bg-red-400 absolute top-0 right-0"></div>
              <IoMdNotifications />
            </div>
            <div className="rounded-full border p-1 text-lg text-gray-600 mx-3">
              <IoMdSettings />
            </div>
          </div>

          {/* --------------------------------------avatar-------------------------------- */}
          <div className="ml-auto md:ml-2">
            <img
              className="w-9 h-9 md:w-10 md:h-10 rounded-full"
              src="/images/avataar.jpeg"
              alt="Rounded avatar"
            />
          </div>
        </div>

        {/* --------------------------------------Search Input for Mobile -------------------------------- */}
        <div className="px-4 py-2 flex">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative w-[80%] mr-auto md:hidden block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search something here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="w-[20%] flex  place-content-center">
            <div className="border border-gray-300 rounded-md bg-gray-50 p-2 px-4 pointer-events-none block md:hidden">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
