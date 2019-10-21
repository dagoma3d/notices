var React = require('react');
var Layout = require('../../../layouts/default');

class BiColor extends React.Component {
    render() {
        return (
            <Layout>
                <section className="col-xl-24 bg-gradient-orange row">
                    <p className=" col-vspace"></p>
                </section>

                <nav className="nav-vertical  closed  col-xl-4 row">
                    <div className="border-nav col-xl-3"><p>Navigation</p></div>
                    <ul className="col-xl-21 col-xl-offset-3 row notice-step lsn">
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big"
                                href="/start/discoeasy200/bi-couleur/notice-1.html?addon=bicouleur">
                                Préparation
            </a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big"
                                href="/start/discoeasy200/bi-couleur/notice-2.html?addon=bicouleur">
                                Transfert
            </a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big"
                                href="/start/discoeasy200/bi-couleur/notice-3.html?addon=bicouleur">
                                Installation
            </a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step active">
                            <a className="btn-wide btn-big"
                                href="/start/discoeasy200/bi-couleur/notice-4.html?addon=bicouleur">
                                Finitions
            </a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big"
                                href="/firmware/discoeasy200.html?addon=bicouleur">
                                Mise à jour
            </a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big"
                                href="/start/discoeasy200/calibration.html?addon=bicouleur">
                                Calibration
            </a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big"
                                href="/start/discoeasy200/bi-couleur/notice-7.html?addon=bicouleur">
                                Imprimer
            </a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big"
                                href="/start/discoeasy200/bi-couleur/notice-8.html?addon=bicouleur">
                                GCode
            </a>
                        </li>
                    </ul>
                    <button className="toggle-nav"><i className="fa fa-arrow-right"></i></button>
                </nav>
                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Bicouleur/0-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage pack bi-couleur - finitions</h1>
                        <p className="big-title tleft">Finitions</p>
                        <p>Nous allons maintenant remonter les derniers éléments de finitions avant de remettre en marche votre machine.</p>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Add-on/Bicouleur/4-b-top.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Bicouleur/4-b-top.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Add-on/Bicouleur/4-b-top.webm" type='video/webm' />
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
                            <h2 className="big-title tleft">Remise en place du top</h2>
                            <p>Remettez le top en place. La partie la plus grande doit être vers la face avant.</p>
                            <p>Assurez-vous qu’il soit bien enfoncé.</p>
                            <p>Revissez les vis de serrage.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Notice/11-e-tension-courroie-tete.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/11-e-tension-courroie-tete.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/11-e-tension-courroie-tete.webm" type='video/webm' />
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
                            <h2 className="big-title tleft">Ajustement de la tension de la courroie de la tête</h2>
                            <p className="text-red">Placez la tête à gauche.</p>
                            <p>Détachez la courroie du côté droit.</p>
                            <p>Tirez sur le bout libre sans effort.</p>
                            <p>Forcez pour ajouter 2 crans de tension et re-verrouiller la courroie.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/11-g-gaine.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/11-g-gaine.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/11-g-gaine.webm" type='video/webm' />
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
                            <h2 className="big-title tleft">Remise en place de la gaine</h2>
                            <p>Remettez la gaine en place en récupérant les câbles de la butée et du moteur.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Notice/11-h-cable-management.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Notice/11-h-cable-management.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Notice/11-h-cable-management.webm" type='video/webm' />
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
                            <h2 className="big-title tleft">Gestion des câbles</h2>
                            <p>Utilisez les colliers de serrage pour finir proprement votre montage.</p>
                            <p>Il est important qu’aucun câble ne se balade au dessus de la carte pour éviter d’être abîmé par le plateau.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Add-on/Bicouleur/4-f-ptfe.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Bicouleur/4-f-ptfe.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Add-on/Bicouleur/4-f-ptfe.webm" type='video/webm' />
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
                            <h2 className="big-title tleft">Installation des tubes PTFE</h2>
                            <p>Branchez-les deux tubes PTFE dans les extrudeurs.</p>
                            <p>Faites-les passer entre les barres du top.</p>
                            <p>Raccordez-les naturellement dans la tête (celui venant de droite à droite).</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Bicouleur/4-g-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Finitions terminées</p>
                        <p>Nous allons maintenant mettre à jour la machine pour qu’elle intègre sa nouvelle installation.</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/firmware/discoeasy200.html?addon=bicouleur" htmlFor="yo">
                                Je valide cette étape
                </label>
                        </div>
                    </section>
                </section>


            </Layout>
        );
    }
}

module.exports = BiColor;
