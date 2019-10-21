var React = require('react');
var Layout = require('../../../layouts/default');

class BiColor extends React.Component {
    render() {
        return (
            <Layout>
                <section className="col-xl-24 bg-gradient-orange row">
                    <p className=" col-vspace">Temps total de montage approximatif : 1h30min</p>
                </section>

                <nav className="nav-vertical  col-xl-4 row">
                    <div className="border-nav col-xl-3">
                        <p>Navigation</p>
                    </div>
                    <ul className="col-xl-21 col-xl-offset-3 row notice-step lsn">
                        <li className="new-btn btn-classic btn-grey step active">
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
                        <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Bicouleur/0-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage pack bi-couleur Disco Ultimate - préparation et démontage</h1>
                        <p className="big-title tleft">Vous avez reçu votre pack bi-couleur.</p>
                        <p>Nous allons vous accompagner pour le montage et l’installation de ce 2ème add-on qui vous permettra d’imprimer avec deux couleurs
                    différentes.</p>
                    </section>
                </section>

                <section className="col-xl-24 block-white-space bg-gradient-orange row">
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <figure>
                            <img src="/medias/DiscoEasy/Add-on/Bicouleur/1-b-contenu.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <h2 className="big-title tleft">Dans le pack vous avez trouvé …</h2>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">A - Une tête d’impression bi-couleur</li>
                                <li className="tleft col-vbspace">B - Un bras d’extrudeur+</li>
                                <li className="tleft col-vbspace">C - Un corps d’extrudeur+ E1</li>
                                <li className="tleft col-vbspace">D - Un tube PTFE</li>
                                <li className="tleft col-vbspace">E - Un moteur d’extrudeur</li>
                                <li className="tleft col-vbspace">F - Un ressort d’extrudeur</li>
                                <li className="tleft col-vbspace">G - 3x grandes vis (M3x25mm) et 1x petite vis (M3x6mm)</li>
                                <li className="tleft col-vbspace">H - 6 roulements linéaire (inutiles si vous avez le pack expert)</li>
                                <li className="tleft col-vbspace">I - Câble pour le moteur d’extrudeur E1</li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <figure>
                            <img src="/medias/DiscoEasy/Add-on/Trapezoidales/1-c-prerequis.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <h2 className="big-title tleft">Les pré-requis</h2>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">1. Un tournevis hexagonal 2.5 mm (fourni avec le kit Disco Ultimate)</li>
                                <li className="tleft col-vbspace">2. Un tournevis plat</li>
                                <li className="tleft col-vbspace">3. Un outil imprimé (fourni avec le kit Disco Ultimate)
                            <a href="/medias/DiscoEasy/Add-on/Trapezoidales/palette-montage-petits-roulements.STL" className="link-classic italic"
                                        download="palette-montage-petits-roulements.STL">
                                        téléchargeable ici</a>
                                </li>
                                <li className="tleft col-vbspace">4. Une pince coupante</li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 block-white-space bg-gradient-orange row">
                    <p className="big-title">PLACE AU DÉMONTAGE</p>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-d-ptfe.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-d-ptfe.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-d-ptfe.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">
                            <h2 className="big-title tleft">Retrait du tube ptfe</h2>
                            <p>S’il vous reste du filament dans la tête d'impression, retirez-le.</p>
                            <p>Débranchez le tube PTFE en appuyant sur le connecteur noir et retirez-le du top.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-e-top.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-e-top.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-e-top.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">

                            <h2 className="big-title tleft">Démontage de la partie supérieure</h2>
                            <p>Desserrez les 4 vis latérales.</p>
                            <p>Retirez la partie supérieure de l’imprimante.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-f-retrait-axe-x.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-f-retrait-axe-x.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-f-retrait-axe-x.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">

                            <h2 className="big-title tleft">Retrait de l’axe X</h2>
                            <p>Tournez les tiges pour faire monter l’axe X jusqu’en haut.</p>
                            <p>Retirez-le une fois désengagé.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-g-demontage-axe-x.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-g-demontage-axe-x.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-g-demontage-axe-x.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">

                            <h2 className="big-title tleft">Démontage de l’axe X</h2>
                            <p>Retirez la courroie de la tête.</p>
                            <p>Séparez tous les éléments.</p>
                            <p>Mettez les barres de côté.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-h-plaque-fond.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-h-plaque-fond.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-h-plaque-fond.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">

                            <h2 className="big-title tleft">Retrait de la plaque de fond</h2>
                            <p>Déclipsez la plaque de fond en retirant les patins.</p>
                            <p>Gardez le tout de côté et ne les perdez pas.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
                    <section className="col-xl-12 col-l-24 row">
                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-i-debrancher-tete.mp4" type='video/mp4' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-i-debrancher-tete.ogv" type='video/ogv' />
                            <source src="/medias/DiscoUltimate/Addon/Bicouleur/1-i-debrancher-tete.webm" type='video/webm' />
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                    </section>
                    <section className="col-xl-12 col-l-24 row">
                        <div className="block-caption row col-vspace">

                            <h2 className="big-title tleft">Débranchez la tête d’impression</h2>
                            <p>Sous la machine, retirez les colliers de fixation.</p>
                            <p>Débranchez les fils connectés aux borniers Heater, FAN 1 et FAN 2.</p>
                            <p>Débranchez le palpeur connecté sur le connecteur Z.</p>
                            <p>Débranchez la sonde sur le connecteur T0.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoUltimate/Addon/Bicouleur/1-j-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Démontage de l’imprimante terminé</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step"
                                data-redirect="/start/disco-ultimate/bi-couleur/notice-2.html?version=ultimate-addon-v1&amp;options=bi-couleur" htmlFor="yo">
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