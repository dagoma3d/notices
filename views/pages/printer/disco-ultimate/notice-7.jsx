var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/du');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={6} nav={nav} />
        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/7-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage DISCO ULTIMATE - montage de l’axe X</h1>
            <h2 className="big-title tleft">Montage de l’axe X</h2>
            <p>Nous allons monter l’axe qui supporte la tête d’impression.</p>
          </section>
        </section>

        <section className="col-xl-24 block-white-space bg-gradient-orange row">
        </section>

        <section id="ultimate-1-assemblage-axe-x" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <figure>
              <img src="/medias/DiscoUltimate/Notice/7-b-prerequis.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Les pré-requis</p>
              <ul className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">A. 2x Barres courtes (270mm)</li>
                <li className="tleft col-vbspace">B. Couple de chariots d’axe X</li>
                <li className="tleft col-vbspace">C. Moteur NEMA avec poulie</li>
                <li className="tleft col-vbspace">D. Courroie courte (75cm)</li>
                <li className="tleft col-vbspace">E. 1x Poulie</li>
                <li className="tleft col-vbspace">F. Butée longue</li>
                <li className="tleft col-vbspace">G. Tête d’impression montée</li>
              </ul>
              <p>Visserie :</p>
              <ul className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">3x vis M3x6 (reste 7)</li>
                <li className="tleft col-vbspace">1x vis M3x25 (reste 0)</li>
              </ul>
            </div>
          </section>
        </section>

        <section id="ultimate-2-assemblage-axe-x" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/7-c-roulement-courroie.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/7-c-roulement-courroie.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/7-c-roulement-courroie.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Installation de la poulie de X</p>
              <p>Nous allons placer la poulie qui fera le renvoi de courroie du plateau de l’imprimante.</p>
              <p>Placez la poulie et alignez la avec le trou de passage de la vis.</p>
              <p>Prenez 1 vis M3x25, placez la dans le trou correspondant et vissez à travers la poulie.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-3-assemblage-axe-x" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/7-d-butee.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/7-d-butee.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/7-d-butee.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Installation de la butée de X</p>
              <p>Dans l’autre chariot, installez la butée comme sur le vidéo.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-4-assemblage-axe-x" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/7-e-moteur-x.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/7-e-moteur-x.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/7-e-moteur-x.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Installation du moteur de X</p>
              <p>Rentrez le moteur dans son support avec le connecteur vers la pièce (comme sur la vidéo).</p>
              <p>Vissez le moteur avec 3 vis M3x6.</p>
              <p>Le dernier trou de vis est accessible avec l’outil plastique utilisé pour les roulements de la face avant. Positionnez la vis en face du trou, passez le tournevis à travers la pièce, retirez l'outil imprimé, et vissez.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-5-assemblage-axe-x" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/7-f-barre.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/7-f-barre.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/7-f-barre.webm" type='video/webm' />

              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Montage des barres de l’axe X</p>
              <p>Prenez 2 barres courtes.</p>
              <p>Introduisez-les avec délicatesse dans les roulements (faites quelques rotations pour faciliter leur entrée). Une fois en place, faites quelques allers-retours pour vérifier que tout va bien.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-6-assemblage-axe-x" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/7-g-courroie-tete.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/7-g-courroie-tete.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/7-g-courroie-tete.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Installation de la courroie de la tête</p>
              <p>Nous vous conseillons de suivre la vidéo avec attention.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/7-h-fin.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">Montage de l’axe X terminé</p>
            <p>Vérifiez que le sens des pièces correspond à la photo.</p>
            <p>Mettez-le ensuite de côté, il nous servira plus tard</p>
            <div className="checkbox-classic checkbox-full-width">
              <input id="yo" type="checkbox" />
              <label className="tnormal valid-step" data-redirect="/start/disco-ultimate/notice-8.html" htmlFor="yo">
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
