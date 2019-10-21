var React = require('react');
var Layout = require('../../../layouts/default');

class Extruder extends React.Component {
    render() {
        return (
            <Layout>
                <section className="col-xl-24 bg-gradient-orange row">
                    <p className=" col-vspace">Temps approximatif : 15 minutes</p>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice - Montage</h1>
                        <p className="big-title tleft">ça y est, vous avez reçu votre Extrudeur+.</p>
                        <p>Nous allons vous accompagner dans le montage et l’utilisation de cette amélioration pour votre DiscoEasy200.</p>
                    </section>
                </section>

                <section className="col-xl-24 display-flex bg-light-grey-blue height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
                        <figure>
                            <img src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-c-contenu.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <p className="big-title">Dans ce carton vous avez trouvé…</p>
                            <ol className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">Un nouveau cache côté intégrant un bouton</li>
                                <li className="tleft col-vbspace">Un extrudeur+</li>
                                <li className="tleft col-vbspace">Un bras d'extrudeur+</li>
                                <li className="tleft col-vbspace">Deux colliers de fixation</li>
                            </ol>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex bg-light-grey-blue height-350 row">
                    <section className="col col-xl-12 col-m-24 block-info-cursor row">
                        <figure>
                            <img src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-c-prerequis-extru-plus.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-m-24 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <p className="big-title">Les pré-requis</p>
                            <ul className="list-classic tnormal row tleft-child">
                                <li className="tleft col-vbspace">Il vous faut une DiscoEasy200</li>
                                <li className="tleft col-vbspace">Un pack extrudeur+</li>
                                <li className="tleft col-vbspace">Un tournevis hex 2.5mm (fourni dans le kit DiscoEasy200)</li>
                            </ul>
                        </div>
                    </section>
                </section>



                <section className="col-xl-24 block-big-white-space bg-gradient-orange row">
                    <p className="big-title">Place au montage</p>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-e-demontage-extrudeur.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-e-demontage-extrudeur.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-e-demontage-extrudeur.webm" type='video/webm' />
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
                            <p className="big-title">Démontage de l’extrudeur</p>
                            <p>Commencez par retirer le tube blanc en appuyant sur la collerette noire.</p>
                            <p>En maintenant le bras d’extrudeur enfoncé, retirez les 3 vis qui maintiennent l’extrudeur.</p>
                            <p>Retirez ensuite l’ensemble.</p>
                            <p>Conservez le ressort et les vis, ils vont vite reprendre du service.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-f-montage-bras-extrudeur.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-f-montage-bras-extrudeur.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-f-montage-bras-extrudeur.webm" type='video/webm' />
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
                            <p className="big-title">Montage du bras d’extrudeur</p>
                            <p>Placez le ressort dans l'empreinte sur le corps de l’extrudeur.</p>
                            <p>Prenez le bras, placez le pour que le ressort soit pris dans la seconde empreinte.</p>
                            <p>Comprimez le ressort pour que le bras rentre dans l’encoche.</p>
                            <p>Déplacez le bras pour que le trou de vis soit aligné avec celui du corps.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-g-montage-extrudeur-plus.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-g-montage-extrudeur-plus.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-g-montage-extrudeur-plus.webm" type='video/webm' />
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
                            <p className="big-title">Montage de l’extrudeur+</p>
                            <p>Placez les vis de l’ancien extrudeur sur le nouveau.</p>
                            <p>Faites passer le câble dans le trou en haut à gauche.</p>
                            <p>Présentez l’extrudeur en face du moteur.</p>
                            <p>Vissez-le fermement en maintenant le moteur.</p>
                            <p>Assurez-vous que le bras d’extrudeur bouge encore après serrage. (Voir vidéo)</p>
                            <p>Rebranchez le tube blanc sur le nouvel extrudeur. Enfoncez-le d'environ 15mm.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-h-montage-cache.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-h-montage-cache.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-h-montage-cache.webm" type='video/webm' />
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
                            <p className="big-title">Montage du cache côté</p>
                            <p>Retirez l’ancien cache côté.</p>
                            <p>Faites passer les câbles entre les deux barres.</p>
                            <p>Glissez-le cache côté en appuyant sur la pièce centrale.</p>
                            <p>Clipsez-le ensuite sur la barre du bas.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-j-cablage.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-j-cablage.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-j-cablage.webm" type='video/webm' />
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
                            <p className="big-title">Câblage</p>
                            <p>Posez votre DiscoEasy200 sur sa face avant pour accéder au câblage.</p>
                            <p>Connectez ensuite les câbles sur la carte.</p>
                            <p>Branchez le câble de l’extrudeur sur le plot Z+.</p>
                            <p>Branchez le câble du cache côté sur le plot Z-.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-k-finition.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-k-finition.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-k-finition.webm" type='video/webm' />
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
                            <p className="big-title">Finition</p>
                            <p>Utilisez les colliers pour fixer proprement les câbles sous la machine.</p>
                            <p>Vos anciennes pièces ne serviront plus, pensez au recyclage.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/A-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Montage de l'extrudeur+ : CHECK !</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/discoeasy200/extrudeur-plus/utilisation.html" htmlFor="yo">
                                Je valide et je passe à la suite !
                </label>
                        </div>
                    </section>
                </section>


            </Layout >
        );
    }
}

module.exports = Extruder;
