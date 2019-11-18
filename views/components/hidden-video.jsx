const React = require('react');
const Media = require('./media');

function AdditionalInfo(props) {
  if (props.content) {
    return (
      props.content.map((p, k) => {
        return <p className="tleft col-vbspace" key={k}>{p.text}</p>;
      })
    );
  } else {
    return null;
  }
}
function HiddenVideo(props) {
  const { src, content } = props;
  return (
    <section>
      <p className="tleft col-vbspace">
        <button className="new-btn btn-classic btn-grey btn-wide btn-show-video">Lire la vidéo</button>
      </p>
      <AdditionalInfo content={content} />
      <section className="col-xl-24 row block-video block-video-hidden" style={{ border: "none" }}>
        <Media info={{ src: src, type: "video" }}>
          <div className="close-video">
            <i className="fa fa-close"></i>
          </div>
        </Media>
      </section>
    </section>
  );
}

module.exports = HiddenVideo;