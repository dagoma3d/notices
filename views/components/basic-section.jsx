const React = require('react');
const Text = require('./text-block');

class BasicSection extends React.Component {
  render() {
    const { img, flip, content } = this.props;
    return (
      <section className="col-xl-24 notice-mask row">
        <figure className="row col-xl-24">
          <img className="col-xl-24" src={"/medias/" + img} alt="" />
        </figure>

        <section className={"block-caption-classic block-caption-" + (flip ? "left" : "right")}>
          {content.map((p, k) => {
            return <Text key={k} tag={p.tag} classes={p.classes} text={p.text} link={p.link} link_text={p.link_text} link_classes={p.link_classes} download={p.download} />
          })}
          {this.props.children}
        </section>
      </section>
    );
  }
}

module.exports = BasicSection;