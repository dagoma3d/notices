const React = require('react');
const Layout = require('../../../../layouts/default');
const NavBar = require('../../../../components/navbar');
const nav = require('../../../../../content/nav/bicolor/de200');
const Title = require('../../../../components/title');
const Block = require('../../../../components/block');
const Section = require('../../../../components/section');
const Validation = require('../../../../components/validation');

function BiColor(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={0} nav={nav} />
      <Title
        t={t}
        content={[
          { text: "Avant de commencer", classes: "big-title" }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/1-c-prerequis-impression.jpg", type: "image" }}
        content={[
          { text: "Votre attention s’il vous plaît !", classes: "big-title tleft", tag: "h2" },
          { text: "Avant de démonter votre imprimante 3D, assurez-vous d’avoir imprimé les pièces nécessaires." },
          {
            list: {
              classes: "list-classic tnormal col-vbspace row tleft-child",
              items: [
                { text: "Couleur : Gris anthracite." },
                { text: "Remplissage : 17%." },
                { text: "Qualité : 0,2mm." },
                { text: "Supports : Aucun." }
              ]
            }
          },
          { link: { classes: "condition-classic new-btn btn-classic btn-grey", href: "/medias/stl/stl_bicouleur.zip", download: "stl_couleur.zip", text: "Télécharger" } }
        ]} />
      <Block
        t={t}
        content={[
          { text: "Impression terminée", classes: "big-title" }
        ]}>
        <Validation t={t} step="/addon/bicolor/de200/notice-1" />
      </Block>
    </Layout>
  );
}

module.exports = BiColor;
