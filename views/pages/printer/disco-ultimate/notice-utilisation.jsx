var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/du');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={13} nav={nav} />
        <section className="col-xl-24 bg-gradient-orange row">
          <p className=" col-vspace">Temps approximatif : 30 minutes</p>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Notice/11-k-fin.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage Disco Ultimate - Page 14 - Utilisation</h1>

            <h2 className="big-title tleft">Lançons une première impression</h2>
            <p>Dernière étape avant le grand large. Nous allons vous montrer les bonnes pratiques et les rudiments de l’impression 3D sur la Discoeasy200.</p>
          </section>
        </section>

        <section id="disco-16-1" className="col-xl-24 display-flex height-350 bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
            <figure>
              <img src="/medias/NevaMagis/Notice/b-derouleur.jpg" alt="" />
            </figure>
          </section>
          <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="title tleft">Étape 1</p>
              <p className="big-title">Choisir un fichier</p>
              <p>Nous vous proposons ici un dérouleur de bobine. Il vous sera bien utile lors de chacune de vos impressions. Pour en savoir plus sur comment trouver un fichier STL, rendez-vous
                    <a href="/road.html" className="link-classic">ici</a>.</p>

              <p>Téléchargez le fichier ci-dessous. Nous allons ensuite le préparer sur Cura.</p>
              <div className="tleft">
                <a href="/medias/DiscoEasy/Notice/16-support-bobine-stl/support-bobine.zip"
                  className="new-btn btn-valid btn-big btn-wide" download="support-bobine.zip">Télécharger</a>
              </div>
            </div>
          </section>
        </section>

        <section id="disco-16-2" className="col-xl-24 display-flex height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">
            <figure>
              <img src="/medias/DiscoEasy/Notice/16-c-slicer-cura.jpg" alt="" />
            </figure>
          </section>
          <section className="col col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="title tleft">Étape 2</p>
              <h2 className="big-title">Préparation du fichier sur Cura</h2>
              <p>Ouvrez le fichier sur cura by dagoma.</p>
              <p>Nous vous proposons les paramètres d’impression suivant : 33% en rapide.</p>
              <p>Insérez la carte SD dans l’ordinateur et cliquez sur “préparer l’impression”.</p>
            </div>
          </section>
        </section>

        <section id="disco-16-3" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Calibration/c-e5.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Calibration/c-e5.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Calibration/c-e5.webm" type='video/webm' />
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
              <p className="title tleft">Étape 3</p>
              <h2 className="big-title">Insertion du filament</h2>
              <p>Avant chaque insertion, coupez le filament pour que le bout soit propre.</p>
              <p>Normalement à cette étape, le filament est déjà en place.</p>
              <p>Nous allons quand même vous remontrer la technique.</p>
              <p>Sur un extrudeur standard, appuyez sur le bras pour le débrider.</p>
              <p>Passez le filament à la main en poussant et en effectuant de légères torsions pour faciliter son entrée.</p>
              <p>Poussez le filament jusqu’à la tête d’impression.</p>
              <p>Avec l’extrudeur+, c’est automatique.</p>
            </div>
          </section>
        </section>

        <section id="disco-16-4" className="col-xl-24 display-flex height-350 block-video row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/16-e-lancement.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/16-e-lancement.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/16-e-lancement.webm" type='video/webm' />
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
              <p className="title tleft">Étape 4</p>
              <h2 className="big-title">Lancement d’une impression</h2>
              <p>Insérez la carte SD dans le lecteur.</p>
              <p>Elle doit avoir un fichier GCODE nommé “dagoma0.g” pour être reconnu.</p>
              <p>Mettez la machine sous tension en mettant l’interrupteur sur 1.</p>

              <p className="italic bg-light-grey-blue">Info : si l’interrupteur est sur 1, que vous débranchez puis rebranchez l’imprimante 3D, elle sera mise sous tension et le fonctionnement sera le même. L’impression se lancera.</p>

              <p>Explication du rituel de démarrage : </p>
              <ul className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">Prise d’origine des axes</li>
                <li className="tleft col-vbspace">Temps de préchauffage</li>
                <li className="tleft col-vbspace">Repérage du plateau (si l’option “utilisation du palpeur” est activée)</li>
                <li className="tleft col-vbspace">Dernier temps de chauffe</li>
                <li className="tleft col-vbspace">L’impression commence</li>
              </ul>
            </div>
          </section>
        </section>

        <section id="disco-16-5" className="col-xl-24 display-flex block-video height-350 bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/16-f-premiere-couche.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/16-f-premiere-couche.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/16-f-premiere-couche.webm" type='video/webm' />
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
              <p className="title tleft">Étape 5</p>
              <h2 className="big-title">Ajustement de la première couche</h2>
              <p>La qualité de la première couche dépend de votre calibration sur Dagom’App. Il se peut que ce réglage varie entre deux lancements.</p>
              <p>Nous vous conseillons de refaire une calibration de temps en temps lorsque la première couche perd en précision.</p>
              <p>Il vous est possible d’agir sur les coupleurs pour ajuster la hauteur de la première couche.</p>
              <p>En tournant les deux en même temps dans le sens inverse des aiguilles d’une montre, la couche sera plus basse (trop basse sur la vidéo).</p>
              <p>En tournant dans l’autre sens, elle sera plus haute (trop haute sur la vidéo).</p>
              <p>Regardez à la fin de la vidéo pour voir les 3 niveaux d’appréciations de hauteur de première couche.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-c-detection-filament.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-c-detection-filament.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-c-detection-filament.webm" type='video/webm' />
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
              <p className="title tleft">Étape 6</p>
              <p className="big-title">La détection de fin de filament</p>
              <p>Désormais pendant une impression, si l’imprimante 3D est à court de filament, elle se mettra en pause toute seule et éjectera le restant de filament.</p>
              <p>Après 10 minutes de pause, la Disco Ultimate s’arrêtera de chauffer.</p>
              <p>Elle attendra que vous en insériez un nouveau pour reprendre l'impression.</p>
              <p>Appuyez sur le bouton une fois le filament inséré.</p>
              <p>Si vous lancez votre imprimante 3D sans filament, aucun soucis, elle vous attendra avant de commencer.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-d-pause-plus.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-d-pause-plus.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-d-pause-plus.webm" type='video/webm' />
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
              <p className="title tleft">Étape 7</p>
              <p className="big-title">La pause</p>
              <p>Pendant une impression, vous êtes capable de mettre l’imprimante en pause en appuyant sur le bouton. Elle continuera d'imprimer pendant quelques secondes avant de s'arrêter.</p>
              <p>Après 10 minutes de pause, la Disco Ultimate s’arrêtera de chauffer pour des raisons de sécurité.</p>
              <p>Rappuyez sur le bouton pour qu’elle recommence à imprimer. Si votre imprimante 3D était froide, elle commencera par chauffer avant de reprendre l'impression.</p>
              <p className="col-space bg-light-grey-blue italic">Fonction accessible depuis l'écran : "Interrompre impr."</p>
              <p className="bg-orange text-white col-space">Si vous appuyez sur le bouton <strong>pendant le palpage</strong>, cela interrompra totalement le lancement. Vous n'aurez qu'à relancer l'impression.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-e-ejection-filament.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-e-ejection-filament.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-e-ejection-filament.webm" type='video/webm' />
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
              <p className="title tleft">Étape 8</p>
              <p className="big-title">Ejection du filament</p>
              <p>Vous êtes en mesure de retirer automatiquement le filament en restant appuyer sur le bouton de la pause. Vous pouvez relâcher lorsque l’imprimante réagit.</p>
              <p>Si la tête d’impression est déjà chaude, le filament sortira directement.</p>
              <p>Si la tête est froide, l’imprimante commencera par chauffer avant de retirer le filament.</p>
              <p>Nous avons ajouté un témoin de progression de chauffe. La tête se déplace par rapport à sa température. Quand elle arrive à droite, elle est prête.</p>
              <p className="col-space bg-light-grey-blue italic">
                Fonction accessible depuis l'écran : "Changement de filament"
                </p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-f-insertion-filament.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-f-insertion-filament.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-f-insertion-filament.webm" type='video/webm' />
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
              <p className="title tleft">Étape 9</p>
              <p className="big-title">Insertion du filament</p>
              <p>Avant chaque insertion, coupez le filament pour que le bout soit propre.</p>
              <p>Lorsque l’imprimante n’a pas de filament, vous pouvez en insérer un nouveau en le présentant dans l’extrudeur. Poussez-le jusqu’à ce qu’il soit entrainé par l’extrudeur.</p>
              <p>Comme pour l’éjection, vous pouvez l’utiliser à chaud comme à froid avec le même comportement :</p>
              <p>Si la tête d’impression est déjà chaude, le filament entrera directement.</p>
              <p>Si la tête est froide, l’imprimante commencera par chauffer avant d'insérer le filament.</p>
              <p>Retirez l'excédent de purge en sortie de la buse, attention c'est chaud.</p>
            </div>
          </section>
        </section>

        <section id="disco-16-6" className="col-xl-24 display-flex height-350 block-video row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto"
              poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/16-g-arreter.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/16-g-arreter.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/16-g-arreter.webm" type='video/webm' />
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
              <p className="title tleft">Étape 10</p>
              <h2 className="big-title">Arrêter proprement la Disco Ultimate</h2>
              <p>Pendant une impression, passez l’interrupteur à 0.</p>
              <p>Retirez la carte SD.</p>
              <p>Rallumez la machine pour que la tête refroidisse convenablement.</p>
              <p>Quand le ventilateur avant s’arrête, vous pouvez l’éteindre sans soucis.</p>
            </div>
          </section>
        </section>

        <section id="disco-16-7" className="col-xl-24 display-flex height-350 bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
            <figure>
              <img src="/medias/NevaMagis/Notice/c-assemblage-derouleur.jpg" />
            </figure>
          </section>
          <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="title tleft">Étape 11</p>
              <h2 className="big-title">Assemblage du dérouleur</h2>
              <p>N'hésitez pas à le faire tourner un peu à la main si vous voyez que l'assemblage ne pivote pas bien.</p>
            </div>
          </section>
        </section>

        <section id="disco-16-8" className="col-xl-24 display-flex height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">
            <figure>
              <img src="/medias/NevaMagis/Notice/d-assemblage-derouleur.jpg" alt="" />
            </figure>
          </section>
          <section className="col col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="title tleft">Étape 12</p>
              <h2 className="big-title">Assemblage du dérouleur</h2>
              <p>Déposez la bobine sur votre dérouleur.</p>
              <p>Nous proposons un modèle plus évolué
                    <a href="/medias/DiscoEasy/Notice/16-support-bobine-stl/support-bobine.zip"
                  className="link-classic">ici</a>
              </p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Notice/11-k-fin.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">Étape 13</p>
            <p>Votre montage et votre initiation sont terminés.</p>
          </section>
        </section>
      </Layout >
    );
  }
}

module.exports = Printer;
