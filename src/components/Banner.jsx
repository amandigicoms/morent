import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="lg:flex py-6 gap-10">
        {/* ----------------------------------left------------------------------- */}
        <div className="lg:w-1/2 rounded-lg px-6 py-4 bg-blue-400">
          <div className="w-[80%] md:w-[60%] xl:w-[40%] pt-4">
            <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold ">
              The Best Platform for Car Rental
            </h1>
            <p className="text-white mt-5 ">
              Ease of doing a car rental safely and realiably. Of course at a
              low price.
            </p>
            <button
              type="button"
              className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Rental Car
            </button>
          </div>
          {/* ----------------------------------image------------------------------- */}

          <div className="mx-auto w-[40%] ">
            <img className="h-[60%]" src="/images/cars/1.png" alt="" />
          </div>
        </div>
        {/* ----------------------------------right------------------------------- */}
        <div className="lg:w-1/2 rounded-lg px-6 py-4 bg-blue-700 mt-4 lg:mt-0">
          <div className="w-[80%] md:w-[60%] xl:w-[40%] pt-4">
            <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold ">
              Easy way to rent a car at low price.
            </h1>
            <p className="text-white mt-5 ">
              Providing cheap car rental prices and safe and comfortable
              facilities.
            </p>
            <button
              type="button"
              className="mt-5 text-white bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Rental Car
            </button>
          </div>
          {/* ----------------------------------image------------------------------- */}
          <div className="mx-auto w-[40%] ">
            <img className="h-[60%]" src="/images/cars/2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
