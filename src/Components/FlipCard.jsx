import React from 'react';

const FlipCard = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-64 h-80 group perspective">
        {/* Card container */}
        <div className="relative w-full h-full text-center transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
          
          {/* Front Side */}
          <div className="absolute inset-0 bg-blue-500 text-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center backface-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Card Front"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Card Title</h2>
            <p className="text-sm">This is a short description of the card's content.</p>
          </div>
          
          {/* Back Side */}
          <div className="absolute inset-0 bg-green-500 text-white rounded-lg shadow-lg p-4 flex items-center justify-center transform rotate-y-180 backface-hidden">
            <p className="text-sm">This is the back content that appears when the card is flipped.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
