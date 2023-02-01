import React from 'react';
import { Bars } from 'react-loader-spinner';

const Loader = () => {
     return (
          <div className="h-screen w-screen flex justify-center items-center bg-white overflow-hidden">
               <Bars
                    height="80"
                    width="80"
                    color="#1EB2A6"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
               />
          </div>
     );
};

export default Loader;