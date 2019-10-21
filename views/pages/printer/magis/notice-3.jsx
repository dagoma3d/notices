var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbars/magis');
const nav = require('../../../../content/nav-magis');

class Printer extends React.Component {
    render() {
        return (
            <Layout>
                <NavBar active={3} nav={nav} />
                <section className="col-xl-24 bg-gradient-orange row">
                    <p className="col-vtspace">Temps de préparation : 5 minutes</p>
                    <p className="col-vbspace">Temps d'impression : 1 heures 30 minutes</p>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/NevaMagis/Notice/2-a-1600x600.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-left">
                        <h1 className="title tleft">Notice de première utilisation - page 2</h1>
                        <h2 className="title tleft">Utiliser la fonction Pause</h2>
                        <p className="big-title tleft">Accordez-vous une pause</p>
                        <p>Dans ce nouveau chapitre du grand livre de la Magis, vous apprenez à vous servir de la fonction Pause. Nous allons vous montrer une
                    de ses utilisations.</p>
                        <p>Attention ! Pour ce nouveau tour, vous avez besoin d’un paquet de gros sel, riz, quinoa, ...</p>
                    </section>
                </section>

                <section className="col-xl-24 display-flex height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
                        <figure>
                            <img src="/medias/NevaMagis/Notice/2-b-photophore-pp-2-copie.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <h3 className="title tleft">Étape 1</h3>
                            <p className="big-title">J’imprime avec ma Magis</p>
                            <p>Tout d’abord, téléchargez le nouveau fichier que nous vous avons préparé.</p>
                            <p>Ce fichier va compléter votre première création. C’est un socle pour le photophore.</p>

                            <p className="tleft">
                                <a href="/medias/NevaMagis/Notice/gcodes/chapitre-2/dagoma0.g" className="new-btn btn-classic btn-grey btn-wide"
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
                        <p className="big-title">Lancez l'impression</p>
                        <p>&nbsp;</p>
                        <p>Placez le fichier dagoma0.g sur ta carte SD.</p>
                        <p>Insérez la carte dans l’imprimante.</p>
                        <p>Lancez ensuite l’impression.</p>
                        <p>&nbsp;</p>
                        <p className="italic">
                            Pssst ! Rappellez-vous de la
                    <a className="link-classic" href="/start/neva-magis/notice-1.html" title="Retourner à la page 1">page 1</a>
                        </p>
                    </div>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video id="my-video-communaute" className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/NevaMagis/Notice/2-d-pause-manuelle.mp4" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/2-d-pause-manuelle.ogv" type='video/ogv' />
                            <source src="/medias/NevaMagis/Notice/2-d-pause-manuelle.webm" type='video/webm' />
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
                            <h4 className="big-title">Comment faire une pause&nbsp;?</h4>
                            <p>Laissez l’impression tourner pendant 45 minutes environ.</p>
                            <p>Appuyez ensuite sur le bouton pour la mettre en pause.</p>
                            <p>&nbsp;</p>
                            <p className="italic">Vous n'avez pas de gros sel, riz, quinoa, ... ? Profitez de ces 45 minutes d'impression pour aller en
                        acheter !</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video id="my-video-communaute" className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/NevaMagis/Notice/2-e-video-remplissage.mp4" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/2-e-video-remplissage.ogv" type='video/ogv' />
                            <source src="/medias/NevaMagis/Notice/2-e-video-remplissage.webm" type='video/webm' />
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
                            <p className="big-title">Mais pourquoi du sel&nbsp;?</p>
                            <p>Le but est d'alourdir votre pièce pour la rendre plus stable.</p>
                            <p>Versez le gros sel dans les trous de l’impression.</p>
                            <p className="bg-orange text-white col-space">Attention ! Utilisez du gros sel et non du sel fin. La Magis utilise un ventilateur
                                pour refroidir le PLA. Le sel fin est trop volatile, votre bureau risque de le regretter. Assurez-vous que rien ne dépasse de
                        la surface de votre pièce avant de continuer.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video id="my-video-communaute" className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/NevaMagis/Notice/2-f-video-relance.mp4" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/2-f-video-relance.ogv" type='video/ogv' />
                            <source src="/medias/NevaMagis/Notice/2-f-video-relance.webm" type='video/webm' />
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
                            <p className="big-title">Et maintenant ?</p>
                            <p>Appuyez sur le bouton pour relancer l’impression.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video id="my-video-communaute" className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/NevaMagis/Notice/2-g-base.mp4" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/2-g-base.ogv" type='video/ogv' />
                            <source src="/medias/NevaMagis/Notice/2-g-base.webm" type='video/webm' />
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
                            <p className="big-title">Il reste une demie-heure d’impression</p>
                        </div>
                    </section>
                </section>


                <section className="col-xl-24 display-flex height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">
                        <figure>
                            <img src="/medias/NevaMagis/Notice/2-h-1-copie.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-m-24 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <h3 className="title tleft">Étape 6</h3>
                            <p className="big-title">Assemblage</p>
                            <p>Reprenez le photophore, et assemblez-le avec son support. Il se visse comme un couvercle.</p>
                        </div>
                    </section>
                </section>



                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/NevaMagis/Notice/2-a-1600x600.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-left">
                        <p className="big-title">J’ai réussi à assembler les deux premiers éléments !</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/neva-magis/notice-3.html" htmlFor="yo">
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