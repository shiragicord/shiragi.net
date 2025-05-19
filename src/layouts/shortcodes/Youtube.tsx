import React from "react";
// import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Youtube = ({
  id,
  title,
  ...rest
}: {
  id: string;
  title: string;
  [key: string]: any;
}) => {
  return (
    // <LiteYouTubeEmbed
    //   wrapperClass="yt-lite rounded-lg"
    //   id={id}
    //   title={title}
    //   {...rest}
    // />
    <div>Stub!</div> // LiteYouTubeEmbed is not working in this environment, so we stub it out.
  );
};

export default Youtube;
