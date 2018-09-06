import React from 'react';
import VideoListIteam from './video_list_iteam';

const VideoList=(props)=>{

	

    const videoIteams = props.videos.map((video)=>{
    	//console.log(video.etag);
    	//console.log('videllist'+video); in
        return(

            <VideoListIteam 
            onVideoSelect={props.onVideoSelect}
            key={video.etag} 

            video={video} />


        )
        
        

    })

   return (
   	      <ul className="col-md-4 list-group">
          {videoIteams}
         </ul>
   );

};
 
export default VideoList; 