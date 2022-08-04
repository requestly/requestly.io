const YoutubeEmbedIframe = ({ src, title }) => {
  return (
    <iframe
      className="demo-video"
      width="560"
      height="315"
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default YoutubeEmbedIframe;
