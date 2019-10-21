var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbars/magis');
const nav = require('../../../../content/nav-magis');

class Printer extends React.Component {
    render() {
        return (
            <Layout>
                <NavBar active={4} nav={nav} />
                <section className="col-xl-24 bg-gradient-orange row">
                    <p className="col-vtspace">Temps de préparation : 5 minutes</p>
                    <p className="col-vbspace">Temps d'impression : 45 minutes</p>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/NevaMagis/Notice/3-a-photophore-pp-3-1600x600.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-left">
                        <h1 className="title tleft">Notice de première utilisation - page 3</h1>
                        <h2 className="title tleft">Changement de couleur</h2>
                        <p className="big-title tleft">L’apparition de la couleur</p>
                        <p>Vous êtes maintenant prêt pour notre petit secret.</p>
                        <p>Il est impératif d’avoir deux couleurs différentes pour aboutir au résultat attendu. Si vous n’en avez qu’une, continuez quand même
                pour maîtriser toutes les fonctionnalités.</p>
                    </section>
                </section>

                <section className="col-xl-24 display-flex height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
                        <figure>
                            <img src="/medias/NevaMagis/Notice/3-b-copie.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <h3 className="title tleft">Étape 1</h3>
                            <p className="big-title">J’imprime avec ma Magis</p>
                            <p>Tout d’abord, téléchargez le nouveau fichier que nous vous avons préparé.</p>
                            <p>Ce fichier va finaliser votre dernière création. C’est un cache pour la bougie.</p>

                            <p className="tleft">
                                <a href="/medias/NevaMagis/Notice/gcodes/chapitre-3/dagoma0.g" className="new-btn btn-classic btn-grey btn-wide"
                                    download="dagoma0.g">
                                    Téléchargez le fichier ici
                    </a>
                            </p>

                            <p className="bg-orange text-white col-space">
                                Attention, ce fichier a été préparé pour être imprimé avec du filament Chromatik.<br /><br /> Assurez-vous que le fichier
                                s’appelle bien dagoma0.g une fois copié sur la carte.
                </p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 block-big-white-space bg-gradient-orange row">
                    <div className="wrap">
                        <h3 className="title">Étape 2</h3>
                        <p className="big-title">Lancer l'impression</p>
                        <p>&nbsp;</p>
                        <p>Placez le fichier dagoma0.g sur votre carte SD.</p>
                        <p>Insérez la carte dans l’imprimante.</p>
                        <p>Lancez ensuite l’impression.</p>
                        <p>&nbsp;</p>
                        <p className="italic">
                            Pssst ! Rappellez-vous encore une fois de la
                <a className="link-classic" href="/start/neva-magis/notice-1.html" title="Retourner à la page 1">page 1</a>
                        </p>
                    </div>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video id="my-video-communaute" className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/NevaMagis/Notice/3-d-pause-auto.mp4" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/3-d-pause-auto.ogv" type='video/ogv' />
                            <source src="/medias/NevaMagis/Notice/3-d-pause-auto.webm" type='video/webm' />
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
                            <h3 className="title tleft">Étape 3</h3>
                            <p className="big-title">Surprise !</p>
                            <p>Votre Magis s’est arrêtée toute seule. Pas de panique, nous avons programmé une pause dans le fichier.</p>
                            <p>Vous allez découvrir la fonction Tap-Tap.</p>

                            <p className="italic">
                                Si vous avez le moindre problème, commencez par
                    <a className="link-classic" href="/firmware.html" target="_blank" title="Mise à jour firmware">mettre à jour votre firmware</a>.
                                                                                            Si ce n'est pas résolu, nous sommes à votre disposition via
                    <a className="link-classic" href="/heroes/diagnostique-en-ligne.html" title="Le support">le support</a>.
                </p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video id="my-video-communaute" className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/NevaMagis/Notice/3-e-tap-tap-changement-filament.mp4" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/3-e-tap-tap-changement-filament.ogv" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/3-e-tap-tap-changement-filament.webm" type='video/mp4' />
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
                            <h3 className="title tleft">Étape 4</h3>
                            <p className="big-title">Le Tap-Tap</p>
                            <p>Tapotez 2 fois sur votre plateau.</p>
                            <p>Le filament est éjecté de l’imprimante. Vous n'avez plus qu’à le saisir et à tirer pour l’enlever.</p>
                            <p>Vérifiez que l’extrémité du filament est bien propre. N’hésitez pas à casser le bout du filament pour que l’insertion se fasse
                    bien.</p>
                            <p>Prenez votre autre bobine.</p>
                            <p className="italic">Si vous n'en avez pas, vous pouvez utiliser la première bobine ou l'échantillon fourni avec votre Magis.</p>
                            <p>Présentez le filament dans l’extrudeur. Poussez-le jusqu’à ce qu’il soit entraîné par la machine.</p>
                            <p>Pensez à retirer le PLA qui coule sous la tête.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video id="my-video-communaute" className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/NevaMagis/Notice/3-f-reprise-manuelle.mp4" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/3-f-reprise-manuelle.ogv" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/3-f-reprise-manuelle.webm" type='video/mp4' />
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
                            <h3 className="title tleft">Étape 5</h3>
                            <p className="big-title">Relancez l'impression</p>
                            <p>Appuyez sur le bouton pour relancer l'impression.</p>
                        </div>
                    </section>
                </section>


                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video id="my-video-communaute" className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/NevaMagis/Notice/3-g-bi-colore.mp4" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/3-g-bi-colore.ogv" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/3-g-bi-colore.webm" type='video/mp4' />
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
                            <p className="big-title">Plus que 10 minutes d’impression</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">
                        <figure>
                            <img src="/medias/NevaMagis/Notice/3-i-photophore-pp-3-copie.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-m-24 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <h3 className="title tleft">Étape 6</h3>
                            <p className="big-title">Assemblage</p>
                            <p>Reprenez le photophore, et assemblez-le avec le reste.</p>
                        </div>
                    </section>
                </section>



                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/NevaMagis/Notice/3-a-photophore-pp-3-1600x600.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-left">
                        <p className="big-title">Je vois la vie en couleur !</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/logiciels/cura-by-dagoma.html" htmlFor="yo">
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