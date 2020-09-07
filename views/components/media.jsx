const React = require('react');

function Image(props) {
  return (
    <figure className={props.classes}>
      <img src={"/medias/" + props.src} alt="" />
    </figure>
  );
}

function Video(props) {
  return (
    <div>
      {props.children}
      <video id={props.id} className="video-js" preload="auto" width="100%" height="auto"
        poster="" data-setup="{}" controls>
        <source src={"/medias/" + props.src + ".mp4"} type='video/mp4' />
        <source src={"/medias/" + props.src + ".ogv"} type='video/ogv' />
        <source src={"/medias/" + props.src + ".webm"} type='video/webm' />
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a web browser that
                <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
        </p>
      </video>
    </div>
  );
}

function Youtube(props) {
  return (
    <div className="block-video-yt">
      {props.children}
      <iframe src={`https://www.youtube.com/embed/${props.id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
}

function Media(props) {
  const type = props.info.type;
  if (type === "image") return <Image src={props.info.src} classes={props.info.classes} />;
  if (type === "video") return <Video id={props.info.id} src={props.info.src} children={props.children} />;
  if (type === "yt") return <Youtube id={props.info.id} children={props.children} />;
  return <span>No valid media type</span>;
}

module.exports = Media;
