const React = require('react');
const Article = require('./article');

class Section extends React.Component {
  render() {
    const { id, title, articles } = this.props;
    return (
      <section id={id} className="block-sub col-xl-24 bg-light-grey-blue block-hidden row">
        <div className="btn-diag-container container no-float block-white-space wrap row">
          <div className="col-xl-24 col-vspace">
            <p className="big-title tcenter">{title}</p>
          </div>
          {articles.map((a, k) => <Article key={k} href={a.href} picto={a.picto} alt={a.alt} title={a.title} />)}
        </div>
      </section>
    );
  }
}

module.exports = Section;