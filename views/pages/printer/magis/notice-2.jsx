var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/magis');
const SimpleTitle = require('../../../components/simple-title');
const BasicSection = require('../../../components/basic-section');
const SimpleSection = require('../../../components/simple-section');
const Validation = require('../../../components/validation');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={2} nav={nav} />
        <SimpleTitle
          small={true}
          content={[
            { text: "Temps de préparation : 5 minutes", classes: "col-vtspace" },
            { text: "Temps d'impression : 1 heures 30 minutes", classes: "col-vbspace" }
          ]} />
        <BasicSection
          flip={true}
          img="NevaMagis/Notice/a-derouleur.jpg"
          content={[
            { text: "Notice de première utilisation - page 1 bis", classes: "title tleft", tag: "h1" },
            { text: "J'imprime mon dérouler de bobine", classes: "title tleft", tag: "h2" },
            { text: "ça (dé)roule ma poule !", classes: "col-vtspace big-title tleft" },
            { text: "Vous avez remarqué qu'il manquait un accessoire à votre bobine ? Nous vous proposons ce dérouleur de bobine." }
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "NevaMagis/Notice/b-derouleur.jpg", type: "image" }}
          content={[
            { text: "Étape 1", classes: "title tleft", tag: "h3" },
            { text: "J'imprime avec ma Magis", classes: "big-title" },
            { text: "Téléchargez le fichier que nous vous avons sélectionné avec soin." },
            { text: "Ceci est un dérouleur de bobine." }
          ]}>
          <p className="tleft col-vspace">
            <a href="/medias/NevaMagis/Notice/gcodes/derouleur/dagoma0.g" className="new-btn btn-classic btn-grey btn-wide" download="dagoma0.g">
              Téléchargez le fichier ici
                        </a>
          </p>
          <p className="bg-orange text-white col-space">
            Attention, ce fichier a été préparé pour être imprimé avec du filament Chromatik.<br /><br />Assurez-vous que le fichier s'appelle bien dagoma0.g une fois copié sur la carte.
                    </p>
        </SimpleSection>
        <SimpleSection
          media={{ src: "NevaMagis/Notice/c-assemblage-derouleur.jpg", type: "image" }}
          content={[
            { text: "Étape 2", classes: "title tleft", tag: "h3" },
            { text: "Assemblage", classes: "big-title" },
            { text: "N'hésitez pas à le faire tourner un peu à la main si vous voyez que l'assemblage ne pivote pas bien." }
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "NevaMagis/Notice/d-assemblage-derouleur.jpg", type: "image" }}
          content={[
            { text: "Étape 3", classes: "title tleft", tag: "h3" },
            { text: "Assemblage - Le retour", classes: "big-title" },
            { text: "Déposez la bobine sur votre dérouleur." }
          ]} />
        <BasicSection
          flip={true}
          img="NevaMagis/Notice/a-derouleur.jpg"
          content={[
            { text: "Je suis prêt à dérouler !", classes: "big-title" }
          ]}>
          <Validation step="/printer/magis/notice-3" />
        </BasicSection>
      </Layout>
    );
  }
}

module.exports = Printer;