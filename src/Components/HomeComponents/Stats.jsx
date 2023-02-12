import PureCounter from '@srexi/purecounterjs';
import React from 'react';
import { FaBuilding, FaUser, FaUserTie } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';

new PureCounter({
     selector: '.purecounter',
     start: 0,
     end: 100,
     duration: 1,
     delay: 10,
     once: true,
     repeat: false,
     decimals: 0,
     legacy: true,
     filesizing: false,
     currency: false,
     separator: false,
});

const Stats = () => {
     return (
          <div className="stats-bg select-none">
               <div className="bg-[#90857954]">
                    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-16 text-white">
                         <div className="flex justify-center items-center my-4">
                              <div className="px-4">
                                   <FaBuilding className="text-5xl" />
                              </div>
                              <div>
                                   <h2 className="text-4xl font-bold">
                                        <span data-purecounter-start="0" data-purecounter-end="4" data-purecounter-duration="1" className="purecounter">4</span>
                                   </h2>
                                   <p className="text-xl font-medium">Campus</p>
                              </div>
                         </div>
                         <div className="flex justify-center items-center my-4">
                              <div className="px-4">
                                   <FaUser className="text-5xl" />
                              </div>
                              <div>
                                   <h2 className="text-4xl font-bold">
                                        <span data-purecounter-start="0" data-purecounter-end="10000" data-purecounter-separator="true" data-purecounter-separatorsymbol="," data-purecounter-duration="3" className="purecounter">10,000</span>+
                                   </h2>
                                   <p className="text-xl font-medium">Students</p>
                              </div>
                         </div>
                         <div className="flex justify-center items-center my-4">
                              <div className="px-4">
                                   <FaUserTie className="text-5xl" />
                              </div>
                              <div>
                                   <h2 className="text-4xl font-bold">
                                        <span data-purecounter-start="0" data-purecounter-end="380" data-purecounter-duration="3" className="purecounter">380</span>+
                                   </h2>
                                   <p className="text-xl font-medium">Teachers</p>
                              </div>
                         </div>
                         <div className="flex justify-center items-center my-4">
                              <div className="px-4">
                                   <TbCertificate className="text-5xl" />
                              </div>
                              <div>
                                   <h2 className="text-4xl font-bold">
                                        <span data-purecounter-start="0" data-purecounter-end="100" data-purecounter-duration="3" className=" purecounter">100</span>%
                                   </h2>
                                   <p className="text-xl font-medium">Best Result</p>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default Stats;