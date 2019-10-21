const React = require('react');

function Navbar(props) {
  const navItems = [
    { label: "Préparation" },
    { label: "Assemblage" },
    { label: "Installation" }
  ];
  return (
    <nav className="nav-vertical  closed  col-xl-4 row">
      <div className="border-nav col-xl-3"><p>Navigation</p></div>
      <div className="col-xl-21 col-xl-offset-3 nav-step-container row">
        <ul className="notice-step lsn">
          <li className="new-btn btn-classic btn-grey step ">
            <a className="btn-wide btn-big" href="/printer/discoeasy200">
              START
            </a>
          </li>
          <li className="new-btn btn-classic btn-grey step ">
            <a className="btn-wide btn-big" href="/start/discoeasy200/notice-preparation.html?version=v1">
              1 - Préparation
              <figure>
                <img src="/medias/DiscoEasy/Notice/2-a-intro.jpg" alt="" />
              </figure>
            </a>
          </li>
          <li className="new-btn btn-classic btn-grey step ">
            <a className="btn-wide btn-big" href="/start/discoeasy200/notice-montage-face-avant.html?version=v1">
              2 - Face av.
              <figure>
                <img src="/medias/DiscoEasy/Notice/3-a-intro.jpg" alt="" />
              </figure>
            </a>
          </li>
          <li className="new-btn btn-classic btn-grey step ">
            <a className="btn-wide btn-big" href="/start/discoeasy200/notice-montage-face-arriere.html?version=v1">
              3 - Face ar.
              <figure>
                <img src="/medias/DiscoEasy/Notice/4-a-intro.jpg" alt="" />
              </figure>
            </a>
          </li>
          <li className="new-btn btn-classic btn-grey step ">
            <a className="btn-wide btn-big" href="/start/discoeasy200/notice-montage-fixations-laterales.html?version=v1">
              4 - Fix. latérales
              <figure>
                <img src="/medias/DiscoEasy/Notice/5-a-intro.jpg" alt="" />
              </figure>
            </a>
          </li>
          <li className="new-btn btn-classic btn-grey step ">
            <a className="btn-wide btn-big" href="/start/discoeasy200/notice-montage-axe-x.html?version=v1">
              5 - Axe X
              <figure>
                <img src="/medias/DiscoEasy/Notice/6-a-intro.jpg" alt="" />
              </figure>
            </a>
          </li>
          <li className="new-btn btn-classic btn-grey step ">
            <a className="btn-wide btn-big" href="/start/discoeasy200/notice-assemblage-base.html?version=v1">
              6 - Base
              <figure>
                <img src="/medias/DiscoEasy/Notice/7-a-intro.jpg" alt="" />
              </figure>
            </a>
          </li>
          <li className="new-btn btn-classic btn-grey step ">
            <a className="btn-wide btn-big" href="/start/discoeasy200/notice-montage-axe-z.html?version=v1">
              7 - Axe Z
              <figure>
                <img src="/medias/DiscoEasy/Notice/8-a-intro.jpg" alt="" />
              </figure>
            </a>
          </li>
          <li className="new-btn btn-classic btn-grey step ">
            <a className="btn-wide btn-big" href="/start/discoeasy200/notice-assemblage-plateau.html?version=v1">
              8 - Plateau
              <figure>
                <img src="/medias/DiscoEasy/Notice/9-a-intro.jpg" alt="" />
              </figure>
            </a>
          </li>
          <li className="new-btn btn-classic btn-grey step ">
            <a className="btn-wide btn-big" href="/start/discoeasy200/notice-cablage.html?version=v1">
              9 - Câblage
              <figure>
                <img src="/medias/DiscoEasy/Notice/10-a-intro.jpg" alt="" />
              </figure>
            </a>
          </li>
          <li className="new-btn btn-classic btn-grey step ">
            <a className="btn-wide btn-big" href="/start/discoeasy200/notice-finitions.html?version=v1">
              10 - Finitions
              <figure>
                <img src="/medias/DiscoEasy/Notice/11-a-intro.jpg" alt="" />
              </figure>
            </a>
          </li>
          <li className="new-btn btn-classic btn-grey step ">
            <a className="btn-wide btn-big" href="/start/discoeasy200/notice-controle.html?version=v1">
              11 - Contrôle
            </a>
          </li>
          <li className="new-btn btn-classic btn-grey step active">
            <a className="btn-wide btn-big" href="/firmware/discoeasy200.html?version=v1">
              12 - Mise à jour
            </a>
          </li>
          <li className="new-btn btn-classic btn-grey step ">
            <a className="btn-wide btn-big" href="/start/discoeasy200/calibration.html?version=v1">
              13 - Calibration
            </a>
          </li>
          <li className="new-btn btn-classic btn-grey step ">
            <a className="btn-wide btn-big" href="/start/logiciels/cura-by-dagoma.html?printer=discoeasy200&amp;version=v1">
              14 - Cura
            </a>
          </li>
          <li className="new-btn btn-classic btn-grey step ">
            <a className="btn-wide btn-big" href="/start/discoeasy200/notice-utilisation.html?version=v1">
              15 - Utilisation
            </a>
          </li>
        </ul>
      </div>
      <button className="toggle-nav"><i className="fa fa-arrow-right"></i></button>
    </nav>
  );
}

module.exports = Navbar;