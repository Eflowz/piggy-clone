import React from 'react';
import { FiCornerDownRight } from 'react-icons/fi';


import image1 from '../assets/images/Phone Shape.png';


const Cards = () => {
  return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-12 ">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl   ">
          <div className="flex flex-col items-center justify-center text-center pt-9 max-w-xl p-29">
            <h2 className="text-4xl font-semibold mt-4">5 ways to build <br/> your savings</h2>
            <p className="mt-6 text-gray-700 text-2xl ">Earn 5%-15% when you save <br/> with any of these PiggyVest <br/> plans.</p>
          </div>       

{/* card 1 */}
      <div className="overflow-hidden relative mt-11">
          <div className="bg-white  relative group flex flex-col justify-between text-left rounded-3xl transition-colors duration-300 ease-in-out hover:bg-blue-400 group-hover:text-white shadow-lg " >
        <img 
          src={image1} 
          alt="Automated Savings" 
          className="absolute bottom-20 right-12 size-96 object-contain transform translate-x-full translate-y-full group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-transform duration-300 ease-in-out"

        />
        <div className="relative z-10  px-24 p-26 ">
          <h2 className="text-3xl font-bold mt-4 group-hover:text-white">Automated Savings</h2>
          <p className="mt-2 text-gray-700 group-hover:text-white ">
            Build a dedicated savings faster <br/> on your terms, automatically or <br/>manually.
          </p>
        </div>

      <div className="relative z-10 flex items-center mt-2 px-10 mb-11">
        <FiCornerDownRight  className="mr-2 mt-24 text-black group-hover:text-white" />
        <a href="#" className="text-black group-hover:text-white hover:underline mt-24">Piggybank</a>
      </div>
    </div>
    </div>

{/* card 2 */}
       <div className="overflow-hidden relative mt-11">
          <div className="bg-white  relative group flex flex-col justify-between text-left rounded-3xl transition-colors duration-300 ease-in-out hover:bg-blue-700 group-hover:text-white shadow-lg " >
        <img 
          src={image1} 
          alt="Fixed Savings" 
          className="absolute bottom-20 right-12 size-96 object-contain transform translate-x-full translate-y-full group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-transform duration-300 ease-in-out"
        />
        <div className="relative z-10 px-24 p-26 ">
          <h2 className="text-3xl font-bold mt-4 group-hover:text-white">Fixed Savings</h2>
          <p className="mt-2 text-gray-700 group-hover:text-white ">
            Lock money away for a fixed <br/> duration without having access <br/> to it until maturity it is like having <br/>  a custom fixed deposit.
          </p>
        </div>
    
      <div className="relative z-10 flex items-center mt-2 px-10 mb-11">
        <FiCornerDownRight  className="mr-2 mt-24 text-black group-hover:text-white" />
        <a href="#" className="text-black group-hover:text-white hover:underline mt-24">Safelock</a>
      </div>
    </div>
    </div>
    
     {/* card 3 */}
          <div className="bg-white  relative group flex flex-col justify-between text-left rounded-3xl transition-colors duration-300 ease-in-out hover:bg-green-700 group-hover:text-white shadow-lg " >
      <div className="overflow-hidden relative mt-11">
        <img 
          src={image1} 
          alt="Goal-oriented Savings" 
          className="absolute bottom-20 right-12 size-96 object-contain transform translate-x-full translate-y-full group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-transform duration-300 ease-in-out"


        />
        <div className="relative z-10 px-24 p-26 ">
          <h2 className="text-3xl font-bold mt-4 group-hover:text-white">Goal-oriented Savings</h2>
          <p className="mt-2 text-gray-700 group-hover:text-white ">
            Reach all your savings goals <br/> faster. Save towards multiple <br/>goals on your own or with a <br /> group.
          </p>
        </div>
      <div className="relative z-10 flex items-center mt-2 px-10 mb-11">
        <FiCornerDownRight  className="mr-2 mt-24 text-black group-hover:text-white" />
        <a href="#" className="text-black group-hover:text-white hover:underline mt-24">Target Savings</a>
      </div>
    </div>
    </div>


    {/* card 4 */}
      <div className="overflow-hidden relative mt-11">
          <div className="bg-white  relative group flex flex-col justify-between text-left rounded-3xl transition-colors duration-300 ease-in-out hover:bg-pink-500 group-hover:text-white shadow-lg " >
        <img 
          src={image1} 
          alt="Flex Naira" 
          className="absolute bottom-20 right-12 size-96 object-contain transform translate-x-full translate-y-full group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-transform duration-300 ease-in-out"
        />
    <div className="relative z-10 px-24 p-26 ">
          <h2 className="text-3xl font-bold mt-4 group-hover:text-white">Flex Naira</h2>
          <p className="mt-2 text-gray-700 group-hover:text-white ">
            Save, transfer,manage, <br/> organise, and withdraw your <br /> money at any time.
          </p>
        </div>
      <div className="relative z-10 flex items-center mt-2 px-10 mb-11">
        <FiCornerDownRight  className="mr-2 mt-24 text-black group-hover:text-white" />
        <a href="#" className="text-black group-hover:text-white hover:underline mt-24">Flex Naira</a>
      </div>
    </div>
    </div>

{/* card 5 */}
      <div className="overflow-hidden relative mt-11">
          <div className="bg-white  relative group flex flex-col justify-between text-left rounded-3xl transition-colors duration-300 ease-in-out hover:bg-blue-500 group-hover:text-white shadow-lg " >
        <img 
          src={image1} 
          alt="Automated Savings" 
          className="absolute bottom-20 right-12 size-96 object-contain transform translate-x-full translate-y-full group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-transform duration-300 ease-in-out"

        />
        <div className="relative z-10 px-24 p-26 ">
          <h2 className="text-3xl font-bold mt-4 group-hover:text-white">Flex Dollar</h2>
          <p className="mt-2 text-gray-700 group-hover:text-white ">
            Save and grow your money in <br/> foreign currencies such as<br/>Dollars.
          </p>
        </div>
      <div className="relative z-10 flex items-center mt-2 px-10 mb-11">
        <FiCornerDownRight  className="mr-2 mt-24 text-black group-hover:text-white" />
        <a href="#" className="text-black group-hover:text-white hover:underline mt-24">Flex Dollar</a>
      </div>
    </div>
    </div>

      </main>
    </div>
    );
  }
  

export default Cards;
