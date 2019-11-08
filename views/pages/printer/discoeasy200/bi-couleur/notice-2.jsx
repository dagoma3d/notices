var React = require('react');
var Layout = require('../../../../layouts/default');
var NavBar = require('../../../../components/navbar');
var nav = require('../../../../../content/nav/bicolor/de200');

class BiColor extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={2} nav={nav} />
        <section className="col-xl-24 bg-gradient-orange row">
          <p className=" col-vspace"></p>
        </section>
        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img src="/medias/DiscoEasy/Add-on/Bicouleur/2-a-intro.jpg" alt="" className="col-xl-24" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage pack bi-couleur - préparation et démontage</h1>
            <p className="big-title tleft">Transfert des composants.</p>
            <p>Nous allons transférer certains composants de votre ancienne imprimante dans les nouvelles pièces imprimées.</p>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-l-24 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/2-b-bis-roulement-lineaires.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/2-b-bis-roulement-lineaires.ogv" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/2-b-bis-roulement-lineaires.webm" type='video/mp4' />
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
              <h2 className="big-title tleft">Montage des roulements linéaires</h2>
              <p>Prenez les 6 roulements LM8UU livrés avec votre pack. Insérez les roulements dans les chariots que vous avez imprimés. Faites
                        bien attention et insérez les bien droit pour éviter de casser votre pièce.</p>
              <p className="italic">Astuce : Placez vous en bord de table et tapez à l’aide d’un maillet en caoutchouc.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-l-24 col-l-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-b-roulements-xd.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-b-roulements-xd.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-b-roulements-xd.webm" type='video/webm' />
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
              <h2 className="big-title tleft">Récupération des roulements de courroie X</h2>
              <p>Prenez le chariot droit de l’axe X.</p>
              <p>Dévissez la vis qui maintient les 2 roulements de courroie.</p>
              <p>Mettez l’ancienne pièce de côté.</p>
              <p>Installez les roulements dans la nouvelle pièce.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-l-24 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-c-mot-butee-x.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-c-mot-butee-x.ogv" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-c-mot-butee-x.webm" type='video/mp4' />
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
              <h2 className="big-title tleft">Récupération du moteur de x et de la butée</h2>
              <p>Prenez le chariot gauche de l’axe X.</p>
              <p>Retirez les vis qui tiennent le moteur.</p>
              <p>Retirez le moteur.</p>
              <p>Retirez la butée et remontez-la dans la nouvelle pièce (attention à l’orientation de la languette).</p>
              <p>Mettez le moteur en place dans la nouvelle pièce (respectez la même orientation).</p>
              <p>Revissez-le (aidez-vous de l’outil imprimé pour placer la dernière vis).</p>
            </div>
          </section>
        </section>
        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-l-24 col-l-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/2-d-demontage-extrudeur.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/2-d-demontage-extrudeur.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/2-d-demontage-extrudeur.webm" type='video/webm' />
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
              <h2 className="big-title tleft">Démontage de l’extrudeur</h2>
              <p>Retirez les 3 vis de l’extrudeur.</p>
              <p>Retirez l’extrudeur une fois libéré.</p>
              <p>Retirez le moteur.</p>
            </div>
          </section>
        </section>


        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-l-24 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/2-e-roulement-ar.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/2-e-roulement-ar.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/2-e-roulement-ar.webm" type='video/webm' />
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
              <h2 className="big-title tleft">Récupération des roulements de courroie Y</h2>
              <p>Prenez la face arrière.</p>
              <p>Dévissez la vis qui maintient les 2 roulements de courroie.</p>
              <p>Installez les roulements dans la nouvelle face arrière.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-l-24 col-l-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/2-f-ecrou-serrage.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/2-f-ecrou-serrage.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/2-f-ecrou-serrage.webm" type='video/webm' />
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
              <h2 className="big-title tleft">Retirez les vis de serrage</h2>
              <p>Toujours sur la face arrière, retirez les 4 vis de serrage.</p>
              <p>Récupérez également les écrous.</p>
              <p>Décollez les patins de l'ancienne pièce pour les mettres sur la nouvelle.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-l-24 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/2-g-montage-extrudeur.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/2-g-montage-extrudeur.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/2-g-montage-extrudeur.webm" type='video/webm' />
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
              <h2 className="big-title tleft">Remontage des extrudeurs</h2>
              <p>Montez l’extrudeur livré avec votre pack en suivant la vidéo.</p>
              <p>Prenez vos moteurs d’extrudeur. Placez les dans le face arrière.</p>
              <p className="text-red">Les connecteurs doivent se faire face.</p>
              <p>Montez ensuite les extrudeur en suivant la vidéo.</p>
              <p className="text-red">Suivez les marquages E0 et E1 pour l’emplacement.</p>
              <p>Pour plus de détails,
                        <a target="_blank" href="/start/discoeasy200/extrudeur-plus" className="link-classic">rendez-vous ici</a>
              </p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-l-24 col-l-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/4-e-extrudeur-serrage-2.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/4-e-extrudeur-serrage-2.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/4-e-extrudeur-serrage-2.webm" type='video/webm' />
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
              <h2 className="big-title tleft">Serrage du bras d’extrudeur</h2>
              <p>Le bras ne doit pas être trop serré pour éviter de le bloquer.</p>
              <p>Serrez jusqu'à voir disparaître le jour entre les deux pièces orange.</p>
              <p>Desserrez d’un quart de tour pour le faire réapparaître.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Bicouleur/2-i-fin.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">Transfert des composants terminé</p>
            <div className="checkbox-classic checkbox-full-width">
              <input id="yo" type="checkbox" />
              <label className="tnormal valid-step" data-redirect="/start/discoeasy200/bi-couleur/notice-3.html?addon=bicouleur" htmlFor="yo">
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