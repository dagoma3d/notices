var React = require('react');
var Layout = require('../../../layouts/default');

class Extruder extends React.Component {
    render() {
        return (
            <Layout>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-a-intro.JPG" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice - Utilisation</h1>
                        <p className="big-title tleft">Votre DiscoEasy200 est prête.</p>
                        <p>C’est le moment d’utiliser votre nouvelle installation. C’est parti !</p>
                    </section>
                </section>

                <section className="col-xl-24 block-big-white-space bg-gradient-orange row">
                    <p className="big-title">Commencez par mettre à jour l’imprimante 3D.</p>
                    <p>Revenez sur cette page une fois la mise à jour terminée.</p>
                    <div className="block-white-space">
                        <a href="/firmware/discoeasy200.html" target="_blank" className="new-btn btn-classic btn-grey btn-big btn-wide">
                            C’est par ici !
            </a>
                    </div>
                    <p>Une fois votre imprimante 3d mise à jour, passez à la suite.</p>
                </section>

                <section className="col-xl-24 block-big-white-space bg-light-grey-blue row">
                    <p className="big-title">Comment utiliser ces nouveautés ?</p>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-c-detection-filament.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-c-detection-filament.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-c-detection-filament.webm" type='video/webm' />
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
                            <p className="big-title">La détection de fin de filament</p>
                            <p>Désormais pendant une impression, si l’imprimante 3D est à court de filament, elle se mettra en pause toute seule et éjectera le restant de filament.</p>
                            <p>Après 10 minutes de pause, la DiscoEasy200 s’arrêtera de chauffer.</p>
                            <p>Elle attendra que vous en insériez un nouveau pour reprendre l'impression.</p>
                            <p>Appuyez sur le bouton une fois le filament inséré.</p>
                            <p>Si vous lancez votre imprimante 3D sans filament, aucun soucis, elle vous attendra avant de commencer.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-d-pause-plus.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-d-pause-plus.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-d-pause-plus.webm" type='video/webm' />
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
                            <p className="big-title">La pause</p>
                            <p>Pendant une impression, vous êtes capable de mettre l’imprimante en pause en appuyant sur le bouton. Elle continuera d'imprimer pendant quelques secondes avant de s'arrêter.</p>
                            <p>Après 10 minutes de pause, la DiscoEasy200 s’arrêtera de chauffer pour des raisons de sécurité.</p>
                            <p>Rappuyez sur le bouton pour qu’elle recommence à imprimer. Si votre imprimante 3D était froide, elle commencera par chauffer avant de reprendre l'impression.</p>
                            <p className="col-space bg-light-grey-blue italic">Fonction accessible depuis l'écran : "Interrompre impr."</p>
                            <p className="bg-orange text-white col-space">Si vous appuyez sur le bouton <strong>pendant le palpage</strong>, cela interrompra totalement le lancement. Vous n'aurez qu'à relancer l'impression.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-e-ejection-filament.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-e-ejection-filament.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-e-ejection-filament.webm" type='video/webm' />
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
                            <p className="big-title">Ejection du filament</p>
                            <p>Vous êtes en mesure de retirer automatiquement le filament en restant appuyer sur le bouton de la pause. Vous pouvez relâcher lorsque l’imprimante réagit.</p>
                            <p>Si la tête d’impression est déjà chaude, le filament sortira directement.</p>
                            <p>Si la tête est froide, l’imprimante commencera par chauffer avant de retirer le filament.</p>
                            <p>Nous avons ajouté un témoin de progression de chauffe. La tête se déplace par rapport à sa température. Quand elle arrive à droite, elle est prête.</p>
                            <p className="col-space bg-light-grey-blue italic">
                                Fonction accessible depuis l'écran : "Changement de filament"
                </p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto"
                            poster="" data-setup="{}" controls>
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-f-insertion-filament.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-f-insertion-filament.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-f-insertion-filament.webm" type='video/webm' />
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
                            <p className="big-title">Insertion du filament</p>
                            <p>Avant chaque insertion, coupez le filament pour que le bout soit propre.</p>
                            <p>Lorsque l’imprimante n’a pas de filament, vous pouvez en insérer un nouveau en le présentant dans l’extrudeur. Poussez-le jusqu’à ce qu’il soit entrainé par l’extrudeur.</p>
                            <p>Comme pour l’éjection, vous pouvez l’utiliser à chaud comme à froid avec le même comportement :</p>
                            <p>Si la tête d’impression est déjà chaude, le filament entrera directement.</p>
                            <p>Si la tête est froide, l’imprimante commencera par chauffer avant d'insérer le filament.</p>
                            <p>Retirez l'excédent de purge en sortie de la buse, attention c'est chaud.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">
                        <figure>
                            <img src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-g-flexible.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-m-24 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <p className="big-title">Le flexible</p>
                            <p>L’extrudeur+ a spécialement été conçu pour l’impression du filament flexible. Sa forme permet d’imprimer ce filament avec des performances se rapprochant d’un filament classique.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/ExtrudeurPlus/B-a-intro.JPG" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title tleft">Votre add-on est prêt. À vous de créer !</p>
                    </section>
                </section>


            </Layout >
        );
    }
}

module.exports = Extruder;
