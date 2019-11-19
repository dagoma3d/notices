const React = require('react');
const Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/magis');
const Title = require('../../../components/title');
const Block = require('../../../components/block');
const Section = require('../../../components/section');
const Validation = require('../../../components/validation');

function Printer(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={2} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps de préparation : 5 minutes", classes: "col-vtspace" },
          { text: "Temps d'impression : 1 heures 30 minutes", classes: "col-vbspace" }
        ]} />
      <Block
        t={t}
        flip={true}
        img="NevaMagis/Notice/a-derouleur.jpg"
        content={[
          { text: "Notice de première utilisation - page 1 bis", classes: "title tleft", tag: "h1" },
          { text: "J'imprime mon dérouler de bobine", classes: "title tleft", tag: "h2" },
          { text: "ça (dé)roule ma poule !", classes: "col-vtspace big-title tleft" },
          { text: "Vous avez remarqué qu'il manquait un accessoire à votre bobine ? Nous vous proposons ce dérouleur de bobine." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "NevaMagis/Notice/b-derouleur.jpg", type: "image" }}
        content={[
          { text: "Étape 1", classes: "title tleft", tag: "h3" },
          { text: "J'imprime avec ma Magis", classes: "big-title" },
          { text: "Téléchargez le fichier que nous vous avons sélectionné avec soin." },
          { text: "Ceci est un dérouleur de bobine." },
          { classes: "tleft col-vspace", link: { href: "/medias/NevaMagis/Notice/gcodes/derouleur/dagoma0.g", download: "dagoma0.g", classes: "new-btn btn-classic btn-grey btn-wide", text: "Téléchargez le fichier ici" } },
          { text: "Attention, ce fichier a été préparé pour être imprimé avec du filament Chromatik.", classes: "bg-orange text-white col-space" },
          { text: "Assurez-vous que le fichier s'appelle bien dagoma0.g une fois copié sur la carte.", classes: "bg-orange text-white col-space" },
        ]} />
      <Section
        t={t}
        media={{ src: "NevaMagis/Notice/c-assemblage-derouleur.jpg", type: "image" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h3" },
          { text: "Assemblage", classes: "big-title" },
          { text: "N'hésitez pas à le faire tourner un peu à la main si vous voyez que l'assemblage ne pivote pas bien." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "NevaMagis/Notice/d-assemblage-derouleur.jpg", type: "image" }}
        content={[
          { text: "Étape 3", classes: "title tleft", tag: "h3" },
          { text: "Assemblage - Le retour", classes: "big-title" },
          { text: "Déposez la bobine sur votre dérouleur." }
        ]} />
      <Block
        t={t}
        flip={true}
        img="NevaMagis/Notice/a-derouleur.jpg"
        content={[
          { text: "Je suis prêt à dérouler !", classes: "big-title" }
        ]}>
        <Validation t={t} step="/printer/magis/notice-3" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;