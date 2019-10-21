const React = require('react');
const SimpleTitle = require('./simple-title');

function GoogleDocument(props) {
  return (
    <div id="content-page" className="custom-page row wrap">
      <div className="row margin-bottom-shop">
        <div className="col-xl-24 capsule-h1 margin-bottom-shop">
          <h1 className="tcenter">{props.title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-20 col-xl-offset-2 col-s-24 col-s-offset-0 iframe-width margin-bottom-shop">
          <iframe
            align="middle"
            frameBorder="0"
            height="569"
            width="960"
            src={"https://docs.google.com/presentation/d/" + props.id + "/embed?start=false&amp;loop=false&amp;delayms=3000"}>
          </iframe>
        </div>
      </div>
      {props.children}
    </div>
  );
}

module.exports = GoogleDocument;