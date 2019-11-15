var React = require('react');
var Layout = require('../layouts/default');
var Article = require('../components/article');
var BasicSection = require('../components/basic-section');
var SimpleTitle = require('../components/simple-title');
var Section = require('../components/section');

class Home extends React.Component {
  render() {
    return (
      <Layout title="Notices et de montage et d'utilisation">
        <BasicSection
          img="FirstStep/premier-pas.jpg"
          content={[
            { text: "Premiers pas", classes: "title big tleft", tag: "h1" },
            { text: "C'est parti !", classes: "tleft big-title" },
            { text: "Félicitations ! Si vous êtes ici c'est que vous avez fait un (bon) choix : vous lancer dans l'aventure de l'impression 3D. Nous allons vous accompagner étape par étape, du montage à la première utilisation de votre machine ou de vos nouveaux composants. Vous êtes prêts ?", classes: "tleft light" },
          ]} />
        <SimpleTitle
          content={[
            { text: "Choisissez votre imprimante 3D pour commencer", classes: "big-title" }
          ]} />
        <section className="col-xl-24 row">
          <div className="btn-diag-container container block-white-space wrap row">
            <Article id="neva-magis" picto="neva-magis-svg.svg" alt="Magis" />
            <Article id="neva" picto="neva-svg.svg" alt="Neva" />
            <Article id="discoeasy200" picto="discoeasy-svg.svg" alt="DiscoEasy200" />
            <Article id="disco-ultimate" picto="disco-ultimate.svg" alt="Disco Ultimate" />
            <Article href="/cura-by-dagoma" picto="a-logo-cura.svg" alt="Cura by Dagoma" />
          </div>
        </section>
        <Section
          id="neva-magis"
          title="Magis"
          articles={[
            { href: "/printer/magis", picto: "neva-magis-svg.svg", alt: "Magis", title: "Premiers pas" },
            { href: "/addon/box/neva-magis", picto: "caisson-neva-magis.svg", alt: "Caisson" },
            { href: "/cura-by-dagoma/magis", picto: "a-logo-cura.svg", alt: "Cura by Dagoma" }
          ]} />
        <Section
          id="neva"
          title="Neva"
          articles={[
            { href: "/printer/neva", picto: "neva-svg.svg", alt: "Neva", title: "Premiers pas" },
            { href: "/addon/box/neva-magis", picto: "caisson-neva-magis.svg", alt: "Caisson" },
            { href: "/cura-by-dagoma", picto: "a-logo-cura.svg", alt: "Cura by Dagoma" }
          ]} />
        <Section
          id="discoeasy200"
          title="DiscoEasy200"
          articles={[
            { href: "/printer/de200", picto: "discoeasy-svg.svg", alt: "DiscoEasy200", title: "Notice de montage" },
            { href: "/addon/screen", picto: "accessoires-52.svg", alt: "Ecran" },
            { href: "/addon/extruder-plus/de200", picto: "accessoires-52.svg", alt: "Extrudeur+" },
            { href: "/addon/expert/de200", picto: "accessoires-52.svg", alt: "Pack expert" },
            { href: "/addon/bicolor/de200", picto: "accessoires-52.svg", alt: "Pack bi-couleur" },
            { href: "/addon/box/disco", picto: "caisson-disco.svg", alt: "Caisson de protection" },
            { href: "/addon/evo/de200", picto: "picto-pack-evo.svg", alt: "Pack évolution Ultimate" },
            { href: "/cura-by-dagoma/de200", picto: "a-logo-cura.svg", alt: "Cura by Dagoma" }
          ]} />
        <Section
          id="disco-ultimate"
          title="Disco Ultimate"
          articles={[
            { href: "/printer/du", picto: "disco-ultimate.svg", alt: "Disco Ultimate", title: "Notice de montage" },
            { href: "/addon/screen", picto: "accessoires-52.svg", alt: "Ecran" },
            { href: "/addon/bicolor/du", picto: "accessoires-52.svg", alt: "Pack bi-couleur" },
            { href: "/addon/box/disco", picto: "accessoires-49.svg", alt: "Caisson de protection" },
            { href: "/cura-by-dagoma/du", picto: "a-logo-cura.svg", alt: "Cura by Dagoma" }
          ]} />
        <section className="col-xl-24 col-space row">
          <div className="wrap row">
            <p className="tcenter"><a className="link-classic btn-sub-step"
              data-id="open-neva">Comment vérifier la version de votre Neva ?</a></p>
          </div>
          <div id="open-neva" className="block-hidden block-sub row col-xl-24">
            <div className="col-xl-24 block-white-space">
              <p className="tcenter bold col-vspace">Magis : Numéro de série &gt; 6000</p>
              <p className="tcenter bold col-vspace">Neva : Numéro de série &lt; 6000 ou pas de numéro de série</p>
              <figure className="col-xl-18 col-xl-offset-3 col-l-20 col-l-offset-2 col-m-24 col-m-offset-0 col-space row">
                <img className="col-xl-24" src="/medias/home/n-serie-neva.jpg" alt="Trouver numéro de série de ma Neva" />
              </figure>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

module.exports = Home;