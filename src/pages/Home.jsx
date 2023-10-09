import React from "react";
import Banner from "../components/Banner";
import PopularCars from "../components/PopularCars";
import Layout from "./Layouts/Layout";
import RecomendationCars from "../components/RecomendationCars";
import Filters from "../components/Filters";

const Home = () => {
  // I have created a layout and passed a header and footer
  // and a children so everytime wwe create a new page
  // just wrap them in Layout and won't be calling
  // header footer again n again on each page
  // see -> pages/layouts/layout.jsx
  return (
    <Layout>
      <div className="bg-gray-100 pb-5">
        <div className="w-[90%] mx-auto">
          {/* --------------------------Banner------------------------ */}
          <Banner />
          {/* --------------------------Filters------------------------ */}
          <Filters />
          {/* --------------------------Popular Cars------------------------ */}
          <PopularCars />
          {/* --------------------------Recommend Cars------------------------ */}
          <RecomendationCars />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
