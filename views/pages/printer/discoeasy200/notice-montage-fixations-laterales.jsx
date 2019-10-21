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
                            <li className="new-btn btn-classic btn-grey step active">
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
                    <p className=" col-vspace">Temps approximatif : 5 minutes</p>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Notice/5-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage DiscoEasy200 - Page 4 - Montage des fixations latérales</h1>
                        <h2 className="big-title tleft">Montage des fixations latérales</h2>
                        <p>Nous allons monter la troisième partie de l’imprimante 3D.</p>
                    </section>
                </section>

                <section id="disco-4-prerequis" className="col-xl-24 display-flex height-350 bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
                        <figure>
                            <img src="/medias/DiscoEasy/Notice/5-b-prerequis.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <p className="big-title">Les pré-requis</p>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">2 pièces de fixations latérales</li>
                                <li className="tleft col-vbspace">1 barre courte</li>
                                <li className="tleft col-vbspace">8 écrous M3 (il doit en rester 9)</li>
                                <li className="tleft col-vbspace">8 vis M3x16 (il doit en rester 10)</li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section id="disco-4-1" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Notice/5-c-preparation.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/5-c-preparation.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/5-c-preparation.webm" type='video/webm' />
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
                            <h2 className="big-title">Préparation</h2>
                            <p>Retirez la pièce que l’on appellera l’anti-wooble. Grattez votre pièce avec la spatule pour qu’elle soit propre. Répétez
                    l’opération sur la seconde pièce.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-4-2" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/5-d-vis-serrage.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/5-d-vis-serrage.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/5-d-vis-serrage.webm" type='video/webm' />
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
                            <h2 className="big-title">Mise en place des vis de serrage</h2>
                            <p>Prenez 8 écrous et 8 vis (M3x16). Placez les écrous dans les logements comme sur la vidéo. Mettez en place les vis sans trop
                                serrer, juste pour maintenir les écrous et éviter que les vis ne bougent. Nous les serrerons plus tard pour maintenir les barres.
                </p>
                        </div>
                    </section>
                </section>

                <section id="disco-4-3" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Notice/5-e-montage-barre.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/5-e-montage-barre.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/5-e-montage-barre.webm" type='video/webm' />
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
                            <h2 className="big-title">Montage de la barre</h2>
                            <p>Rentrez la barre dans le logement transversal de la première fixation. Enfoncez-la avec force. Prenez la seconde fixation et
                    répétez l’opération. À la fin vous devez obtenir la même chose que sur la vidéo.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Notice/5-f-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Montage des fixations latérales : CHECK !</p>
                        <p>Mettez-les de côté, elles nous serviront plus tard.</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/discoeasy200/notice-montage-axe-x.html" htmlFor="yo">
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