const React = require('react');
const Media = require('./media');
const Text = require('./text');

function Title(props) {
  if (props.title) {
    return (
      <div className="col-xl-24 col-vspace">
        <p className="big-title tcenter">{props.title}</p>
      </div>
    );
  } else {
    return null;
  }
}

function Article(props) {
  const { id, href, picto, alt, title } = props;
  return (
    <article className="col-xl-6 col-l-8 col-m-12 col-s-24 col-space margin-bottom-box">
      <a className={"btn-diag-or" + (id ? " btn-sub-step" : "")} data-id={id} href={href}>
        <div className="btn-diag">
          <img src={"/pictos/" + picto} alt={alt} />
        </div>
        <h2>{title ? title : alt}</h2>
      </a>
    </article>
  );
}

function Section(props) {
  const { id, flip, wrap, color, media, content, title, articles } = props;
  if (articles) {
    return (
      <section id={id} className={(title ? "block-sub " : "") + "col-xl-24 " + (title ? "bg-light-grey-blue block-hidden " : "") + "row"}>
        <div className={"btn-diag-container container " + (title ? "no-float " : "") + "block-white-space wrap row"}>
          <Title title={title} />
          {articles.map((a, k) => <Article key={k} id={a.id} href={a.href} picto={a.picto} alt={a.alt} title={a.title} />)}
        </div>
      </section>
    );
  } else {
    return (
      <section id={id} className={(wrap ? "wrap " : "col-xl-24 ") + "display-flex height-350" + (color ? "" : " bg-light-grey-blue") + " row"}>
        <section className={"col col-xl-12 col-m-24 block-info-cursor " + (color ? color : "bg-white") + " row" + (flip ? " col-xl-push-12 col-m-push-0" : "")}>
          <Media info={media} />
        </section>
        <section className={"col col-xl-12 col-m-24 row" + (flip ? " col-xl-pull-12 col-m-pull-0" : "")}>
          <div className="block-caption-classic block-caption-left row col-vspace">
            {content.map((p, k) => {
              return <Text key={k} tag={p.tag} classes={p.classes} text={p.text} link={p.link} list={p.list} />
            })}
            {props.children}
          </div>
        </section>
      </section >
    );
  }

}

module.exports = Section;