const React = require('react');

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

module.exports = Article;