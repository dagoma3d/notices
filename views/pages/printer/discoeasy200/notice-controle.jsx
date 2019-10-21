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
                            <li className="new-btn btn-classic btn-grey step ">
                                <a className="btn-wide btn-big" href="/start/discoeasy200/notice-finitions.html">
                                    10 - Finitions
                        <figure>
                                        <img src="/medias/DiscoEasy/Notice/11-a-intro.jpg" alt="" />
                                    </figure>
                                </a>
                            </li>
                            <li className="new-btn btn-classic btn-grey step active">
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
                    <p className=" col-vspace">Temps approximatif : 15 minutes</p>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Notice/11-k-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage DiscoEasy200 - Page 11 - Contrôle</h1>
                        <h2 className="big-title tleft">Contrôlons le bon fonctionnement des éléments de la machine</h2>
                        <p>Nous allons procéder à des vérifications de l’ensemble des composants à l’aide de fichiers de test.</p>
                    </section>
                </section>

                <section id="disco-11-1" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/12-b-g28.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/12-b-g28.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/12-b-g28.webm" type='video/webm' />
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
                        <div className="block-caption-classic block-caption-left row col-vspace tleft">
                            <p className="title tleft">Étape 1</p>
                            <p className="big-title">Contrôle des butées et des moteurs</p>
                            <p>Le fichier suivant fera quelques déplacements simples. Voyez la vidéo ci-contre.</p>
                            <p>Récupérez l’alimentation et branchez la machine au secteur.</p>
                            <p>Téléchargez le fichier ci-dessous et mettez le sur la carte SD. Nommez bien le fichier “dagoma0.g” sur la carte sinon la machine ne
                    démarrera pas.</p>
                            <div className="col-vbspace">
                                <a href="/medias/DiscoEasy/Notice/12-gcode-controle/12-b-g28.zip" className="new-btn btn-valid btn-big btn-wide"
                                    download="12-b-g28.zip">Télécharger</a>
                            </div>

                            <p>Mettez la carte SD dans la machine et mettez l’interrupteur sur 1 (elle démarre lorsque l’interrupteur passe de 0 à 1).</p>
                            <p className="color-orange text-white col-space">
                                Si le comportement est différent de celui observé, vérifiez votre câblage
                    <a href="/start/discoeasy200/notice-cablage.html" className="link-classic">ici</a>.
                    <br />
                                Si le câblage est bon mais que le problème persiste, rendez-vous
                    <a href="https://dagoma.fr/heroes/jai-besoin-daide-pour-le-montage.html" target="_blank" className="link-classic">ici</a>.
                </p>
                        </div>
                    </section>
                </section>

                <section id="disco-11-2" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/12-c-deplacement.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/12-c-deplacement.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/12-c-deplacement.webm" type='video/webm' />
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
                            <p className="title tleft">Étape 2</p>
                            <h2 className="big-title">Contrôle des déplacements des axes</h2>
                            <p>Le fichier suivant fera quelques déplacements sur toute la longueur des axes. Voyez la vidéo ci-contre. Lors du déplacement de
                    l’axe X de haut en bas, huilez les barres et les tiges filetées.</p>
                            <p>Téléchargez le fichier ci-dessous et mettez le sur la carte SD. Nommez bien le fichier “dagoma0.g” sur la carte.</p>
                            <div className="col-vbspace tleft">
                                <a href="/medias/DiscoEasy/Notice/12-gcode-controle/12-c-deplacement.zip" className="new-btn btn-valid btn-big btn-wide"
                                    download="12-c-deplacement.zip">Télécharger</a>
                            </div>
                            <p>Mettez la carte SD dans la machine et mettez l’interrupteur sur 1.</p>
                            <p>Lorsque les mouvements sont terminés, arrêtez la machine (interrupteur sur 0).</p>
                            <p className="color-orange text-white col-space">
                                Si le comportement est différent de celui observé, vérifiez votre câblage
                    <a href="/start/discoeasy200/notice-cablage.html" className="link-classic">ici</a>.
                    <br />
                                Si le câblage est bon mais que le problème persiste, rendez-vous
                    <a href="https://dagoma.fr/heroes/jai-besoin-daide-pour-le-montage.html" target="_blank" className="link-classic">ici</a>.
                </p>
                        </div>
                    </section>
                </section>

                <section id="disco-11-3" className="col-xl-24 display-flex height-350 block-video bg-light-grey-blue row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/12-d-ventilateur.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/12-d-ventilateur.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/12-d-ventilateur.webm" type='video/webm' />
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
                            <p className="title tleft">Étape 3</p>
                            <h2 className="big-title">Contrôle des ventilateurs</h2>
                            <p>Le fichier suivant fera tourner les ventilateurs l’un après l’autre. Le ventilateur arrière va s’allumer 5 secondes puis ce sera le
                    tour de l’avant.</p>
                            <p>Téléchargez le fichier ci-dessous et mettez le sur la carte SD. Nommez bien le fichier “dagoma0.g” sur la carte.</p>
                            <div className="col-vbspace tleft">
                                <a href="/medias/DiscoEasy/Notice/12-gcode-controle/12-d-ventilateur.zip" className="new-btn btn-valid btn-big btn-wide"
                                    download="12-d-ventilateur.zip">Télécharger</a>
                            </div>
                            <p>Mettez la carte SD dans la machine et mettez l’interrupteur sur 1.</p>
                            <p>Lorsque les mouvements sont terminés, arrêtez la machine (interrupteur sur 0).</p>

                            <p className="color-orange text-white col-space">
                                Si le comportement est différent de celui observé, vérifiez votre câblage
                    <a href="/start/discoeasy200/notice-cablage.html" className="link-classic">ici</a>.
                    <br />
                                Si le câblage est bon mais que le problème persiste, rendez-vous
                    <a href="https://dagoma.fr/heroes/jai-besoin-daide-pour-le-montage.html" target="_blank" className="link-classic">ici</a>.
                </p>
                        </div>
                    </section>
                </section>

                <section id="disco-11-4" className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/12-e-chauffe.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/12-e-chauffe.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/12-e-chauffe.webm" type='video/webm' />
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
                            <p className="title tleft">Étape 4</p>
                            <h2 className="big-title">Contrôle de la chauffe et de l'extrusion</h2>
                            <p>Le fichier suivant fera chauffer la tête à 200°C (ne touchez pas la buse en métal).</p>
                            <p>Elle va se déplacer de gauche à droite le temps de sa chauffe.</p>
                            <p>Une fois à droite, elle sera chaude.</p>
                            <p>Elle se mettra ensuite en pause (elle montera un peu et le plateau avancera).</p>
                            <p>Introduisez du filament dans l'extrudeur jusqu’à la tête. Appuyez sur le bras pour débrider l'extrudeur et introduire le filament.
                    Quelques torsions peuvent aider à le rentrer. (Après la mise à jour, avec l’extrudeur+, l’insertion sera automatique.)</p>
                            <p>Appuyez ensuite sur la butée. La machine sortira du filament par la buse. Retirez-le en faisant attention, la tête est chaude.</p>
                            <p>Téléchargez le fichier ci-dessous et mettez le sur la carte SD. Nommez bien le fichier “dagoma0.g” sur la carte.</p>
                            <div className="col-vbspace tleft">
                                <a href="/medias/DiscoEasy/Notice/12-gcode-controle/12-e-chauffe.zip" className="new-btn btn-valid btn-big btn-wide"
                                    download="12-e-chauffe.zip">Télécharger</a>
                            </div>
                            <p>Mettez la carte SD dans la machine et mettez l’interrupteur sur 1.</p>
                            <p>Lorsque les mouvements sont terminés, arrêtez la machine (interrupteur sur 0).</p>

                            <p className="color-orange text-white col-space">
                                Si le comportement est différent de celui observé, vérifiez votre câblage
                    <a href="/start/discoeasy200/notice-cablage.html" className="link-classic">ici</a>.
                    <br />
                                Si le câblage est bon mais que le problème persiste, rendez-vous
                    <a href="https://dagoma.fr/heroes/jai-besoin-daide-pour-le-montage.html" target="_blank" className="link-classic">ici</a>.
                </p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Notice/11-k-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Contrôle : CHECK !</p>
                        <p>Si vous en êtes là, c’est que votre machine est prête à fonctionner.</p>
                        <p>Nous touchons au but, il nous reste à mettre à jour la machine, à la calibrer et vous serez paré pour votre première impression.</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/firmware/discoeasy200.html" htmlFor="yo">
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