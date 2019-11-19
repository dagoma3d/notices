const React = require('react');
const Text = require('./text');

function Title(props) {
  const { small, color, content } = props;
  return (
    <section className={"col-xl-24" + (small ? " " : " block-big-white-space ") + (color ? "bg-light-grey-blue " : "bg-gradient-orange ") + "row"}>
      {content.map((p, k) => {
        return <Text key={k} tag={p.tag} classes={p.classes} text={p.text} link={p.link} />
      })}
      {props.children}
    </section>
  );
}

module.exports = Title;
