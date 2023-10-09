import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layouts/Layout";
const PageNotFound = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-700 mb-4">
            Page Not Found 404
          </h1>
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
          >
            Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
