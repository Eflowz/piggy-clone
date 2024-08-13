import React from "react";
import { FiCornerDownRight } from 'react-icons/fi';
import image1 from '../assets/images/Phone Shape.png';

const Diverse = () => {
  return (
  <section className="bg-white px-10">
    <div className="container mx-auto w-full flex flex-col items-center pb-29">
      <div className="text-center md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 mt-6">
          Diverse ways to Invest
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Grow your money and invest for your future confidently.
        </p>
      </div>
      <div className="bg-purple-600 text-white rounded-2xl p-8 mt-8 w-full md:w-full flex flex-col  md:flex-row   gap-7  ">
        <div className="w-full md:w-1/2 ">
          <h2 className="text-2xl font-semibold">
            Earn Up to 25% returns
          </h2>
          <p className="mt-4">
            Invest securely and confidently on the go. Grow your money
            confidently by investing in pre-vetted investment opportunities.
          </p>
          <div className="flex items-center md:mt-3  ">
            <FiCornerDownRight className="mr-2 text-white" />
            <a
              href="#"
              className="text-white hover:underline "
            >
              Learn about Investments
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src={image1}
            alt="My Investments"
            className="rounded-lg size-72 md:justify-items-center "
          />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Diverse;
