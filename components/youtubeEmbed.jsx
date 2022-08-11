import React, { useState } from "react";

const playButtonStyles = {
  border: 0,
  background: "transparent",
  boxSizing: "borderBox",
  width: 0,
  height: 74,
  borderColor: "transparent transparent transparent #fff",
  transition: "100ms all ease",
  cursor: "pointer",
  // play state
  borderStyle: "solid",
  borderWidth: "37px 0 37px 60px",
};

const getYoutubeId = (url) => {
  //eslint-disable-next-line
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = url.match(regExp);
  const watchId = match && match[7].length === 11 ? match[7] : false;
  return watchId;
  // if (watchId)
  //     return `https://www.youtube.com/embed/${watchId}`;
  // return null;
};

const YoutubeEmbed = ({ name, src, alt }) => {
  const video_id = getYoutubeId(src);
  const [playClicked, setPlayClicked] = useState(false);
  let frameWidth = "100%";
  let frameHeight = 480;
  if (video_id && playClicked) {
    return (
      <iframe
        title={video_id}
        width={frameWidth}
        height={frameHeight}
        src={`https://www.youtube.com/embed/${video_id}?autoplay=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    );
  }
  return (
    <div
      style={{
        position: "relative",
        width: frameWidth,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {video_id ? (
        <>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                borderRadius: 8,
                backgroundColor: "rgba(0,0,0,0.5)",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <button
                aria-label="Play walkthrough"
                onClick={() => setPlayClicked(true)}
                style={playButtonStyles}
              />
            </div>
          </div>
          <img
            alt={`${name} Rule`}
            style={{ borderRadius: 8 }}
            src={`https://i.ytimg.com/vi/${video_id}/maxresdefault.jpg`}
            loading="lazy"
            height="1341px"
            width="1600px"
          />
        </>
      ) : (
        <img alt={alt} style={{ borderRadius: 8 }} src={src} />
      )}
    </div>
  );
};

export default YoutubeEmbed;
