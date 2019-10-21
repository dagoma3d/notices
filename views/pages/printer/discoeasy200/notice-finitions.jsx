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
                            <li className="new-btn btn-classic btn-grey step ">
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
                            <li className="new-btn btn-classic btn-grey step active">
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
                    <p className=" col-vspace">Temps approximatif : 25 minutes</p>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Notice/11-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage DiscoEasy200 - Page 10 - Finition</h1>
                        <h2 className="big-title tleft">Les dernières finitions</h2>
                        <p>Nous allons maintenant mettre la touche finale avant de commencer à la mettre en marche.</p>
                    </section>
                </section>

                <section id="disco-10-prerequis" className="col-xl-24 display-flex height-350 bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
                        <figure>
                            <img src="/medias/DiscoEasy/Notice/11-b-prerequis.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <p className="big-title">Les pré-requis</p>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">1 gaine torsadée</li>
                                <li className="tleft col-vbspace">1 tube blanc (PTFE)</li>
                                <li className="tleft col-vbspace">2 pièces en plastique (appelées top)</li>
                                <li className="tleft col-vbspace">8 patins antidérapants</li>
                                <li className="tleft col-vbspace">4 colliers de serrage</li>
                                <li className="tleft col-vbspace">2 barres courtes</li>
                                <li className="tleft col-vbspace">8 écrous M3 (il doit en rester 1)</li>
                                <li className="tleft col-vbspace">8 vis M3x16 (il doit en rester 1)</li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section id="disco-10-1" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/11-c-top-vis-serrage.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/11-c-top-vis-serrage.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/11-c-top-vis-serrage.webm" type='video/webm' />
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
                            <h2 className="big-title">Mise en place des vis de serrage</h2>
                            <p>Normalement vous êtes rodé. Prenez 8 écrous et 8 vis. Placez les écrous dans les logements comme sur la vidéo. Mettez en place les
                                vis sans trop serrer, juste pour maintenir les écrous et éviter que les vis ne bougent. Nous les serrerons plus tard pour
                    maintenir les barres.</p>
                            <p>Faites de même pour la deuxième pièce.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-10-2" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/11-d-top-barres.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/11-d-top-barres.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/11-d-top-barres.webm" type='video/webm' />
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
                            <h2 className="big-title">Mise en place des barres</h2>
                            <p>Mettez les deux pièces à plat, en symétrie.</p>
                            <p>Introduisez les barres.</p>
                            <p>Placez l’ensemble sur l’imprimante, la partie la plus haute vers l’avant.</p>
                            <p>Appuyez fort pour que les pièces soient bien enfoncées.</p>
                            <p>Serrez les 8 vis du haut et les 4 vis présentes sur les côtés des fixations latérales.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-10-3" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/11-e-tension-courroie-tete.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/11-e-tension-courroie-tete.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/11-e-tension-courroie-tete.webm" type='video/webm' />
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
                            <h2 className="big-title">Ajustement de la tension de courroie de la tête</h2>
                            <p>Placez la tête à gauche.</p>
                            <p>Détachez la courroie du côté droit.</p>
                            <p>Tirez sur le bout libre sans effort.</p>
                            <p>Forcez pour ajouter 2 crans de tension et re-verrouiller la courroie.</p>
                            <p>Couper le bout pour laisser 3 cm de mou.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-10-4" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/11-f-tension-courroie-plateau.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/11-f-tension-courroie-plateau.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/11-f-tension-courroie-plateau.webm" type='video/webm' />
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
                            <h2 className="big-title">Ajustement de la tension de courroie du plateau</h2>
                            <p>Mettez la machine à l’envers.</p>
                            <p>Débloquez le bout replié de la courroie, puis déverouillez-la en la poussant vers la droite.</p>
                            <p>Faites-la passer entre la face avant et le plateau.</p>
                            <p>Tirez sur le bout libre sans effort.</p>
                            <p>Forcez pour ajouter 2 crans de tension et re-verrouiller la courroie.</p>
                            <p>Repliez le bout libre dans l'encoche de départ.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-10-5" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/11-g-gaine.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/11-g-gaine.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/11-g-gaine.webm" type='video/webm' />
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
                            <h2 className="big-title">Mise en place de la gaine</h2>
                            <p>Placez la tête à droite de la machine (en vue de face).</p>
                            <p>Engagez la gaine torsadé sur le début des câbles de la tête sur quelques centimètres.</p>
                            <p>Sur la tête, replacez les câbles convenablement.</p>
                            <p>Faites passer la gaine dans la forme sur la tête.</p>
                            <p>Prenez un collier de serrage, placez-le dans le trou comme sur la vidéo.</p>
                            <p>Serrez-le puis coupez le surplus qui dépasse.</p>
                            <p>Continuez de torsader la gaine jusqu’à atteindre l’angle supérieur opposé de l’imprimante.</p>
                            <p>Clipsez la gaine sur le chariot de gauche.</p>
                            <p>Récupérez les câbles du moteur et de la butée de X et continuez la gaine.</p>
                            <p>Egalisez la longueur des câbles en les tirants vers l’intérieur de l’imprimante.</p>
                            <p>Continuez la gaine jusqu’à l’entrée de la fixation latérale (coupez le surplus si besoin).</p>
                        </div>
                    </section>
                </section>

                <section id="disco-10-6" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/11-h-cable-management.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/11-h-cable-management.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/11-h-cable-management.webm" type='video/webm' />
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
                            <h2 className="big-title">Gestion des câbles</h2>
                            <p>Dans cette étape, nous allons faire en sorte de bien maintenir les câbles. Notre solution n’est pas unique mais si vous ne vous
                    sentez pas inspiré, suivez la vidéo.</p>
                            <p>Il est important qu’aucun câble ne se balade au dessus de la carte pour éviter d’être abîmé par le plateau.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-10-7" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/11-i-patin.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/11-i-patin.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/11-i-patin.webm" type='video/webm' />
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
                            <h2 className="big-title">Mise en place des patins antidérapant</h2>
                            <p>Des emplacements sont prévus sous la machine sur la face avant, la face arrière et les fixations latérales, collez-y un patin sur
                    chacun.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-10-8" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/11-j-ptfe.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/11-j-ptfe.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/11-j-ptfe.webm" type='video/webm' />
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
                            <h2 className="big-title">Installation du tube PTFE</h2>
                            <p>Ce tube va guider le filament de l’extrudeur jusqu’à la tête d’impression.</p>
                            <p>Il est maintenu par des raccords pneumatique. Poussez-le bien jusqu’au fond à chaque extrémité. Faites-le passer entre les deux
                    barres du haut de l’imprimante pour le guider.</p>
                            <p>Attention, sur la tête d’impression, il est important que ce dernier soit bien enfoncé. Regardez sur la vidéo pour avoir une idée
                    de la longueur. Appuyez sur la collerette noire pour retirer le tube.</p>
                        </div>
                    </section>
                </section>


                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Notice/11-k-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Finitions : CHECK !</p>
                        <p>Le montage est terminé. Soufflez, profitez, maintenant on va la mettre en marche.</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/discoeasy200/notice-controle.html" htmlFor="yo">
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