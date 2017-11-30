//Include React
import React from 'react';
/*
// Some insight into what is happening inside this document. //
// Const is a constant variable VideoDetail = the single video
// if there is no video return loading...
//"this prevents a lag in load time for the video to populate."
// VideoID will always be available since it is returned with the JSON data
// so this gets a Const variable.
// Const url takes the youtube url embed and takes the videos id and attaches it to it.
// Next is returned the video, and video details
// video is calling the json object and snippet.title/snipped.description are included in the JSON data.
//It is the exported and made avalible as an import with (export default VideoDetail)
*/
const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
