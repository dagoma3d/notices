var React = require('react');
var Layout = require('../../layouts/default');

class Printer extends React.Component {
    render() {
        return (
            <Layout>

                <nav className="nav-vertical  closed  col-xl-4 row">
                    <div className="border-nav col-xl-3"><p>Navigation</p></div>
                    <div className="col-xl-21 col-xl-offset-3 nav-step-container row">
                        <ul className="notice-step lsn">
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/printer/disco-ultimate">
                                    START
                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/disco-ultimate/notice-1.html">
                                    1 - Préparation
                    <figure>
                                        <img src="/medias/DiscoUltimate/Notice/1-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/disco-ultimate/notice-2.html">
                                    2 - Face av.
                    <figure>
                                        <img src="/medias/DiscoUltimate/Notice/2-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/disco-ultimate/notice-3.html">
                                    3 - Face ar.
                    <figure>
                                        <img src="/medias/DiscoUltimate/Notice/3-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/disco-ultimate/notice-4.html">
                                    4 - Fix. latérales
                    <figure>
                                        <img src="/medias/DiscoUltimate/Notice/4-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/disco-ultimate/notice-5.html">
                                    5 - Base
                    <figure>
                                        <img src="/medias/DiscoUltimate/Notice/5-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/disco-ultimate/notice-6.html">
                                    6 - Plateau
                    <figure>
                                        <img src="/medias/DiscoUltimate/Notice/6-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/disco-ultimate/notice-7.html">
                                    7 - Axe X
                    <figure>
                                        <img src="/medias/DiscoUltimate/Notice/7-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/disco-ultimate/notice-8.html">
                                    8 - Axe Z
                    <figure>
                                        <img src="/medias/DiscoUltimate/Notice/8-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step active">
                                <a className="btn-wide btn-big" href="/start/disco-ultimate/notice-9.html">
                                    9 - Câblage
                    <figure>
                                        <img src="/medias/DiscoUltimate/Notice/9-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/disco-ultimate/notice-10.html">
                                    10 - Finitions
                    <figure>
                                        <img src="/medias/DiscoUltimate/Notice/10-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/firmware/disco-ultimate.html">
                                    11 - Mise à jour
                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/disco-ultimate/calibration.html">
                                    12 - Calibration
                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/logiciels/cura-by-dagoma.html?printer=disco-ultimate">
                                    13 - Cura
                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/disco-ultimate/notice-utilisation.html">
                                    14 - Utilisation
                </a>
                            </li>
                        </ul>
                    </div>
                    <button className="toggle-nav"><i className="fa fa-arrow-right"></i></button>
                </nav>
                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/9-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage DISCO ULTIMATE - câblage</h1>
                        <h2 className="big-title tleft">Câblage</h2>
                        <p>Et si nous commencions à lui donner vie ?</p>
                    </section>
                </section>

                <section className="col-xl-24 block-white-space bg-gradient-orange row">
                </section>

                <section id="ultimate-1-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <figure>
                            <img src="/medias/DiscoUltimate/Notice/9-b-prerequis.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Les pré-requis</p>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">A. Carte de contrôle</li>
                                <li className="tleft col-vbspace">B. Sachet de câbles</li>
                                <li className="tleft col-vbspace">C. Petit sachet électronique + lecteur SD</li>
                            </ul>
                            <p>Visserie </p>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">3x vis M3x6 (reste 0)</li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section id="ultimate-2-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-c-noeud-tete.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-c-noeud-tete.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-c-noeud-tete.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Repérage du câble ventilateur arrière</p>
                            <p>Prenez le câble du ventilateur arrière et faites un noeud à 2cm du bout.</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-3-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-c-bis-gaine-tete.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-c-bis-gaine-tete.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-c-bis-gaine-tete.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Mise en place de la gaine de tête</p>
                            <p>Prenez la gaine de tête et l’outil imprimé.</p>
                            <p>Nous vous invitons à suivre la vidéo avec attention et de refaire pareil.</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-4-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-d-carte.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-d-carte.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-d-carte.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Installation de la carte de contrôle</p>
                            <p>Sortez-la carte du sachet.</p>
                            <p>Placez-la avec les connecteur face à vous, en diagonale, le lecteur USB vers la barre transversale.</p>
                            <p>Serrez-la à l’aide de deux vis M3x6.</p>
                            <p>Ne serrez pas trop fort pour éviter d’endommager la carte.</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-5-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-e-mot-x.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-e-mot-x.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-e-mot-x.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Câblage du moteur de X</p>
                            <p>Prenez le câble moteur le plus long dans le sachet.</p>
                            <p>Branchez-le au moteur (pas de soucis de sens, il y a des détrompeurs).</p>
                            <p>Faites-le ensuite passer au niveau de la fixation latérale gauche, passez dans la pièce plastique comme sur la vidéo.</p>
                            <p>Raccordez-le ensuite sur le <span className="bold">connecteur X adapté.</span></p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-6-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-f-butee-x.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-f-butee-x.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-f-butee-x.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Câblage de la butée de X</p>
                            <p>Récupérez le câble de la butée de X.</p>
                            <p>Faites-le suivre le câble du moteur de X.</p>
                            <p>Raccordez-le ensuite sur le <span className="bold">connecteur X adapté.</span></p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-7-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-g-passage-gaine-tete.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-g-passage-gaine-tete.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-g-passage-gaine-tete.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Passage des câbles de la tête</p>
                            <p>Prenez l’ensemble des câbles de la tête.</p>
                            <p>Faites les passer dans la fixation latérale.</p>
                            <p>Passez entre la barre arrière et la tige du moteur de Z.</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-8-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-h-palpeur.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-h-palpeur.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-h-palpeur.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Branchement du palpeur</p>
                            <p>Branchez le câble du palpeur (câble gris) sur le <span className="bold">connecteur Z.</span></p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-9-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-i-sonde.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-i-sonde.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-i-sonde.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Branchement de la sonde</p>
                            <p>Branchez la sonde (câbles noires avec connecteur blanc) sur le <span className="bold">connecteur T0.</span></p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-10-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-j-cable-tete.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-j-cable-tete.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-j-cable-tete.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Branchement des câbles restants</p>
                            <p>Dénudez tous les câbles avant de les brancher.</p>
                            <p>Branchez les câbles marrons sur le <span className="bold">bornier Heater.</span></p>
                            <p>Branchez les câbles du ventilateur repéré (ceux avec la boucle)  sur le <span className="bold">bornier FAN2.</span></p>
                            <p>Branchez les câbles du ventilateur restant sur le <span className="bold">bornier FAN1.</span></p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-11-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-k-butee-y.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-k-butee-y.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-k-butee-y.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Câblage de la butée de Y</p>
                            <p>Récupérez le câble de la butée de Y (celui qui vient de la face avant).</p>
                            <p>Raccordez-le ensuite sur le <span className="bold">connecteur Y adapté.</span></p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-12-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-l-mot-y.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-l-mot-y.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-l-mot-y.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Câblage du moteur de Y</p>
                            <p>Récupérez le câble moteur le plus court.</p>
                            <p>Raccordez-le ensuite sur le moteur de la face avant puis sur le <span className="bold">connecteur Y adapté.</span></p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-13-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-m-mot-z.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-m-mot-z.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-m-mot-z.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Branchement des moteurs de Z</p>
                            <p>Récupérez le câble moteur double.</p>
                            <p>Raccordez-le sur le <span className="bold">connecteur Z adapté.</span></p>
                            <p>Raccordez-le ensuite sur les moteurs de Z en passant entre la barre inférieure et la pièce plastique.</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-14-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-n-mot-e.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-n-mot-e.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-n-mot-e.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Branchement du moteur d’extrudeur</p>
                            <p>Récupérez le dernier câble moteur.</p>
                            <p>Raccordez-le ensuite sur le moteur d’extrudeur (sur la face arrière) puis sur le <span className="bold">connecteur E0.</span></p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-15-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-o-ep.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-o-ep.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-o-ep.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Branchement des capteurs de l’extrudeur+</p>
                            <p>Raccordez le câble rouge venant de l’extrudeur E0 sur le <span className="bold">connecteur 2.</span></p>
                            <p>Raccordez le câble rouge venant du bouton sur le <span className="bold">connecteur 3.</span></p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-16-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-p-interrupteur.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-p-interrupteur.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-p-interrupteur.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Installation de l’interrupteur</p>
                            <p>Clipsez l’interrupteur sur la face avant (le bouton 1 vers le haut de la face avant).</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-17-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-q-alim-positif.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-q-alim-positif.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-q-alim-positif.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Branchement de l’alimentation (positive)</p>
                            <p>Récupérez le câble d’alimentation simple.</p>
                            <p>Branchez-le sur le connecteur de l’interrupteur (le plus bas). Recouvrez-le avec la protection en plastique.</p>
                            <p>Raccordez-le sur le + du <span className="bold">bornier PWR IN.</span></p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-18-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-r-alim-negatif.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-r-alim-negatif.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-r-alim-negatif.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Branchement de l’alimentation (négative)</p>
                            <p>Récupérez le câble d'alimentation double avec le connecteur d'alimentation.</p>
                            <p>Dénudez le fil seul.</p>
                            <p>Branchez l'autre bout sur le connecteur de l'interrupteur.</p>
                            <p>Recouvrez-le avec la protection en plastique.</p>
                            <p>Raccordez-le sur le - du <span className="bold">bornier PWR IN.</span></p>
                            <p>Rentrez le connecteur d'alimentation de biais dans la pièce plastique arrière gauche prévue à cet effet. Poussez dessus pour le clipser.</p>
                            <p className="italic">Astuce : Présentez-le de biais, poussez-le au fond et ensuite poussez vers le bas pour l'enclencher).</p>
                        </div>
                    </section>
                </section>


                <section id="ultimate-19-cablage" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/9-s-lecteur-sd.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/9-s-lecteur-sd.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/9-s-lecteur-sd.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Installation du lecteur SD</p>
                            <p>Retirez le cache côté avant gauche.</p>
                            <p>Récupérez le lecteur SD.</p>
                            <p>Installez-le comme sur la vidéo. Enfoncez-le bien jusqu’au bout.</p>
                            <p>Bloquez-le avec une vis M3x6.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/9-v-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Le câblage terminé.</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/disco-ultimate/notice-10.html" htmlFor="yo">
                                Je passe à l'étape suivante
                </label>
                        </div>
                    </section>
                </section>
            </Layout >
        );
    }
}

module.exports = Printer;
