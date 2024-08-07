import React from 'react';
import { Link } from 'react-router-dom';
import playBadge from '../assets/images/playstore.png';
import appBadge from '../assets/images/apple.png';
import first from '../assets/images/chat.png'

const PlayStoreBadge = () => {
  return (

    <div className="flex flex-col lg:flex-row items-center justify-around min-h-screen bg-gray-100 p-4  ">
    <div className="sm:w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0 mt-20 ">
        <h1 className="text-4xl font-bold mb-4 mt-24">The Better Way to Save & Invest</h1>
        <p className="text-gray-600 mb-8">
            Piggyvest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.
        </p>
      
      <div className="flex space-x-6 justify-center items-center">
      <Link to="#" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-900 text-white px-3 py-3 rounded-lg ">
      <img src={appBadge} alt="Play Store" className="h-6 mr-2" />     
      <span>Get on iPhone</span>
      </Link>
    <Link to="#" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-900 text-white px-3 py-3 rounded-lg ">
      <img src={playBadge} alt="Apple Store" className="h-6 mr-2" />
      <span>Get on Android</span>
      </Link>
    </div>
    </div>
    <div className="sm:w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-4">
        <img src={first} alt="Descriptive Alt Text" className="max-w-full h-auto animate-bounce-infinite" />
    </div>
    </div>
    
  );
};

export default PlayStoreBadge;
