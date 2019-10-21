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
                            <li className="new-btn btn-classic btn-grey step active">
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
                            <li className="new-btn btn-classic btn-grey step ">
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
                        <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/6-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage DISCO ULTIMATE - assemblage du plateau</h1>
                        <h2 className="big-title tleft">Assemblage du plateau</h2>
                        <p>Nous allons maintenant assembler la pièce qui viendra accueillir vos impression : le plateau.</p>
                    </section>
                </section>

                <section className="col-xl-24 block-white-space bg-gradient-orange row">
                </section>

                <section id="ultimate-1-assemblage-plateau" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <figure>
                            <img src="/medias/DiscoUltimate/Notice/6-b-prerequis.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Les pré-requis</p>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">A. Plateau</li>
                                <li className="tleft col-vbspace">B. Supports plateau (3 pièces)</li>
                                <li className="tleft col-vbspace">C. Courroie longue (85cm)</li>
                            </ul>
                            <p>Visserie :</p>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">4x vis fraisées M3x10 (reste 1)</li>
                                <li className="tleft col-vbspace">4x écrous freins M3 (reste 1)</li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section id="ultimate-2-assemblage-plateau" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/6-c-support-plateau.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/6-c-support-plateau.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/6-c-support-plateau.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Installation des supports plateau</p>
                            <p>Prenez le grand support plateau.</p>
                            <p>Placez le repère R (Right) à droite et le L (Left) à gauche.</p>
                            <p>La lettre B vers la face avant.</p>
                            <p>Prenez les deux petits supports et utilisez les mêmes repères pour les aligner convenablement.</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-3-assemblage-plateau" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/6-d-courroie-y.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/6-d-courroie-y.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/6-d-courroie-y.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Installation de la courroie de Y</p>
                            <p>Nous vous conseillons de suivre la vidéo avec attention.</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-4-assemblage-plateau" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/6-e-installation-plateau.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/6-e-installation-plateau.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/6-e-installation-plateau.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Installation du plateau</p>
                            <p>Alignez les trous du plateau avec ceux des supports.</p>
                            <p>Mettez en place les écrous dans les pièces, côté caoutchouc de l’écrou vers les logements qui accueilleront les roulements.</p>
                            <p>Serrez fermement à l’aide de 4 vis fraisée M3x12.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/6-f-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Assemblage du plateau terminé</p>
                        <p>Et hop, la base est prête.</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/disco-ultimate/notice-7.html" htmlFor="yo">
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
