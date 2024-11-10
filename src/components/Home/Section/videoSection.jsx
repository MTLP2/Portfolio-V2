import React from 'react';

const VideoSection = () => {
    return (
        <div style={{ height: '140vh', overflow: 'hidden' }}>
            <video 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                autoPlay 
                loop 
                muted 
                playsInline // Enables inline playback on mobile
            >
                <source src="https://mathlpbucket.s3.eu-west-3.amazonaws.com/Mon+film+1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoSection;
