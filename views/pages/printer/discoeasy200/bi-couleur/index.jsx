var React = require('react');
var Layout = require('../../../../layouts/default');
var NavBar = require('../../../../components/navbar');
var nav = require('../../../../../content/nav/bicolor/de200');
const SimpleTitle = require('../../../../components/simple-title');
const BasicSection = require('../../../../components/basic-section');
const SimpleSection = require('../../../../components/simple-section');
const Validation = require('../../../../components/validation');

function BiColor(props) {
  return (
    <Layout>
      <NavBar active={0} nav={nav} />
      <SimpleTitle
        content={[
          { text: "Avant de commencer", classes: "big-title" }
        ]} />
      <SimpleSection
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
      <BasicSection
        content={[
          { text: "Impression terminée", classes: "big-title" }
        ]}>
        <Validation step="/addon/bicolor/de200/notice-1" />
      </BasicSection>
    </Layout>
  );
}

module.exports = BiColor;
