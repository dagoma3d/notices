var React = require('react');
var Layout = require('../../../../layouts/default');
var NavBar = require('../../../../components/navbar');
var nav = require('../../../../../content/nav/bicolor/de200');

class BiColor extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={3} nav={nav} />
        <section className="col-xl-24 bg-gradient-orange row">
          <p className=" col-vspace"></p>
        </section>
        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Bicouleur/2-i-fin.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage pack bi-couleur</h1>
            <p className="big-title tleft">Installation du pack bi-couleur.</p>
            <p>Nous allons maintenant remonter votre DiscoEasy200 avec les éléments du pack bi-couleur.</p>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-l-24 col-l-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-b-montage-face-ar.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-b-montage-face-ar.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-b-montage-face-ar.webm" type='video/webm' />
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
              <h2 className="big-title tleft">Installation de la face arrière</h2>
              <p>Présentez la face arrière comme sur la vidéo.</p>
              <p>Alignez les barres avec les emplacements dans la face arrière.</p>
              <p>Poussez pour que les barres se logent dans ces emplacements.</p>
              <p>Pour l’enfoncer convenablement, bloquez la face avant et tapez sur la face arrière avec un outil adapté (ex: maillet en caoutchouc).</p>
              <p>Un fois bien en place, serrez les vis latérale.</p>
              <p className="italic">Astuce : Utilisez le plateau pour vérifier l'équerrage.</p>
              <div className="tleft col-vtspace">
                <button className="new-btn btn-classic btn-grey btn-show-video">Video</button>
              </div>
            </div>
          </section>
          <section className="wrap row block-video block-video-hidden">
            <div className="close-video">
              <i className="fa fa-close"></i>
            </div>
            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}">
              <source src="/medias/DiscoEasy/Notice/9-e-control-base.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/9-e-control-base.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/9-e-control-base.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-l-24 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}">
              <source src="/medias/DiscoEasy/Notice/9-f-courroie.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/9-f-courroie.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/9-f-courroie.webm" type='video/webm' />
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
              <h2 className="big-title tleft">Installation de la courroie du plateau</h2>
              <p className="text-red">Attention, le plateau est encore mobile, faites attention à vos doigts !</p>
              <p>Retournez la Discoeasy200 pour avoir accès au dessous de la machine.</p>
              <p>Faites passer le brin de l’inscription A vers B dans le support plateau avant (les crans vers vous).</p>
              <p>Laissez le brin dépasser du côté B d’environ 2cm.</p>
              <p>Faites-le coulisser vers la gauche pour le verrouiller.</p>
              <p className="text-red">Passez entre la carte de contrôle et le plateau, bien au dessus des câbles.</p>
              <p>Prenez l'autre brin et faites-le passer au dessus du premier roulement en haut de la face avant (crans vers le roulement).</p>
              <p>
                Récupérez-le en dessous et tirez pour retirer le mou.
                    <span className="text-red">Attention aux vrilles dans la courroie.</span>
              </p>
              <p>Faites passer le brin entre la poulie moteur et le second roulement.</p>
              <p>Passez la courroie derrière la carte.</p>
              <p>Sur la face arrière, faites passer la courroie sous le roulement et poussez pour le récupérer au dessus.</p>
              <p>Faites entrer le brin dans le support plateau avant de B vers A.</p>
              <p>Tirez sur la courroie pour la tendre et pousser vers le bas pour la verrouiller.</p>
              <p>Repliez le brin et faites-le passer dans le clips pour finir.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-l-24 col-l-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-d-montage-axe-x.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-d-montage-axe-x.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-d-montage-axe-x.webm" type='video/webm' />
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
              <h2 className="big-title tleft">Remontage de l’axe X</h2>
              <p>Introduisez les barres avec délicatesse dans les roulements (faites quelques rotations pour faciliter leur entrée). Une fois en place, faites quelques allers-retours pour vérifier que tout va bien.</p>
              <p>Maintenant faites attention au sens des pièces. Référez-vous à la vidéo pour orienter les pièces. Le chariot avec le moteur sera à gauche, l’autre à droite. Dans l’étape suivante vous pourrez vérifier tout ça.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-l-24 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-e-courroie-x.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-e-courroie-x.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-e-courroie-x.webm" type='video/webm' />
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
              <h2 className="big-title tleft">Installation de la courroie de la tête</h2>
              <p>Retournez l’ensemble pour voir le dessous de la tête.</p>
              <p>Reprenez la courroie.</p>
              <p>Les crans vers le haut de la tête, introduisez la courroie dans le trou supérieur.</p>
              <p>Récupérez-la de l’autre côté et faites-la revenir à droite (attention aux vrilles).</p>
              <p>Dans le chariot de droite, passez au-dessus des roulements puis revenez en dessous (crans vers le roulement).</p>
              <p>Tirez dessus pour récupérer du mou.</p>
              <p>Faites revenir la courroie vers le chariot de gauche en passant sous la tête.</p>
              <p>Passez la courroie sous la poulie du moteur et revenez par dessus.</p>
              <p>Dirigez le brin de la courroie vers la tête. Placez la courroie dans le logement (allez jusqu’au dernier cran).</p>
              <p>Reprenez l’autre brin et tirez dessus pour tendre la courroie. Tendez sans forcer, juste pour que tout tienne en place. Poussez la courroie pour la verrouiller dans les crans de la tête.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-l-24 col-l-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-f-installation-axe-x.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-f-installation-axe-x.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-f-installation-axe-x.webm" type='video/webm' />
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
              <h2 className="big-title tleft">Installation de l’axe X</h2>
              <p>Prenez l’axe X, orientez-le comme sur la vidéo.</p>
              <p>Insérez les barres dans les roulements sans forcer et faites-le coulisser jusqu’en bas.</p>
              <p>Faites quelques allers-retours pour que l’ensemble s’ajuste bien.</p>
              <p>Vissez l’écrou M8 sur une tige jusqu’à environ 1 pouce de l’extrémité.</p>
              <p>Faites de même sur la seconde tige.</p>
              <p>Mettez un ressort dans le logement sur le chariot.</p>
              <p>Prenez un anti-wooble. Soulevez un chariot de X. Placez la fourche autour de la tige arrière et alignez l’écrou sur le trou du coupleur.</p>
              <p>Reprenez une tige filetée et présentez-la côté écrou dans le logement où se trouve le ressort.</p>
              <p>Dévissez la tige pour faire descendre l'écrou en dessous de la lucarne.</p>
              <p>Une fois en dessous, commencez à visser dans l’anti-wooble.</p>
              <p>Arrêtez de visser lorsque le chariot commence à se lever.</p>
              <p>Répétez l’opération sur le deuxième chariot.</p>
              <p>Soulevez un chariot pour vous assurer que la tige filetée est bien prise dans le coupleur.</p>
              <p>Remettez-le en place, appuyez sur le coupleur pour le compresser, puis serrez la vis supérieure.</p>
              <p>Répétez l’opération sur le second coupleur.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-l-24 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-g-cablage-chariot-x.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-g-cablage-chariot-x.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-g-cablage-chariot-x.webm" type='video/webm' />
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
              <h2 className="big-title tleft">Câblage de l’axe X</h2>
              <p>Rebranchez ensuite le moteur de X.</p>
              <p>Prenez le câble de la butée et faites-le passer sous la machine en suivant ceux déjà en place.</p>
              <p>Rebranchez la butée sur le connecteur X+.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-l-24 col-l-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-h-cablage-tete.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-h-cablage-tete.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-h-cablage-tete.webm" type='video/webm' />
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
              <h2 className="big-title tleft">Câblage de la tête</h2>
              <p>Dénudez tous les câbles avant de les brancher.</p>
              <p>Tous les fils doivent suivre le même passage que le câble de la butée.</p>
              <p>Récupérez le câble du palpeur (le gris) et raccordez-le ensuite sur le connecteur Y+.</p>
              <p>Récupérez le câble de la sonde (le blanc) et raccordez-le ensuite sur le connecteur A13.</p>
              <p>Récupérez les câbles du ventilateur arrière et repérez-les (nous avons fait un petit noeud).</p>
              <p>Raccordez les deux fils rouge (ou marron) sur le bornier E0 (pas de sens entre + et -).</p>
              <p>Prenez ensuite les câbles du ventilateur non repéré (ventilateur avant).</p>
              <p>Raccordez les deux fils sur le bornier E1 (rouge sur + et noire sur -).</p>
              <p>Raccordez les deux derniers fils repérés sur le bornier FAN (rouge sur + et noire sur -).</p>
              <p className="col-vtspace text-red italic">NB: Votre connecteur A13 est différent ?</p>
              <div className="tleft col-vtspace">
                <button className="new-btn btn-classic btn-grey btn-show-video">Video</button>
              </div>
            </div>
          </section>
          <section className="wrap row block-video block-video-hidden">
            <div className="close-video">
              <i className="fa fa-close"></i>
            </div>
            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}">
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-h-cablage-tete-6-pin.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-h-cablage-tete-6-pin.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-h-cablage-tete-6-pin.webm" type='video/webm' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
        </section>


        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-l-24  bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-j-cablage-extrudeur.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-j-cablage-extrudeur.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/3-j-cablage-extrudeur.webm" type='video/webm' />
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
          <section className="col col-xl-12 col-l-24  row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <h2 className="big-title tleft">Câblage des extrudeurs</h2>
              <p>Rebranchez le câble raccordé sur la borne E0_MOT à l’extrudeur E0.</p>
              <p>Prenez le câble fournis dans le pack et raccordez l’extrudeur E1 à la borne E1_MOT.</p>
              <p>Branchez le fil rouge du capteur de fin de filament de l’extrudeur E1 sur la borne Y-.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Bicouleur/3-k-fin.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">Montage du pack bi-couleur terminé</p>
            <div className="checkbox-classic checkbox-full-width">
              <input id="yo" type="checkbox" />
              <label className="tnormal valid-step" data-redirect="/start/discoeasy200/bi-couleur/notice-4.html?addon=bicouleur" htmlFor="yo">
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
