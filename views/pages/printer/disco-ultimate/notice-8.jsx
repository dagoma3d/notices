var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/du');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={7} nav={nav} />
        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/8-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage DISCO ULTIMATE - montage de l’axe Z</h1>
            <h2 className="big-title tleft">Montage de l’axe Z</h2>
            <p>Nous allons monter le portique de l’imprimante. On s’approche de la fin.</p>
          </section>
        </section>

        <section className="col-xl-24 block-white-space bg-gradient-orange row">
        </section>

        <section id="ultimate-1-assemblage-axe-z" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <figure>
              <img src="/medias/DiscoUltimate/Notice/8-b-prerequis.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Les pré-requis</p>
              <ul className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">A. Axe X monté</li>
                <li className="tleft col-vbspace">B. 2x moteur de Z avec tiges trapézoïdales et écrous</li>
                <li className="tleft col-vbspace">C. 4x Barres longues (360mm)</li>
              </ul>
              <p>Visserie :</p>
              <ul className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">4x vis M3x6 (reste 3)</li>
                <li className="tleft col-vbspace">6x vis M4x12 (reste 0)</li>
              </ul>
            </div>
          </section>
        </section>

        <section id="ultimate-2-assemblage-axe-z" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/8-c-moteur-z.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/8-c-moteur-z.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/8-c-moteur-z.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Montage des moteurs de Z</p>
              <p>Retirez les écrous anti-backslash (ça peut être un peu long).</p>
              <p>Soulevez l’imprimante 3D et insérez les moteurs.</p>
              <p>Tournez-les pour aligner le connecteur du moteur vers l’extrudeur.</p>
              <p>Vissez ensuite les moteurs.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-3-assemblage-axe-z" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/8-d-barres.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/8-d-barres.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/8-d-barres.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Montage des barres de l’axe Z</p>
              <p>Prenez les 4 barres longues.</p>
              <p>Montez-les dans les trous des fixations latérales.</p>
              <p>Forcez bien pour que les barres soient au fond de chaque trou.</p>
              <p className="italic">Astuce : Un petit coup de maillet en caoutchouc aidera bien.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-4-assemblage-axe-z" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/8-e-axe-x.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/8-e-axe-x.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/8-e-axe-x.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Installation de l’axe X</p>
              <p>Prenez l’axe X, orientez-le pour que le moteur de X soit à gauche de la machine lorsque la face avant est devant vous.</p>
              <p>Insérez les barres dans les roulements sans forcer et faites coulisser l’axe jusqu’en bas.</p>
              <p>Faites quelques allers-retours pour que l’ensemble s’ajuste bien.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-5-assemblage-axe-z" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <figure>
              <img src="/medias/DiscoUltimate/Notice/8-f-controle.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Deuxième contrôle surprise</p>
              <p>Normalement voici ce que vous avez obtenu. Vérifiez bien le sens des éléments.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-6-assemblage-axe-z" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/8-g-ecrous.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/8-g-ecrous.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/8-g-ecrous.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Installation des écrous</p>
              <p>Si votre écrou s’est désassemblé, voici comment le remonter.</p>
              <p>Présentez-le sur la tige, côté triangulaire vers le haut.</p>
              <p>Maintenez le ressort pour pouvoir engager l’écrou en vissant.</p>
              <p>Vissez l’écrou jusqu’en bas.</p>
              <p>Faites de même pour le second.</p>
              <p>Prenez ensuite les 6 vis M4x12 et vissez fermement les écrous dans les chariots.</p>
              <p>Faites ensuite appel à un ami pour remonter l’axe X jusqu’en haut (5cm avant la fin des tiges). </p>
              <p>Montez équitablement le chariot pour le garder parallèle au plateau.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/8-h-fin.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">Montage de l’axe Z terminé.</p>
            <p>Vérifiez que les pièces sont orientées comme sur la photo.</p>
            <div className="checkbox-classic checkbox-full-width">
              <input id="yo" type="checkbox" />
              <label className="tnormal valid-step" data-redirect="/start/disco-ultimate/notice-9.html" htmlFor="yo">
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
