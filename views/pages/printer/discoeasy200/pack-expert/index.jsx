var React = require('react');
var Layout = require('../../../layouts/default');

class PackExpert extends React.Component {
    render() {
        return (
            <Layout>
                <section className="col-xl-24 bg-gradient-orange row">
                    <p className=" col-vspace">Temps approximatif : 15 minutes</p>
                </section>

                <nav className="nav-vertical  col-xl-4 row">
                    <div className="border-nav col-xl-3">
                        <p>Navigation</p>
                    </div>
                    <ul className="col-xl-21 col-xl-offset-3 row notice-step lsn">
                        <li className="new-btn btn-classic btn-grey step active">
                            <a className="btn-wide btn-big" href="/printer/discoeasy200/pack-expert">1 - Démontage</a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big" href="/start/discoeasy200/pack-expert/notice-2.html">2 - Transfert</a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step ">
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
                        <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Trapezoidales/1-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage pack expert - Préparation et démontage</h1>
                        <p className="big-title tleft">Ça y est, vous avez reçu votre pack expert.</p>
                        <p>Nous allons vous accompagner dans le montage et l’utilisation de cette amélioration pour votre DiscoEasy200.</p>
                    </section>
                </section>

                <section className="col-xl-24 display-flex bg-light-grey-blue height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
                        <figure>
                            <img src="/medias/DiscoEasy/Add-on/Trapezoidales/1-b-contenu.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <p className="big-title">Dans ces deux cartons vous avez trouvé…</p>
                            <p className="bold">Part 1</p>
                            <ol className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">1 tête d'impression non montée</li>
                                <li className="tleft col-vbspace">2 chariots de X</li>
                                <li className="tleft col-vbspace">6 vis M4x12</li>
                                <li className="tleft col-vbspace">3 colliers de fixation (blancs ou noirs)</li>
                            </ol>
                            <p className="bold">Part 2</p>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">2 moteurs de Z avec tiges filetées intégrées + écrous anti-backslash</li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">
                        <figure>
                            <img src="/medias/DiscoEasy/Add-on/Trapezoidales/1-c-prerequis.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-m-24 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <p className="big-title">Les prérequis</p>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">Une DiscoEasy200 montée et un pack expert</li>
                                <li className="tleft col-vbspace">Un tournevis hexagonal 2.5 mm (fourni avec le kit DiscoEasy200)</li>
                                <li className="tleft col-vbspace">Un tournevis plat</li>
                                <li className="tleft col-vbspace">Un outil imprimé (fourni avec le kit DiscoEasy200)
                        <a href="/medias/DiscoEasy/Add-on/Trapezoidales/palette-montage-petits-roulements.STL" className="link-classic italic"
                                        download="palette-montage-petits-roulements.STL">Téléchargeable ici</a></li>
                                <li className="tleft col-vbspace">Une pince coupante</li>
                            </ul>
                        </div>
                    </section>
                </section>



                <section className="col-xl-24 block-big-white-space bg-gradient-orange row">
                    <p className="big-title">Place au démontage</p>
                    <p>A chaque étape, conservez les vis.</p>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-d-gaine.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-d-gaine.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-d-gaine.webm" type='video/mp4' />
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
                            <p className="big-title">Retrait de la gaine torsadée</p>
                            <p>Retirez la gaine de la fixation latérale jusqu’au chariot.</p>
                            <p>Libérez les câbles de moteur et de butée.</p>
                            <p>Déclipsez la gaine du chariot.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-e-debrancher-mot.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-e-debrancher-mot.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-e-debrancher-mot.webm" type='video/mp4' />
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
                            <p className="big-title">Débranchez le moteur de X</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-f-debrancher-butee.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-f-debrancher-butee.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-f-debrancher-butee.webm" type='video/mp4' />
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
                            <p className="big-title">Débranchement de la butée et des moteurs de Z</p>
                            <p>Retournez la machine.</p>
                            <p>Débranchez la butée de X connectée sur la borne X+.</p>
                            <p>Retirez complètement le câble du dessous de la machine.</p>
                            <p>Débranchez les moteurs de Z.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-g-retirer-top.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-g-retirer-top.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-g-retirer-top.webm" type='video/mp4' />
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
                            <p className="big-title">Démontage de la partie supérieure de la machine</p>
                            <p className="italic">S'il vous reste du filament dans la tête d'impression, retirez-le.</p>
                            <p>Débranchez le tube PTFE en appuyant sur le connecteur noir et retirez-le du top.</p>
                            <p>Desserrez les 4 vis latérales.</p>
                            <p>Retirez la partie supérieure de l’imprimante.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-h-retirer-axe-x.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-h-retirer-axe-x.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-h-retirer-axe-x.webm" type='video/mp4' />
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
                            <p className="big-title">Retrait de l’axe X</p>
                            <p>Dévissez les vis supérieures des coupleurs.</p>
                            <p>Retirez les tiges filetées des coupleurs.</p>
                            <p>Tirez ensuite l’ensemble vers le haut pour le sortir de la machine.</p>
                            <p>Retirez ensuite les deux tiges filetées.</p>
                            <p className="italic">Attention, elles sont recouvertes d'huile.</p>
                            <p>Retenez les écrous supérieurs pour éviter qu’ils ne partent d’un coup.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-i-retirer-mot-z.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-i-retirer-mot-z.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-i-retirer-mot-z.webm" type='video/mp4' />
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
                            <p className="big-title">Démontage des moteurs de Z</p>
                            <p>Dévissez les moteurs de Z. </p>
                            <p>Soulevez la base et retirez-les.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-j-demontage-axe-x.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-j-demontage-axe-x.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/1-j-demontage-axe-x.webm" type='video/mp4' />
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
                            <h2 className="title tleft">Étape 7</h2>
                            <p className="big-title">Démontage de l’axe X</p>
                            <p>Retirez la courroie de la tête.</p>
                            <p>Séparez tous les éléments.</p>
                            <p>Mettez les barres de côté.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Trapezoidales/1-k-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Démontage de l’imprimante : CHECK !</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/discoeasy200/pack-expert/notice-2.html" htmlFor="yo">
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