const React = require('react');
const Layout = require('../../../layouts/default');
const Navbar = require('../../../components/navbar');
const nav = require('../../../../content/nav/box');
const Title = require('../../../components/title');
const Block = require('../../../components/block');
const Section = require('../../../components/section');
const Validation = require('../../../components/validation');

function Box(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <Navbar t={t} active={0} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Préparation", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="NevaMagis/Notice/Addons/Caisson/1-a-intro.jpg"
        content={[
          { text: "Notice de montage caisson Magis et Neva - préparation", classes: "title tleft", tag: "h1" },
          { text: "Vous avez reçu votre caisson pour Magis et Neva", classes: "big-title tleft" },
          { text: "Nous allons vous accompagner pour le montage et l'installation de votre protection pour l'imprimante 3D Magis et Neva." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "NevaMagis/Notice/Addons/Caisson/1-d-contenu.jpg", type: "image" }}
        content={[
          { text: "Dans ce carton vous avez trouvé", classes: "big-title tleft", tag: "h2" },
          {
            list: {
              tag: "ol",
              items: [
                { text: "x2 guides câbles" },
                { text: "x1 fixation chariot" },
                { text: "x1 butée aimantée (aimantée au chariot)" },
                { text: "x3 pieds de Magis" },
                { text: "x1 chariot" },
                { text: "x1 sachet de vis et outils (clef de 6, clef de 2.5, 2 vis M8x20, 4 vis fraisées M3x10, 2 vis bombées M3x12, 6 patins, 20 élastiques, 2 clips imprimés)" },
                { text: "x1 rail" },
                { text: "x1 vitre de protection" },
                { text: "x1 socle en bois noir" },
                { text: "x6 cerclages (1 fixation arrière supérieure, 1 fixation arrière inférieure, 4 fixations avant)" },
              ]
            }
          }
        ]} />
      <Section
        t={t}
        media={{ id: "UV6Ou05TRn0", type: "yt" }}
        content={[
          { text: "Installation des patins", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez les 6 patins dans le petit sachet de vis." },
          { text: "Sous le socle en bois, enfoncez 3 patins dans les angles comme sur la vidéo." },
          { text: "Ensuite sous chacun des trois pieds, enfoncez un patin." },
          { text: "Mettez le socle de côté, il servira plus tard." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "SNk-jH1j_dM", type: "yt" }}
        content={[
          { text: "Installation des pieds sur la Magis", classes: "big-title tleft", tag: "h2" },
          { text: "Reprenez les 3 pieds et installez les sur votre imprimante 3D." },
          { text: "Rentrez l'ergo dans le trou prévu à cet effet." }
        ]} />
      <Section
        t={t}
        media={{ src: "NevaMagis/Notice/Addons/Caisson/1-g-retrait-dibon.jpg", type: "image" }}
        content={[
          { text: "Préparation des cerclages", classes: "big-title tleft", tag: "h2" },
          { text: "Retirez le film protecteur présent sur les pièces." }
        ]} />
      <Block
        t={t}
        img="NevaMagis/Notice/Addons/Caisson/1-a-intro.jpg"
        content={[
          { text: "Préparation des éléments terminée", classes: "big-title" }
        ]}>
        <Validation t={t} step="/addon/box/neva-magis/1" />
      </Block>
    </Layout>
  );
}

module.exports = Box;