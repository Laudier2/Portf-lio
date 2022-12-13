import React from 'react'

import { useState } from "react";

const Video = () => {
  const [src] = useState("./assets/apiprisma.mp4");

  return (
    <>
      <video src={src} controls width="100%" style={{margin: 8,}}></video>
    </>
  );
};

export default Video;