const React = require('react');
const Text = require('./text');

function Title(props) {
  const { small, color, content, t } = props;
  return (
    <section className={"col-xl-24" + (small ? " " : " block-big-white-space ") + (color ? "bg-light-grey-blue " : "bg-gradient-orange ") + "row"}>
      {content.map((i, k) => {
        return <Text key={k} tag={i.tag} classes={i.classes} text={t(i.text)} link={i.link} />
      })}
      {props.children}
    </section>
  );
}

module.exports = Title;
