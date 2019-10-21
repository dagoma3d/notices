var React = require('react');
var Layout = require('../../../layouts/default');

class PackExpert extends React.Component {
    render() {
        return (
            <Layout>
                <section className="col-xl-24 bg-gradient-orange row">
                    <p className=" col-vspace">Temps approximatif : 20 minutes</p>
                </section>

                <nav className="nav-vertical  closed  col-xl-4 row">
                    <div className="border-nav col-xl-3">
                        <p>Navigation</p>
                    </div>
                    <ul className="col-xl-21 col-xl-offset-3 row notice-step lsn">
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big" href="/printer/discoeasy200/pack-expert">1 - Démontage</a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big" href="/start/discoeasy200/pack-expert/notice-2.html">2 - Transfert</a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step active">
                            <a className="btn-wide btn-big" href="/start/discoeasy200/pack-expert/notice-3.html">3 - Montage</a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big" href="/start/discoeasy200/pack-expert/notice-4.html">4 - Finitions</a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big" href="/firmware/discoeasy200.html?pack=expert">5 - Mise à jour</a>
                        </li>
                    </ul>
                    <button className="toggle-nav"><i className="fa fa-arrow-right"></i></button>
                </nav>
                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Trapezoidales/3-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage pack expert - Montage</h1>
                        <p className="big-title tleft">Montage du pack expert</p>
                        <p>Nous allons maintenant remonter la DiscoEasy200 avec les éléments du pack expert.</p>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-b-assemblage-axe-x.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-b-assemblage-axe-x.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-b-assemblage-axe-x.webm" type='video/mp4' />
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
                            <h2 className="title tleft">Etape 1</h2>
                            <p className="big-title">Montage des barres de l’axe X</p>
                            <p>Introduisez-les avec délicatesse dans les roulements (faites quelques rotations pour faciliter leur entrée). Une fois en place,
                        faites quelques allers-retours pour vérifier que tout va bien.</p>
                            <p>Maintenant faites attention au sens des pièces. Référez-vous à la vidéo pour orienter les pièces. La tête et les deux chariots
                                sont plus haut d’un côté (en haut sur la vidéo). Alignez ce côté. Le chariot avec le moteur sera à gauche, l’autre à droite.
                        Dans l’étape suivante vous pourrez vérifier tout ça.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-c-courroie-tete.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-c-courroie-tete.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-c-courroie-tete.webm" type='video/mp4' />
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
                            <h2 className="title tleft">Étape 2</h2>
                            <p className="big-title">Installation de la courroie de la tête</p>
                            <p>Retournez l’ensemble pour voir le dessous de la tête.</p>
                            <p>Reprenez la courroie.</p>
                            <p>Les crans vers le haut de la tête, introduisez la courroie dans le trou supérieur.</p>
                            <p>Récupérez-la de l’autre côté et faites-la revenir à droite (attention aux vrilles).</p>
                            <p>Dans le chariot de droite, passez au-dessus des roulements puis revenez en dessous (crans vers le roulement).</p>
                            <p>Tirez dessus pour récupérer du mou.</p>
                            <p>Faites revenir la courroie vers le chariot de gauche en passant sous la tête.</p>
                            <p>Passez la courroie sous la poulie du moteur et revenez par dessus.</p>
                            <p>Dirigez le bout de la courroie vers la tête. Placez la courroie dans le logement (allez jusqu’au dernier cran).</p>
                            <p>Reprenez l’autre bout et tirez dessus pour tendre la courroie. <span className="bold">Tendez sans forcer</span>, juste pour que
                        tout tienne en place. Poussez la courroie pour la verrouiller dans les crans de la tête.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-d-mot-z.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-d-mot-z.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-d-mot-z.webm" type='video/mp4' />
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
                            <h2 className="title tleft">Etape 3</h2>
                            <p className="big-title">Montage des moteur de Z avec tiges trapézoïdales</p>
                            <p>Retirez les écrous anti-backslash (ça peut être un peu long).</p>
                            <p>Soulevez l’imprimante 3D et insérez les moteurs.</p>
                            <p>Tournez-les pour aligner le connecteur du moteur vers l’extrudeur.</p>
                            <p>Vissez ensuite les moteurs (reprenez les vis utilisées pendant le démontage).</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-e-axe-x.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-e-axe-x.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-e-axe-x.webm" type='video/mp4' />
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
                            <h2 className="title tleft">Étape 4</h2>
                            <p className="big-title">Remontage de l’axe X</p>
                            <p>Prenez l’axe X, orientez-le pour que le moteur de X soit à gauche de la machine lorsque la face avant est devant vous.</p>
                            <p>Faites passer les câbles derrière les barres arrière.</p>
                            <p>Insérez délicatement les barres dans les roulements et faites coulisser l’axe jusqu’en bas.</p>
                            <p>Faites quelques allers-retours pour que l’ensemble s’ajuste bien.</p>
                            <p>Placez une des anciennes pièces plastiques en dessous. Elle protègera votre plateau pour la prochaine étape.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-f-ecrou.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-f-ecrou.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-f-ecrou.webm" type='video/mp4' />
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
                            <h2 className="title tleft">Étape 5</h2>
                            <p className="big-title">Installation des écrous</p>
                            <p>Si votre écrou s’est désassemblé, voici comment le remonter.</p>
                            <p>Présentez-le sur la tige, côté triangulaire vers le haut.</p>
                            <p>Maintenez le ressort pour pouvoir engager l’écrou en vissant.</p>
                            <p>Vissez l’écrou pour laisser la tige dépasser de 2 cm (un pouce).</p>
                            <p>Faites de même pour le second.</p>
                            <p>Faites ensuite monter l’axe X pour faire rentrer les écrous dans leur logement.</p>
                            <p>Prenez ensuite les 6 vis M4x12 et vissez les écrous dans les chariots.</p>
                            <p>Faites ensuite descendre l’ensemble d’environ 5 cm.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-g-recablage.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-g-recablage.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/3-g-recablage.webm" type='video/mp4' />
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
                            <h2 className="title tleft">Étape 6</h2>
                            <p className="big-title">Câblage</p>
                            <p>Rebranchez ensuite le moteur de X.</p>
                            <p>Prenez le câble de la butée et faites-le passer sous la machine en suivant ceux déjà en place.</p>
                            <p>Rebranchez la butée sur le connecteur X+.</p>
                            <p>Rebranchez ensuite les deux moteurs de Z en faisant passer le câble entre la barre inférieure et la pièce plastique.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Trapezoidales/3-h-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Montage du pack expert : CHECK !</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/discoeasy200/pack-expert/notice-4.html" htmlFor="yo">
                                Je valide et je passe à la suite !
                    </label>
                        </div>
                    </section>
                </section>


            </Layout>
        );
    }
}

module.exports = PackExpert;