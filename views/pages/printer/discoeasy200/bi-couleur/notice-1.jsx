var React = require('react');
var Layout = require('../../../../layouts/default');
var NavBar = require('../../../../components/navbar');
var nav = require('../../../../../content/nav/bicolor/de200');

class BiColor extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={1} nav={nav} />
        <section className="col-xl-24 bg-gradient-orange row">
          <p className=" col-vspace">Temps total de montage approximatif : 1h30min</p>
        </section>
        <section className="col-xl-24 notice-mask notice-header row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Bicouleur/0-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage pack bi-couleur - préparation et démontage</h1>
            <p className="big-title tleft">ça y est, vous avez reçu votre pack bi-couleur.</p>
            <p>Nous allons vous accompagner pour le montage et l’installation de ce 4ème add-on qui vous permettra d’imprimer avec deux couleurs différentes.</p>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video bg-light-grey-blue height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-l-24 col-l-push-0 bg-white block-info-cursor row">
            <figure>
              <img src="/medias/DiscoEasy/Add-on/Bicouleur/1-b-contenu.jpg" alt="" />
            </figure>
          </section>
          <section className="col col-xl-12 col-xl-pull-12 col-l-24 col-l-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <h2 className="big-title tleft">Dans le pack vous avez trouvé …</h2>
              <ul className="list-classic lsn tnormal row tleft-child">
                <li className="tleft col-vbspace">A - Une tête d’impression bi-couleur</li>
                <li className="tleft col-vbspace">B - Un bras d’extrudeur+</li>
                <li className="tleft col-vbspace">C - Un corps d’extrudeur+ E1</li>
                <li className="tleft col-vbspace">D - Un tube PTFE</li>
                <li className="tleft col-vbspace">E - Un moteur d’extrudeur</li>
                <li className="tleft col-vbspace">F - Un ressort d’extrudeur</li>
                <li className="tleft col-vbspace">G - 3x grandes vis (M3x25mm) et 1x petite vis (M3x6mm)</li>
                <li className="tleft col-vbspace">H - 6 roulements linéaire (inutiles si vous avez le pack expert)</li>
                <li className="tleft col-vbspace">I - Câble pour le moteur d’extrudeur E1</li>
              </ul>
            </div>
          </section>
        </section>


        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-l-24 bg-white block-info-cursor row">
            <figure>
              <img src="/medias/DiscoEasy/Add-on/Trapezoidales/1-c-prerequis.jpg" alt="" />
            </figure>
          </section>
          <section className="col col-xl-12 col-l-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <h2 className="big-title tleft">Les prérequis</h2>
              <ol className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">1. Un tournevis hexagonal 2.5 mm (fourni avec le kit DiscoEasy200)</li>
                <li className="tleft col-vbspace">2. Un tournevis plat</li>
                <li className="tleft col-vbspace">3. Un outil imprimé (fourni avec le kit DiscoEasy200)
                        <a href="/medias/DiscoEasy/Add-on/Trapezoidales/palette-montage-petits-roulements.STL"
                    className="link-classic italic"
                    download="palette-montage-petits-roulements.STL">
                    Téléchargeable ici</a>
                </li>
                <li className="tleft col-vbspace">4. Une pince coupante</li>
              </ol>
            </div>
          </section>
        </section>

        <section className="col-xl-24 block-white-space bg-gradient-orange row">
          <p className="big-title">PLACE AU DÉMONTAGE</p>
          <p>A chaque étape, conservez les vis.</p>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-l-24 col-l-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-d-gaine.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-d-gaine.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-d-gaine.webm" type='video/webm' />
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
          <section className="col col-xl-12 col-xl-pull-12 col-l-24 col-l-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <h2 className="big-title tleft">Retrait de la gaine torsadée</h2>
              <p>Retirez la gaine de la fixation latérale jusqu’au chariot.</p>
              <p>Libérez les câbles de moteur et de butée.</p>
              <p>Déclipsez la gaine du chariot.</p>
              <p>Retirer le reste de la gaine.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-l-24 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-e-debrancher-mot.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-e-debrancher-mot.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-e-debrancher-mot.webm" type='video/webm' />
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
          <section className="col col-xl-12 col-l-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <h2 className="big-title tleft">Débranchez le moteur de X</h2>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-l-24 col-l-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-f-butee.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-f-butee.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-f-butee.webm" type='video/webm' />
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
          <section className="col col-xl-12 col-xl-pull-12 col-l-24 col-l-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <h2 className="big-title tleft">Débranchez la butée de l’axe X</h2>
              <p>Retournez la machine.</p>
              <p>Débranchez la butée de X connectée sur la borne X+.</p>
              <p>Retirez complètement le câble du dessous de la machine.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-l-24 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-g-debrancher-tete.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-g-debrancher-tete.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-g-debrancher-tete.webm" type='video/webm' />
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
          <section className="col col-xl-12 col-l-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <h2 className="big-title tleft">Débranchez la tête d’impression</h2>
              <p>Sous la machine, débranchez le palpeur connecté sur la borne Y+.</p>
              <p>Débranchez la sonde connectée sur la borne A13.</p>
              <p>Retirez ensuite les fils connectés aux borniers E0, E1 et FAN.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-l-24 col-l-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-g-retirer-top.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-g-retirer-top.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-g-retirer-top.webm" type='video/webm' />
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
          <section className="col col-xl-12 col-xl-pull-12 col-l-24 col-l-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <h2 className="big-title tleft">Démontage de la partie supérieure</h2>
              <p>S'il vous reste du filament dans la tête d'impression, retirez-le.</p>
              <p>Débranchez le tube PTFE en appuyant sur le connecteur noir et retirez-le du top.</p>
              <p>Desserrez les 4 vis latérales.</p>
              <p>Retirez la partie supérieure de l’imprimante.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-l-24 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-h-retirer-axe-x.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-h-retirer-axe-x.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-h-retirer-axe-x.webm" type='video/webm' />
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
          <section className="col col-xl-12 col-l-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <h2 className="big-title tleft">Retrait de l’axe X</h2>
              <p>Dévissez les vis supérieures des coupleurs.</p>
              <p>Retirez les tiges filetées des coupleurs.</p>
              <p>Tirez ensuite l’ensemble vers le haut pour le sortir de la machine.</p>
              <p>Retirez ensuite les deux tiges filetées.</p>
              <p>Attention, elles sont recouvertes d'huile.</p>
              <p>Retenez les écrous supérieurs pour éviter qu’ils ne partent d’un coup.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-l-24 col-l-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-j-demontage-axe-x.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-j-demontage-axe-x.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-j-demontage-axe-x.webm" type='video/webm' />
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
          <section className="col col-xl-12 col-xl-pull-12 col-l-24 col-l-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <h2 className="big-title tleft">Démontage de l’axe X</h2>
              <p>Retirez la courroie de la tête.</p>
              <p>Séparez tous les éléments.</p>
              <p>Mettez les barres de côté.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-l-24 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-k-debrancher-mot-e.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-k-debrancher-mot-e.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-k-debrancher-mot-e.webm" type='video/webm' />
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
          <section className="col col-xl-12 col-l-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <h2 className="big-title tleft">Débranchez le moteur d’extrudeur</h2>
              <p>Retournez la machine pour accéder au câblage.</p>
              <p>Retirez le tube PTFE.</p>
              <p>Débranchez le câble relié au moteur d’extrudeur.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-l-24 col-l-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-l-retirer-courroie-plateau.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-l-retirer-courroie-plateau.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-l-retirer-courroie-plateau.webm" type='video/webm' />
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
          <section className="col col-xl-12 col-xl-pull-12 col-l-24 col-l-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <h2 className="big-title tleft">Retrait de la courroie du plateau</h2>
              <p>Toujours sous la machine, débloquez le premier brin de la courroie.</p>
              <p>Retirez le second brin.</p>
              <p>Tirez sur la courroie pour la retirer totalement.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-l-24 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-m-retirer-face-ar.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-m-retirer-face-ar.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/1-m-retirer-face-ar.webm" type='video/webm' />
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
          <section className="col col-xl-12 col-l-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <h2 className="big-title tleft">Retrait de la face arrière</h2>
              <p>Desserez les vis sur les côtés de la face arrière (il y en a 4).</p>
              <p>Tirez sur la pièce en maintenant le reste de la machine.</p>
              <p>Soyez délicat</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Bicouleur/1-o-fin.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">Démontage de l’imprimante terminé</p>
            <div className="checkbox-classic checkbox-full-width">
              <input id="yo" type="checkbox" />
              <label className="tnormal valid-step" data-redirect="/start/discoeasy200/bi-couleur/notice-2.html?addon=bicouleur" htmlFor="yo">
                Je valide cette étape
                </label>
            </div>
          </section>
        </section>


      </Layout>
    );
  }
}

module.exports = BiColor;
