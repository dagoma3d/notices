var React = require('react');
var Layout = require('../../layouts/default');

class Printer extends React.Component {
    render() {
        return (
            <Layout>

                <nav className="nav-vertical  closed  col-xl-4 row">
                    <div className="border-nav col-xl-3">
                        <p>Navigation</p>
                    </div>
                    <div className="col-xl-21 col-xl-offset-3 nav-step-container row">
                        <ul className="notice-step lsn">
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/printer/discoeasy200">
                                    START
                    </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/discoeasy200/notice-preparation.html">
                                    1 - Préparation
                        <figure>
                                        <img src="/medias/DiscoEasy/Notice/2-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/discoeasy200/notice-montage-face-avant.html">
                                    2 - Face av.
                        <figure>
                                        <img src="/medias/DiscoEasy/Notice/3-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/discoeasy200/notice-montage-face-arriere.html">
                                    3 - Face ar.
                        <figure>
                                        <img src="/medias/DiscoEasy/Notice/4-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/discoeasy200/notice-montage-fixations-laterales.html">
                                    4 - Fix. latérales
                        <figure>
                                        <img src="/medias/DiscoEasy/Notice/5-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step active">
                                <a className="btn-wide btn-big" href="/start/discoeasy200/notice-montage-axe-x.html">
                                    5 - Axe X
                        <figure>
                                        <img src="/medias/DiscoEasy/Notice/6-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/discoeasy200/notice-assemblage-base.html">
                                    6 - Base
                        <figure>
                                        <img src="/medias/DiscoEasy/Notice/7-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/discoeasy200/notice-montage-axe-z.html">
                                    7 - Axe Z
                        <figure>
                                        <img src="/medias/DiscoEasy/Notice/8-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/discoeasy200/notice-assemblage-plateau.html">
                                    8 - Plateau
                        <figure>
                                        <img src="/medias/DiscoEasy/Notice/9-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/discoeasy200/notice-cablage.html">
                                    9 - Câblage
                        <figure>
                                        <img src="/medias/DiscoEasy/Notice/10-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/discoeasy200/notice-finitions.html">
                                    10 - Finitions
                        <figure>
                                        <img src="/medias/DiscoEasy/Notice/11-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/discoeasy200/notice-controle.html">
                                    11 - Contrôle
                    </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/firmware/discoeasy200.html">
                                    12 - Mise à jour
                    </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/discoeasy200/calibration.html">
                                    13 - Calibration
                    </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/logiciels/cura-by-dagoma.html?printer=discoeasy200">
                                    14 - Cura
                    </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/discoeasy200/notice-utilisation.html">
                                    15 - Utilisation
                    </a>
                            </li>
                        </ul>
                    </div>
                    <button className="toggle-nav"><i className="fa fa-arrow-right"></i></button>
                </nav>
                <section className="col-xl-24 bg-gradient-orange row">
                    <p className=" col-vspace">Temps approximatif : 20 minutes</p>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Notice/6-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage DiscoEasy200 - Page 5 - Montage de l’axe X</h1>
                        <h2 className="big-title tleft">Montage de l’axe X</h2>
                        <p>Nous allons monter la dernière partie de l’imprimante 3D avant de passer à l’assemblage.</p>
                    </section>
                </section>

                <section id="disco-5-prerequis" className="col-xl-24 display-flex height-350 bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
                        <figure>
                            <img src="/medias/DiscoEasy/Notice/6-b-prerequis.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <p className="big-title">Les pré-requis</p>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">Une tête d’impression prémontée</li>
                                <li className="tleft col-vbspace">Un chariot d’axe X gauche et un droit<br /><span className="italic">(pour l’instant occupez vous
                            seulement du fait qu’ils soient différents)</span></li>
                                <li className="tleft col-vbspace">1 moteur avec poulie</li>
                                <li className="tleft col-vbspace">2 roulements linéaires</li>
                                <li className="tleft col-vbspace">2 roulements de courroie</li>
                                <li className="tleft col-vbspace">1 butée longue</li>
                                <li className="tleft col-vbspace">1 courroie de 75cm</li>
                                <li className="tleft col-vbspace">2 barres courtes</li>
                                <li className="tleft col-vbspace">1 vis M3x16 (il doit en rester 9)</li>
                                <li className="tleft col-vbspace">3 vis M3x6 (il doit en rester 8)</li>
                                <li className="tleft col-vbspace">… et une baguette pas trop cuite (facultatif)</li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section id="disco-5-1" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/6-c-roulement-courroie.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/6-c-roulement-courroie.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/6-c-roulement-courroie.webm" type='video/webm' />
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
                            <h2 className="big-title">Installation des roulements de courroie</h2>
                            <p>Nous allons placer les roulements qui feront le renvois de courroie de la tête de l’imprimante.</p>
                            <p>Reprenez le petit outil imprimé pour vous aider à placer les roulements. Prenez 1 vis M3x16, placez la dans le trou correspondant
                                et vissez à travers les 2 roulements. Faites passer le tournevis par le trou prévu à cet effet dans la pièce plastique. Vérifiez
                    que les roulements tournent bien après serrage.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-5-2" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/6-d-bute.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/6-d-bute.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/6-d-bute.webm" type='video/webm' />
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
                            <h2 className="big-title">Mise en place de la butée de X</h2>
                            <p>Prenez la butée avec le câble le plus long. Introduisez la dans le logement en commençant par faire passer la prise.</p>
                            <p>Orientez-la comme sur la vidéo.</p>
                            <p>Enfoncez la butée.</p>
                            <p>Elle dépasse d’un millimètre par rapport au plastique.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-5-3" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/6-e-moteur-x.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/6-e-moteur-x.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/6-e-moteur-x.webm" type='video/webm' />
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
                            <h2 className="big-title">Installation du moteur de X</h2>
                            <p>RentreZ le moteur dans son support avec le connecteur vers la pièce (comme sur la vidéo).</p>
                            <p>Vissez le moteur avec 3 vis M3x6.</p>
                            <p>Le dernier trou de vis est accessible avec l’outil plastique utilisé pour les roulements. Positionnez la vis en face du trou,
                    passez le tournevis à travers la pièce, retirez l'outil imprimé, et vissez.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-5-4" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/6-g-tete.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/6-g-tete.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/6-g-tete.webm" type='video/webm' />
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
                            <h2 className="big-title">Installation des roulements de la tête</h2>
                            <p>Sortez deux roulements linéaires de leur sachet (prévoyez de l’essuie-tout, ils sont pleins d’huile).</p>
                            <p>Clipsez-les dans les portées prévues à cet effet sur la tête (centrez-les bien avant d’appuyer).</p>
                        </div>
                    </section>
                </section>

                <section id="disco-5-5" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24  block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/6-f-barre.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/6-f-barre.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/6-f-barre.webm" type='video/webm' />
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
                            <p className="title tleft">Étape 5</p>
                            <h2 className="big-title">Montage des barres de l’axe X</h2>
                            <p>Prenez 2 barres courtes.</p>
                            <p>Introduisez-les avec délicatesse dans les roulements (faites quelques rotations pour faciliter leur entrée). Une fois en place,
                    faites quelques allers-retours pour vérifier que tout va bien.</p>
                            <p className="italic"> Maintenant faites attention au sens des pièces. Référez-vous à la vidéo pour orienter les pièces. La tête et
                                les deux chariots sont plus haut d’un côté (en haut sur la vidéo). Alignez ce côté. Le chariot avec le moteur sera à gauche,
                    l’autre à droite. Pas besoin de forcer pour rentrer les barres. Dans l’étape suivante vous pourrez vérifier tout ça.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-5-6" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-m-24 col-xl-push-12 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/6-h-courroie-tete.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/6-h-courroie-tete.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/6-h-courroie-tete.webm" type='video/webm' />
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
                            <p className="title tleft">Étape 6</p>
                            <h2 className="big-title">Installation de la courroie de la tête</h2>
                            <p>Retournez l’ensemble pour voir le dessous de la tête.</p>
                            <p>Prenez la courroie de 75cm.</p>
                            <p>Les crans vers le haut de la tête, introduisez la courroie dans le trou supérieur.</p>
                            <p>Récupérez-la de l’autre côté et faite la revenir à droite (attention aux vrilles).</p>
                            <p>Dans le chariot de droite, passez au-dessus des roulements puis revenez en dessous (crans vers le roulement).</p>
                            <p>Tirez dessus pour récupérer du mou.Tirez dessus pour récupérer du mou.</p>
                            <p>Faites revenir la courroie vers le chariot de gauche en passant sous la tête.</p>
                            <p>Passez la courroie sous la poulie du moteur et revenez par dessus.</p>
                            <p>Dirigez le bout de la courroie vers la tête. Placez la courroie dans le logement (allez jusqu’au dernier cran).</p>
                            <p>Reprenez l’autre bout et tirez dessus pour tendre la courroie. Tendez sans forcer, juste pour que tout tienne en place. Poussez la
                    courroie pour la verrouiller dans les crans de la tête.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Notice/6-i-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Montage de l'axe X : CHECK !</p>
                        <p>Vérifiez que le sens des pièces correspond à la photo.</p>
                        <p>Mettez le ensuite de côté, il nous servira plus tard.</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/discoeasy200/notice-assemblage-base.html" htmlFor="yo">
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