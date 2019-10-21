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
                        <li className="new-btn btn-classic btn-grey step active">
                            <a className="btn-wide btn-big"
                                href="/start/disco-ultimate/bi-couleur/notice-8.html?version=ultimate-addon-v1&amp;options=bi-couleur">
                                GCode
                    </a>
                        </li>
                    </ul>
                    <button className="toggle-nav"><i className="fa fa-arrow-right"></i></button>
                </nav>
                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Bicouleur/7-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <h1 className="title tleft">Notice de montage pack bi-couleur - préparation d’un gcode bi-couleur</h1>
                        <p className="big-title tleft">Préparer un gcode</p>
                        <p>
                            Nous avons ajouté dans notre dernier cura la possibilité de préparer des gcodes pour la double extrusion. Si vous n’êtes pas
                            familiers de Cura, rendez-vous d’abord
                    <a className="link-classic" href="/start/logiciels/cura-by-dagoma.html?printer=disco-ultimate">ici.</a>
                        </p>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">
                        <figure>
                            <img src="/medias/DiscoEasy/Add-on/Bicouleur/8-b-stl.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <h2 className="big-title tleft">Les fichiers STL pour la&nbsp;bi-couleur</h2>
                            <p>Les fichiers pour imprimer en bi-couleurs sont spécifique, ils doivent être au préalable séparés en deux avec la même origine.
                        Cura peut ensuite les rassembler et les slicers en un seul et même gcode.</p>
                            <p>Nous vous avons préparé un pack de 15 objets pour la bi-couleur.</p>
                            <p className="tleft">
                                <a href="http://media.dagoma.fr/stl/15STL.zip" className="new-btn btn-classic btn-grey btn-wide" download="15STL.zip">
                                    Télécharger les 15 objets
                        </a>
                            </p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Bicouleur/8-c-choix-du.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Bicouleur/8-c-choix-du.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Add-on/Bicouleur/8-c-choix-du.webm" type='video/webm' />
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
                            <h2 className="big-title tleft">Installation de Cura pour la double extrusion</h2>
                            <p className="text-red">Si ce n’est pas déjà fait, téléchargez la dernière version de Cura.</p>
                            <p className="tleft">
                                <a href="https://dist.dagoma3d.com/CuraByDagoma" target="_blank" className="new-btn btn-classic btn-grey btn-wide">
                                    Télécharger
                        </a>
                            </p>
                            <p>Une fois installé, sur l’écran de choix d’imprimante, cliquez sur discoeasy200, choisissez oui pour la double extrusion, et
                        appuyez sur OK.</p>
                            <p>Voilà ! Nous vous expliquons la nouvelle interface et son fonctionnement juste après.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">
                        <figure>
                            <img src="/medias/DiscoEasy/Add-on/Bicouleur/8-d-nouvelle-interface.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <h2 className="big-title tleft">Les nouveautés de l’interface</h2>
                            <p>A - Double extrusion signifie double réglage de filament. Chargez un filament dans l’extrudeur 1 (le numéro d’extrudeur est
                                également repéré sur votre machine) puis choisissez son paramètre. Faites de même pour le second. Nous verrons ensuite comment
                        affecter un filament à un STL.</p>
                            <p>B - Le choix du filament pour le support. Si vous activez le support, vous pouvez choisir un des filaments pour le support
                        uniquement. Nous allons vous montrer l’impact de ce paramètre.</p>
                            <p>C - Le choix du volume de purge. Ce paramètre est très important pour obtenir une pièce propre. Nous vous expliquons tout plus
                        bas.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">

                        <video className="video-js" preload="auto" width="100%" height="auto" poster="" data-setup="{}">
                            <source src="/medias/DiscoEasy/Add-on/Bicouleur/8-e-filament.mp4" type='video/mp4' />
                            <source src="/medias/DiscoEasy/Add-on/Bicouleur/8-e-filament.ogv" type='video/ogv' />
                            <source src="/medias/DiscoEasy/Add-on/Bicouleur/8-e-filament.webm" type='video/webm' />
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
                            <h2 className="big-title tleft">Associer la couleur de filament</h2>
                            <p>Choisissez les paramètres des filaments chargés dans vos extrudeur 1 et 2.</p>
                            <p>Importez les STL.</p>
                            <p>Faites un "clic droit" sur un des deux puis “Assemblage pour la double extrusion”.</p>
                            <p>Centrez le fichier.</p>
                            <p className="italic">Astuce: Vous pouvez intervertir les couleurs au besoin dans le menu du clic droit.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-white block-info-cursor row">
                        <figure>
                            <img src="/medias/DiscoEasy/Add-on/Bicouleur/8-f-type-support.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <h2 className="big-title tleft">Choisir le type de support</h2>
                            <p>Pour notre exemple, nous avons mis du orange dans l’extrudeur 1 et du gris dans l’extrudeur 2.</p>
                            <p>La bi-extrusion offre la possibilité de gérer les supports de différentes façon (bien-sur il faut au préalable activer les
                        supports) :</p>
                            <ul className="lsn tleft-child">
                                <li className="col-hlspace">
                                    <p>A. Les deux : Les deux filaments seront utilisés pour faire le support.</p>
                                </li>
                                <li className="col-hlspace">
                                    <p>B. Filament 1 : Seul le filament 1 sera utilisé pour le support, orange ici.</p>
                                </li>
                                <li className="col-hlspace">
                                    <p>C. Filament 2 : Seul le filament 2 sera utilisé pour le support, gris ici.</p>
                                </li>
                                <li className="col-hlspace">
                                    <p>D. Il est possible d’imprimer une pièce monochrome avec un support d’une autre matière. Ici, nous avons imprimé le “T”
                                        avec le filament 1 et le support avec le filament 2. Pour se faire, il faut choisir “Filament 2” dans type de support.
                            </p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex block-video height-350 row">
                    <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">
                        <figure>
                            <img src="/medias/DiscoEasy/Add-on/Bicouleur/8-g-volume-purge.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-m-24 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <h2 className="big-title tleft">Choisir le volume de purge</h2>
                            <p>Pour passer d’un filament à l’autre il est nécessaire de purger le restant de couleur présent dans la buse. Ce volume est
                        généralement réglé sur standard.</p>
                            <p>Pour des couleurs proches tel que le blanc et le beige (A), passer sur “Petit (30 mm3)” permet de réduire les pertes sans
                        perdre en qualité.</p>
                            <p>Pour des couleurs très contrastées (C) tel que le beige et le noir, passer sur “Grand (125 mm3)” permet de conserver la
                        qualité, dans ce cas les pertes sont plus importante.</p>
                            <p>Pour la plupart des couleurs proches (B), “Standard (90 mm3)” suffira.</p>
                            <p>N’hésitez pas à nous partager vos expériences de mélange de filaments.</p>
                            <p>Remarque : Pour les mélanges de matière, préférez “Grand (125 mm3)”.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 block-white-space bg-gradient-orange row">
                    <p className="big-title">Il ne vous reste plus qu’à préparer votre fichier et lancer votre impression bi-couleur.</p>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/DiscoEasy/Add-on/Bicouleur/7-a-intro.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-right">
                        <p className="big-title">Préparation d’un fichier bi-couleur terminée</p>
                        <p>Vous savez tout sur l’impression bi-couleur. Partagez nous vos créations sur le Club Dagoma.</p>
                    </section>
                </section>


            </Layout>
        );
    }
}

module.exports = BiColor;