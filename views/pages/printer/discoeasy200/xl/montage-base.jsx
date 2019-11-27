const React = require('react');
const Layout = require('../../../../layouts/default');
const NavBar = require('../../../../components/navbar');
const nav = require('../../../../../content/nav/xl/de200');
const Title = require('../../../../components/title');
const Block = require('../../../../components/block');
const Section = require('../../../../components/section');
const Validation = require('../../../../components/validation');

function Xl(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={1} nav={nav} />
      <Title
        t={t}
        content={[
          { text: "PARTIE 2.1 - montage de la base", classes: "big-title" },
          { text: "Nous entamons maintenant le montage, étape par étape." }
        ]} />
      <Section
        t={t}
        media={{ id: "gpM6KTXt4Co", type: "yt" }}
        content={[
          { text: "10.1 - montage des fix cotés", classes: "big-title tleft", tag: "h2" },
          { text: "Nous allons ré-installer les moteurs de Z. Pour cela, n'enlevez pas les coupleurs, ils sont déja parfaitement installés." },
          { text: "Contentez vous de viser les moteurs avec les vis M3-6mm." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "QwIgUnDOkDI", type: "yt" }}
        content={[
          { text: "10.2 - montage des fix cotés", classes: "big-title tleft", tag: "h2" },
          { text: "Nous commençons par le montage des fixations cotés :", classes: "bold" },
          { text: "Prenez 8 écrous et 8 vis (M3x16). Placez les écrous dans les 4 logements comme sur la vidéo (sur les 2 fixations)." },
          { text: "Mettez en place les vis sans trop serrer, juste pour maintenir les écrous et éviter que les vis ne bougent. Nous les serrerons plus tard pour maintenir les barres." },
        ]} />
      <Section
        t={t}
        media={{ id: "xXf14b-DbP4", type: "yt" }}
        content={[
          { text: "11 - installation des moteurs de Z", classes: "big-title tleft", tag: "h2" },
          { text: "Utilisez pour fixer les moteurs les 2 x 2 vis de M3x6mm. Serrez 2 vis par moteur." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "W93wGs5CB2M", type: "yt" }}
        content={[
          { text: "12 - installation de la barre transversale", classes: "big-title tleft", tag: "h2" },
          { text: "Rentrez la barre dans le logement transversal de la première fixation. Enfoncez-la avec force." },
          { text: "Prenez la seconde fixation et répétez l’opération. À la fin vous devez obtenir la même chose que sur la vidéo." },
        ]} />
      <Section
        t={t}
        media={{ id: "-IEgs0SGApw", type: "yt" }}
        content={[
          { text: "13 - préparation pour la suite", classes: "big-title tleft", tag: "h2" },
          { text: "Nous allons changer le support des plaques noires, le nouveau a un des 2 trous qui est oblon (vers l'arrière)." },
          { text: "Ensuite, nous allons installer maintenant la nouvelle cache coté arrière gauche. Celle-ci comporte 2 trous : une sortie pour les câbles de la tête, et toujours l'entrée de l'alimentation 12V." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "gsy0vK_4nPo", type: "yt" }}
        content={[
          { text: "14 - installation des fix. cotés", classes: "big-title tleft", tag: "h2" },
          { text: "Faites coulisser les nouvelles fixations cotés dans la base de la disco, comme sur la vidéo." }
        ]} />
      <Section
        t={t}
        media={{ id: "-QYSM411fWE", type: "yt" }}
        content={[
          { text: "15 - ré-installation de la face avant", classes: "big-title tleft", tag: "h2" },
          { text: "Placez votre imprimante 3D sur le dos." },
          { text: "Positionnez la face avant et enfoncez fermement, afin que les 4 barres de la base soit enfoncés à fond dans la face avant." },
          { text: "Visser les 4 vis de la face avant afin qu'elle ne bouge pas." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "IomqJg7u0HE", type: "yt" }}
        content={[
          { text: "16 - ré-installation des caches cotés avant", classes: "big-title tleft", tag: "h2" },
          { text: "Récupérez les caches cotés (carte SD et bouton pause) puis ré-installez les." }
        ]} />
      <Section
        t={t}
        media={{ id: "Fp6Cgbit-S0", type: "yt" }}
        content={[
          { text: "17 - désinstallation du plateau 200", classes: "big-title tleft", tag: "h2" },
          { text: "Nous allons maintenant enlever les 4 vis cruciformes du plateau, puis retirez-le." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "iJoezDMIQbY", type: "yt" }}
        content={[
          { text: "18 - mise en place de la plaque de protection", classes: "big-title tleft", tag: "h2" },
          { text: "Placez tout d'abord le nouveau connecteur de plaques. Attention, le trou oblon doit se trouver vers l'arrière de votre disco." },
          { text: "Ensuite, placez la plaque avant noire." },
          { text: "Visez tout d'abord les 2 vis de maintien des plaques sur le connecteur. Pour cela utilisez 2 vis M3-6mm (c'est-à-dire dire les plus petites)." },
          { text: "Enfin re-placez les 3 vis sur la face avant et assurez vous de bien serrer l'ensemble des vis." },
        ]} />
      <Section
        t={t}
        media={{ id: "vMlOiZ4p2VM", type: "yt" }}
        content={[
          { text: "19 - re-mise en place de la courroie de Y", classes: "big-title tleft", tag: "h2" },
          { text: "Glissez la courroie de Y dans son logement puis tendez-là correctement." }
        ]} />
      <Block
        t={t}
        content={[
          { text: "Montage de la base terminé", classes: "big-title" }
        ]}>
        <Validation t={t} step="/addon/xl/de200/montage-z" />
      </Block>
    </Layout>
  );
}

module.exports = Xl;