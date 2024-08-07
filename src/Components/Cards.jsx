import React from 'react';
import { useInView } from 'react-intersection-observer';

import image1 from '../assets/images/apple.png';
import image2 from '../assets/images/chat.png';
import image3 from '../assets/images/picture 1.jpg';
import image4 from '../assets/images/picture 2.jpg';

const Cards = () => {
  const images = [image1, image2, image3, image4];
  const hoverColors = ['red-500', 'blue-500', 'green-500', 'yellow-500'];

  const Card = ({ image, hoverColor }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div
        ref={ref}
        className={`relative group overflow-hidden rounded-lg shadow-lg bg-zinc-100 transition-opacity duration-700 ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={image}
          alt="Card"
          className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-tl from-transparent to-${hoverColor} opacity-0 group-hover:opacity-75 transition-opacity duration-300`}
        ></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-100">
      <div className="container mx-auto p-6">
        <div className="mx-auto max-w-screen-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {images.map((image, index) => (
              <Card
                key={index}
                image={image}
                hoverColor={hoverColors[index % hoverColors.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
