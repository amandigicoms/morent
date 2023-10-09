import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-white w-[95%] mx-auto">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 w-[80%] md:w-[25%]">
              <Link to="/" className="flex items-center">
                <span className="self-center text-2xl font-bold whitespace-nowrap text-blue-700 ">
                  MORENT
                </span>
              </Link>
              <p className="text-gray">
                Our vision is to provide convenience and help increase your
                sales business.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                  About
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      How it works?
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Featured
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Partnership
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Business Relation
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">
                  Community
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Events
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Blog
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Podcast
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Invite a friend
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                  Socials
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Discord
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Instagram
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Twitter
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Facebook
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* -------------------------------For Mobile-------------------------- */}
          <div className="flex md:hidden mt-4 sm:mt-0">
            <div>
              <Link to="/" className="hover:underline">
                <h6 className="font-semibold">Privacy & Policy</h6>
              </Link>
            </div>
            <div className="ml-auto">
              <Link to="/" className="hover:underline">
                <h6 className="font-semibold">Terms & Conditions</h6>
              </Link>
            </div>
          </div>

          <div className="sm:flex sm:items-center sm:justify-between mt-4">
            <span className="text-sm text-black font-semibold sm:text-center">
              © 2023
              <Link to="/" className="hover:underline">
                MORENT
              </Link>
              . All Rights Reserved.
            </span>
            {/* -------------------------------For desktop-------------------------- */}
            <div className="hidden md:flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <div>
                <Link to="/" className="hover:underline">
                  <h6 className="font-semibold">Privacy & Policy</h6>
                </Link>
              </div>
              <div>
                <Link to="/" className="hover:underline">
                  <h6 className="font-semibold">Terms & Conditions</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
