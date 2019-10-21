const React = require('react');
const Text = require('./text-block');

class BasicSection extends React.Component {
  render() {
    const { img, content } = this.props;
    return (
      <section className="col-xl-24 notice-mask row">
        <figure className="row col-xl-24">
          <img className="col-xl-24" src={"/medias/" + img} alt="" />
        </figure>

        <section className="block-caption-classic block-caption-right">
          {content.map((p, k) => {
            return <Text key={k} tag={p.tag} classes={p.classes} text={p.text} />
          })}
          {this.props.children}
        </section>
      </section>
    );
  }
}

module.exports = BasicSection;