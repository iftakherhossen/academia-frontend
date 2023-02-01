import React from 'react';
import ClassHomePage from '../Components/ClassComponents/ClassHomePage';
import Footer from '../Components/Common/Footer';
import Navigation from '../Components/HomeComponents/Navigation';

const Class = () => {
     return (
          <div>
               <Navigation />
               <ClassHomePage />
               <Footer />
          </div>
     );
};

export default Class;