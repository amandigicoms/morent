import React, { useState } from "react";
import { cars } from "../utils/carsData";
import Singlecar from "./car components/Singlecar";

const PopularCars = () => {
  const popularCars = cars.slice(0, 8);
  const [showAllCars, setShowAllCars] = useState(false);

  const handleToggleCars = () => {
    setShowAllCars((prevShowAllCars) => !prevShowAllCars);
  };
  // showing only 8.
  // On start 4 and on toggle 8
  const displayedCars = showAllCars ? popularCars : popularCars.slice(0, 4);

  return (
    <div>
      <div className="flex items-center">
        <h6 className="font-semibold my-6 text-gray-400 text-lg">
          Popular Cars
        </h6>
        <p
          className="ml-auto hover:underline font-semibold text-blue-700 cursor-pointer"
          onClick={handleToggleCars}
        >
          {showAllCars ? "Show Less" : "View All"}
        </p>
      </div>
      {/* --------------------------Popular cars------------------------ */}
      <div className="popular_cars flex overflow-x-auto lg:overflow-x-hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {displayedCars?.map((item) => (
          <div key={item?.id}>
            <Singlecar
              title={item?.title}
              category={item?.category}
              image={item?.image}
              fuel_capacity={item?.fuel_capacity}
              drive={item?.drive}
              sitting={item?.sitting}
              per_day_price={item?.per_day_price}
              original_price={item?.original_price}
              favourite={item?.favourite}
            />
          </div>
        ))}
      </div>
      {/* some css for scroll effect */}
      <style>
        {`
          .popular_cars::-webkit-scrollbar {
            height: 8px;
          }

          .popular_cars::-webkit-scrollbar-thumb {
            background-color: #cbd5e0; /* Scrollbar thumb color */
            border-radius: 6px; /* Border-radius of the thumb */
          }

          .popular_cars::-webkit-scrollbar-track {
            background-color: white; /* Color of the track */
          }
          .popular_cars::-webkit-scrollbar-thumb:hover {
            background-color: #4a5568; /* Color on hover */
          }
        `}
      </style>
    </div>
  );
};

export default PopularCars;
