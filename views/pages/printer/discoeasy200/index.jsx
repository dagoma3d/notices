var React = require('react');
var Layout = require('../../layouts/default');

class Printer extends React.Component {
    render() {
        return (
            <Layout>
                <section className="col-xl-24 col-vspace row">
                    <p className="big-title col-vspace">Rentrez votre numéro de série</p>
                    <p>La notice s'adaptera en fonction de votre machine.</p>

                    <div className="col-xl-24 col-vspace row">
                        <div className="container col-xl-24 row col-vspace">
                            <section className="col-xl-24 block-little-space row bg-gradient-orange">
                                <div className="col-xl-12 col-xl-offset-6 col-m-20 col-m-offset-2 col-vspace row">
                                    <div className="dib row col-xl-16 col-xl-offset-4 col-l-20 col-l-offset-2 col-m-24 col-m-offset-0 row">
                                        <input type="text" className="tnormal full-width col-space" size="50" placeholder="ex: 02-FRRBX-01-0008188"
                                            name="version" />
                                        <div id="response-serial" className="error text-red color-white"></div>
                                        <p className="tleft small italic col-vtspace">
                                            <a className="link-classic btn-sub-step" data-id="open-disco">
                                                Comment trouver le numéro de série de votre DiscoEasy200 ?
                                </a>
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <div className="col-xl-10 col-xl-offset-7 col-l-12 col-l-offset-6 col-m-18 col-m-offset-3 col-space option-choice row">
                                <p className="block-little-space title">Sélectionnez les add-ons que vous possédez : </p>
                                <div className="dib col-hspace checkbox-classic">
                                    <input type="checkbox" className="tnormal" name="options" id="option-1" value="extrudeur-plus" />
                                    <label className="tnormal" htmlFor="option-1">Extrudeur+</label>
                                </div>

                                <div className="dib col-hspace checkbox-classic">
                                    <input type="checkbox" className="tnormal" name="options" id="option-2" value="ecran" />
                                    <label className="tnormal" htmlFor="option-2">Ecran</label>
                                </div>

                                <div className="dib col-hspace checkbox-classic">
                                    <input type="checkbox" className="tnormal" name="options" id="option-3" value="pack-expert" />
                                    <label className="tnormal" htmlFor="option-3">Pack expert</label>
                                </div>

                                <div className="dib col-hspace checkbox-classic">
                                    <input type="checkbox" className="tnormal" name="options" id="option-4" value="bi-couleur" />
                                    <label className="tnormal" htmlFor="option-4">Pack bi-couleur</label>
                                </div>

                                <div className="dib col-hspace checkbox-classic">
                                    <input type="checkbox" className="tnormal" name="options" id="option-0" value="no-option" />
                                    <label className="tnormal" htmlFor="option-0">Aucun</label>
                                </div>
                            </div>
                            <div className="col-xl-24 block-little-space row">
                                <a className="new-btn btn-valid btn-big btn-wide btn-valid-options" href="/start/discoeasy200/notice-preparation.html">
                                    Valider
                    </a>
                                <div className="col-xl-24 col-vtspace row">
                                    <a className="link-classic tnormal btn-valid-options no-option" href="/start/discoeasy200/notice-preparation.html">
                                        Je veux juste visiter
                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="condition" className="col-xl-24 block-hidden block-sub row">
                    <section className="col-xl-24 block-white-space color-red text-white row">
                        <p className="big-title">Avant de commencer</p>
                    </section>
                    <div className="wrap row">
                        <section className="col-xl-24 display-flex block-video height-350 row">
                            <section className="col col-xl-12 col-m-24 bg-white block-info-cursor row">
                                <figure>
                                    <img className="condition-classic" src="/medias/DiscoEasy/Add-on/Bicouleur/1-c-prerequis-impression.jpg" />
                                    <img className="condition-expert hidden" src="/medias/DiscoEasy/Add-on/Bicouleur/1-c-prerequis-impression-expert.jpg" />
                                </figure>
                            </section>
                            <section className="col col-xl-12 col-m-24 row">
                                <div className="block-caption-classic block-caption-left row col-vspace">
                                    <h2 className="big-title tleft">Votre attention s’il vous plaît !</h2>
                                    <p>Avant de démonter votre imprimante 3D, assurez-vous d’avoir imprimé les pièces nécessaires.</p>
                                    <ul className="list-classic tnormal col-vbspace row tleft-child">
                                        <li className="tleft col-vbspace">Couleur : Gris anthracite.</li>
                                        <li className="tleft col-vbspace">Remplissage : 17%.</li>
                                        <li className="tleft col-vbspace">Qualité : 0,2mm.</li>
                                        <li className="tleft col-vbspace">Supports : Aucun.</li>
                                    </ul>
                                    <p>
                                        <a className="condition-classic new-btn btn-classic btn-grey" href="http://media.dagoma.fr/stl/stl_bicouleur.zip"
                                            download="stl_couleur.zip">
                                            Télécharger
                            </a>
                                        <a className="condition-expert new-btn btn-classic btn-grey hidden" href="http://media.dagoma.fr/stl/stl_bicouleur.zip"
                                            download="stl_couleur.zip">
                                            Télécharger
                            </a>
                                    </p>
                                </div>
                            </section>
                        </section>
                        <div className="col-xl-24 block-little-space row">
                            <a className="new-btn btn-valid btn-big btn-wide btn-valid-options btn-condition" href="/start/discoeasy200/bi-couleur/notice-1.html">
                                Je valide cette étape
                </a>
                        </div>
                    </div>
                </section>

                <section className="col-xl-18 col-xl-offset-3 col-space row">
                    <div id="open-disco" className="block-hidden block-sub row col-xl-24">
                        <div className="col-xl-24 block-white-space">
                            <p className="tcenter bold col-vspace">Le numéro de série se situe sur l'étiquette collé sur le carton du kit, et sous le plateau
                    en aluminium.</p>
                            <p className="tcenter bold col-vspace">Vous avez acheté votre DiscoEasy200 déjà montée ? Entrez "DE200M"</p>
                            <p className="tcenter bold col-vspace">Votre DiscoEasy200 n'a pas de numéro de série ? Entrez "DE200K"</p>
                            <p className="tcenter bold col-vspace">Vous avez acheté une DiscoVery200 ? Entrez "D200"</p>
                            <figure className="col-xl-18 col-xl-offset-3 col-l-20 col-l-offset-2 col-m-24 col-m-offset-0 col-space row">
                                <img className="col-xl-24" src="/medias/DiscoEasy/Notice/1-a-intro.jpg" alt="Trouver numéro de série de ma DiscoEasy200" />
                            </figure>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

module.exports = Printer;