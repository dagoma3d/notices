var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/de200');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={this.props.active ? this.props.active : 12} nav={this.props.nav ? this.props.nav : nav} />
        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Software/a-intro-maj-disco.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-plus-top block-caption-right">
            <p className="big-title tleft">
              Calibrez votre DiscoEasy200
            </p>
            <p>Votre imprimante 3d a besoin de vous pour retrouver ses repères. Une bonne calibration permet d’obtenir une première couche propre.
            </p>
          </section>
        </section>


        <section className="col-xl-24 display-flex height-350 row">
          <section className="col-xl-12 col-m-24 color-anthracite block-info-cursor row">
            <figure className="notice-small-img-small">
              <img src="/medias/DiscoEasy/Calibration/b1-prerequis-de200.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Les prérequis</p>
              <ul>
                <li>
                  <p className="tleft">A. Il vous faut une imprimante 3d Dagoma</p>
                </li>
                <li>
                  <p className="tleft">B. Un câble USB-B (fournis avec ton imprimante)</p>
                </li>
                <li>
                  <p className="tleft">C. Un ordinateur et D. Dagom’app</p>
                </li>
                <li>
                  <p className="tleft">E. Du filament</p>
                </li>
                <li>
                  <p className="tleft">F. La cible fournie avec le kit (une carte de visite fonctionne aussi)</p>
                </li>
              </ul>
              <p className="tleft col-vspace">
                <a href="https://dist.dagoma3d.com/DagomApp" target="_blank" className="new-btn btn-valid btn-wide">Télécharger Dagom'app</a>
              </p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 color-anthracite block-info-cursor row">

            <video id="my-video-communaute" className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
              <source src="/medias/DiscoEasy/Calibration/b2-parallelisme.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Calibration/b2-parallelisme.ogv" type='video/mp4' />
              <source src="/medias/DiscoEasy/Calibration/b2-parallelisme.webm" type='video/mp4' />
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
          <section className="col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Dernier ajustement</p>
              <p>Avant de commencer la calibration, vous avez un petit ajustement à faire.
                    Il faut s’assurer que les barres sur lesquelles se déplace la tête soient bien parallèles au plateau.</p>
              <p>Placez l’imprimante 3D face à vous. Vous allez agir manuellement sur les coupleurs comme sur la vidéo
                    pour faire monter ou descendre l’axe.</p>
              <p>Pour un réglage précis, placez le plateau au centre de la machine et la tête à gauche. Faites descendre
                  la tête pour que la buse effleure le plateau. Déplacez la tête manuellement à droite et faites-la effleurer à nouveau le
                    plateau.</p>
              <p>Lorsque la tête effleure le plateau de gauche à droite, votre réglage est bon. Vous pouvez passer à la calibration.</p>
            </div>
          </section>
        </section>



        <section className="col-xl-24 block-big-white-space bg-gradient-orange row">
          <p className="big-title">Commençons !</p>
          <p>Lancez Dagom’app et suivez les instructions</p>
        </section>

        <section className="wrap display-flex height-350 row">
          <section className="col-xl-12 col-m-24 block-info-cursor row">
            <figure className="notice-small">
              <img src="/medias/DiscoEasy/Calibration/dagomapp-e1.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Etape 1</p>
              <p>Cliquez sur "Je configure mon imprimante".</p>
            </div>
          </section>
        </section>

        <section className="wrap display-flex height-350 row">
          <section className="col-xl-12 col-m-24 block-info-cursor row">
            <figure className="notice-small">
              <img src="/medias/DiscoEasy/Calibration/dagomapp-e2.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Etape 2</p>
              <p>Cochez les étapes une fois vérifiées.</p>
            </div>
          </section>
        </section>

        <section className="wrap display-flex height-350 row">
          <section className="col-xl-12 col-m-24 block-info-cursor row">
            <figure className="notice-small">
              <img src="/medias/DiscoEasy/Calibration/dagomapp-e3.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Etape 3</p>
              <p>
                Cliquez sur DiscoEasy200
                </p>
            </div>
          </section>
        </section>

        <section className="wrap display-flex height-350 row">
          <section className="col-xl-12 col-m-24 block-info-cursor row">
            <figure className="notice-small">
              <img src="/medias/DiscoEasy/Calibration/dagomapp-e4.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Etape 4</p>
              <p>Reliez votre imprimante 3d à l'ordinateur via le cable USB fournis.</p>
              <p>Pour le passage du câble regarde la vidéo suivante :</p>
              <p className="tleft col-vbspace">
                <button className="new-btn btn-classic btn-grey btn-wide btn-show-video">Lire la vidéo</button>
              </p>
            </div>
          </section>
          <section className="col-xl-24 row block-video block-video-hidden">
            <div className="close-video">
              <i className="fa fa-close"></i>
            </div>
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
              <source src="/medias/DiscoEasy/Calibration/c-e3.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Calibration/c-e3.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Calibration/c-e3.webm" type='video/webm' />

              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
        </section>

        <section className="wrap display-flex height-350 row">
          <section className="col-xl-12 col-m-24 block-info-cursor row">
            <figure className="notice-small">
              <img src="/medias/DiscoEasy/Calibration/dagomapp-calibration-e5.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Etape 5</p>
              <p>Choisissez “Une impression parfaite” puis cliquez sur la flèche bleue.</p>
            </div>
          </section>
        </section>

        <section className="wrap display-flex height-350 row">
          <section className="col-xl-12 col-m-24 block-info-cursor row">
            <figure className="notice-small">
              <img src="/medias/DiscoEasy/Calibration/dagomapp-calibration-e6.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Etape 6</p>
              <p>Cliquez sur "Réglage de la première couche". </p>
            </div>
          </section>
        </section>

        <section className="wrap display-flex height-350 row">
          <section className="col-xl-12 col-m-24 block-info-cursor row">
            <figure className="notice-small">
              <img src="/medias/DiscoEasy/Calibration/dagomapp-calibration-e7.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Etape 7</p>
              <p>Pour l’insertion du filament vous avez une petite vidéo d’aide ici :</p>
              <p className="tleft col-vbspace">
                <button className="new-btn btn-classic btn-grey btn-wide btn-show-video">Lire la vidéo</button>
              </p>
              <p>L'insertion est automatique avec l'add-on "extrudeur+"</p>
              <p>Cochez les étapes une fois vérifiées.</p>
              <p>Si vous avez perdu la cible, une carte de visite fonctionnera tout aussi bien.</p>
              <p>Après cette étape, l’imprimante va commencer à bouger</p>
            </div>
          </section>
          <section className="col-xl-24 row block-video block-video-hidden">
            <div className="close-video">
              <i className="fa fa-close"></i>
            </div>
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
              <source src="/medias/DiscoEasy/Calibration/c-e5.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Calibration/c-e5.ogv" type='video/mp4' />
              <source src="/medias/DiscoEasy/Calibration/c-e5.webm" type='video/mp4' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
        </section>

        <section className="wrap display-flex height-350 row">
          <section className="col-xl-12 col-m-24 block-info-cursor row">
            <figure className="notice-small">
              <img src="/medias/DiscoEasy/Calibration/dagomapp-calibration-e8.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Etape 8</p>
              <p>Placez la cible (ou toute autre carte) sur la plateau, sous la buse, puis cliquez sur la flèche bleue.</p>
            </div>
          </section>
        </section>

        <section className="wrap display-flex height-350 row">
          <section className="col-xl-12 col-m-24 block-info-cursor row">
            <figure className="notice-small">
              <img src="/medias/DiscoEasy/Calibration/dagomapp-calibration-e9.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Etape 9</p>
              <p>Vous allez maintenant régler la hauteur de la tête d’impression.</p>
              <p>Faites descendre la tête petit à petit à l’aide de la flèche du bas dans Dagom’app.</p>
              <p>Faites bouger la cible d'avant en arrière. Lorsque vous sentez une résistance, arrêtez de la faire descendre.</p>
              <p>Vous avez une petite vidéo des réactions de la machine ici :</p>
              <p className="tleft col-vbspace">
                <button className="new-btn btn-classic btn-grey btn-wide btn-show-video">Lire la vidéo</button>
              </p>
              <p>Si la carte ne bouge plus, remontez d'un cran.</p>
              <p>Une fois réglé, cliquez sur la flèche bleue.</p>

            </div>
          </section>
          <section className="col-xl-24 row block-video block-video-hidden">
            <div className="close-video">
              <i className="fa fa-close"></i>
            </div>
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
              <source src="/medias/DiscoEasy/Calibration/c-e6.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Calibration/c-e6.ogv" type='video/mp4' />
              <source src="/medias/DiscoEasy/Calibration/c-e6.webm" type='video/mp4' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
        </section>

        <section className="wrap display-flex height-350 row">
          <section className="col-xl-12 col-m-24 block-info-cursor row">
            <figure className="notice-small">
              <img src="/medias/DiscoEasy/Calibration/dagomapp-calibration-e10.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Etape 10</p>
              <p>C’est bientôt fini ! Après cette étape, votre imprimante 3d va se préparer à imprimer.</p>
              <p>Elle va bouger un peu, chauffer et elle commencera à imprimer.</p>
              <p>Dans l’étape suivant vous allez ajuster avec précisions la hauteur de la première couche.</p>
            </div>
          </section>
        </section>

        <section className="wrap display-flex height-350 row">
          <section className="col-xl-12 col-m-24 block-info-cursor row">
            <figure className="notice-small">
              <img src="/medias/DiscoEasy/Calibration/dagomapp-calibration-e11.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Etape 11</p>
              <p>Dans cette interface, vous allez pouvoir monter ou descendre la hauteur de la première couche.</p>
              <p>Si elle est trop écrasé, l’extrudeur ne fera que forcer. Cliquez sur “plus haut”.</p>
              <p>Si elle est trop haute, elle ne tiendra pas sur le plateau. Cliquez sur “plus bas”.</p>
              <p>Elle va imprimer plusieurs petits cercles. Une fois que la hauteur de couche est bonne,
                    cliquez sur “Je suis satisfait” puis sur “enregistrer”.</p>
              <p>Vous avez une petite vidéo des réactions de la machine ici :</p>
              <p className="tleft col-vbspace">
                <button className="new-btn btn-classic btn-grey btn-wide btn-show-video">Lire la vidéo</button>
              </p>
            </div>
          </section>
          <section className="col-xl-24 row block-video block-video-hidden">
            <div className="close-video">
              <i className="fa fa-close"></i>
            </div>
            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
              <source src="/medias/DiscoEasy/Calibration/c-e8.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Calibration/c-e8.ogv" type='video/mp4' />
              <source src="/medias/DiscoEasy/Calibration/c-e8.webm" type='video/mp4' />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
            </video>
          </section>
        </section>

        <section className="wrap display-flex height-350 row">
          <section className="col-xl-12 col-m-24 block-info-cursor row">
            <figure className="notice-small">
              <img src="/medias/DiscoEasy/Calibration/dagomapp-calibration-e12.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Etape 12</p>
              <p>Votre imrimante 3d est calibrée et prête à imprimer.</p>
              <p>Ne vous inquiétez pas si la valeur obtenue est différente de notre exemple.</p>
              <p>Si vous étiez en train d'installer un add-on, n'oubliez que ce n'est pas fini.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 block-white-space bg-gradient-orange row">
          <p>Vous pourrez intervenir manuellement sur votre imprimante pour ajuster la hauteur de la première couche.</p>
          <p>Vous pourrez refaire cette calibration de temps en temps si la première couche n’est plus bonne.</p>
          <div className="col-xl-12 col-xl-offset-6 col-l-18 col-l-offset-3 col-m-24 col-m-offset-0 row col-vspace">
            <div className="checkbox-classic checkbox-full-width">
              <input id="yo" type="checkbox" />
              <label className="tnormal valid-step" data-redirect="/cura-by-dagoma/de200"
                htmlFor="yo">
                Je valide cette étape !
                </label>
            </div>
          </div>
        </section>

      </Layout>
    );
  }
}

module.exports = Printer;