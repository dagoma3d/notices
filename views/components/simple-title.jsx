const React = require('react');
const Text = require('./text-block');

function SimpleTitle(props) {
  const { small, content } = props;
  return (
    <section className={"col-xl-24" + (small ? " " : " block-big-white-space ") + "bg-gradient-orange row"}>
      {content.map((p, k) => {
        return <Text key={k} tag={p.tag} classes={p.classes} text={p.text} />
      })}
    </section>
  );
}

module.exports = SimpleTitle;
