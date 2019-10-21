var React = require('react');
var Layout = require('../../../layouts/default');

class BiColor extends React.Component {
    render() {
        return (
            <Layout>
                <section className="col-xl-24 bg-gradient-orange row">
                    <p className=" col-vspace">Temps total de montage approximatif : 1h30min</p>
                </section>

                <nav className="nav-vertical  closed  col-xl-4 row">
                    <div className="border-nav col-xl-3">
                        <p>Navigation</p>
                    </div>
                    <ul className="col-xl-21 col-xl-offset-3 row notice-step lsn">
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big" href="/printer/disco-ultimate/bi-couleur?version=ultimate-addon-v1&amp;options=bi-couleur">
                                Préparation
                    </a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step active">
                            <a className="btn-wide btn-big"
                                href="/start/disco-ultimate/bi-couleur/notice-2.html?version=ultimate-addon-v1&amp;options=bi-couleur">
                                Installation
                    </a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big"
                                href="/start/disco-ultimate/bi-couleur/notice-3.html?version=ultimate-addon-v1&amp;options=bi-couleur">
                                Finitions
                    </a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big" href="/firmware/disco-ultimate.html?version=ultimate-addon-v1&amp;options=bi-couleur">
                                Mise à jour
                    </a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big" href="/start/disco-ultimate/calibration.html?version=ultimate-addon-v1&amp;options=bi-couleur">
                                Calibration
                    </a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big"
                                href="/start/disco-ultimate/bi-couleur/notice-7.html?version=ultimate-addon-v1&amp;options=bi-couleur">
                                Imprimer
                    </a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big"
                                href="/start/disco-ultimate/bi-couleur/notice-8.html?version=ultimate-addon-v1&amp;options=bi-couleur">
                                GCode
                    </a>
                        </li>
                    </ul>
                    <button className="toggle-nav"><i className="fa fa-arrow-right"></i></button>
                </nav>
                <section className="col-xl-24 notice-mask notice-header row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoUltimate/Addon/Bicouleur/1-j-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage pack bi-couleur</h1>
                        <p className="big-title tleft">Installation du pack bi-couleur</p>
                        <p>Nous allons maintenant remonter votre Disco Ultimate avec les éléments du pack bi-couleur.</p>
                    </section>
                </section>

                <section className="col-xl-24 block-white-space bg-gradient-orange row">
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-b-retirer-plaque-sup-ar.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-b-retirer-plaque-sup-ar.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-b-retirer-plaque-sup-ar.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <h2 className="big-title tleft">Retrait plaque arrière</h2>
                            <p>Retirez les 4 vis CHC M3x10 qui tiennent la plaque supérieure arrière.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-c-emplacement-mot-e1.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-c-emplacement-mot-e1.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-c-emplacement-mot-e1.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <h2 className="big-title tleft">Ouverture de l’emplacement E1</h2>
                            <p>Soulevez la plaque et découpez l’emplacement du moteur E1 à l’aide d’une pince coupante.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/3-f-extrudeur-montage.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/3-f-extrudeur-montage.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/3-f-extrudeur-montage.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <h2 className="big-title tleft">Pré-montage de l’extrudeur</h2>
                            <p>Montez le bras d’extrudeur.</p>
                            <p>Placez le ressort dans l'empreinte sur le corps de l’extrudeur.</p>
                            <p>Prenez le bras, placez-le pour que le ressort soit pris dans la seconde empreinte.</p>
                            <p>Comprimez le ressort pour que le bras rentre dans l’encoche.</p>
                            <p>Déplacez le bras pour que le trou de vis soit aligné avec celui du corps.</p>
                            <p>Mettez en place les 3 vis M3x25.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-e-extrudeur-installation.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-e-extrudeur-installation.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-e-extrudeur-installation.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <h2 className="big-title tleft">Installation de l’extrudeur</h2>
                            <p>Placez le moteur dans le logement repéré E1.</p>
                            <p>Positionnez le connecteur vers l’intérieur.</p>
                            <p>Prenez une vis M3x6, placez la dans le trou supérieur droit et serrez le moteur.</p>
                            <p>Retirez le tube PTFE s’il vous gène.</p>
                            <p>Passez le fil du capteur dans le trou comme sur la vidéo.</p>
                            <p>Orientez l’extrudeur puis vissez les 3 vis M3x25.</p>
                            <p>La tête de la vis M3x6 rentre dans un logement prévu dans le corps d’extrudeur.</p>
                            <p>Le bras doit pouvoir bouger après serrage.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-f-extrudeur-branchement.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-f-extrudeur-branchement.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-f-extrudeur-branchement.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <h2 className="big-title tleft">Branchement de l’extrudeur</h2>
                            <p>Branchez le câble du moteur comme sur la vidéo.</p>
                            <p>Remettez la plaque en place et vissez la avec les 4 vis M3x10.</p>
                            <p>Branchez le capteur du nouvel extrudeur sur le connecteur 1.</p>
                            <p>Branchez le câble moteur sur le connecteur E1.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/7-f-barre-bicouleur.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/7-f-barre-bicouleur.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/7-f-barre-bicouleur.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <h2 className="big-title tleft">Montage des barres de l’axe X</h2>
                            <p>Prenez 2 barres courtes.</p>
                            <p>Introduisez-les avec délicatesse dans les roulements (faites quelques rotations pour faciliter leur entrée). Une fois en place,
                        faites quelques allers-retours pour vérifier que tout va bien.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/7-g-courroie-tete.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/7-g-courroie-tete.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/7-g-courroie-tete.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <h2 className="big-title tleft">Installation de la courroie de la tête</h2>
                            <p>Nous vous conseillons de suivre la vidéo avec attention.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-i-installation-axe-x.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-i-installation-axe-x.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-i-installation-axe-x.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <h2 className="big-title tleft">Installation de l’axe X</h2>
                            <p>Prenez l’axe X, orientez-le pour que le moteur de X soit à gauche de la machine lorsque la face avant est devant vous.</p>
                            <p>Insérez les barres dans les roulements sans forcer.</p>
                            <p>Vissez les tiges trapézoïdales dans les écrous pour faire descendre l’axe.</p>
                            <p>Descendez les deux chariots en même temps.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
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
                            <h2 className="big-title tleft">Repérage du câble ventilateur arrière</h2>
                            <p>Prenez le câble du ventilateur arrière et faites un noeud à 2cm du bout.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
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
                            <h2 className="big-title tleft">Mise en place de la gaine de tête</h2>
                            <p>Prenez la gaine de tête et l’outil imprimé livré avec votre Disco Ultimate.</p>
                            <p>Nous vous invitons à suivre la vidéo avec attention et de refaire pareil.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
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
                            <h2 className="big-title tleft">Passage des câbles de la tête</h2>
                            <p>Prenez l’ensemble des câbles de la tête.</p>
                            <p>Faites-les passer dans la fixation latérale.</p>
                            <p>Passez entre la barre arrière et la tige du moteur de Z.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-l-branchement-tete.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-l-branchement-tete.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/2-l-branchement-tete.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <h2 className="big-title tleft">Branchement de la nouvelle tête d’impression</h2>
                            <p>Dénudez tous les câbles avant de les brancher.</p>
                            <p>Branchez le palpeur (câble gris) sur le connecteur Z.</p>
                            <p>Branchez la sonde (deux câbles noires) sur le connecteur T0.</p>
                            <p>Branchez les câbles marrons sur le bornier Heater.</p>
                            <p>Branchez les câbles du ventilateur repéré (ceux avec la boucle) sur le bornier FAN2.</p>
                            <p>Branchez les câbles du ventilateur restant sur le bornier FAN1.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoUltimate/Addon/Bicouleur/2-m-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Montage du pack bi-couleur terminé</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step"
                                data-redirect="/start/disco-ultimate/bi-couleur/notice-3.html?version=ultimate-addon-v1&amp;options=bi-couleur" htmlFor="yo">
                                Je passe à l'étape suivante
                    </label>
                        </div>
                    </section>
                </section>


            </Layout>
        );
    }
}

module.exports = BiColor;