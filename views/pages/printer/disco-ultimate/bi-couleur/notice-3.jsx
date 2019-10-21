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
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big"
                                href="/start/disco-ultimate/bi-couleur/notice-2.html?version=ultimate-addon-v1&amp;options=bi-couleur">
                                Installation
                    </a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step active">
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
                        <img className="col-xl-24" src="/medias/DiscoUltimate/Addon/Bicouleur/2-m-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage pack bi-couleur - finitions</h1>
                        <p className="big-title tleft">Finitions</p>
                        <p>Nous allons maintenant remonter les derniers éléments de finitions avant de remettre en marche votre machine.</p>
                    </section>
                </section>

                <section className="col-xl-24 block-white-space bg-gradient-orange row">
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/10-d-top-installation.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/10-d-top-installation.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/10-d-top-installation.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <h2 className="big-title tleft">Remise en place du top</h2>
                            <p>Remettez le top en place. La partie la plus grande doit être vers la face avant.</p>
                            <p>Assurez-vous qu’il soit bien enfoncé.</p>
                            <p>Revissez les vis de serrage.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/10-e-tension-courroie-tete.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/10-e-tension-courroie-tete.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/10-e-tension-courroie-tete.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <h2 className="big-title tleft">Ajustement de la tension de la courroie de la tête</h2>
                            <p>Placez la tête à gauche.</p>
                            <p>Détachez la courroie du côté droit.</p>
                            <p>Tirez sur le bout libre sans effort.</p>
                            <p>Forcez pour ajouter 2 crans de tension et re-verrouiller la courroie.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/10-j-cable-management.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/10-j-cable-management.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/10-j-cable-management.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <h2 className="big-title tleft">Gestion des câbles</h2>
                            <p>Commencez par fixer les câbles de la tête à l’aide d’un collier de serrage.</p>
                            <p>Ensuite, nous allons faire en sorte de bien maintenir les autres câbles.</p>
                            <p>Notre solution n’est pas unique.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Notice/10-m-ptfe-bicouleur.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Notice/10-m-ptfe-bicouleur.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Notice/10-m-ptfe-bicouleur.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">

                            <h2 className="big-title tleft">Installation du tube PTFE</h2>
                            <p>Ce tube va guider le filament de l’extrudeur jusqu’à la tête d’impression.</p>
                            <p>Il est maintenu par des raccords pneumatique.</p>
                            <p>Poussez-le bien jusqu’au fond à chaque extrémité.</p>
                            <p>Attention, sur la tête d’impression, il est important que ce dernier soit bien enfoncé. Regardez sur la vidéo pour avoir une
                        idée de la longueur. Appuyez sur la collerette noire pour retirer le tube.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoUltimate/Addon/Bicouleur/3-g-fin-bicouleur.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Finitions terminées</p>
                        <p>Nous allons maintenant mettre à jour la machine pour qu’elle intègre sa nouvelle installation.</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/firmware/disco-ultimate.html?version=ultimate-addon-v1&amp;options=bi-couleur"
                                htmlFor="yo">
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