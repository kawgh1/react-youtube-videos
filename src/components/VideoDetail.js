import React from 'react'

const VideoDetail = (props) => {

    // props.video initializes in App state as null and will throw an error if referenced until a user selects a video
    if (!props.video) {
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`

    return (
    
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title="Video Player" />
            </div>

            <div className="ui segment">
                <h4 className="ui header">{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail