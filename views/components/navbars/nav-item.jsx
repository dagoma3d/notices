const React = require('react');

function Image(props) {
  if (!props.img) return null;
  return <figure><img src={"/medias/" + props.img} alt="" /></figure>;
}

function NavItem(props) {
  const { active, href, label, img } = props;
  return (
    <li className={"new-btn btn-classic btn-grey step" + (active ? " active" : "")}>
      <a className="btn-wide btn-big" href={href}>
        {label}
        <Image img={img} />
      </a>
    </li>
  );
}

module.exports = NavItem;
