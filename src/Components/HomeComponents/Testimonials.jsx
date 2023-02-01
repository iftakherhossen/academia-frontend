import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonials = () => {
     return (
          <div className="container mx-auto mt-24 select-none">
               <div className="py-5">
                    <h2 className="text-3xl text-center font-bold text-black">Testimonials</h2>
               </div>
               <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
                         <div className="card bg-white shadow hover:shadow-lg text-black">
                              <div className="flex items-center px-5 md:px-10 pt-5">
                                   <div className="w-20">
                                        <img src="https://preview.colorlib.com/theme/academia/images/person_1.jpg.webp" alt="User" className="rounded-full" draggable={false} />
                                   </div>
                                   <div className="pl-4 text-left">
                                        <h3 className="text-xl uppercase font-semibold">Roger Scott</h3>
                                        <p>Guardian</p>
                                   </div>
                              </div>
                              <div className="card-body">
                                   <q className="text-xl font-semibold">If a dog chews shoes whose shoes does he choose? whose shoes does he choose?</q>
                              </div>
                         </div>
                         <div className="card bg-pastel-green shadow hover:shadow-lg text-white">
                              <div className="flex items-center px-5 md:px-10 pt-5">
                                   <div className="w-20">
                                        <img src="https://preview.colorlib.com/theme/academia/images/person_2.jpg.webp" alt="User" className="rounded-full" draggable={false} />
                                   </div>
                                   <div className="pl-4 text-left">
                                        <h3 className="text-xl uppercase font-semibold">Severas Snape</h3>
                                        <p>Guardian</p>
                                   </div>
                              </div>
                              <div className="card-body">
                                   <q className="text-xl font-semibold">If a dog chews shoes whose shoes does he choose? whose shoes does he choose?</q>
                              </div>
                         </div>
                         <div className="card bg-white shadow hover:shadow-lg text-black">
                              <div className="flex items-center px-5 md:px-10 pt-5">
                                   <div className="w-20">
                                        <img src="https://preview.colorlib.com/theme/academia/images/person_3.jpg.webp" alt="User" className="rounded-full" draggable={false} />
                                   </div>
                                   <div className="pl-4 text-left">
                                        <h3 className="text-xl uppercase font-semibold">Robin Milford</h3>
                                        <p>Guardian</p>
                                   </div>
                              </div>
                              <div className="card-body">
                                   <q className="text-xl font-semibold">If a dog chews shoes whose shoes does he choose? whose shoes does he choose?</q>
                              </div>
                         </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
                         <div className="card bg-pastel-green shadow hover:shadow-lg text-white">
                              <div className="flex items-center px-5 md:px-10 pt-5">
                                   <div className="w-20">
                                        <img src="https://preview.colorlib.com/theme/academia/images/person_1.jpg.webp" alt="User" className="rounded-full" draggable={false} />
                                   </div>
                                   <div className="pl-4 text-left">
                                        <h3 className="text-xl uppercase font-semibold">Roger Scott</h3>
                                        <p>Guardian</p>
                                   </div>
                              </div>
                              <div className="card-body">
                                   <q className="text-xl font-semibold">If a dog chews shoes whose shoes does he choose? whose shoes does he choose?</q>
                              </div>
                         </div>
                         <div className="card bg-white shadow hover:shadow-lg text-black">
                              <div className="flex items-center px-5 md:px-10 pt-5">
                                   <div className="w-20">
                                        <img src="https://preview.colorlib.com/theme/academia/images/person_2.jpg.webp" alt="User" className="rounded-full" draggable={false} />
                                   </div>
                                   <div className="pl-4 text-left">
                                        <h3 className="text-xl uppercase font-semibold">Severas Snape</h3>
                                        <p>Guardian</p>
                                   </div>
                              </div>
                              <div className="card-body">
                                   <q className="text-xl font-semibold">If a dog chews shoes whose shoes does he choose? whose shoes does he choose?</q>
                              </div>
                         </div>
                         <div className="card bg-pastel-green shadow hover:shadow-lg text-white">
                              <div className="flex items-center px-5 md:px-10 pt-5">
                                   <div className="w-20">
                                        <img src="https://preview.colorlib.com/theme/academia/images/person_3.jpg.webp" alt="User" className="rounded-full" draggable={false} />
                                   </div>
                                   <div className="pl-4 text-left">
                                        <h3 className="text-xl uppercase font-bold">Robin Milford</h3>
                                        <p className="font-medium">Guardian</p>
                                   </div>
                              </div>
                              <div className="card-body">
                                   <q className="text-xl font-semibold">If a dog chews shoes whose shoes does he choose? whose shoes does he choose?</q>
                              </div>
                         </div>
                    </div>
               </Carousel>
          </div>
     );
};

export default Testimonials;