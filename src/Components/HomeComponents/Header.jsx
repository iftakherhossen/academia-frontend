import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Header = () => {
     return (
          <div className="min-h-[75vh] container mx-auto text-white flex justify-start items-center">
               <div className="w-[45%] ml-8">
                    <p className="text-lg tracking-wide font-bold">WELCOME TO ACADEMIA</p>
                    <h1 className="text-5xl font-bold mt-2 mb-7">Best Education in Town</h1>
                    <p className="text-lg tracking-wide font-semibold">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <button className="btn mt-7 text-[1rem] rounded bg-pastel-green border-0 text-white px-8 tracking-wider hover:shadow-lg">Apply in 2023 Session &nbsp; <BsArrowRight /></button>
               </div>
          </div>
     );
};

export default Header;