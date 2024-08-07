import React from 'react'
import { Link } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';
import PadlockIcon from './PadlockIcon';


const SecrityNotice = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center p-6 bg-gray-100">
    <div className="mb-4 lg:mr-4 lg:mb-0">
      <PadlockIcon className="h-12 w-12" />
    </div>
    <div>
      <h2 className="text-lg font-semibold mt-4 lg:mt-0 text-gray-900">Your security is our priority</h2>
      <p className="mt-2  w-full lg:w-3/4 text-gray-700">
        PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud.
      </p>
      <Link href="/security-measures" className="mt-4 text-black hover:underline inline-flex items-center">
        <FiCornerDownRight className="mr-2"/>
        More on our security measures
      </Link>
    </div>
    </div>
)
};

export default SecrityNotice;


