import React from 'react'

import { useState } from "react";

const url_v2 = "./assets/isntallaKaliDualBoot.mp4"

const Video3 = () => {
  const [src] = useState(url_v2);

  return (
    <>
      <video src={src} controls width="100%" style={{margin: 8,}}></video>
    </>
  );
};

export default Video3;
