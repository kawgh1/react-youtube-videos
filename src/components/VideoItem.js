import React from 'react'
import './VideoItem.css'
// this object is ultimately the video(s) returned from the Google API call
const VideoItem = (props) => {

    // return <div>Video Item</div>;
    return (

        // this callback onVideoSelect takes the video user selected and sends that info back up to App through VideoList Parent
    <div onClick={() => {props.onVideoSelect(props.video)}} className="video-item item" key={props.video.id}>
        <img className="ui image" src={props.video.snippet.thumbnails.medium.url} alt={props.video.id.kind} style={{borderRadius:'3px'}}/>
            <div className="content">
                <div className="header">
                    {props.video.snippet.title}
                </div>
            </div>
    </div>
    );

};

export default VideoItem;