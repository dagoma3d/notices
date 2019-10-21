var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbars/magis');
const nav = require('../../../../content/nav-magis');

class Printer extends React.Component {
    render() {
        return (
            <Layout>
                <NavBar active={2} nav={nav} />
                <section className="col-xl-24 bg-gradient-orange row">
                    <p className="col-vtspace">Temps de préparation : 5 minutes</p>
                    <p className="col-vbspace">Temps d'impression : 1 heures 30 minutes</p>
                </section>

                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/NevaMagis/Notice/a-derouleur.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-left">
                        <h1 className="title tleft">Notice de première utilisation - page 1 bis</h1>
                        <h2 className="title tleft">J'imprime mon dérouler de bobine</h2>
                        <p className="col-vtspace big-title tleft">ça (dé)roule ma poule !</p>
                        <p>Vous avez remarqué qu'il manquait un accessoire à votre bobine ? Nous vous proposons ce dérouleur de bobine.</p>
                    </section>
                </section>

                <section className="col-xl-24 display-flex height-350 row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 block-info-cursor row">
                        <figure>
                            <img src="/medias/NevaMagis/Notice/b-derouleur.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <h3 className="title tleft">Étape 1</h3>
                            <p className="big-title">J'imprime avec ma Magis</p>
                            <p>Téléchargez le fichier que nous vous avons sélectionné avec soin.</p>
                            <p>Ceci est un dérouleur de bobine.</p>
                            <p className="tleft col-vspace">
                                <a href="/medias/NevaMagis/Notice/gcodes/derouleur/dagoma0.g" className="new-btn btn-classic btn-grey btn-wide"
                                    download="dagoma0.g">
                                    Téléchargez le fichier ici
                        </a>
                            </p>
                            <p className="bg-orange text-white col-space">Attention, ce fichier a été préparé pour être imprimé avec du filament
                        Chromatik.<br /><br /> Assurez-vous que le fichier s'appelle bien dagoma0.g une fois copié sur la carte.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex row">
                    <section className="col col-xl-12 col-m-24 bg-light-grey-blue block-info-cursor row">
                        <figure className="row">
                            <img className="col-xl-24" src="/medias/NevaMagis/Notice/c-assemblage-derouleur.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-m-24 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <h3 className="title tleft">Étape 2</h3>
                            <p className="big-title">Assemblage</p>
                            <p>N'hésitez pas à le faire tourner un peu à la main si vous voyez que l'assemblage ne pivote pas bien.</p>
                        </div>
                    </section>
                </section>

                <section className="col-xl-24 display-flex row">
                    <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 bg-light-grey-blue block-info-cursor row">
                        <figure className="row">
                            <img className="col-xl-24" src="/medias/NevaMagis/Notice/d-assemblage-derouleur.jpg" alt="" />
                        </figure>
                    </section>
                    <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
                        <div className="block-caption-classic block-caption-left row col-vspace">
                            <h3 className="title tleft">Étape 3</h3>
                            <p className="big-title">Assemblage - Le retour</p>
                            <p>Déposez la bobine sur votre dérouleur.</p>
                        </div>
                    </section>
                </section>



                <section className="col-xl-24 notice-mask row">
                    <figure className="row col-xl-24">
                        <img className="col-xl-24" src="/medias/NevaMagis/Notice/a-derouleur.jpg" alt="" />
                    </figure>

                    <section className="block-caption-classic block-caption-left">
                        <p className="big-title">Je suis prêt à dérouler !</p>
                        <div className="checkbox-classic checkbox-full-width">
                            <input id="yo" type="checkbox" />
                            <label className="tnormal valid-step" data-redirect="/start/neva-magis/notice-2.html" htmlFor="yo">
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