const React = require('react');
const NavItem = require('./nav-item');

function Navbar(props) {
  return (
    <nav className="nav-vertical  closed  col-xl-4 row">
      <div className="border-nav col-xl-3"><p>Navigation</p></div>
      <div className="col-xl-21 col-xl-offset-3 nav-step-container row">
        <ul className="notice-step lsn">
          <NavItem href="/printer/disco-ultimate" label="START" />
          <NavItem href="/start/disco-ultimate/notice-1.html?version=ultimate-v1" label="1 - Préparation" img="DiscoUltimate/Notice/1-a-intro.jpg" />
          <NavItem href="/start/disco-ultimate/notice-2.html?version=ultimate-v1" label="2 - Face av." img="DiscoUltimate/Notice/2-a-intro.jpg" />
          <NavItem href="/start/disco-ultimate/notice-3.html?version=ultimate-v1" label="3 - Face ar." img="DiscoUltimate/Notice/3-a-intro.jpg" />
          <NavItem href="/start/disco-ultimate/notice-4.html?version=ultimate-v1" label="4 - Fix. latérales" img="DiscoUltimate/Notice/4-a-intro.jpg" />
          <NavItem href="/start/disco-ultimate/notice-5.html?version=ultimate-v1" label="5 - Base" img="DiscoUltimate/Notice/5-a-intro.jpg" />
          <NavItem href="/start/disco-ultimate/notice-6.html?version=ultimate-v1" label="6 - Plateau" img="DiscoUltimate/Notice/6-a-intro.jpg" />
          <NavItem href="/start/disco-ultimate/notice-7.html?version=ultimate-v1" label="7 - Axe X" img="DiscoUltimate/Notice/7-a-intro.jpg" />
          <NavItem href="/start/disco-ultimate/notice-8.html?version=ultimate-v1" label="8 - Axe Z" img="DiscoUltimate/Notice/8-a-intro.jpg" />
          <NavItem href="/start/disco-ultimate/notice-9.html?version=ultimate-v1" label="9 - Câblage" img="DiscoUltimate/Notice/9-a-intro.jpg" />
          <NavItem href="/start/disco-ultimate/notice-10.html?version=ultimate-v1" label="10 - Finitions" img="DiscoUltimate/Notice/10-a-intro.jpg" />
          <NavItem href="/firmware/ultimate?version=ultimate-v1" label="11 - Mise à jour" />
          <NavItem href="/start/disco-ultimate/calibration.html?version=ultimate-v1" label="12 - Calibration" />
          <NavItem href="/start/logiciels/cura-by-dagoma.html?printer=disco-ultimate&version=ultimate-v1" label="13 - Cura" />
          <NavItem href="/start/disco-ultimate/notice-utilisation.html?version=ultimate-v1" label="14 - Utilisation" />
        </ul>
      </div>
      <button className="toggle-nav"><i className="fa fa-arrow-right"></i></button>
    </nav >
  );
}

module.exports = Navbar;