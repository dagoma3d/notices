var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/de200');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={8} nav={nav} />
        <section className="col-xl-24 bg-gradient-orange row">
          <p className=" col-vspace">Temps approximatif : 30 minutes</p>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Notice/10-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage DiscoEasy200 - Page 9 - Câblage</h1>
            <h2 className="big-title tleft">Place au câblage</h2>
            <p>Nous allons maintenant mettre en place la carte de contrôle et y raccorder tous les éléments.</p>
          </section>
        </section>

        <section id="disco-9-prerequis" className="col-xl-24 display-flex height-350 bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
            <figure>
              <img src="/medias/DiscoEasy/Notice/10-b-prerequis.jpg" alt="" />
            </figure>
          </section>
          <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Les pré-requis</p>
              <ul className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">1 carte de contrôle</li>
                <li className="tleft col-vbspace">1 sachet de câbles</li>
                <li className="tleft col-vbspace">1 sachet d'électronique</li>
                <li className="tleft col-vbspace">3 vis M3x6 (Il doit en rester 1)</li>
                <li className="tleft col-vbspace">1 tournevis plat 3mm (non fourni)</li>
              </ul>
            </div>
          </section>
        </section>

        <section id="disco-9-1" className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/10-b-preparation.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/10-b-preparation.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/10-b-preparation.webm" type='video/webm' />
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
              <p>Faites monter l’axe X jusqu’à mi-hauteur (ça prend un peu de temps).</p>
              <p>Faites bien monter les 2 chariots en même temps.</p>
              <p>Machine face à vous, placez la tête à droite et le plateau en arrière.</p>
              <p>Retournez la machine pour avoir accès au dessous.</p>
              <p>Posez-la sur la face arrière pour que nous ayons la même référence.</p>
            </div>
          </section>
        </section>

        <section id="disco-9-2" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/10-c-carte.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/10-c-carte.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/10-c-carte.webm" type='video/webm' />
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
              <h2 className="big-title">Installation de la carte de contrôle</h2>
              <p>Sortez la carte du sachet et retirez l’adaptateur branché sur EXP1 & EXP2.</p>
              <p>Placez-la avec les connecteur face à vous, en diagonale, le lecteur USB vers la barre transversale regardant vers la face arrière.
                </p>
              <p>Serrez-la à l’aide de deux vis M3x6</p>
              <p className="bold text-red">Ne serrez pas trop fort pour éviter d’endommager la carte.</p>
            </div>
          </section>
        </section>

        <section id="disco-9-3" className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/10-d-mot-x.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/10-d-mot-x.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/10-d-mot-x.webm" type='video/webm' />
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
              <h2 className="big-title">Câblage du moteur de X</h2>
              <p>Nous allons commencer par brancher tous les éléments de l’axe X.</p>
              <p>Prenez le câble moteur le plus long dans le sachet.</p>
              <p>Branchez-le au moteur (pas de soucis de sens, il y a des détrompeurs).</p>
              <p>Faites-le ensuite passer au niveau de la fixation latérale gauche, derrière la barre arrière.</p>
              <p>Passez dans la pièce plastique comme sur la vidéo.</p>
              <p>Passez ensuite entre la barre inférieure de la base et la pièce plastique grise.</p>
              <p>Raccordez-le ensuite sur le <span className="bold">connecteur X_MOT</span>.</p>
            </div>
          </section>
        </section>

        <section id="disco-9-4" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/10-e-butee-x.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/10-e-butee-x.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/10-e-butee-x.webm" type='video/webm' />
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
              <h2 className="big-title">Branchement de la butée de X</h2>
              <p>Récupérez le câble de la butée de X.</p>
              <p>Faites-le suivre le câble du moteur de X.</p>
              <p>Raccordez-le ensuite sur le <span className="bold">connecteur X+</span>.</p>
            </div>
          </section>
        </section>

        <section id="disco-9-5" className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/10-f-palpeur.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/10-f-palpeur.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/10-f-palpeur.webm" type='video/webm' />
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
              <p className="title tleft">Étape 5</p>
              <h2 className="big-title">Branchement du palpeur de la tête</h2>
              <p>Récupérez le câble du palpeur (le gris).</p>
              <p>Faites-le suivre les câbles du moteur de X et de la butée.</p>
              <p>Raccordez-le ensuite sur le <span className="bold">connecteur Y+</span>.</p>
            </div>
          </section>
        </section>

        <section id="disco-9-6" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/10-g-sonde.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/10-g-sonde.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/10-g-sonde.webm" type='video/webm' />
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
              <p className="title tleft">Étape 6</p>
              <h2 className="big-title">Branchement de la sonde de température</h2>
              <p>Récupérez le câble de la sonde (le blanc).</p>
              <p>Faites-le suivre les câble déjà en place.</p>
              <p>Raccordez-le ensuite sur le <span className="bold">connecteur A13</span>.</p>
            </div>
          </section>
        </section>

        <section id="disco-9-7" className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/10-h-cable-tete.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/10-h-cable-tete.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/10-h-cable-tete.webm" type='video/webm' />
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
              <p className="title tleft">Étape 7</p>
              <h2 className="big-title">Branchement des câbles de la tête</h2>
              <p>Dénudez tous les câbles avant de les brancher.</p>
              <p>Récupérez les câbles du ventilateur arrière (celui qui parcourt la tête sur le côté).</p>
              <p>Repérez-les (nous l’avons fait ici avec du scotch).</p>
              <p>Prenez ensuite tous les fils restant et faites-les suivres les autres câbles.</p>
              <p>Torsadez le bout pour faciliter leur insertion.</p>
              <p>Commencez par les deux gros rouges.</p>
              <p>Munissez-vous d’un tournevis plat.</p>
              <p>Raccordez les deux fils rouge ou marron sur le bornier E0 (pas de sens entre + et -).</p>
              <p>Prenez ensuite les câbles du ventilateur non repéré (ventilateur avant).</p>
              <p>Raccordez les deux fils sur le bornier E1 (rouge sur + et noire sur -).</p>
              <p>Raccordez les deux derniers fils repérés sur le bornier FAN (rouge sur + et noire sur -).</p>
            </div>
          </section>
        </section>

        <section id="disco-9-8" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/10-i-butee-y.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/10-i-butee-y.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/10-i-butee-y.webm" type='video/webm' />
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
              <p className="title tleft">Étape 8</p>
              <h2 className="big-title">Branchement de la butée de Y</h2>
              <p>Récupérez le câble de la butée de Y (sur la face avant).</p>
              <p>Raccordez-le ensuite sur le <span className="bold">connecteur X-</span>.</p>
            </div>
          </section>
        </section>

        <section id="disco-9-9" className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/10-j-mot-y.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/10-j-mot-y.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/10-j-mot-y.webm" type='video/webm' />
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
              <p className="title tleft">Étape 9</p>
              <h2 className="big-title">Branchement du moteur de Y</h2>
              <p>Récupérez le câble moteur le plus court.</p>
              <p>Raccordez-le ensuite sur le moteur de la face avant puis sur le <span className="bold">connecteur Y_MOT</span>.</p>
            </div>
          </section>
        </section>

        <section id="disco-9-10" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/10-k-mot-z.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/10-k-mot-z.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/10-k-mot-z.webm" type='video/webm' />
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
              <p className="title tleft">Étape 10</p>
              <h2 className="big-title">Branchement des moteurs de Z</h2>
              <p>Récupérez le câble moteur double.</p>
              <p>Raccordez-le sur les moteurs de Z en passant entre la barre inférieure et la pièce plastique.</p>
              <p>Raccordez-le ensuite sur le <span className="bold">connecteur Z_MOT</span>.</p>
            </div>
          </section>
        </section>

        <section id="disco-9-11" className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/10-l-mot-e.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/10-l-mot-e.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/10-l-mot-e.webm" type='video/webm' />
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
              <p className="title tleft">Étape 11</p>
              <h2 className="big-title">Branchement du moteur d'extrudeur</h2>
              <p>Récupérez le dernier câble moteur.</p>
              <p>Raccordez-le ensuite sur le moteur d’extrudeur (sur la face arrière) puis sur le <span className="bold">connecteur E_MOT</span>.
                </p>
            </div>
          </section>
        </section>


        <section id="disco-9-12" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
          <section className="col col-xl-12 col-m-24 col-xl-push-12 col-m-push-0 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/10-m-interrupteur.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/10-m-interrupteur.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/10-m-interrupteur.webm" type='video/webm' />
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
          <section className="col col-xl-12 col-m-24 col-xl-pull-12 col-m-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="title tleft">Étape 12</p>
              <h2 className="big-title">Installation de l'interrupteur</h2>
              <p>Clipsez l’interrupteur sur la face avant (le bouton 1 vers le haut de la face avant).</p>
            </div>
          </section>
        </section>

        <section id="disco-9-13" className="col-xl-24 display-flex block-video  height-350 row">
          <section className="col col-xl-12 col-m-24  block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/10-n-alim-positif.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/10-n-alim-positif.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/10-n-alim-positif.webm" type='video/webm' />
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
          <section className="col col-xl-12 col-m-24  row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="title tleft">Étape 13</p>
              <h2 className="big-title">Branchement de l’alimentation (positive)</h2>
              <p>Récupérez le câble d’alimentation simple.</p>
              <p>Raccordez-le sur le + du bornier d’alimentation de la carte.</p>
              <p>Branchez-le ensuite sur le connecteur de l’interrupteur (le plus bas).</p>
              <p>Recouvrez-le avec la protection en plastique.</p>
              <p className="bold text-red">Si vos câbles d''alimentation sont noirs : branchez le câble avec le liseré blanc sur le pôle + du
                    bornier de la carte.</p>
            </div>
          </section>
        </section>

        <section id="disco-9-14" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
          <section className="col col-xl-12 col-m-24 col-xl-push-12 col-m-push-0 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/10-o-alim-negatif.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/10-o-alim-negatif.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/10-o-alim-negatif.webm" type='video/webm' />
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
          <section className="col col-xl-12 col-m-24 col-xl-pull-12 col-m-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="title tleft">Étape 14</p>
              <h2 className="big-title">Branchement de l'alimentation (négative)</h2>
              <p>Récupérez le câble d'alimentation double avec le connecteur d'alimentation.</p>
              <p>Dénudez le fil seul.</p>
              <p>Raccordez-le sur le - du bornier d'alimentation de la carte.</p>
              <p>Branchez ensuite l'autre bout sur le connecteur de l'interrupteur.</p>
              <p>Recouvrez-le avec la protection en plastique.</p>
              <p>Rentrez le connecteur d'alimentation de biais dans la pièce plastique arrière gauche prévue à cet effet. Poussez dessus pour le
                    clipser.</p>
              <p className="italic bg-light-grey-blue">Astuce : Présentez-le de biais, poussez-le au fond et ensuite poussez vers le bas pour
                    l'enclencher).</p>
            </div>
          </section>
        </section>

        <section id="disco-9-15" className="col-xl-24 display-flex block-video  height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/10-p-lecteur-sd.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/10-p-lecteur-sd.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/10-p-lecteur-sd.webm" type='video/webm' />
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
              <p className="title tleft">Étape 15</p>
              <h2 className="big-title">Installation du lecteur SD</h2>
              <p>Récupérez le lecteur SD dans son sachet.</p>
              <p>Machine à plat, installez-le dans le cache côté avant gauche, les pins vers le haut.</p>
              <p>Bridez-le à l'aide d'une vis M3x6.</p>
            </div>
          </section>
        </section>

        <section id="disco-9-16" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
          <section className="col col-xl-12 col-m-24 col-xl-push-12 col-m-push-0 block-info-cursor row">


            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/10-q-nappe-sd.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/10-q-nappe-sd.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/10-q-nappe-sd.webm" type='video/webm' />
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
          <section className="col col-xl-12 col-m-24 col-xl-pull-12 col-m-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="title tleft">Étape 16</p>
              <h2 className="big-title">Branchement de la nappe SD</h2>
              <p>Prenez la nappe de lecteur SD.</p>
              <p className="bold">Orientez-la, cordon rose vers la face avant, les connecteurs vers le bas.</p>
              <p>Passez la nappe sous la courroie et branchez-la sur le lecteur SD.</p>
              <p>Récupérez l'adaptateur retiré de la carte à l'étape 1.</p>
              <p>Branchez la nappe dessus (il y a un détrompeur pour le sens).</p>
              <p>Remettez l'adaptateur sur la carte comme sur la vidéo.</p>

              <p className="italic bg-light-grey-blue">
                Attention, assurez-vous que l'adaptateur est bien centré sur le connecteur de la carte et que toutes les pins sont enclenchées.
                </p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Notice/10-s-fin.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">Cablâge : CHECK !</p>
            <p>Prochaine étape : les finitions.</p>
            <div className="checkbox-classic checkbox-full-width">
              <input id="yo" type="checkbox" />
              <label className="tnormal valid-step" data-redirect="/start/discoeasy200/notice-finitions.html" htmlFor="yo">
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