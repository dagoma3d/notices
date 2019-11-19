const React = require('react');
const Text = require('./text');

function Block(props) {
  const { img, flip, content } = props;
  if (img) {
    return (
      <section className="col-xl-24 notice-mask row">
        <figure className="row col-xl-24">
          <img className="col-xl-24" src={"/medias/" + img} alt="" />
        </figure>

        <section className={"block-caption-classic block-caption-" + (flip ? "left" : "right")}>
          {content.map((p, k) => {
            return <Text key={k} tag={p.tag} classes={p.classes} text={p.text} link={p.link} />
          })}
          {props.children}
        </section>
      </section>
    );
  } else {
    return (
      <section className="col-xl-24 block-big-white-space bg-gradient-orange row">
        <section className="col-xl-12 col-xl-offset-6 col-l-18 col-l-offset-3 col-m-24 col-m-offset-0 row">
          <div className="col-xl-24 block-caption row col-vspace">
            {content.map((p, k) => {
              return <Text key={k} tag={p.tag} classes={p.classes} text={p.text} link={p.link} />
            })}
            {props.children}
          </div>
        </section>
      </section>
    );
  }
}

module.exports = Block;