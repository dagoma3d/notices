var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/du');
const SimpleTitle = require('../../../components/simple-title');
const BasicSection = require('../../../components/basic-section');
const SimpleSection = require('../../../components/simple-section');
const Validation = require('../../../components/validation');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={5} nav={nav} />
        <BasicSection
          img="DiscoUltimate/Notice/6-a-intro.jpg"
          content={[
            { text: "Notice de montage DISCO ULTIMATE - assemblage du plateau", classes: "title tleft", tag: "h1" },
            { text: "Assemblage du plateau", classes: "big-title tleft", tag: "h2" },
            { text: "Nous allons maintenant assembler la pièce qui viendra accueillir vos impression : le plateau." }
          ]} />
        <SimpleTitle content={[]} />
        <SimpleSection
          media={{ src: "DiscoUltimate/Notice/6-b-prerequis.jpg", type: "image", classes: "notice-small-img" }}
          content={[
            { text: "Les pré-requis", classes: "big-title" },
            {
              list: {
                items: [
                  { text: "A. Plateau" },
                  { text: "B. Supports plateau (3 pièces)" },
                  { text: "C. Courroie longue (85cm)" }
                ]
              }
            },
            { text: "Visserie :" },
            {
              list: {
                items: [
                  { text: "4x vis fraisées M3x10 (reste 1)" },
                  { text: "4x écrous freins M3 (reste 1)" }
                ]
              }
            }
          ]} />
        <SimpleSection
          media={{ src: "DiscoUltimate/Notice/6-c-support-plateau", type: "video" }}
          content={[
            { text: "Installation des supports plateau", classes: "big-title" },
            { text: "Prenez le grand support plateau." },
            { text: "Placez le repère R (Right) à droite et le L (Left) à gauche." },
            { text: "La lettre B vers la face avant." },
            { text: "Prenez les deux petits supports et utilisez les mêmes repères pour les aligner convenablement." }
          ]} />
        <SimpleSection
          media={{ src: "DiscoUltimate/Notice/6-d-courroie-y", type: "video" }}
          content={[
            { text: "Installation de la courroie de Y", classes: "big-title" },
            { text: "Nous vous conseillons de suivre la vidéo avec attention." }
          ]} />
        <SimpleSection
          media={{ src: "DiscoUltimate/Notice/6-e-installation-plateau", type: "video" }}
          content={[
            { text: "Installation du plateau", classes: "big-title" },
            { text: "Alignez les trous du plateau avec ceux des supports." },
            { text: "Mettez en place les écrous dans les pièces, côté caoutchouc de l’écrou vers les logements qui accueilleront les roulements." },
            { text: "Serrez fermement à l’aide de 4 vis fraisée M3x12." }
          ]} />
        <BasicSection
          img="DiscoUltimate/Notice/6-f-fin.jpg"
          content={[
            { text: "Assemblage du plateau terminé", classes: "big-title" },
            { text: "Et hop, la base est prête." }
          ]}>
          <Validation step="/printer/du/notice-7" text="Je passe à l'étape suivante" />
        </BasicSection>
      </Layout>
    );
  }
}

module.exports = Printer;
