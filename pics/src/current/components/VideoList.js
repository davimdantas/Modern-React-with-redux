import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoClick }) => {

    const renderedList = videos.map(video => (
        <VideoItem onVideoClick={onVideoClick} key={video.id.videoId} video={video} />
    ))
    return <div className="ui relaxed  divided list">
        {renderedList}
    </div>
};


export default VideoList