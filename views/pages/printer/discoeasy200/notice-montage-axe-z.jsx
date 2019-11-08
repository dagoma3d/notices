var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/de200');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={6} nav={nav} />
        <section className="col-xl-24 bg-gradient-orange row">
          <p className=" col-vspace">Temps approximatif : 25 minutes</p>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Notice/8-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage DiscoEasy200 - Page 7 - Assemblage de l’axe Z</h1>
            <h2 className="big-title tleft">Assemblage de l’axe Z</h2>
            <p>Nous allons maintenant assembler l’axe Z de l’imprimante 3D. Elle va commencer à ressembler de plus en plus au produit fini.</p>
          </section>
        </section>

        <section id="disco-7-prerequis" className="col-xl-24 display-flex height-350 bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
            <figure>
              <img src="/medias/DiscoEasy/Notice/8-b-prerequis.jpg" alt="" />
            </figure>
          </section>
          <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Les pré-requis</p>
              <ul className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">1 axe X assemblé</li>
                <li className="tleft col-vbspace">1 base</li>
                <li className="tleft col-vbspace">4 barres longues</li>
                <li className="tleft col-vbspace">2 anti-woobles (les pièces retirées page 5)</li>
                <li className="tleft col-vbspace">2 ressorts</li>
                <li className="tleft col-vbspace">2 coupleurs</li>
                <li className="tleft col-vbspace">2 moteurs de Z (les plus petits)</li>
                <li className="tleft col-vbspace">2 tiges filetées</li>
                <li className="tleft col-vbspace">2 écrous M8 (il doit en rester 0)</li>
                <li className="tleft col-vbspace">4 vis M3x6 (il doit en rester 4)</li>
              </ul>
            </div>
          </section>
        </section>

        <section id="disco-7-1" className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/8-c-moteur-z.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/8-c-moteur-z.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/8-c-moteur-z.webm" type='video/webm' />
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
              <h2 className="big-title">Installation des moteurs de Z</h2>
              <p>La base à plat, prenez un moteur, axe vers le haut, et glissez-le sous la base.</p>
              <p>Faites-le ressortir au niveau des fixations latérales.</p>
              <p>Orientez le de biais, le connecteur pointant vers la face arrière.</p>
              <p>Vissez-le à l’aide de deux vis M3x6.</p>
              <p>Prenez ensuite un coupleur. Placez-le sur l’axe du moteur (attention, les deux côtés ont un trou de diamètre différent, choisissez
                    le plus serré).</p>
              <p>Il doit être à fleur de la fixation latérale. Utilisez la spatule pour le poser dessus puis serrez la vis inférieure fermement.</p>
              <p>Répétez l’opération sur le second moteur.</p>
            </div>
          </section>
        </section>

        <section id="disco-7-2" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/8-d-barres.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/8-d-barres.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/8-d-barres.webm" type='video/webm' />
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
              <h2 className="big-title">Montage des barres de l’axe Z</h2>
              <p>Prenez les 4 barres longues.</p>
              <p>Montez-les dans les trous des fixations latérales.</p>
              <p>Forcez bien pour que les barres soient au fond de chaque trou.</p>
              <p className="italic bg-light-grey-blue">Astuce : Un petit coup de maillet en caoutchouc aidera bien.</p>
            </div>
          </section>
        </section>

        <section id="disco-7-3" className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/8-e-axe-x.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/8-e-axe-x.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/8-e-axe-x.webm" type='video/webm' />
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
              <h2 className="big-title">Installation de l’axe X</h2>
              <p>Prenez l’axe X, orientez-le pour que le moteur de X soit à gauche de la machine lorsque la face avant est devant vous.</p>
              <p>Insérez les barres dans les roulements <span className="text-red link-classic bold">sans forcer</span> et faites coulisser l’axe
                    jusqu’en bas.</p>
              <p>Faites quelques allers-retours pour que l’ensemble s’ajuste bien.</p>
              <p>Mettez ensuite les ressorts dans leur logement comme sur la vidéo.</p>
            </div>
          </section>
        </section>

        <section id="disco-7-4" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
            <figure>
              <img src="/medias/DiscoEasy/Notice/8-e-controle.jpg" alt="" />
            </figure>
          </section>
          <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="title tleft">Étape 4</p>
              <h2 className="big-title">Petite vérification</h2>
              <p>Normalement voici ce que vous avez obtenu. Vérifiez bien le sens des éléments.</p>
            </div>
          </section>
        </section>

        <section id="disco-7-5" className="col-xl-24 display-flex block-video height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/8-f-tiges.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/8-f-tiges.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/8-f-tiges.webm" type='video/webm' />
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
              <h2 className="big-title">Montage des tiges filetées</h2>
              <p>Vissez l’écrou M8 sur une tige jusqu’à environ 1 pouce de l’extrémité.</p>
              <p>Faites de même sur la seconde tige.</p>
              <p>Prenez un anti-wooble. Soulevez un chariot de X. Placez la fourche autour de la tige arrière et alignez l’écrou sur le trou du
                    coupleur.</p>
              <p>Reprenez une tige filetée et présentez-la côté écrou dans le logement où se trouve le ressort.</p>
              <p>Assurez-vous d’être bien aligné sur l’écrou de l’anti-wooble.</p>
              <p>Dévissez la tige pour faire descendre l'écrou en dessous de la lucarne.</p>
              <p>Une fois en dessous, commencez à visser dans l’anti-wooble.</p>
              <p>Arrêtez de visser lorsque le chariot commence à se lever.</p>
              <p>Répétez l’opération sur le deuxième chariot.</p>
            </div>
          </section>
        </section>

        <section id="disco-7-6" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

            <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
              <source src="/medias/DiscoEasy/Notice/8-g-coupleurs.mp4" type='video/mp4' />
              <source src="/medias/DiscoEasy/Notice/8-g-coupleurs.ogv" type='video/ogv' />
              <source src="/medias/DiscoEasy/Notice/8-g-coupleurs.webm" type='video/webm' />
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
              <h2 className="big-title">Serrage des coupleurs</h2>
              <p>Soulevez un chariot pour vous assurer que la tige filetée est bien prise dans le coupleur.</p>
              <p>Remettez-le en place puis vissez légèrement pour avoir un peu d’espace.</p>
              <p>Appuyez sur le coupleur pour le compresser, puis serrez la vis supérieure.</p>
              <p>En relâchant, vous verrez le chariot monter légèrement.</p>
              <p>Répétez l’opération sur le second coupleur.</p>
            </div>
          </section>
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Notice/8-h-fin.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">Assemblage de l’axe Z : CHECK !</p>
            <p>Vérifiez que les pièces sont orientées comme sur la photo.</p>
            <div className="checkbox-classic checkbox-full-width">
              <input id="yo" type="checkbox" />
              <label className="tnormal valid-step" data-redirect="/start/discoeasy200/notice-assemblage-plateau.html" htmlFor="yo">
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