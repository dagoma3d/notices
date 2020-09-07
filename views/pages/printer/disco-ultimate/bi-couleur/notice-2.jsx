const React = require('react');
const Layout = require('../../../../layouts/default');
const NavBar = require('../../../../components/navbar');
const nav = require('../../../../../content/nav/bicolor/du');
const Title = require('../../../../components/title');
const Block = require('../../../../components/block');
const Section = require('../../../../components/section');
const Validation = require('../../../../components/validation');

function BiColor(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={1} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps total de montage approximatif : 1h30min", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="DiscoUltimate/Addon/Bicouleur/1-j-fin.jpg"
        content={[
          { text: "Notice de montage pack bi-couleur", classes: "title tleft", tag: "h1" },
          { text: "Installation du pack bi-couleur", classes: "big-title tleft" },
          { text: "Nous allons maintenant remonter votre Disco Ultimate avec les éléments du pack bi-couleur." }
        ]} />
      <Title t={t} content={[]} />
      <Section
        t={t}
        media={{ id: "AcqJKAH2guw", type: "yt" }}
        content={[
          { text: "Retrait plaque arrière", classes: "big-title tleft", tag: "h2" },
          { text: "Retirez les 4 vis CHC M3x10 qui tiennent la plaque supérieure arrière." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "crLJFBdJMxU", type: "yt" }}
        content={[
          { text: "Ouverture de l'emplacement E1", classes: "big-title tleft", tag: "h2" },
          { text: "Soulevez la plaque et découpez l'emplacement du moteur E1 à l'aide d'une pince coupante." }
        ]} />
      <Section
        t={t}
        media={{ id: "5wUaRbwQdZM", type: "yt" }}
        content={[
          { text: "Pré-montage de l'extrudeur", classes: "big-title tleft", tag: "h2" },
          { text: "Montez le bras d'extrudeur." },
          { text: "Placez le ressort dans l'empreinte sur le corps de l'extrudeur." },
          { text: "Prenez le bras, placez-le pour que le ressort soit pris dans la seconde empreinte." },
          { text: "Comprimez le ressort pour que le bras rentre dans l'encoche." },
          { text: "Déplacez le bras pour que le trou de vis soit aligné avec celui du corps." },
          { text: "Mettez en place les 3 vis M3x25." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "TPPm76A1qNQ", type: "yt" }}
        content={[
          { text: "Installation de l'extrudeur", classes: "big-title tleft", tag: "h2" },
          { text: "Placez le moteur dans le logement repéré E1." },
          { text: "Positionnez le connecteur vers l'intérieur." },
          { text: "Prenez une vis M3x6, placez la dans le trou supérieur droit et serrez le moteur." },
          { text: "Retirez le tube PTFE s'il vous gène." },
          { text: "Passez le fil du capteur dans le trou comme sur la vidéo." },
          { text: "Orientez l'extrudeur puis vissez les 3 vis M3x25." },
          { text: "La tête de la vis M3x6 rentre dans un logement prévu dans le corps d'extrudeur." },
          { text: "Le bras doit pouvoir bouger après serrage." }
        ]} />
      <Section
        t={t}
        media={{ id: "UarcMOEOouA", type: "yt" }}
        content={[
          { text: "Branchement de l'extrudeur", classes: "big-title tleft", tag: "h2" },
          { text: "Branchez le câble du moteur comme sur la vidéo." },
          { text: "Remettez la plaque en place et vissez la avec les 4 vis M3x10." },
          { text: "Branchez le capteur du nouvel extrudeur sur le connecteur 1." },
          { text: "Branchez le câble moteur sur le connecteur E1." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "mahkE1oUPX0", type: "yt" }}
        content={[
          { text: "Montage des barres de l'axe X", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez 2 barres courtes." },
          { text: "Introduisez-les avec délicatesse dans les roulements (faites quelques rotations pour faciliter leur entrée). Une fois en place, faites quelques allers-retours pour vérifier que tout va bien." }
        ]} />
      <Section
        t={t}
        media={{ id: "EyjtEGkGawg", type: "yt" }}
        content={[
          { text: "Installation de la courroie de la tête", classes: "big-title tleft", tag: "h2" },
          { text: "Nous vous conseillons de suivre la vidéo avec attention." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "WSnrP3lVfgM", type: "yt" }}
        content={[
          { text: "Installation de l'axe X", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez l'axe X, orientez-le pour que le moteur de X soit à gauche de la machine lorsque la face avant est devant vous." },
          { text: "Insérez les barres dans les roulements sans forcer." },
          { text: "Vissez les tiges trapézoïdales dans les écrous pour faire descendre l'axe." },
          { text: "Descendez les deux chariots en même temps." }
        ]} />
      <Section
        t={t}
        media={{ id: "QYGzMbwyWIA", type: "yt" }}
        content={[
          { text: "Repérage du câble ventilateur arrière", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez le câble du ventilateur arrière et faites un noeud à 2cm du bout." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "50a1FM7_5sw", type: "yt" }}
        content={[
          { text: "Mise en place de la gaine de tête", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez la gaine de tête et l'outil imprimé livré avec votre Disco Ultimate." },
          { text: "Nous vous invitons à suivre la vidéo avec attention et de refaire pareil." }
        ]} />
      <Section
        t={t}
        media={{ id: "wJoQ2XgS2BU", type: "yt" }}
        content={[
          { text: "Passage des câbles de la tête", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez l'ensemble des câbles de la tête." },
          { text: "Faites-les passer dans la fixation latérale." },
          { text: "Passez entre la barre arrière et la tige du moteur de Z." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "SoUGAu42pb0", type: "yt" }}
        content={[
          { text: "Branchement de la nouvelle tête d'impression", classes: "big-title tleft", tag: "h2" },
          { text: "Dénudez tous les câbles avant de les brancher." },
          { text: "Branchez le palpeur (câble gris) sur le connecteur Z." },
          { text: "Branchez la sonde (deux câbles noires) sur le connecteur T0." },
          { text: "Branchez les câbles marrons sur le bornier Heater." },
          { text: "Branchez les câbles du ventilateur repéré (ceux avec la boucle) sur le bornier FAN2." },
          { text: "Branchez les câbles du ventilateur restant sur le bornier FAN1." }
        ]} />
      <Block
        t={t}
        img="DiscoUltimate/Addon/Bicouleur/2-m-fin.jpg"
        content={[
          { text: "Montage du pack bi-couleur terminé", classes: "big-title" }
        ]}>
        <Validation t={t} step="/addon/bicolor/du/notice-3" />
      </Block>
    </Layout>
  );
}

module.exports = BiColor;
