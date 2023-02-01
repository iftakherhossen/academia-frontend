import React from 'react';
import { FaEnvira, FaUserGraduate } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';

const Features = () => {
     return (
          <div className="container mx-auto md:px-10 grid grid-cols-1 md:grid-cols-2 select-none">
               <div>
                    <img
                         src="https://preview.colorlib.com/theme/academia/images/about.jpg"
                         alt="Model"
                         className="h-full w-full model-img"
                         draggable={false}
                    />
               </div>
               <div className="pl-12 py-20">
                    <p className="text-xl font-bold uppercase mb-1.5 text-pastel-green">Learn Anything</p>
                    <h1 className="text-5xl font-bold text-black mb-10">Benefits About Online Learning Expertise</h1>
                    <div className="pt-5">
                         <div className="fCard bg-white pt-5 px-5 pb-6 flex items-start text-black mb-4 rounded-lg shadow cursor-pointer">
                              <div className="w-[15%]">
                                   <SiGoogleclassroom className="text-6xl text-pastel-green fIcon" />
                              </div>
                              <div className="w-[85%] pl-2">
                                   <h2 className="text-2xl font-bold mb-1.5">High Facilated Classroom</h2>
                                   <p>Lorem ipsum dolor sit, amet consectetur. Distinctio, facere provident laborum aliquid!</p>
                              </div>
                         </div>
                         <div className="fCard bg-white pt-5 px-5 pb-6 flex items-start text-black mb-4 rounded-lg shadow cursor-pointer">
                              <div className="w-[15%]">
                                   <FaUserGraduate className="text-6xl text-pastel-green fIcon" />
                              </div>
                              <div className="w-[85%] pl-2">
                                   <h2 className="text-2xl font-bold mb-1.5">Expert Teachers</h2>
                                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing. Distinctio, explicabo laborum aliquid!</p>
                              </div>
                         </div>
                         <div className="fCard bg-white pt-5 px-5 pb-6 flex items-start text-black mb-4 rounded-lg shadow cursor-pointer">
                              <div className="w-[15%]">
                                   <FaEnvira className="text-6xl text-pastel-green fIcon" />
                              </div>
                              <div className="w-[85%] pl-2">
                                   <h2 className="text-2xl font-bold mb-1.5">Best Environment</h2>
                                   <p>Lorem ipsum dolor, amet consectetur adipisicing elit. Distinctio, facere explicabo provident!</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Features;