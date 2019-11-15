const React = require('react');
const TextBlock = require('./text-block');

function SimpleTitle(props) {
  const { small, content } = props;
  return (
    <section className={"col-xl-24" + (small ? " " : " block-big-white-space ") + "bg-gradient-orange row"}>
      {content.map((p, k) => {
        return <TextBlock key={k} tag={p.tag} classes={p.classes} text={p.text} link={p.link} />
      })}
      {props.children}
    </section>
  );
}

module.exports = SimpleTitle;
