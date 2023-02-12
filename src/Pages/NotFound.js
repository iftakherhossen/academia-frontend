import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
     return (
          <div className="h-screen container mx-auto flex flex-col justify-center items-center overflow-hidden">
               <img src="https://static.vecteezy.com/system/resources/previews/006/549/647/non_2x/404-landing-page-free-vector.jpg" alt="Not Found" className="w-[80%] mx-auto" draggable={false} />
               <Link to="/">
                    <button className="btn bg-pastel-green border-0 text-white mt-10 text-lg btn-wide tracking-wide">Go Back to Home</button>
               </Link>
          </div>
     );
};

export default NotFound;