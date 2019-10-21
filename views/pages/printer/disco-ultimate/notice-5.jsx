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
                            <li className="new-btn btn-classic btn-grey step active">
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
                        <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/5-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage DISCO ULTIMATE - assemblage de la base</h1>
                        <h2 className="big-title tleft">Assemblage de la base</h2>
                        <p>Nous allons commencer à assembler l’imprimante 3D. Première étape la base.</p>
                    </section>
                </section>

                <section className="col-xl-24 block-white-space bg-gradient-orange row">
                </section>

                <section id="ultimate-1-assemblage-base" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <figure>
                            <img src="/medias/DiscoUltimate/Notice/5-b-prerequis.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Les pré-requis</p>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">A. Plaque de protection avant</li>
                                <li className="tleft col-vbspace">B. Plaque de protection arrière</li>
                                <li className="tleft col-vbspace">C. Face arrière montée</li>
                                <li className="tleft col-vbspace">D. Face avant montée</li>
                                <li className="tleft col-vbspace">E. Lot de cache côtés (4 pièces)</li>
                                <li className="tleft col-vbspace">F. Fixations latérales montées</li>
                                <li className="tleft col-vbspace">G. 4x Barres longues (360mm)</li>
                                <li className="tleft col-vbspace">H. Support de plaques de protection</li>
                                <li className="tleft col-vbspace">I. 4x Roulements linéaires</li>
                            </ul>
                            <p>Visserie :</p>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">8x vis M3x10 (reste 0)</li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section id="ultimate-2-assemblage-base" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/7-c-barre.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/7-c-barre.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/7-c-barre.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Montage des barres</p>
                            <p>Prenez la face avant et 4 barres.</p>
                            <p>Posez la face avant sur sa partie plate.</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-3-assemblage-base" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/5-d-fixe-cote.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/5-d-fixe-cote.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/5-d-fixe-cote.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Montage des fixations latérales</p>
                            <p>Introduisez les fixations latérales sur les barres inférieures.</p>
                            <p>Attention à l’orientation des pièces, soyez attentif aux détails sur la vidéo.</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-4-assemblage-base" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/5-e-roulements-axe.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/5-e-roulements-axe.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/5-e-roulements-axe.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Mise en place des roulements</p>
                            <p>Ouvrez les sachets des roulements linéaires (encore couverts d’huile).</p>
                            <p>Placez délicatement les roulements sur les barres supérieures, deux à droite et deux à gauche.</p>
                            <p>Astuce : de légères rotations permettent de rentrer le roulement plus facilement.</p>
                            <p>Une fois montés, faites quelques allers-retours pour qu’ils se fassent à la barre.</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-5-assemblage-base" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/5-f-face-ar.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/5-f-face-ar.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/5-f-face-ar.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Montage de la face arrière</p>
                            <p>Récupérez la face arrière montée.</p>
                            <p>Présentez-la, extrudeur vers le haut, et à gauche de la machine.</p>
                            <p>Positionnez les barres en face des trous et enfoncez-les légèrement.</p>
                            <p>Une fois en place, enfoncez fermement l’ensemble.</p>
                            <p>Utilisez un maillet si possible pour être sûr que les pièces sont correctement enfoncées.</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-6-assemblage-base" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <figure>
                            <img src="/medias/DiscoUltimate/Notice/5-g-controle.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Petit contrôle surprise</p>
                            <p>Si vous avez bien suivi les vidéos, vous devez voir 12 petits trous sur les pièces plastiques.</p>
                            <p>Les fixations latérales sont sur les barres inférieures.</p>
                            <p>Les roulements sur les barres supérieures (2 à droite et 2 à gauche).</p>
                            <p>Si ce n’est pas le cas, démontez et recommencez.</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-7-assemblage-base" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/5-h-cache-cote-av-droit.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/5-h-cache-cote-av-droit.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/5-h-cache-cote-av-droit.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Installation du cache côté avant droit</p>
                            <p>A partir de maintenant, on désignera la face avec le logo comme l'avant et la face avec l'extrudeur comme l'arrière. La gauche sera votre gauche lorsque vous faites face à la machine.</p>
                            <p>Récupérez le cache côté fournis avec l’extrudeur+.</p>
                            <p>Clipsez-le sur la barre du bas et rapprochez-le de la face avant.</p>
                            <p>Respectez bien le sens de la pièce.</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-8-assemblage-base" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/5-i-cache-cote-av-gauche.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/5-i-cache-cote-av-gauche.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/5-i-cache-cote-av-gauche.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Installation du cache côté avant gauche</p>
                            <p>Prenez le dernier cache côté long.</p>
                            <p>Clipsez-le sur la barre du bas et rapprochez-le de la face avant.</p>
                            <p>Respectez bien le sens de la pièce.</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-9-assemblage-base" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/5-j-cache-cote-ar.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/5-j-cache-cote-ar.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/5-j-cache-cote-ar.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Installation des caches côtés arrières</p>
                            <p>Rapprochez les fixations latérales de la face avant pour bien serrer les caches côtés.</p>
                            <p>Clipsez les petits caches côtés. Le simple va à droite (côté extrudeur). L’autre avec le trou va à gauche.</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-10-assemblage-base" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/5-k-installation-plaques-sup.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/5-k-installation-plaques-sup.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/5-k-installation-plaques-sup.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Installation des plaques de protection noires</p>
                            <p>Prenez la partie arrière, elle a deux formes prévu pour entourer les moteurs d’extrudeurs (un seul dans votre cas).</p>
                            <p>Placez la face lisse / brillante vers le bas.</p>
                            <p>Prenez 3 vis M3x10 et vissez la dans les trous prévus dans la face arrière.</p>
                            <p>Prenez le clips de bar (petite pièce imprimée orange). Clipsez la sur la barre et alignez la sur le trou dans la plaque. Vissez le à l’aide d’une autre vis M3x10.</p>
                            <p>Prenez la partie avant, placez la comme la précédente et vissez les 4 vis M3x10.</p>
                            <p>Astuce : Bougez la structure pour alignez les trous de vis si nécessaire.</p>
                        </div>
                    </section>
                </section>

                <section id="ultimate-11-assemblage-base" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/5-l-serrage-base.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/5-l-serrage-base.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/5-l-serrage-base.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <p className="big-title">Serrage de la base</p>
                            <p>Suivez la vidéo, vous avez 12 vis à serrer.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/5-m-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Assemblage de la base terminé.</p>
                        <p>Mettez la base de côté, nous continuons le montage.</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/disco-ultimate/notice-6.html" htmlFor="yo">
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
