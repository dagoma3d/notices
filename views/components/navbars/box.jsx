const React = require('react');

function Navbar(props) {
  const navItems = [
    { label: "Préparation" },
    { label: "Assemblage" },
    { label: "Installation" }
  ];
  return (
    <nav className="nav-vertical  col-xl-4 row">
      <div className="border-nav col-xl-3">
        <p>Navigation</p>
      </div>
      <ul className="col-xl-21 col-xl-offset-3 row notice-step lsn">
        {
          navItems.map((i, k) => (
            <li key={k} className={"new-btn btn-classic btn-grey step" + (props.active === k ? " active" : "")}>
              <a className="btn-wide btn-big" href={"/box/neva-magis/" + k}>{k + 1} - {i.label}</a>
            </li>
          ))
        }
      </ul>
      <button className="toggle-nav"><i className="fa fa-arrow-right"></i></button>
    </nav>
  );
}

module.exports = Navbar;