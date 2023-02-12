import React from 'react';
import database from '../../assets/database';

const Video = ({ video }) => {
     return (
          <div className="tooltip tooltip-bottom" data-tip={video.title}>
               <iframe width="100%" height="300" src={video.src} title={video.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="rounded-lg shadow" draggable={false}></iframe>
          </div>
     )
}

const VideoContainer = () => {
     return (
          <div className="container mx-auto my-10 py-10 px-4 md:px-0">
               <div className="mt-4 mb-8">
                    <h2 className="text-3xl text-black font-bold text-center">Latest Videos on Youtube</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {
                         database.videos.map(data => <Video video={data} key={data.id} />)
                    }                   
               </div>
                <div className="flex justify-center mt-10">
                    <a href="https://www.youtube.com/@ACADEMIALALMATIA" className="btn btn-sm bg-pastel-green border-0 h-10 px-5 text-white">Watch more on Youtube</a>
                </div>
          </div>
     );
};

export default VideoContainer;