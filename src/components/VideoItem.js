import React from 'react'
import './VideoItem.css'
// this object is ultimately the video(s) returned from the Google API call
const VideoItem = (props) => {

    // return <div>Video Item</div>;
    return (

    <div className="video-item item" key={props.video.id}>
        <img className="ui image" src={props.video.snippet.thumbnails.medium.url} alt={props.video.id.kind} />
            <div className="content">
                <div className="header">
                    {props.video.snippet.title}
                </div>
            </div>
    </div>
    );

};

export default VideoItem;