import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) return <div>No video selected</div>
    return (
        <div>
            <div className="ui embed">
                <iframe title="youtubePlayer" src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>

            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;