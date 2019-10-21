var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbars/magis');
const nav = require('../../../../content/nav-magis');

class Printer extends React.Component {
    render() {
        return (
            <Layout>
                <NavBar active={0} nav={nav} />
                <section className="col-xl-24 bg-gradient-orange row">
                    <p className=" col-vspace">Temps approximatif : 10 minutes</p>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/NevaMagis/Notice/0-a-magis-bobine.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de première utilisation - Introduction</h1>
                        <h2 className="title tleft">Premiers pas</h2>
                        <p className="big-title tleft">ça y est, vous avez reçu votre Magis.</p>
                        <p>Ensemble, nous allons découvrir votre imprimante et vous accompagner dans une expérience : celle de l’impression 3D avec Dagoma.
                </p>
                        <p>Nous vous avons préparé 4 objets à imprimer.</p>
                        <p>Pour toute cette initiation, vous aurez besoin d'environ 75g de PLA Chromatik. Une bobine de 250g fera donc amplement l'affaire.
                </p>
                    </section>
                </section>

                <section className="col-xl-24 block-big-white-space bg-gradient-orange row">
                    <p className="big-title">Dans ce carton vous avez trouvé…</p>
                </section>

                <section className="col-xl-24 display-flex height-350 row">
                    <section className="col col-xl-12 col-m-24 color-anthracite block-info-cursor row">
                        <figure className="notice-small-img">
                            <img src="/medias/NevaMagis/Notice/0-c-a-gris-contenu.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-m-24 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <p className="big-title">Les indispensables</p>
                            <p>Avec votre Magis vous recevrez à part les éléments indispensables pour lancer votre première impression.</p>
                            <p>L'échantillon de filament ne vous servira pas dans ce tutoriel.</p>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">A. Bras aimantés</li>
                                <li className="tleft col-vbspace">B. Alimentation</li>
                                <li className="tleft col-vbspace">C. Échantillon de fil</li>
                                <li className="tleft col-vbspace">D. Carte SD</li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 color-anthracite block-info-cursor row">
                        <figure className="notice-small-img">
                            <img src="/medias/NevaMagis/Notice/0-c-b-gris-contenu.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <p className="big-title">Les accessoires</p>
                            <p>Bien sûr, ce n’est pas tout, voilà un petit kit pour prendre soin de votre Magis.</p>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">E. Adaptateur SD</li>
                                <li className="tleft col-vbspace">F. Lingettes isopropyliques</li>
                                <li className="tleft col-vbspace">G. Cable USB</li>
                                <li className="tleft col-vbspace">H. Spatule</li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video id="my-video-communaute" className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/NevaMagis/Notice/0-c-c-cales.mp4" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/0-c-c-cales.ogv" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/0-c-c-cales.webm" type='video/mp4' />
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
                            <p className="big-title">Préparation</p>
                            <p>Avant de commencer, retirez les 3 cales oranges qui se trouvent sous le plateau.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 block-big-white-space bg-gradient-orange row">
                    <p className="big-title">Place au montage</p>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video id="my-video-communaute" className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/NevaMagis/Notice/0-d-a-bras.mp4" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/0-d-a-bras.ogv" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/0-d-a-bras.webm" type='video/mp4' />
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
                            <h3 className="title tleft">Étape 1</h3>
                            <p className="big-title">Les bras</p>
                            <p>Placez la Neva face à vous, le bouton vers l'avant.</p>
                            <p>Déposez la tête au centre de l’imprimante.</p>
                            <p>Orientez le ventilateur face à la pièce orange, située à l’arrière de l’imprimante.</p>
                            <p>Reliez la tête aux chariots à l'aide des bras aimantés.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/NevaMagis/Notice/0-d-b-callibration.mp4" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/0-d-b-callibration.ogv" type='video/ogv' />
                            <source src="/medias/NevaMagis/Notice/0-d-b-callibration.webm" type='video/webm' />
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
                            <h3 className="title tleft">Étape 2</h3>
                            <p className="big-title">La calibration</p>
                            <p>Calibrez la machine en suivant les instructions sur l'illustration (effectuez l’étape à chaque fois que vous déplacez
                        l’imprimante).</p>
                            <p>Cette étape dure 5 minutes pendant lesquelles votre imprimante va palper le plateau à différents endroits.</p>
                            <p>Attendez qu'elle ait fini avant de passer à la suite.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video id="my-video-communaute" className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}" controls>
                            <source src="/medias/NevaMagis/Notice/0-d-c-filament.mp4" type='video/mp4' />
                            <source src="/medias/NevaMagis/Notice/0-d-c-filament.ogv" type='video/ogv' />
                            <source src="/medias/NevaMagis/Notice/0-d-c-filament.webm" type='video/webm' />
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
                            <h3 className="title tleft">Étape 3</h3>
                            <p className="big-title">Chaaargez !</p>
                            <p>Prenez votre bobine et déroulez un peu de filament à la main.</p>
                            <p>N'utilisez pas l'échantillon fournis avec l'imprimante.</p>
                            <p>Avant chaque insertion, coupez le filament pour que le bout soit propre.</p>
                            <p>Présentez le filament dans l’extrudeur. Poussez-le jusqu’à ce qu’il soit entraîné par la machine sur quelques centimètres.</p>
                            <p>Ensuite attendez quelques secondes, elle chauffe.</p>
                            <p>Elle aspirera le reste du filament toute seule.</p>
                            <p>Assurez-vous que le filament soit bien arrivé jusqu'à la tête.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/NevaMagis/Notice/0-a-magis-bobine.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Premiers réglages : CHECK !</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/neva-magis/notice-1.html" htmlFor="yo">
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