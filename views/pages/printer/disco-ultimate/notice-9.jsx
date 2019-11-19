var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/du');
const SimpleTitle = require('../../../components/simple-title');
const BasicSection = require('../../../components/basic-section');
const SimpleSection = require('../../../components/simple-section');
const Validation = require('../../../components/validation');

function Printer(props) {
  return (
    <Layout>
      <NavBar active={8} nav={nav} />
      <BasicSection
        img="DiscoUltimate/Notice/9-a-intro.jpg"
        content={[
          { text: "Notice de montage DISCO ULTIMATE - câblage", classes: "title tleft", tag: "h1" },
          { text: "Câblage", classes: "big-title tleft", tag: "h2" },
          { text: "Et si nous commencions à lui donner vie ?" }
        ]} />
      <SimpleTitle content={[]} />
      <SimpleSection
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
      <SimpleSection
        flip={true}
        media={{ src: "DiscoUltimate/Notice/9-c-noeud-tete", type: "video" }}
        content={[
          { text: "Repérage du câble ventilateur arrière", classes: "big-title" },
          { text: "Prenez le câble du ventilateur arrière et faites un noeud à 2cm du bout." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoUltimate/Notice/9-c-bis-gaine-tete", type: "video" }}
        content={[
          { text: "Mise en place de la gaine de tête", classes: "big-title" },
          { text: "Prenez la gaine de tête et l’outil imprimé." },
          { text: "Nous vous invitons à suivre la vidéo avec attention et de refaire pareil." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoUltimate/Notice/9-d-carte", type: "video" }}
        content={[
          { text: "Installation de la carte de contrôle", classes: "big-title" },
          { text: "Sortez-la carte du sachet." },
          { text: "Placez-la avec les connecteur face à vous, en diagonale, le lecteur USB vers la barre transversale." },
          { text: "Serrez-la à l’aide de deux vis M3x6." },
          { text: "Ne serrez pas trop fort pour éviter d’endommager la carte." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoUltimate/Notice/9-e-mot-x", type: "video" }}
        content={[
          { text: "Câblage du moteur de X", classes: "big-title" },
          { text: "Prenez le câble moteur le plus long dans le sachet." },
          { text: "Branchez-le au moteur (pas de soucis de sens, il y a des détrompeurs)." },
          { text: "Faites-le ensuite passer au niveau de la fixation latérale gauche, passez dans la pièce plastique comme sur la vidéo." },
          { text: "Raccordez-le ensuite sur le connecteur X adapté." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoUltimate/Notice/9-f-butee-x", type: "video" }}
        content={[
          { text: "Câblage de la butée de X", classes: "big-title" },
          { text: "Récupérez le câble de la butée de X." },
          { text: "Faites-le suivre le câble du moteur de X." },
          { text: "Raccordez-le ensuite sur le connecteur X adapté." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoUltimate/Notice/9-g-passage-gaine-tete", type: "video" }}
        content={[
          { text: "Passage des câbles de la tête", classes: "big-title" },
          { text: "Prenez l’ensemble des câbles de la tête." },
          { text: "Faites les passer dans la fixation latérale." },
          { text: "Passez entre la barre arrière et la tige du moteur de Z." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoUltimate/Notice/9-h-palpeur", type: "video" }}
        content={[
          { text: "Branchement du palpeur", classes: "big-title" },
          { text: "Branchez le câble du palpeur (câble gris) sur le connecteur Z." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoUltimate/Notice/9-i-sonde", type: "video" }}
        content={[
          { text: "Branchement de la sonde", classes: "big-title" },
          { text: "Branchez la sonde (câbles noires avec connecteur blanc) sur le connecteur T0." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoUltimate/Notice/9-j-cable-tete", type: "video" }}
        content={[
          { text: "Branchement des câbles restants", classes: "big-title" },
          { text: "Dénudez tous les câbles avant de les brancher." },
          { text: "Branchez les câbles marrons sur le bornier Heater." },
          { text: "Branchez les câbles du ventilateur repéré (ceux avec la boucle)  sur le bornier FAN2." },
          { text: "Branchez les câbles du ventilateur restant sur le bornier FAN1." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoUltimate/Notice/9-k-butee-y", type: "video" }}
        content={[
          { text: "Câblage de la butée de Y", classes: "big-title" },
          { text: "Récupérez le câble de la butée de Y (celui qui vient de la face avant)." },
          { text: "Raccordez-le ensuite sur le connecteur Y adapté." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoUltimate/Notice/9-l-mot-y", type: "video" }}
        content={[
          { text: "Câblage du moteur de Y", classes: "big-title" },
          { text: "Récupérez le câble moteur le plus court." },
          { text: "Raccordez-le ensuite sur le moteur de la face avant puis sur le connecteur Y adapté." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoUltimate/Notice/9-m-mot-z", type: "video" }}
        content={[
          { text: "Branchement des moteurs de Z", classes: "big-title" },
          { text: "Récupérez le câble moteur double." },
          { text: "Raccordez-le sur le connecteur Z adapté." },
          { text: "Raccordez-le ensuite sur les moteurs de Z en passant entre la barre inférieure et la pièce plastique." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoUltimate/Notice/9-n-mot-e", type: "video" }}
        content={[
          { text: "Branchement du moteur d’extrudeur", classes: "big-title" },
          { text: "Récupérez le dernier câble moteur." },
          { text: "Raccordez-le ensuite sur le moteur d’extrudeur (sur la face arrière) puis sur le connecteur E0." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoUltimate/Notice/9-o-ep", type: "video" }}
        content={[
          { text: "Branchement des capteurs de l’extrudeur+", classes: "big-title" },
          { text: "Raccordez le câble rouge venant de l’extrudeur E0 sur le connecteur 2." },
          { text: "Raccordez le câble rouge venant du bouton sur le connecteur 3." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoUltimate/Notice/9-p-interrupteur", type: "video" }}
        content={[
          { text: "Installation de l’interrupteur", classes: "big-title" },
          { text: "Clipsez l’interrupteur sur la face avant (le bouton 1 vers le haut de la face avant)." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoUltimate/Notice/9-q-alim-positif", type: "video" }}
        content={[
          { text: "Branchement de l’alimentation (positive)", classes: "big-title" },
          { text: "Récupérez le câble d’alimentation simple." },
          { text: "Branchez-le sur le connecteur de l’interrupteur (le plus bas). Recouvrez-le avec la protection en plastique." },
          { text: "Raccordez-le sur le + du bornier PWR IN." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoUltimate/Notice/9-r-alim-negatif", type: "video" }}
        content={[
          { text: "Branchement de l’alimentation (négative)", classes: "big-title" },
          { text: "Récupérez le câble d'alimentation double avec le connecteur d'alimentation." },
          { text: "Dénudez le fil seul." },
          { text: "Branchez l'autre bout sur le connecteur de l'interrupteur." },
          { text: "Recouvrez-le avec la protection en plastique." },
          { text: "Raccordez-le sur le - du bornier PWR IN." },
          { text: "Rentrez le connecteur d'alimentation de biais dans la pièce plastique arrière gauche prévue à cet effet. Poussez dessus pour le clipser." },
          { text: "Astuce : Présentez-le de biais, poussez-le au fond et ensuite poussez vers le bas pour l'enclencher).", classes: "italic" }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoUltimate/Notice/9-s-lecteur-sd", type: "video" }}
        content={[
          { text: "Installation du lecteur SD", classes: "big-title" },
          { text: "Retirez le cache côté avant gauche." },
          { text: "Récupérez le lecteur SD." },
          { text: "Installez-le comme sur la vidéo. Enfoncez-le bien jusqu’au bout." },
          { text: "Bloquez-le avec une vis M3x6." }
        ]} />
      <BasicSection
        img="DiscoUltimate/Notice/9-v-fin.jpg"
        content={[
          { text: "Le câblage terminé.", classes: "big-title" }
        ]}>
        <Validation step="/printer/du/notice-10" text="Je passe à l'étape suivante" />
      </BasicSection>
    </Layout>
  );
}

module.exports = Printer;
