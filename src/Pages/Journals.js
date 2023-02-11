import React, { useEffect, useState } from 'react';
import Heading from '../Components/Common/Heading';
import Navigation from '../Components/Common/Navigation';
import JournalsCard from '../Components/JournalsComponents/JournalsCard';
import SearchBarWrapper from '../Components/JournalsComponents/SearchBarWrapper';

const Journals = () => {
     const [scienceData, setScienceData] = useState([]);
     const [technologyData, setTechnologyData] = useState([]);
     const [businessData, setBusinessData] = useState([]);
     const [healthData, setHealthData] = useState([]);
     const [generalData, setGeneralData] = useState([]);
     const [loadMore, setLoadMore] = useState(false);

     useEffect(() => {
          fetch(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
               .then(res => res.json())
               .then(data => setScienceData(data.articles));

          fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
               .then(res => res.json())
               .then(data => setTechnologyData(data.articles));

          fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
               .then(res => res.json())
               .then(data => setBusinessData(data.articles));

          fetch(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
               .then(res => res.json())
               .then(data => setHealthData(data.articles));

          fetch(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
               .then(res => res.json())
               .then(data => setGeneralData(data.articles));
     }, []);

     const journalsData =  [...scienceData, ...technologyData, ...businessData, ...healthData, ...generalData];

     const shuffleArray = array => {
          let i = array.length - 1;

          for (i; i > 0; i--) {
               const j = Math.floor(Math.random() * (i + 1));
               const temp = array[i];
               array[i] = array[j];
               array[j] = temp;
          }

          return array;
     };

     const slicedValue = loadMore === false ? 15 : 30;

     const shuffledJournals = shuffleArray(journalsData).slice(0, slicedValue);
     

     const [searchedValue, setSearchedValue] = useState("");
     const [searchedResult, setSearchedResult] = useState([]);
     const [notMatch, setNotMatch] = useState(false);
     const [loading, setLoading] = useState(false);
     const [windowSize, setWindowSize] = useState([
          window.innerWidth,
          window.innerHeight,
     ]);

     const requestSearch = (searchedValue) => {
          setSearchedValue(searchedValue);
          setLoading(true);

          const filteredItems = journalsData.filter((item) => {
               return item.title.toLowerCase().includes(searchedValue.toLowerCase());
          });
          const unfilteredItems = !journalsData.filter((item) => {
               return item.title.toLowerCase().includes(searchedValue.toLowerCase());
          });

          setLoading(false);
          setSearchedResult(filteredItems);
          setNotMatch(unfilteredItems);
     };

     const cancelSearch = () => {
          setSearchedValue('');
          requestSearch(searchedValue);
     };

     

     useEffect(() => {
          const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
          };
      
          window.addEventListener('resize', handleWindowResize);
      
          return () => {
            window.removeEventListener('resize', handleWindowResize);
          };
     });

     let resultSlicedValue;
     if (windowSize[0] <= 640) resultSlicedValue = 2;
     else if (windowSize[0] <= 1024) resultSlicedValue = 3;
     else resultSlicedValue = 4;

     return (
          <div>
               <Navigation />
               <div className="container mx-auto py-10 mb-5 md:mb-20 select-none">
                    <Heading text={"Journals"} />
                    <SearchBarWrapper
                         searchedValue={searchedValue}
                         requestSearch={requestSearch}
                         cancelSearch={cancelSearch}
                         searchedResult={searchedResult}
                         shuffledJournals={shuffledJournals}
                         resultSlicedValue={resultSlicedValue}
                    />
                    <JournalsCard shuffledJournals={shuffledJournals} />
                    
                    <div className="flex justify-center mt-12">
                         <button className="btn btn-wide bg-pastel-green border-0 text-white shadow hover:shadow-xl" onClick={() => setLoadMore(!loadMore)}>Load More!</button>
                    </div>
               </div>
          </div>
     );
};

export default Journals;