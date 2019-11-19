const React = require('react');
const Media = require('./media');
const TextBlock = require('./text-block');

function SimpleSection(props) {
  const { id, flip, wrap, color, media, content } = props;
  return (
    <section id={id} className={(wrap ? "wrap " : "col-xl-24 ") + "display-flex height-350" + (color ? "" : " bg-light-grey-blue") + " row"}>
      <section className={"col col-xl-12 col-m-24 block-info-cursor " + (color ? color : "bg-white") + " row" + (flip ? " col-xl-push-12 col-m-push-0" : "")}>
        <Media info={media} />
      </section>
      <section className={"col col-xl-12 col-m-24 row" + (flip ? " col-xl-pull-12 col-m-pull-0" : "")}>
        <div className="block-caption-classic block-caption-left row col-vspace">
          {content.map((p, k) => {
            return <TextBlock key={k} tag={p.tag} classes={p.classes} text={p.text} link={p.link} list={p.list} />
          })}
          {props.children}
        </div>
      </section>
    </section >
  );
}

module.exports = SimpleSection;