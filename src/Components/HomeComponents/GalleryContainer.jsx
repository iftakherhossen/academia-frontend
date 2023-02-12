import React from 'react';
import { Link } from 'react-router-dom';
import database from '../../assets/database';

const Photo = ({ photo }) => {
     return (
          <div className="tooltip tooltip-bottom" data-tip={photo.title}>
               <figure>
                    <img src={photo.src} alt={photo.title} className="rounded-lg shadow w-full h-[285px] 2xl:h-[344px]" draggable={false} />
               </figure>
          </div>
     )
}

const GalleryContainer = ({ limit }) => {
     return (
          <div className="container mx-auto my-10 py-10 px-4 md:px-0">
               <div className="mt-4 mb-8">
                    <h2 className={`${limit === true ? 'text-3xl' : 'text-4xl'} text-black font-bold text-center`}>Latest Photos</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {
                         limit === true ? database.photos.slice(0, 3).map(data => <Photo
                              photo={data}
                              key={data.id}
                         />) : database.photos.map(data => <Photo
                              photo={data}
                              key={data.id}
                         />)
                    }
               </div>
               <div className="flex justify-center mt-10">
                    <Link to="/gallery" className="btn btn-sm bg-pastel-green border-0 h-10 px-5 text-white">View More!</Link>
               </div>
          </div>
     );
};

export default GalleryContainer;