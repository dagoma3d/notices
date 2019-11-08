var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/de200');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={1} nav={nav} />
        <section className="col-xl-24 bg-gradient-orange row">
          <p className=" col-vspace">Temps approximatif : 15 minutes</p>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Notice/3-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage DiscoEasy200 - Page 2 - Montage de la face avant</h1>
            <h2 className="big-title tleft">Montage de la face avant</h2>
            <p>Nous allons monter la première partie de l’imprimante 3D.</p>
          </section>
        </section>

        <section id="disco-2-prerequis" className="col-xl-24 display-flex height-350 bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
            <figure>
              <img src="/medias/DiscoEasy/Notice/3-b-prerequis.jpg" alt="" />
            </figure>
          </section>
          <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Les pré-requis</p>
              <ul className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">1 face avant</li>
                <li className="tleft col-vbspace">1 moteur avec poulie</li>
                <li className="tleft col-vbspace">1 butée courte (sachet de câbles)</li>
                <li className="tleft col-vbspace">4 roulements de courroie (sachet de composants mécaniques)</li>
                <li className="tleft col-vbspace">4 écrous M3 (il doit en rester 21)</li>
                <li className="tleft col-vbspace">6 vis M3x16 (il doit en rester 23)</li>
                <li className="tleft col-vbspace">3 vis M3x6 (il doit en rester 11)</li>
              </ul>
            </div>
          </section>
        </section>

        <section id="disco-2-1" className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/3-c-vis-serrage.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/3-c-vis-serrage.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/3-c-vis-serrage.webm" type='video/webm' />
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
              <h2 className="big-title">Mise en place des vis de serrage</h2>
              <p>Prenez 4 écrous et 4 vis moyennes (M3x16). Placez les écrous dans les logements comme sur la vidéo. Mettez en place les vis sans
                  trop serrer, juste pour maintenir les écrous et éviter que les vis ne bougent. Nous les serrerons plus tard pour maintenir les
                    barres.</p>
            </div>
          </section>
        </section>

        <section id="disco-2-2" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/3-d-roulement.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/3-d-roulement.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/3-d-roulement.webm" type='video/webm' />
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
              <h2 className="big-title">Installation des 2 roulements de courroie</h2>
              <p>Nous allons placer les roulements qui feront le renvoi de courroie du plateau de l’imprimante.</p>
              <p>Prenez le petit outil imprimé pour vous aider à placer les roulements. Prenez 1 vis M3x16, placez la dans le trou correspondant et
                  vissez à travers les 2 roulements. Vérifiez que les roulements tournent bien après serrage. Répétez l'opération pour le deuxième
                    emplacement.</p>
            </div>
          </section>
        </section>

        <section id="disco-2-3" className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/3-e-butee.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/3-e-butee.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/3-e-butee.webm" type='video/webm' />
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
              <h2 className="big-title">Mise en place de la butée de Y</h2>
              <p>Prenez la butée avec le câble le plus court. Introduisez la dans le logement en commençant par faire passer la prise.</p>
              <p>Orientez le comme sur la vidéo.</p>
              <p>Pliez les pattes en dessous puis enfoncez la butée. Elle dépasse d’un millimètre par rapport au plastique.</p>
            </div>
          </section>
        </section>

        <section id="disco-2-4" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/3-f-moteur.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/3-f-moteur.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/3-f-moteur.webm" type='video/webm' />
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
              <p className="title tleft">Étape 4</p>
              <h2 className="big-title">Installation du moteur de Y</h2>
              <p>Posez-la face avant à plat.</p>
              <p>Rentrez le moteur dans son support avec le connecteur vers le haut.</p>
              <p>La poulie se trouvera en face des roulements.</p>
              <p>Vissez le moteur avec 3 vis M3x6.</p>
            </div>
          </section>
        </section>


        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Notice/3-g-fin.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">Montage de la face avant : CHECK !</p>
            <p>Mettez-la de côté, elle nous servira plus tard.</p>
            <div className="checkbox-classic checkbox-full-width">
              <input id="yo" type="checkbox" />
              <label className="tnormal valid-step" data-redirect="/start/discoeasy200/notice-montage-face-arriere.html" htmlFor="yo">
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