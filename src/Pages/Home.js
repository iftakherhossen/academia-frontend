import React from 'react';
import ClassWrapper from '../Components/HomeComponents/ClassWrapper';
import Events from '../Components/HomeComponents/Events';
import ExamCandidates from '../Components/HomeComponents/ExamCandidates';
import Features from '../Components/HomeComponents/Features';
import GalleryContainer from '../Components/HomeComponents/GalleryContainer';
import HeroSection from '../Components/HomeComponents/HeroSection';
import NoticeBoard from '../Components/HomeComponents/NoticeBoard';
import Stats from '../Components/HomeComponents/Stats';
import Testimonials from '../Components/HomeComponents/Testimonials';
import VideoContainer from '../Components/HomeComponents/VideoContainer';

const Home = () => {
     return (
          <div>
               <HeroSection />
               <Features />
               <Stats />
               <ClassWrapper />
               <NoticeBoard />               
               <Events />
               <Testimonials />
               <GalleryContainer limit={true} />
               <ExamCandidates />
               <VideoContainer />
          </div>
     );
};

export default Home;