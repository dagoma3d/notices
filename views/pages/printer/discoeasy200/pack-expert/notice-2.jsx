var React = require('react');
var Layout = require('../../../layouts/default');

class PackExpert extends React.Component {
    render() {
        return (
            <Layout>
                <section className="col-xl-24 bg-gradient-orange row">
                    <p className=" col-vspace">Temps approximatif : 30 minutes</p>
                </section>

                <nav className="nav-vertical  closed  col-xl-4 row">
                    <div className="border-nav col-xl-3">
                        <p>Navigation</p>
                    </div>
                    <ul className="col-xl-21 col-xl-offset-3 row notice-step lsn">
                        <li className="new-btn btn-classic btn-grey step ">
                            <a className="btn-wide btn-big" href="/printer/discoeasy200/pack-expert">1 - Démontage</a>
                        </li>
                        <li className="new-btn btn-classic btn-grey step active">
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
                        <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Trapezoidales/2-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage pack expert - Transfert des composants</h1>
                        <p className="big-title tleft">Transfert des composants</p>
                        <p>Nous allons transférer certains composants de votre ancienne imprimante dans les nouvelles pièces imprimées.</p>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-b-roulements-xd.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-b-roulements-xd.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-b-roulements-xd.webm" type='video/mp4' />
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
                            <p className="big-title">Récupération des roulements de courroie</p>
                            <p>Prenez le chariot droit de l’axe X.</p>
                            <p>Dévissez la vis qui maintient les 2 roulements de courroie.</p>
                            <p>Mettez l’ancienne pièce de côté.</p>
                            <p>Installez les roulements dans la nouvelle pièce en vous aidant de l’outil imprimé.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-c-mot-butee-x.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-c-mot-butee-x.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-c-mot-butee-x.webm" type='video/mp4' />
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
                            <p className="big-title">Récupération du moteur de X et de la butée</p>
                            <p>Prenez le chariot gauche de l’axe X.</p>
                            <p>Retirez les vis qui tiennent le moteur.</p>
                            <p>Retirez le moteur.</p>
                            <p>Retirez la butée et remontez-la dans la nouvelle pièce (attention à l’orientation de la languette).</p>
                            <p>Mettez le moteur en place dans la nouvelle pièce (respectez la même orientation).</p>
                            <p>Revissez-le (aidez-vous de l’outil imprimé pour placer la dernière vis).</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-d-deverrouillage-tete.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-d-deverrouillage-tete.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-d-deverrouillage-tete.webm" type='video/mp4' />
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
                            <p className="big-title">Déverrouillage de la tête d’impression</p>
                            <p>Retirez les deux vis sur le côté de la tête.</p>
                            <p>Retirez le verrou qui maintient la buse.</p>
                            <p>Retirez ensuite la vis de l’autre côté.</p>
                            <p>Coupez le collier de fixation qui maintient les câbles.</p>

                            <p className="italic">Faites attention aux câbles.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-e-composant-tete.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-e-composant-tete.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-e-composant-tete.webm" type='video/mp4' />
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
                            <p className="big-title">Démontage de la tête d’impression</p>
                            <p className="italic">Retirez chacun des composants avec soin.</p>

                            <p>Retirez les câbles du ventilateur arrière et placez-y un repère pour le remontage.</p>
                            <p>Retirez les deux ventilateurs.</p>
                            <p>Retirez la buse à l’aide d’un tournevis plat pour faire levier.</p>
                            <p>Retirez le palpeur.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-f-palpeur.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-f-palpeur.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-f-palpeur.webm" type='video/mp4' />
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
                            <p className="big-title">Remontage du palpeur</p>
                            <p>Prenez la nouvelle pièce imprimée.</p>
                            <p>Placez la vis du palpeur dans son emplacement (la plus courte des 3 vis de la tête).</p>
                            <p>Vissez-la pour qu’elle arrive à fleur dans l’emplacement du palpeur.</p>
                            <p>Positionnez le palpeur au plus bas en butée.</p>
                            <p>Serrez légèrement la vis pour le maintenir en place.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-g-buse.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-g-buse.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-g-buse.webm" type='video/mp4' />
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
                            <p className="big-title">Remontage de la buse</p>
                            <p>Prenez la buse et orientez-la pour que les câbles en sortie soient orientés vers le ventilateur avant (à l’opposé du palpeur).
                    </p>
                            <p>Enfoncez-la dans son logement comme sur la vidéo.</p>
                            <p>Assurez-vous qu'elle soit bien enfoncée et bien droite.</p>
                            <p className="col-space color-orange">Attention, le bloc de chauffe (la partie carrée) ne doit pas toucher le plastique.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-h-ventilo.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-h-ventilo.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-h-ventilo.webm" type='video/mp4' />
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
                            <p className="big-title">Remontage des ventilateurs</p>
                            <p>Prenez le ventilateur avant.</p>
                            <p>Orientez l’étiquette du côté de la buse, elle ne doit pas être visible de l’extérieur.</p>
                            <p>Placez également la sortie des câbles vers vous.</p>
                            <p>Poussez le pour le rentrer dans son logement.</p>
                            <p>Faire de même pour le ventilateur arrière et retirez son repérage.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-i-verrouillage-tete.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-i-verrouillage-tete.ogv" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Trapezoidales/2-i-verrouillage-tete.webm" type='video/mp4' />
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
                            <h2 className="title tleft">Étape 8</h2>
                            <p className="big-title">Reverrouillage de la tête</p>
                            <p>Faites une petite boucle avec le câble du ventilateur avant.</p>
                            <p>Récupérez le verrou et faites passer les câbles comme sur la vidéo.</p>
                            <p className="bold text-red">Clipsez-le sans pincer les câbles (risque de court-circuit).</p>
                            <p>Revissez le fermement.</p>
                            <p>Faites passer les câbles du ventilateur arrière dans leur logement.</p>
                            <p>Récupérez la gaine, posez-la dans le passage arrière, puis maintenez-la à l’aide d’un collier de serrage.</p>

                            <p className="italic">Ne serrez pas trop fort pour éviter d'abîmer les câbles.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Trapezoidales/2-j-fin.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Transfert des composants : CHECK !</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/discoeasy200/pack-expert/notice-3.html" htmlFor="yo">
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