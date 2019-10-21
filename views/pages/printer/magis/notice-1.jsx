var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbars/magis');
const nav = require('../../../../content/nav-magis');

class Printer extends React.Component {
    render() {
        return (
            <Layout>
                <NavBar active={1} nav={nav} />
                <section className="col-xl-24 bg-gradient-orange row">
                    <p className="col-vtspace">Temps de préparation : 5 minutes</p>
                    <p className="col-vbspace">Temps d'impression : 2 heures</p>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/NevaMagis/Notice/1-a-photophore-pp-1-3.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-left">
                        <h1 className="title tleft">Notice de première utilisation - page 1</h1>
                        <h2 className="title tleft">Première impression</h2>
                        <p className="big-title tleft">Votre Magis est prête !</p>
                        <p>C'est l'heure pour vous de réussir votre première impression.</p>
                        <p>Dans ce parcours, découvrez toutes les fonctionnalités de votre imprimante 3D. À l'arrivée, devenez le maître de la Magis !</p>
                    </section>
                </section>

                <section className="col-xl-24 display-flex height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
                        <figure>
                            <img src="/medias/NevaMagis/Notice/1-c-photophore-pp-1-copie.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <h3 className="title tleft">Étape 1</h3>
                            <p className="big-title">J’imprime avec ma Magis</p>
                            <p>Tout d'abord, téléchargez le fichier que nous vous avons sélectionné avec soin.</p>
                            <p>Ceci est un... photophore.</p>
                            <p className="tleft">
                                <a href="/medias/NevaMagis/Notice/gcodes/chapitre-1/dagoma0.g" className="new-btn btn-classic btn-grey btn-wide"
                                    download="dagoma0.g">
                                    Téléchargez le fichier ici
                    </a>
                            </p>
                            <p className="bg-orange text-white col-space">
                                Attention, ce fichier a été préparé pour être imprimé avec du filament Chromatik.
                </p>

                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex row">
                    <section className="col col-xl-12 col-m-24 bg-light-grey-blue block-info-cursor row">
                        <figure className="notice-small-img">
                            <img src="/medias/NevaMagis/Notice/dagoma0-to-SD.png" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-m-24 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <h3 className="title tleft">Étape 2</h3>
                            <p className="big-title">Préparez la carte SD</p>
                            <p>Déplacez le fichier dagoma0.g sur la carte SD.</p>
                            <p className="bg-orange text-white col-space">Assurez-vous que le fichier s'appelle bien dagoma0.g une fois copié sur la carte.
                </p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 block-big-white-space bg-gradient-orange row">
                    <p className="big-title">Pour une impression de qualité, votre buse doit être parfaitement propre.</p>
                </section>

                <section className="moving-banner-top row">
                    <article className="row">
                        <figure>
                            <div className="hover-tap"><i className="icon-icon-tap"></i></div>
                            <img src="/medias/NevaMagis/Notice/1-e-buse-sale.jpg" alt="Tête avec PLA" />
                            <figcaption className="error row">
                                <p className="title-banner title">
                                    <i className="fa fa-times-circle-o text-red" aria-hidden="true"></i>
                                    Tête avec PLA
                    </p>
                                <p>Si vous imprimez comme ça, votre première couche sera trop haute. Votre impression n'accrochera pas au plateau car il reste
                        du PLA sur la tête. Attention, ça peut être chaud.</p>
                            </figcaption>
                        </figure>
                    </article>
                    <article className="row">
                        <figure>
                            <div className="hover-tap"><i className="icon-icon-tap"></i></div>
                            <img src="/medias/NevaMagis/Notice/1-e-buse-propre.jpg" alt="Tête propre" />
                            <figcaption className="valid">
                                <p className="title-banner title">
                                    <i className="fa fa-check-circle-o text-green" aria-hidden="true"></i>
                                    Tête propre</p>
                                <p>Super ! Elle est prête à imprimer.</p>
                            </figcaption>
                        </figure>
                    </article>
                </section>

                <section className="col-xl-24 display-flex block-video row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-gradient-orange block-info-cursor row">

                        <video id="my-video-communaute" className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/NevaMagis/Notice/1-f-sd-machine.MP4" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/1-f-sd-machine.ogv" type='video/ogv' />
                            <source src="/medias/NevaMagis/Notice/1-f-sd-machine.webm" type='video/webm' />
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
                            <h3 className="title tleft">Étape 3</h3>
                            <p className="big-title">Lancement de l'impression</p>
                            <p>Insérez la carte SD dans la machine et appuyez sur le bouton. Si le bouton est allumé de manière fixe, tout est ok.</p>
                            <p className="text-red">La buse doit être propre.</p>
                            <p>Une fois lancée, elle passera par les étapes suivantes : </p>
                            <ul className="alternate-li">
                                <li>
                                    <p className="tleft">Un temps de pré-chauffe</p>
                                </li>
                                <li>
                                    <p className="tleft">Un palpage du plateau</p>
                                </li>
                                <li>
                                    <p className="tleft">Un temps de chauffe</p>
                                </li>
                                <li>
                                    <p className="tleft">Début de l'impression</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex row block-video">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video id="my-video-communaute" className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/NevaMagis/Notice/1-g-piece-beige.mp4" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/1-g-piece-beige.ogv" type='video/ogv' />
                            <source src="/medias/NevaMagis/Notice/1-g-piece-beige.webm" type='video/webm' />
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
                            <p className="big-title">Cette pièce s’imprime en 2 heures environ</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex row block-video">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video id="my-video-communaute" className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/NevaMagis/Notice/1-h-plateau.mp4" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/1-h-plateau.ogv" type='video/ogv' />
                            <source src="/medias/NevaMagis/Notice/1-h-plateau.webm" type='video/webm' />
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
                            <p className="big-title">Après chaque impression</p>
                            <p>Retirez tout ce qu'il reste sur le plateau à l'aide de votre spatule.</p>
                            <p>Pour une excellente adhérence au plateau, nettoyez régulièrement celui-ci à l'aide des lingettes isopropyliques.</p>
                        </div>
                    </section>
                </section>


                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/NevaMagis/Notice/1-a-photophore-pp-1-3.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-left">
                        <p className="big-title">J'ai réussi ma première impression !</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/neva-magis/notice-1-bis.html" htmlFor="yo">
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