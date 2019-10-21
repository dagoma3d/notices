const React = require('react');
const NavItem = require('./nav-item');

function Navbar(props) {
  if (!props.nav) return null;
  return (
    <nav className="nav-vertical  closed  col-xl-4 row">
      <div className="border-nav col-xl-3">
        <p>Navigation</p>
      </div>
      <ul className="col-xl-21 col-xl-offset-3 row notice-step lsn">
        {props.nav.map((n, k) => <NavItem key={k} href={n.href} label={n.label} active={props.active === k} />)}
      </ul>
      <button className="toggle-nav"><i className="fa fa-arrow-right"></i></button>
    </nav>
  );
}

module.exports = Navbar;