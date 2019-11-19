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

function NavBar(props) {
  if (!props.nav) return null;
  return (
    <nav className="nav-vertical closed col-xl-4 row">
      <div className="border-nav col-xl-3">
        <p>Navigation</p>
      </div>
      <ul className="col-xl-21 col-xl-offset-3 row notice-step lsn">
        {props.nav.map((i, k) => <NavItem key={k} href={i.href} label={props.t(i.label)} img={i.img} active={props.active === k} />)}
      </ul>
      <button className="toggle-nav"><i className="fa fa-arrow-right"></i></button>
    </nav>
  );
}

module.exports = NavBar;
