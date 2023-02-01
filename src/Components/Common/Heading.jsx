import React from 'react';

const Heading = ({ text }) => {
     return (
          <div className="h-40 flex justify-center items-end pb-14">
               <h1 className="text-4xl font-bold text-black">{text}</h1>
          </div>
     );
};

export default Heading;