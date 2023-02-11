import React from 'react';

const Heading = ({ text, dashboard }) => {
     return (
          <div className={`${dashboard === true ? 'h-48' : 'h-40'} flex justify-center items-end pb-14 select-none`}>
               <h1 className={`text-4xl font-bold text-black ${dashboard === true && 'text-center'}`}>{text}</h1>
          </div>
     );
};

export default Heading;