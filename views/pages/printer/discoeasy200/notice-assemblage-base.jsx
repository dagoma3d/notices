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
                            <li className="new-btn btn-classic btn-grey step active">
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
                        <img className="col-xl-24" src="/medias/DiscoEasy/Notice/7-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage DiscoEasy200 - Page 6 - Assemblage de la base</h1>
                        <h2 className="big-title tleft">Assemblage de la base</h2>
                        <p>Nous allons commencer à assembler l’imprimante 3D. Première étape la base.</p>
                    </section>
                </section>

                <section id="disco-6-prerequis" className="col-xl-24 display-flex height-350 bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
                        <figure>
                            <img src="/medias/DiscoEasy/Notice/7-b-prerequis.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <p className="big-title">Les pré-requis</p>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">4 barres longues</li>
                                <li className="tleft col-vbspace">L’assemblage des fixations latérales</li>
                                <li className="tleft col-vbspace">L’assemblage de la face avant</li>
                                <li className="tleft col-vbspace">L’assemblage de la face arrière</li>
                                <li className="tleft col-vbspace">La grappe de caches côtés (au nombre de 4 tous différents)</li>
                                <li className="tleft col-vbspace">4 roulements linéaires</li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section id="disco-6-1" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/7-c-barre.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/7-c-barre.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/7-c-barre.webm" type='video/webm' />
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
                            <h2 className="big-title">Montage des barres</h2>
                            <p>Prenez la face avant et 4 barres.</p>
                            <p>Posez la face avant sur sa partie plate.</p>
                            <p>Montez les 4 barres dans les trous à chaque angle.</p>
                            <p>Forcez bien pour que les barres soient au fond de chaque trou.</p>
                            <p className="italic bg-light-grey-blue">Astuce : Un petit coup de maillet en caoutchouc aidera bien.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-6-2" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/7-d-fixe-cote.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/7-d-fixe-cote.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/7-d-fixe-cote.webm" type='video/webm' />
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
                            <h2 className="big-title">Montage des fixations latérales</h2>
                            <p>Introduisez les fixations latérales sur les barres inférieures (les plus proches du logo Dagoma)</p>
                            <p className="italic bg-light-grey-blue">Attention à l’orientation des pièces, soyez attentif aux détails sur la vidéo.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-6-3" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/7-e-roulements-axe.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/7-e-roulements-axe.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/7-e-roulements-axe.webm" type='video/webm' />
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
                            <h2 className="big-title">Mise en place des roulements</h2>
                            <p>Ouvrez les sachets des roulements linéaires (encore couverts d’huile).</p>
                            <p>Placez délicatement les roulements sur les barres supérieures, deux à droite et deux à gauche.</p>
                            <p className="italic bg-light-grey-blue">Astuce : de légères rotations permettent de rentrer le roulement plus facilement.</p>

                            <p>Une fois montés, faites quelques allers-retours pour qu’ils se fassent à la barre.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-6-4" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/7-f-face-ar.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/7-f-face-ar.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/7-f-face-ar.webm" type='video/webm' />
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
                            <h2 className="big-title">Montage de la face arrière</h2>
                            <p>Récupérez la face arrière montée.</p>
                            <p>Présentez-la, extrudeur vers le haut, et à gauche de la machine.</p>
                            <p>Positionnez les barres en face des trous et enfoncez-les légèrement.</p>
                            <p>Une fois en place, enfoncez fermement l’ensemble.</p>
                            <p>Utilisez un maillet si possible pour être sûr que les pièces sont correctement enfoncées.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-6-5" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">
                        <figure>
                            <img src="/medias/DiscoEasy/Notice/7-f-controle.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-m-24 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <p className="title tleft">Étape 5</p>
                            <h2 className="big-title">Petit contrôle surprise</h2>
                            <p>Si vous avez bien suivi les vidéos, vous devez voir 8 petits ronds sur les pièces plastiques.</p>
                            <p>Les fixations latérales sont sur les barres inférieures.</p>
                            <p>Les roulements sur les barres supérieures (2 à droite et 2 à gauche).</p>
                            <p>Si ce n’est pas le cas, démontez et recommencez.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-6-6" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/7-g-serrage-base.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/7-g-serrage-base.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/7-g-serrage-base.webm" type='video/webm' />
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
                            <h2 className="big-title">Verrouillage des barres de la base</h2>
                            <p>Posez la base à plat.</p>
                            <p>Serrez les 8 vis se trouvant sur les côtés des faces avant et arrière.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-6-7" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/7-h-cache-cote-av-gauche.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/7-h-cache-cote-av-gauche.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/7-h-cache-cote-av-gauche.webm" type='video/webm' />
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
                            <h2 className="big-title">Installation du cache côté avant gauche</h2>
                            <p className="italic bg-light-grey-blue">A partir de maintenant, on désignera la face avec le logo comme l'avant et la face avec
                    l'extrudeur comme l'arrière. La gauche sera votre gauche lorsque vous faites face à la machine.</p>
                            <p>Commencez par pousser les fixations latérales vers l’arrière.</p>
                            <p>Récupérez la grappe de caches côtés, séparez les pièces et nettoyez-les.</p>
                            <p>Vous devez avoir deux pièces longues et deux courtes. Pour chaque paire, une aura une géométrie particulière et l’autre sera
                    simple.</p>
                            <p>Prenez la longue qui a une forme particulière (voir la vidéo). Elle vient se clipser sur la barre du bas. Rapprochez-la de la
                    face avant. Sa forme s’adapte à celle de la face avant.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-6-8" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/7-i-cache-cote-av-droit.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/7-i-cache-cote-av-droit.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/7-i-cache-cote-av-droit.webm" type='video/webm' />
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
                            <h2 className="big-title">Installation du cache côté avant droit</h2>
                            <p>Récupérez le long cache côté simple.</p>
                            <p>Clipsez-le sur la barre du bas et rapprochez-le de la face avant.</p>
                            <p>Respectez bien le sens de la pièce.</p>
                        </div>
                    </section>
                </section>

                <section id="disco-6-9" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/7-j-cache-cote-ar.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/7-j-cache-cote-ar.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/7-j-cache-cote-ar.webm" type='video/webm' />
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
                            <p className="title tleft">Étape 9</p>
                            <h2 className="big-title">Installation des caches côtés arrières</h2>
                            <p className="bold">Rapprochez les fixations latérales de la face avant pour bien serrer les caches côtés.</p>
                            <p>Clipsez les petits caches côtés. Le simple va à droite (côté extrudeur). L’autre avec le trou va à gauche.</p>

                        </div>
                    </section>
                </section>

                <section id="disco-6-10" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/7-k-serrage-fixe-cote.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/7-k-serrage-fixe-cote.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/7-k-serrage-fixe-cote.webm" type='video/webm' />
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
                            <p className="title tleft">Étape 10</p>
                            <h2 className="big-title">Serrage des fixations latérales</h2>
                            <p>Serrez les 4 vis des fixations latérales fermement. Ces pièces vont maintenir toute l’arche de l’axe Z. Elles doivent être bien
                    en place et bien maintenues.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Notice/7-l-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Montage de la base : CHECK !</p>
                        <p>Vérifiez que le sens des pièces correspond à la photo.</p>
                        <p>Gardez la, l’assemblage continu.</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/discoeasy200/notice-montage-axe-z.html" htmlFor="yo">
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