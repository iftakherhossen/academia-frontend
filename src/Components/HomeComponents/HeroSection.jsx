import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import TopBar from './TopBar';

const HeroSection = () => {
     return (
          <div className="parallax">
               <TopBar />
               <Navigation />
               <Header />
          </div>
     );
};

export default HeroSection;