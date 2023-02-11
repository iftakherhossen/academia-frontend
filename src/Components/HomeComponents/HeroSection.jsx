import React from 'react';
import Navigation from '../Common/Navigation';
import Header from './Header';
import TopBar from './TopBar';

const HeroSection = () => {
     return (
          <div className="parallax">
               <TopBar />
               <Navigation home={true} />
               <Header />
          </div>
     );
};

export default HeroSection;