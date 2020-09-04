const React = require('react');
const Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/du');
const Title = require('../../../components/title');
const Block = require('../../../components/block');
const Section = require('../../../components/section');
const Validation = require('../../../components/validation');

function Printer(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={5} nav={nav} />
      <Block
        t={t}
        img="DiscoUltimate/Notice/6-a-intro.jpg"
        content={[
          { text: "Notice de montage DISCO ULTIMATE - assemblage du plateau", classes: "title tleft", tag: "h1" },
          { text: "Assemblage du plateau", classes: "big-title tleft", tag: "h2" },
          { text: "Nous allons maintenant assembler la pièce qui viendra accueillir vos impression : le plateau." }
        ]} />
      <Title t={t} content={[]} />
      <Section
        t={t}
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
      <Section
        t={t}
        flip={true}
        media={{ id: "PiLo3g9H1cY", type: "yt" }}
        content={[
          { text: "Installation des supports plateau", classes: "big-title" },
          { text: "Prenez le grand support plateau." },
          { text: "Placez le repère R (Right) à droite et le L (Left) à gauche." },
          { text: "La lettre B vers la face avant." },
          { text: "Prenez les deux petits supports et utilisez les mêmes repères pour les aligner convenablement." }
        ]} />
      <Section
        t={t}
        id="du-courroie-y"
        media={{ id: "FzEq9P_YXcM", type: "yt" }}
        content={[
          { text: "Installation de la courroie de Y", classes: "big-title" },
          { text: "Nous vous conseillons de suivre la vidéo avec attention." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "siw6DgPf74g", type: "yt" }}
        content={[
          { text: "Installation du plateau", classes: "big-title" },
          { text: "Alignez les trous du plateau avec ceux des supports." },
          { text: "Mettez en place les écrous dans les pièces, côté caoutchouc de l'écrou vers les logements qui accueilleront les roulements." },
          { text: "Serrez fermement à l'aide de 4 vis fraisée M3x12." }
        ]} />
      <Block
        t={t}
        img="DiscoUltimate/Notice/6-f-fin.jpg"
        content={[
          { text: "Assemblage du plateau terminé", classes: "big-title" },
          { text: "Et hop, la base est prête." }
        ]}>
        <Validation t={t} step="/printer/du/notice-7" text="Je passe à l'étape suivante" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;
