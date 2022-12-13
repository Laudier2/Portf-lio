import React from 'react'

import { useState } from "react";

const Video2 = () => {
  const [src] = useState("./assets/apiMongo.mp4");

  return (
    <>
      <video src={src} controls width="100%" style={{margin: 8,}}></video>
    </>
  );
};

export default Video2;