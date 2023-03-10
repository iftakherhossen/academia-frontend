import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import database from '../../assets/database';

const TestimonialCard = ({ testimonial, slide }) => {
     return (
          <div className={`card ${slide === true && "odd:bg-white even:bg-[#1EB2A6] odd:text-black even:text-white"} ${slide === false && "odd:bg-[#1EB2A6] even:bg-white even:text-black odd:text-white"} shadow hover:shadow-lg `}>
               <div className="flex items-center px-5 md:px-10 pt-5">
                    <div className="w-20">
                         <img src={testimonial.img} alt={testimonial.name} className="rounded-full" draggable={false} />
                    </div>
                    <div className="pl-4 text-left">
                         <h3 className="text-xl uppercase font-bold">{testimonial.name}</h3>
                         <p>Guardian</p>
                    </div>
               </div>
               <div className="card-body pt-4">
                    <q className="text-xl font-medium">{testimonial.text}</q>
               </div>
          </div>
     )
}

const Testimonials = () => {
     return (
          <div className="container mx-auto mt-10 select-none">
               <div className="py-5">
                    <h2 className="text-3xl text-center font-bold text-black">Testimonials</h2>
               </div>
               <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                         {
                              database.testimonials.map(testimonial => <TestimonialCard id={testimonial.id} testimonial={testimonial} slide={true} key={testimonial.id} />)
                         }
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                         {
                              database.testimonials.map(testimonial => <TestimonialCard id={testimonial.id} testimonial={testimonial} slide={false} key={testimonial.id} />)
                         }
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                         {
                              database.testimonials.map(testimonial => <TestimonialCard id={testimonial.id} testimonial={testimonial} slide={true} key={testimonial.id} />)
                         }
                    </div>
               </Carousel>
          </div>
     );
};

export default Testimonials;