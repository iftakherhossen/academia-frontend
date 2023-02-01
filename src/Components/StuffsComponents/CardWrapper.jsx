import React from 'react';

const CardWrapper = ({ data }) => {
     return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5 p-5 md:p-0">
               {
                    data.map(({ id, name, img, degree, designation, email }) => <div className="card rounded-xl shadow hover:shadow-lg bg-white text-black" key={id}>
                         <figure className="h-[300px] object-cover relative">
                              <img src={img ? img : "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"} alt={name} draggable={false} className="absolute -top-10" />
                         </figure>
                         <div className="card-body text-center pt-6 pb-5">
                              <h2 className="card-title justify-center font-bold text-2xl">{name}</h2>
                              <p className="font-semibold -mb-1.5">{designation}</p>
                              <p className="text-sm font-medium">{degree && `(${degree})`}</p>
                         </div>
                         {
                              email && <div className="card-actions">
                                   <a href={`mailto:${email}`} className="btn w-full btn-sm border-0 bg-pastel-green text-white text-base h-10 shadow rounded-t-none rounded-b-xl cursor-pointer">Contact</a>
                              </div>
                         }
                    </div>)
               }
          </div>
     );
};

export default CardWrapper;