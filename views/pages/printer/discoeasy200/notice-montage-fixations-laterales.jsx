var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/de200');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={3} nav={nav} />
        <section className="col-xl-24 bg-gradient-orange row">
          <p className=" col-vspace">Temps approximatif : 5 minutes</p>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Notice/5-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage DiscoEasy200 - Page 4 - Montage des fixations latérales</h1>
            <h2 className="big-title tleft">Montage des fixations latérales</h2>
            <p>Nous allons monter la troisième partie de l’imprimante 3D.</p>
          </section>
        </section>

        <section id="disco-4-prerequis" className="col-xl-24 display-flex height-350 bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
            <figure>
              <img src="/medias/DiscoEasy/Notice/5-b-prerequis.jpg" alt="" />
            </figure>
          </section>
          <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Les pré-requis</p>
              <ul className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">2 pièces de fixations latérales</li>
                <li className="tleft col-vbspace">1 barre courte</li>
                <li className="tleft col-vbspace">8 écrous M3 (il doit en rester 9)</li>
                <li className="tleft col-vbspace">8 vis M3x16 (il doit en rester 10)</li>
              </ul>
            </div>
          </section>
        </section>

        <section id="disco-4-1" className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
              <source src="/medias/DiscoEasy/Notice/5-c-preparation.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/5-c-preparation.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/5-c-preparation.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
            <div className="show-video">
              <i className="fa fa-play-circle-o" aria-hidden="true"></i>
              <span>Video</span>
            </div>
          </section>
          <section className="col col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="title tleft">Étape 1</p>
              <h2 className="big-title">Préparation</h2>
              <p>Retirez la pièce que l’on appellera l’anti-wooble. Grattez votre pièce avec la spatule pour qu’elle soit propre. Répétez
                    l’opération sur la seconde pièce.</p>
            </div>
          </section>
        </section>

        <section id="disco-4-2" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/5-d-vis-serrage.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/5-d-vis-serrage.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/5-d-vis-serrage.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
            <div className="show-video">
              <i className="fa fa-play-circle-o" aria-hidden="true"></i>
              <span>Video</span>
            </div>
          </section>
          <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="title tleft">Étape 2</p>
              <h2 className="big-title">Mise en place des vis de serrage</h2>
              <p>Prenez 8 écrous et 8 vis (M3x16). Placez les écrous dans les logements comme sur la vidéo. Mettez en place les vis sans trop
                  serrer, juste pour maintenir les écrous et éviter que les vis ne bougent. Nous les serrerons plus tard pour maintenir les barres.
                </p>
            </div>
          </section>
        </section>

        <section id="disco-4-3" className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
              <source src="/medias/DiscoEasy/Notice/5-e-montage-barre.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/5-e-montage-barre.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/5-e-montage-barre.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
            <div className="show-video">
              <i className="fa fa-play-circle-o" aria-hidden="true"></i>
              <span>Video</span>
            </div>
          </section>
          <section className="col col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="title tleft">Étape 3</p>
              <h2 className="big-title">Montage de la barre</h2>
              <p>Rentrez la barre dans le logement transversal de la première fixation. Enfoncez-la avec force. Prenez la seconde fixation et
                    répétez l’opération. À la fin vous devez obtenir la même chose que sur la vidéo.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Notice/5-f-fin.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">Montage des fixations latérales : CHECK !</p>
            <p>Mettez-les de côté, elles nous serviront plus tard.</p>
            <div className="checkbox-classic checkbox-full-width">
              <input id="yo" type="checkbox" />
              <label className="tnormal valid-step" data-redirect="/start/discoeasy200/notice-montage-axe-x.html" htmlFor="yo">
                Je valide cette étape !
                </label>
            </div>
          </section>
        </section>
      </Layout>
    );
  }
}

module.exports = Printer;