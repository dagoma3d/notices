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
                            <li className="new-btn btn-classic btn-grey step active">
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
                    <p className=" col-vspace">Temps approximatif : 25 minutes</p>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Notice/9-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage DiscoEasy200 - Page 8 - Assemblage du plateau</h1>
                        <h2 className="big-title tleft">Assemblage du plateau</h2>
                        <p>Nous allons maintenant assembler la pièce qui viendra accueillir vos impression : le plateau.</p>
                    </section>
                </section>

                <section id="disco-8-prerequis" className="col-xl-24 display-flex height-350 bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
                        <figure>
                            <img src="/medias/DiscoEasy/Notice/9-b-prerequis.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <p className="big-title">Les pré-requis</p>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">1 grappe de support plateau</li>
                                <li className="tleft col-vbspace">1 plateau</li>
                                <li className="tleft col-vbspace">1 courroie de 85cm</li>
                                <li className="tleft col-vbspace">4 vis fraisées M3x10 cruciforme (il doit en rester 1)</li>
                                <li className="tleft col-vbspace">4 écrous freins M3 (il doit en rester 1)</li>
                                <li className="tleft col-vbspace">1 tournevis cruciforme PH1 (non fourni)</li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section id="disco-8-1" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Notice/9-c-support-plateau.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/9-c-support-plateau.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/9-c-support-plateau.webm" type='video/mp4' />
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
                            <h2 className="big-title">Montage des supports plateau</h2>
                            <p>Détachez et nettoyez les pièces à l'aide de la spatule.</p>
                            <p>Mettez en place les écrous dans les pièces, <span className="bold">côté caoutchouc de l’écrou vers les logements qui
                        accueilleront les roulements</span>.</p>
                            <p>Prenez le grand support, positionnez la lettre A vers le côté le plus court du plateau.</p>
                            <p className="bold">Allez à l'étape d’en dessous pour vérifier le sens.</p>
                            <p>Retirez le scotch qui déborde sur les trous de vis.</p>
                            <p>Vissez légèrement uniquement pour maintenir les pièces.</p>
                            <p>Répétez l'opération pour les deux autres pièces (écrous vers l’extérieur).</p>
                        </div>
                    </section>
                </section>

                <section id="disco-8-2" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
                        <figure>
                            <img src="/medias/DiscoEasy/Notice/9-c-controle.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <p className="title tleft">Étape 2</p>
                            <h2 className="big-title">Vérifions tout ça</h2>
                            <p>Voilà le rendu final. Faites bien attention au sens des éléments.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-8-3" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" controls poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Notice/9-d-clips.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/9-d-clips.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/9-d-clips.webm" type='video/webm' />
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
                            <h2 className="big-title">Installation sur l’imprimante</h2>
                            <p>Faites monter l’axe X pour laisser passer le plateau (tourner les deux coupleurs dans le sens des aiguilles d'une montre).</p>
                            <p>Pré-positionnez les roulements sur les barres.</p>
                            <p>Prenez le plateau avec le support long vers la face avant (comme sur la vidéo).</p>
                            <p>Posez le sur les roulements.</p>
                            <p>Sur un côté, <span className="bold">alignez</span> les roulements au milieu des pièces orange.</p>
                            <p>Appuyez sur le plateau pour clipser les roulements.</p>
                            <p>Répétez l’opération de l’autre côté.</p>
                            <p>Faites des aller-retours avec le plateau pour que l’assemblage coulisse bien.</p>
                            <p>Serrez les vis du plateau (sans forcer).</p>
                            <p>Assurez-vous qu’il coulisse toujours après serrage. Si ce n’est pas le cas, desserrez légèrement les vis.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-8-4" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Notice/9-e-control-base.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/9-e-control-base.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/9-e-control-base.webm" type='video/mp4' />
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
                            <h2 className="big-title">Contrôle de la perpendicularité de la base</h2>
                            <p>Maintenant que le plateau est monté, nous pouvons effectuer une vérification importante.</p>
                            <p>Avancez le plateau jusqu'à la face avant.</p>
                            <p>Vérifiez que les deux soient parallèles (quelques mm d’écart sont acceptables).</p>
                            <p>Faites pareil avec la face arrière.</p>
                            <p>Si ce n’est pas le cas, une barre doit être mal enfoncée (voir page 7).</p>
                        </div>
                    </section>
                </section>

                <section id="disco-8-5" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Notice/9-f-courroie.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/9-f-courroie.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/9-f-courroie.webm" type='video/mp4' />
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
                            <h2 className="big-title">Installation de la courroie du plateau</h2>
                            <p className="bold text-red link-classic">Attention, le plateau est encore mobile, faites attention à vos doigts !</p>
                            <p>Prenez la courroie de 85cm.</p>
                            <p>Retournez la Discoeasy200 pour avoir accès au dessous de la machine.</p>
                            <p className="italic bg-light-grey-blue">Dans cette vidéo n’hésitez pas à utiliser le bouton pause.</p>
                            <p>Faites passer le bout de l’inscription A vers B dans le support plateau avant (crans vers le bas de la machine).</p>
                            <p>Laissez-le dépasser du côté B d’environ 2cm.</p>
                            <p>Faites-le coulisser vers le bas pour le verrouiller.</p>
                            <p>Prenez l'autre bout et faites-le passer au dessus du premier roulement en haut de la face avant (crans vers le roulement).</p>
                            <p>Récupérez-le en dessous et tirez pour retirer le mou (faites la même chose à chaque étape). Attention aux vrilles dans la
                    courroie.</p>
                            <p>Faites passer le bout entre la poulie moteur et le second roulement.</p>
                            <p>Passez la courroie entre la barre transversale et le plateau.</p>
                            <p>Sur la face arrière, faites passer la courroie sous le roulement et poussez pour le récupérer au dessus.</p>
                            <p>Repassez entre la barre et le plateau et faites entrer le bout dans le support plateau avant de B vers A.</p>
                            <p>Tirez sans forcer sur la courroie pour la tendre et pousser vers le bas pour la verrouiller.</p>
                            <p>Repliez le bout et faites-le passer dans le clips pour finir.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Notice/9-g-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Assemblage du plateau : CHECK !</p>
                        <p>On approche de la fin. Prochaine étape, le câblage.</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/discoeasy200/notice-cablage.html" htmlFor="yo">
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