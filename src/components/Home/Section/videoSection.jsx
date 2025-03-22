import React from "react";

const VideoSection = () => {
  return (
    <div className=" h-[140vh] overflow-hidden z-30">
      <video
        className=" w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline // Enables inline playback on mobile
      >
        <source
          src="https://mathlpbucket.s3.eu-west-3.amazonaws.com/Mon+film+1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
