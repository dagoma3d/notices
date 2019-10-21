var React = require('react');
var Layout = require('../../layouts/default');

class Printer extends React.Component {
    render() {
        return (
            <Layout>

                <nav className="nav-vertical  col-xl-4 row">
                    <div className="border-nav col-xl-3">
                        <p>Navigation</p>
                    </div>
                    <div className="col-xl-21 col-xl-offset-3 nav-step-container row">
                        <ul className="notice-step lsn">
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/printer/disco-ultimate">
                                    START
                        </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step active">
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
                        <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/1-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage DISCO ULTIMATE - préparation</h1>
                        <h2 className="big-title tleft">Préparons nous au montage</h2>
                        <p>Nous allons préparer tous les éléments nécessaires au montage du kit.</p>
                        <p>Temps approximatif de montage : 3 heures 30 minutes.</p>
                    </section>
                </section>

                <section className="col-xl-24 block-white-space bg-gradient-orange row">
                </section>

                <section id="ultimate-1-prerequis" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <figure>
                            <img src="/medias/DiscoEasy/Notice/2-b-prerequis.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Les pré-requis</p>
                            <p>Un kit Discoeasy200</p>
                            <ol className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">1 tournevis hexagonal 2.5mm (fourni)</li>
                                <li className="tleft col-vbspace">1 tournevis cruciforme PH1</li>
                                <li className="tleft col-vbspace">1 tournevis plat de 3mm</li>
                                <li className="tleft col-vbspace">1 cutter ou 1 ébavureur</li>
                                <li className="tleft col-vbspace">1 maillet</li>
                                <li className="tleft col-vbspace">De l'huile liquide</li>
                            </ol>
                        </div>
                    </section>
                </section>


                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/1-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">A vos marques … Go !</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/disco-ultimate/notice-2.html" htmlFor="yo">
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