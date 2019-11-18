const React = require('react');
const Article = require('./article');

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

class Section extends React.Component {
  render() {
    const { id, title, articles } = this.props;
    return (
      <section id={id} className={(title ? "block-sub " : "") + "col-xl-24 " + (title ? "bg-light-grey-blue block-hidden " : "") + "row"}>
        <div className={"btn-diag-container container " + (title ? "no-float " : "") + "block-white-space wrap row"}>
          <Title title={title} />
          {articles.map((a, k) => <Article key={k} id={a.id} href={a.href} picto={a.picto} alt={a.alt} title={a.title} />)}
        </div>
      </section>
    );
  }
}

module.exports = Section;