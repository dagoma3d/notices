var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/du');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={1} nav={nav} />
        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/2-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage DISCO ULTIMATE - montage de la face avant</h1>
            <h2 className="big-title tleft">Montage de la face avant</h2>
            <p>Nous allons monter la première partie de l’imprimante 3D.</p>
          </section>
        </section>

        <section className="col-xl-24 block-white-space bg-gradient-orange row">
        </section>

        <section id="ultimate-1-face-avant" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <figure>
              <img src="/medias/DiscoUltimate/Notice/2-b-prerequis.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Les pré-requis</p>
              <ul className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">A. Face avant imprimée</li>
                <li className="tleft col-vbspace">B. 4x roulements de courroie</li>
                <li className="tleft col-vbspace">C. Butée Y (180mm)</li>
                <li className="tleft col-vbspace">D. Moteur NEMA avec poulie</li>
              </ul>
              <p>Visserie :</p>
              <ul className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">3x vis M3x6 (reste 11)</li>
                <li className="tleft col-vbspace">6x vis M3x16 (reste 23)</li>
                <li className="tleft col-vbspace">4x écrous M3 (reste 21)</li>
              </ul>
            </div>
          </section>
        </section>

        <section id="ultimate-2-face-avant" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/2-c-vis-serrage.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/2-c-vis-serrage.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/2-c-vis-serrage.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Mise en place des vis de serrage</p>
              <p>Prenez 4 écrous et 4 vis moyennes (M3x16). Placez les écrous dans les logements comme sur la vidéo. Mettez en place les vis
                  sans trop serrer, juste pour maintenir les écrous et éviter que les vis ne bougent. Nous les serrerons plus tard pour
                        maintenir les barres.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-3-face-avant" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/2-d-roulement.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/2-d-roulement.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/2-d-roulement.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Installation des 2 roulements de courroie</p>
              <p>Nous allons placer les roulements qui feront le renvoi de courroie du plateau de l’imprimante.</p>
              <p>Prenez le petit outil imprimé pour vous aider à placer les roulements. Prenez 1 vis M3x16, placez la dans le trou correspondant
                  et vissez à travers les 2 roulements. Vérifiez que les roulements tournent bien après serrage. Répétez l'opération pour le
                        deuxième emplacement.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-4-face-avant" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/2-e-butee.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/2-e-butee.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/2-e-butee.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Mise en place de la butée de Y</p>
              <p>Prenez la butée avec le câble le plus court. Introduisez la dans le logement en commençant par faire passer la prise.</p>
              <p>Orientez le comme sur la vidéo.</p>
              <p>Pliez les pattes en dessous puis enfoncez la butée. Elle dépasse d’un millimètre par rapport au plastique.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-5-face-avant" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/2-f-moteur.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/2-f-moteur.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/2-f-moteur.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Installation du moteur de Y</p>
              <p>Posez-la face avant à plat.</p>
              <p>Rentrez le moteur dans son support avec le connecteur vers le haut.</p>
              <p>La roue dentée se trouvera en face des roulements.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Notice/3-g-fin.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">Montage de la face avant terminé</p>
            <p>Mettez-la de côté, elle nous servira plus tard.</p>
            <div className="checkbox-classic checkbox-full-width">
              <input id="yo" type="checkbox" />
              <label className="tnormal valid-step" data-redirect="/start/disco-ultimate/notice-3.html" htmlFor="yo">
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