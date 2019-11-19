const React = require('react');

function Item(props) {
  const { img, title, ok, text } = props;
  return (
    <article className="row">
      <figure>
        <div className="hover-tap"><i className="fa fa-hand-pointer-o"></i></div>
        <img src={"/medias/" + img} alt={title} />
        <figcaption className={(ok ? "valid" : "error row")}>
          <p className="title-banner title">
            <i className={"fa fa-times-circle-o text-" + (ok ? "green" : "red")} aria-hidden="true"></i>Tête avec PLA
            </p>
          <p>{text}</p>
        </figcaption>
      </figure>
    </article>
  );
}

function Slide(props) {
  const { content } = props;
  return (
    <section className="moving-banner-top row">
      {content.map((i, k) => {
        return <Item key={k} img={i.img} title={i.title} ok={i.ok} text={i.text} />
      })}
    </section>
  );
}

module.exports = Slide;