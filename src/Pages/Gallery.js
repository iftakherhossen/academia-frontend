import React from 'react';
import Navigation from '../Components/Common/Navigation';
import GalleryContainer from '../Components/HomeComponents/GalleryContainer';

const Gallery = () => {
     return (
          <div>
               <Navigation />
               <div className="container mx-auto px-4 md:p-0 py-16">
                    <GalleryContainer />
               </div>
          </div>
     );
};

export default Gallery;