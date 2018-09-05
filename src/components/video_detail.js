//downward data flow  

import React from 'react';
const VideoDetails=({video1})=>{
	console.log(video1);

	if(!video1){

		return <div>loding .....</div>
	}

const videoId=video1.id.videoId;
const url ='https://www.youtube.com/embed/'+videoId;

//const url = `https://www.youtube.com/embed/${videoId}`;

 //in es 6

 return (
          <div className="video-detail col-md-8" >
               <div className="embed-responsive embed-responsive-16by9">
 				<iframe className="embed-responsive-iteam" src={url}></iframe>
               </div>
               <div className="details">
               	<div>{video1.snippet.tittle}</div>
               	<div>{video1.snippet.description}</div>
               </div>
          </div>
 	    )

};

export default VideoDetails;