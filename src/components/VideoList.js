import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ( props ) => {

    // returns an array [] of VideoItem objects that we just got back from Youtube API call
    const renderedList = props.videos.map((video) => {

        return <VideoItem onVideoSelect={props.onVideoSelect} video={video}/>;
    });

    //props.videos

    // return <div>{props.videos.length}</div>;
    return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;