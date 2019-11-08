var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/du');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={9} nav={nav} />
        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/10-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage DISCO ULTIMATE - finitions</h1>
            <h2 className="big-title tleft">Les dernières finitions</h2>
            <p>A la fin de cette page, le montage sera terminé.</p>
          </section>
        </section>

        <section className="col-xl-24 block-white-space bg-gradient-orange row">
        </section>

        <section id="ultimate-1-finitions" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <figure>
              <img src="/medias/DiscoUltimate/Notice/10-b-prerequis.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Les pré-requis</p>
              <ul className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">A. Surface d’accroche Buildgrip</li>
                <li className="tleft col-vbspace">B. Plaque de fond (blanche sur l’image)</li>
                <li className="tleft col-vbspace">C. Gaine torsadée (350mm)</li>
                <li className="tleft col-vbspace">D. Logo imprimé</li>
                <li className="tleft col-vbspace">E. Couple de fixations hautes</li>
                <li className="tleft col-vbspace">F. 2x Barres courtes (270mm)</li>
                <li className="tleft col-vbspace">F. 2x Barres courtes (270mm)</li>
              </ul>
              <p>Visserie :</p>
              <ul className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">6x vis M3x16 (reste 5)</li>
                <li className="tleft col-vbspace">6x écrous M3 (reste 3)</li>
              </ul>
            </div>
          </section>
        </section>

        <section id="ultimate-2-finitions" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/10-c-top-vis-serrage.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/10-c-top-vis-serrage.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/10-c-top-vis-serrage.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Mise en place des vis de serrage</p>
              <p>Normalement vous êtes rodé. Prenez 6 écrous et 6 vis M3x16. Placez les écrous dans les logements comme sur la vidéo.</p>
              <p>Récupéré le petite pièce imprimée, insérez un écrou et placez la dans son logement avant de la serrer. Ne serrez pas à fond,
                        les barres doivent passer dans les logements.</p>
              <p>Faites de même pour la deuxième pièce.</p>
              <p>Mettez ensuite deux barres dans les logements prévus à cet effet.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-3-finitions" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/10-d-top-installation.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/10-d-top-installation.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/10-d-top-installation.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Finition du portique</p>
              <p>Placez l’ensemble sur l’imprimante, la partie la plus haute vers l’avant.</p>
              <p>Appuyez fort pour que les pièces soient bien enfoncées.</p>
              <p>Serrez les 4 vis présentes sur les côtés.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-4-finitions" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/10-e-tension-courroie-tete.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/10-e-tension-courroie-tete.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/10-e-tension-courroie-tete.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Ajustement de la tension de la courroie de la tête</p>
              <p>Placez la tête à gauche.</p>
              <p>Détachez la courroie du côté droit.</p>
              <p>Tirez sur le bout libre sans effort.</p>
              <p>Forcez pour ajouter 2 crans de tension et re-verrouiller la courroie.</p>
              <p>Coupez le bout pour laisser 3 cm de mou.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-5-finitions" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/10-f-serrage-axe-z.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/10-f-serrage-axe-z.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/10-f-serrage-axe-z.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Serrage de l’axe Z</p>
              <p>Serrez les 2 vis restantes en haut puis les 4 vis des fixations latérales.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-6-finitions" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/10-g-logo-face-avant.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/10-g-logo-face-avant.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/10-g-logo-face-avant.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Insertion du logo</p>
              <p>Prenez le logo Dagoma imprimé en orange.</p>
              <p>Clipsez-le dans la face avant pour faire correspondre les formes.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-7-finitions" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/10-h-gaine-chariot.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/10-h-gaine-chariot.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/10-h-gaine-chariot.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Mise en place de la gaine</p>
              <p>Prenez la gaine torsadée.</p>
              <p>Ajustez les longueurs de câble pour qu’elles soient identiques à l’extérieur de la machine.</p>
              <p>Installez-la sur les câbles du moteur et de la butée de X.</p>
              <p>Fixez-la ensuite à l’aide d’un collier de serrage au chariot (il y a un passage prévu à cet effet).</p>
            </div>
          </section>
        </section>


        <section id="ultimate-11-finitions" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/10-j-cable-management.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/10-j-cable-management.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/10-j-cable-management.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Gestion des câbles</p>
              <p>Commencez par fixer les câbles de la tête à l’aide d’un collier de serrage.</p>
              <p>Ensuite, nous allons faire en sorte de bien maintenir les autres câbles.</p>
              <p>Notre solution n’est pas unique.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-12-finitions" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <figure>
              <img src="/medias/DiscoUltimate/Notice/10-k-cable-management-controle.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Vérification des câbles</p>
              <p>Aucun câble maintenu ne doit dépasser de la machine.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-13-finitions" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/10-l-plaque-fond.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/10-l-plaque-fond.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/10-l-plaque-fond.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Installation de la plaque protectrice de fond</p>
              <p>Prenez la plaque de fond et retirez les films protecteurs.</p>
              <p>Alignez cette plaque avec le dessous de la machine.</p>
              <p>Utilisez les 12 patins caoutchoucs pour maintenir la plaque.</p>
              <p>Appuyez fermement dessus pour les bloquer.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-14-finitions" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoUltimate/Notice/10-m-ptfe.mp4" type='video/mp4' />
              <source src="/medias/DiscoUltimate/Notice/10-m-ptfe.ogv" type='video/ogv' />
              <source src="/medias/DiscoUltimate/Notice/10-m-ptfe.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Installation du tube PTFE</p>
              <p>Ce tube va guider le filament de l’extrudeur jusqu’à la tête d’impression.</p>
              <p>Il est maintenu par des raccords pneumatique. Poussez-le bien jusqu’au fond à chaque extrémité. Faites-le passer entre les deux
                        barres du haut de l’imprimante pour le guider.</p>
              <p>Attention, sur la tête d’impression, il est important que ce dernier soit bien enfoncé. Regardez sur la vidéo pour avoir une
                        idée de la longueur. Appuyez sur la collerette noire pour retirer le tube.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-16-finitions" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <figure>
              <img src="/medias/DiscoUltimate/Notice/10-n-bis-film-plateau.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Retirez le film protecteur du plateau</p>
              <p>Si vous avez un film protecteur, pensez à le retirer.</p>
            </div>
          </section>
        </section>

        <section id="ultimate-16-finitions" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <figure>
              <img src="/medias/DiscoUltimate/Notice/10-n-buildgrip.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Installation de la surface d’accroche</p>
              <p>Vous trouverez un article complet pour vous expliquer l'installation de la surface d'accroche et sa maintenance.</p>

              <div className="tleft col-vtspace">
                <a href="https://support.dagoma.fr/support/solutions/articles/36000070827-discoeasy200-changer-la-surface-d-accroche"
                  target="_blank" className="new-btn btn-valid btn-wide btn-big">
                  C’est par ici
                        </a>
              </div>
            </div>
          </section>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/10-o-fin.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">Le montage de votre Disco Ultimate est terminé !</p>
            <div className="checkbox-classic checkbox-full-width">
              <input id="yo" type="checkbox" />
              <label className="tnormal valid-step" data-redirect="/firmware/disco-ultimate.html" htmlFor="yo">
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