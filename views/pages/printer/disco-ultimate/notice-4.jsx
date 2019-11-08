var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/du');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={3} nav={nav} />
        <section className="col-xl-24 bg-gradient-orange row">
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/4-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage DISCO ULTIMATE - montage des fixations latérales</h1>
            <h2 className="big-title tleft">Montage des fixations latérales</h2>
            <p>Nous allons monter la troisième partie de l’imprimante 3D.</p>
          </section>
        </section>

        <section className="col-xl-24 block-white-space bg-gradient-orange row">
        </section>

        <section id="ultimate-1-face-arriere" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <figure>
              <img src="/medias/DiscoUltimate/Notice/4-b-prerequis.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Les pré-requis</p>
              <ul className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">A. 1x Fixation latérale imprimée</li>
                <li className="tleft col-vbspace">B. 1x Barre courte (270mm)</li>
                <li className="tleft col-vbspace">C. 1x Fixation latérale imprimée</li>
              </ul>
              <p>Visserie :</p>
              <ul className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">8x vis M3x16 (reste 11)</li>
                <li className="tleft col-vbspace">8x écrous M3 (reste 9)</li>
              </ul>
            </div>
          </section>
        </section>

        <section id="ultimate-2-face-arriere" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/4-c-vis-serrage.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/4-c-vis-serrage.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/4-c-vis-serrage.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Mise en place des vis de serrage</p>
              <p>Prenez 8 écrous et 8 vis (M3x16). Placez les écrous dans les logements comme sur la vidéo.</p>
              <p>Mettez en place les vis sans trop serrer, juste pour maintenir les écrous et éviter que les vis ne bougent. Nous les serrerons plus tard pour maintenir les barres.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-3-face-arriere" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/4-d-montage-barre.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/4-d-montage-barre.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/4-d-montage-barre.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Montage de la barre</p>
              <p>Rentrez la barre dans le logement transversal de la première fixation. Enfoncez-la avec force.</p>
              <p>Prenez la seconde fixation et répétez l’opération. À la fin vous devez obtenir la même chose que sur la vidéo.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Notice/5-f-fin.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">Montage des fixations latérales terminé.</p>
            <p>Mettez-les de côté, elles nous serviront plus tard.</p>
            <div className="checkbox-classic checkbox-full-width">
              <input id="yo" type="checkbox" />
              <label className="tnormal valid-step" data-redirect="/start/disco-ultimate/notice-5.html" htmlFor="yo">
                Je passe à l'étape suivante
                </label>
            </div>
          </section>
        </section>
      </Layout >
    );
  }
}

module.exports = Printer;
