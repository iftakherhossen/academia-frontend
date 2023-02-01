import React from 'react';
import Footer from '../Components/Common/Footer';
import ClassWrapper from '../Components/HomeComponents/ClassWrapper';
import Events from '../Components/HomeComponents/Events';
import Features from '../Components/HomeComponents/Features';
import HeroSection from '../Components/HomeComponents/HeroSection';
import NoticeBoard from '../Components/HomeComponents/NoticeBoard';
import Stats from '../Components/HomeComponents/Stats';
import Testimonials from '../Components/HomeComponents/Testimonials';

const Home = () => {
     return (
          <div>
               <HeroSection />
               <Features />
               <Stats />
               <ClassWrapper />
               <NoticeBoard />
               <Testimonials />
               <Events />
               <Footer />
          </div>
     );
};

export default Home;