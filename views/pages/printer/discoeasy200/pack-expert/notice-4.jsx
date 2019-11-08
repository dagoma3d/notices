var React = require('react');
var Layout = require('../../../../layouts/default');
var NavBar = require('../../../../components/navbar');
var nav = require("../../../../../content/nav/expert");

class PackExpert extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={3} nav={nav} />
        <section className="col-xl-24 bg-gradient-orange row">
          <p className=" col-vspace">Temps approximatif : 10 minutes</p>
        </section>
        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Trapezoidales/1-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage pack expert - Finitions</h1>
            <p className="big-title tleft">Finitions</p>
            <p>Nous allons maintenant remonter les derniers éléments de finitions avant de remettre en marche votre machine.</p>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/4-b-top.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/4-b-top.ogv" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/4-b-top.webm" type='video/mp4' />
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
              <h2 className="title tleft">Etape 1</h2>
              <p className="big-title">Remise en place du top</p>
              <p>Remettez le top en place. La partie la plus grande doit être vers la face avant.</p>
              <p>Assurez-vous qu’il soit bien enfoncé.</p>
              <p>Revissez les vis de serrage.</p>
              <p>Remettez le tube PTFE en place en le passant entre les deux barres du top.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/4-c-tension-courroie-tete.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/4-c-tension-courroie-tete.ogv" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/4-c-tension-courroie-tete.webm" type='video/mp4' />
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
              <h2 className="title tleft">Étape 2</h2>
              <p className="big-title">Ajustement de la tension de la courroie de la tête</p>
              <p>Placez la tête à gauche.</p>
              <p>Détachez la courroie du côté droit.</p>
              <p>Tirez sur le bout libre sans effort.</p>
              <p>Forcez pour ajouter 2 crans de tension et re-verrouiller la courroie.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/4-d-gaine.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/4-d-gaine.ogv" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/4-d-gaine.webm" type='video/mp4' />
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
              <h2 className="title tleft">Etape 3</h2>
              <p className="big-title">Remise en place de la gaine</p>
              <p>Remettez la gaine en place en récupérant les câbles de la butée et du moteur.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/4-e-cable-management.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/4-e-cable-management.ogv" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/Trapezoidales/4-e-cable-management.webm" type='video/mp4' />
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
              <h2 className="title tleft">Étape 4</h2>
              <p className="big-title">Gestion des câbles</p>
              <p>Utilisez les colliers de serrage pour finir proprement votre montage.</p>
              <p>Il est important qu’aucun câble ne se balade au dessus de la carte pour éviter d’être abîmé par le plateau.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Trapezoidales/1-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">Finitions : CHECK !</p>
            <div className="checkbox-classic checkbox-full-width row">
              <p className="tleft col-vbspace">Nous allons maintenant mettre à jour la machine pour qu’elle intègre sa nouvelle installation.</p>
              <a href="/firmware/de200" className="new-btn btn-valid btn-big btn-wide">Mettre à jour</a>
            </div>
          </section>
        </section>


      </Layout>
    );
  }
}

module.exports = PackExpert;