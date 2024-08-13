import React from 'react';

const VideoWithText = ({ title, subtitle, videoUrl }) => {
  return (
    <div className="bg-gray-100 py-10 px-4 md:px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-lg text-gray-600 mt-2">{subtitle}</p>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="relative overflow-hidden pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoWithText;
