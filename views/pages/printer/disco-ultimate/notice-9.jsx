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
      <NavBar t={t} active={8} nav={nav} />
      <Block
        t={t}
        img="DiscoUltimate/Notice/9-a-intro.jpg"
        content={[
          { text: "Notice de montage DISCO ULTIMATE - câblage", classes: "title tleft", tag: "h1" },
          { text: "Câblage", classes: "big-title tleft", tag: "h2" },
          { text: "Et si nous commencions à lui donner vie ?" }
        ]} />
      <Title t={t} content={[]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/9-b-prerequis.jpg", type: "image", classes: "notice-small-img" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          {
            list: {
              items: [
                { text: "A. Carte de contrôle" },
                { text: "B. Sachet de câbles" },
                { text: "C. Petit sachet électronique + lecteur SD" }
              ]
            }
          },
          { text: "Visserie :" },
          {
            list: {
              items: [
                { text: "3x vis M3x6 (reste 0)" }
              ]
            }
          }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "QYGzMbwyWIA", type: "yt" }}
        content={[
          { text: "Repérage du câble ventilateur arrière", classes: "big-title" },
          { text: "Prenez le câble du ventilateur arrière et faites un noeud à 2cm du bout." }
        ]} />
      <Section
        t={t}
        media={{ id: "50a1FM7_5sw", type: "yt" }}
        content={[
          { text: "Mise en place de la gaine de tête", classes: "big-title" },
          { text: "Prenez la gaine de tête et l'outil imprimé." },
          { text: "Nous vous invitons à suivre la vidéo avec attention et de refaire pareil." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "md_qbmMm7rc", type: "yt" }}
        content={[
          { text: "Installation de la carte de contrôle", classes: "big-title" },
          { text: "Sortez-la carte du sachet." },
          { text: "Placez-la avec les connecteur face à vous, en diagonale, le lecteur USB vers la barre transversale." },
          { text: "Serrez-la à l'aide de deux vis M3x6." },
          { text: "Ne serrez pas trop fort pour éviter d'endommager la carte." }
        ]} />
      <Section
        t={t}
        media={{ id: "nsVMYjsB44Q", type: "yt" }}
        content={[
          { text: "Câblage du moteur de X", classes: "big-title" },
          { text: "Prenez le câble moteur le plus long dans le sachet." },
          { text: "Branchez-le au moteur (pas de soucis de sens, il y a des détrompeurs)." },
          { text: "Faites-le ensuite passer au niveau de la fixation latérale gauche, passez dans la pièce plastique comme sur la vidéo." },
          { text: "Raccordez-le ensuite sur le connecteur X adapté." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "rVgAaNeTDmA", type: "yt" }}
        content={[
          { text: "Câblage de la butée de X", classes: "big-title" },
          { text: "Récupérez le câble de la butée de X." },
          { text: "Faites-le suivre le câble du moteur de X." },
          { text: "Raccordez-le ensuite sur le connecteur X adapté." }
        ]} />
      <Section
        t={t}
        media={{ id: "wJoQ2XgS2BU", type: "yt" }}
        content={[
          { text: "Passage des câbles de la tête", classes: "big-title" },
          { text: "Prenez l'ensemble des câbles de la tête." },
          { text: "Faites les passer dans la fixation latérale." },
          { text: "Passez entre la barre arrière et la tige du moteur de Z." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "JdfAnVkq19E", type: "yt" }}
        content={[
          { text: "Branchement du palpeur", classes: "big-title" },
          { text: "Branchez le câble du palpeur (câble gris) sur le connecteur Z." }
        ]} />
      <Section
        t={t}
        media={{ id: "qGup4l14zkU", type: "yt" }}
        content={[
          { text: "Branchement de la sonde", classes: "big-title" },
          { text: "Branchez la sonde (câbles noires avec connecteur blanc) sur le connecteur T0." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "v-JsMGu6HQE", type: "yt" }}
        content={[
          { text: "Branchement des câbles restants", classes: "big-title" },
          { text: "Dénudez tous les câbles avant de les brancher." },
          { text: "Branchez les câbles marrons sur le bornier Heater." },
          { text: "Branchez les câbles du ventilateur repéré (ceux avec la boucle)  sur le bornier FAN2." },
          { text: "Branchez les câbles du ventilateur restant sur le bornier FAN1." }
        ]} />
      <Section
        t={t}
        media={{ id: "ILxua5HxRsk", type: "yt" }}
        content={[
          { text: "Câblage de la butée de Y", classes: "big-title" },
          { text: "Récupérez le câble de la butée de Y (celui qui vient de la face avant)." },
          { text: "Raccordez-le ensuite sur le connecteur Y adapté." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "iXJM7TA8Tf4", type: "yt" }}
        content={[
          { text: "Câblage du moteur de Y", classes: "big-title" },
          { text: "Récupérez le câble moteur le plus court." },
          { text: "Raccordez-le ensuite sur le moteur de la face avant puis sur le connecteur Y adapté." }
        ]} />
      <Section
        t={t}
        media={{ id: "xIVoaCOR8wQ", type: "yt" }}
        content={[
          { text: "Branchement des moteurs de Z", classes: "big-title" },
          { text: "Récupérez le câble moteur double." },
          { text: "Raccordez-le sur le connecteur Z adapté." },
          { text: "Raccordez-le ensuite sur les moteurs de Z en passant entre la barre inférieure et la pièce plastique." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "yI-7p9plZhI", type: "yt" }}
        content={[
          { text: "Branchement du moteur d'extrudeur", classes: "big-title" },
          { text: "Récupérez le dernier câble moteur." },
          { text: "Raccordez-le ensuite sur le moteur d'extrudeur (sur la face arrière) puis sur le connecteur E0." }
        ]} />
      <Section
        t={t}
        media={{ id: "DProRp7sjDY", type: "yt" }}
        content={[
          { text: "Branchement des capteurs de l'extrudeur+", classes: "big-title" },
          { text: "Raccordez le câble rouge venant de l'extrudeur E0 sur le connecteur 2." },
          { text: "Raccordez le câble rouge venant du bouton sur le connecteur 3." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "Sl4kKxnIUv0", type: "yt" }}
        content={[
          { text: "Installation de l'interrupteur", classes: "big-title" },
          { text: "Clipsez l'interrupteur sur la face avant (le bouton 1 vers le haut de la face avant)." }
        ]} />
      <Section
        t={t}
        media={{ id: "LzLgUxfijVA", type: "yt" }}
        content={[
          { text: "Branchement de l'alimentation (positive)", classes: "big-title" },
          { text: "Récupérez le câble d'alimentation simple." },
          { text: "Branchez-le sur le connecteur de l'interrupteur (le plus bas). Recouvrez-le avec la protection en plastique." },
          { text: "Raccordez-le sur le + du bornier PWR IN." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "neajSepsKoI", type: "yt" }}
        content={[
          { text: "Branchement de l'alimentation (négative)", classes: "big-title" },
          { text: "Récupérez le câble d'alimentation double avec le connecteur d'alimentation." },
          { text: "Dénudez le fil seul." },
          { text: "Branchez l'autre bout sur le connecteur de l'interrupteur." },
          { text: "Recouvrez-le avec la protection en plastique." },
          { text: "Raccordez-le sur le - du bornier PWR IN." },
          { text: "Rentrez le connecteur d'alimentation de biais dans la pièce plastique arrière gauche prévue à cet effet. Poussez dessus pour le clipser." },
          { text: "Astuce : Présentez-le de biais, poussez-le au fond et ensuite poussez vers le bas pour l'enclencher).", classes: "italic" }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "vS4anebn7ZA", type: "yt" }}
        content={[
          { text: "Installation du lecteur SD", classes: "big-title" },
          { text: "Retirez le cache côté avant gauche." },
          { text: "Récupérez le lecteur SD." },
          { text: "Installez-le comme sur la vidéo. Enfoncez-le bien jusqu'au bout." },
          { text: "Bloquez-le avec une vis M3x6." }
        ]} />
      <Block
        t={t}
        img="DiscoUltimate/Notice/9-v-fin.jpg"
        content={[
          { text: "Le câblage terminé.", classes: "big-title" }
        ]}>
        <Validation t={t} step="/printer/du/notice-10" text="Je passe à l'étape suivante" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;
