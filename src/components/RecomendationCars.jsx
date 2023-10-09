import React from "react";
import { cars } from "../utils/carsData";
import Singlecar from "./car components/Singlecar";

const RecomendationCars = () => {
  const recomendation_cars = cars.slice(9, 17);

  //   To avoid creating one more component for single_car
  //    adding one key as a layout in each object.
  //   as popular cars and recomend cars have same design,
  //   but design is different(layout) on mobile device
  //   so adding layout key in these objects and then styling them accordingly
  //  making the same component reusbale instead of creating one more.

  const recomendation_cars_with_layout = recomendation_cars.map((car) => ({
    ...car,
    layout: "changed",
  }));
  console.log("Layout", recomendation_cars_with_layout);

  return (
    <div>
      <div className="flex items-center mt-6">
        <h6 className="font-semibold my-6 text-gray-400 text-lg">
          Recommendation Cars
        </h6>
      </div>
      {/* --------------------------Popular cars------------------------ */}
      <div className="recomend_cars grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {recomendation_cars_with_layout?.map((item) => (
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
              layout={item?.layout}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendationCars;
