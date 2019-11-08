var React = require('react');
var Layout = require('../../../../layouts/default');
var NavBar = require('../../../../components/navbar');
var nav = require('../../../../../content/nav/bicolor/de200');

class BiColor extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={7} nav={nav} />
        <section className="col-xl-24 bg-gradient-orange row">
          <p className=" col-vspace"></p>
        </section>
        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Bicouleur/7-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage pack bi-couleur - première impression</h1>
            <p className="big-title tleft">Imprimer en bicouleur</p>
            <p>Ca y est, votre Discoeasy200 est prête pour imprimer en bi-couleur.</p>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video bg-light-grey-blue height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/7-b-chargement-filament.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/7-b-chargement-filament.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/Bicouleur/7-b-chargement-filament.webm" type='video/webm' />
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
              <h2 className="big-title tleft">Installation du filament</h2>
              <p>Avant chaque insertion, coupez le filament pour que le bout soit propre.</p>
              <p>Dans l’extrudeur n°2, présentez le filament dans l’extrudeur.  Poussez-le jusqu’à ce qu’il soit entrainé par l’extrudeur.</p>
              <p>Si la tête d’impression est déjà chaude, le filament entrera directement.</p>
              <p>Si la tête est froide, l’imprimante commencera par chauffer avant d'insérer le filament.</p>
              <p>Retirez l'excédent de purge en sortie de la buse, attention c'est chaud.</p>
              <p>Si vous avez déjà l’extrudeur+, vous connaissez déjà. Faites de même dans l’extrudeur n°1.</p>
              <p>Si vous n’avez pas l’extrudeur+, chargez le filament manuellement comme à votre habitude.</p>
              <p>Arrêtez le filament à l’extrémité du tube PTFE côté tête d’impression.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">
            <figure>
              <img src="/medias/DiscoEasy/Add-on/Bicouleur/7-c-fichier.jpg" />
            </figure>
          </section>
          <section className="col col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <h2 className="big-title tleft">Un gcode déjà tout prêt</h2>
              <p>Si vous êtes impatient de lancer votre première impression bicouleur, nous vous avons préparer un gcode. Téléchargez le et mettez le sur votre carte SD. Il doit s’appeler dagoma0.g.</p>
              <p className="tleft">
                <a href="/medias/DiscoEasy/Add-on/Bicouleur/fichiers/dagoma0.g"
                  className="new-btn btn-classic btn-grey btn-wide" download="dagoma0.g">
                  Télécharger
                    </a>
              </p>
              <p>Si vous voulez lancer votre propre fichier, rendez-vous dans la prochaine page !</p>
              <p>Vous connaissez la chanson, c’est un lancement tout à fait normal : téléchargez le fichier, transférez-le sur la carte SD, insérez la carte dans l’imprimante 3D puis allumez-la.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Bicouleur/7-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">Première impression terminée</p>
            <p>Nous allons maintenant voir comment préparer vous même un gcode bi-couleur à l’aide de notre nouveau cura.</p>
            <div className="checkbox-classic checkbox-full-width">
              <input id="yo" type="checkbox" />
              <label className="tnormal valid-step"
                htmlFor="yo">
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
