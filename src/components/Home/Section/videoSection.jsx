import React from 'react';

const VideoSection = () => {
    return (
        <div style={{ height: '140vh', overflow: 'hidden' }}>
            <video 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                autoPlay 
                loop 
                muted
            >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoSection;