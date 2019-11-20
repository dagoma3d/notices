const React = require('react');
const Layout = require('../../../../layouts/default');
const NavBar = require('../../../../components/navbar');
const nav = require('../../../../../content/nav/xl/du');
const Title = require('../../../../components/title');
const Block = require('../../../../components/block');
const Section = require('../../../../components/section');
const Validation = require('../../../../components/validation');

function Xl(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={2} nav={nav} />
      <Title
        t={t}
        content={[
          { text: "PARTIE 2.2 - montage de Z", classes: "big-title" },
        ]} />
      <Section
        t={t}
        media={{ id: "bzkLdirvLzU", type: "yt" }}
        content={[
          { text: "20 - Mise en place des barres verticales", classes: "big-title tleft", tag: "h2" },
          { text: "Inserez en force les 4 barres verticales dans les nouvelles fixations cotés. Assurez vous de les glisser jusqu'en bas." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "rO6K-MzC6jM", type: "yt" }}
        content={[
          { text: "21 - Mise en place du chariot de X", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez les 3 pièces du chariot de X, à savoir : support moteur X, tête et support roulement X. " },
          { text: "Prenez également les nouvelles barres de 360mm, et installez les à l'image de la vidéo." },
          { text: "Glissez le chariot de X dans son emplacement sur la disco." },
        ]} />
      <Section
        t={t}
        media={{ id: "F-NUn9vHXms", type: "yt" }}
        content={[
          { text: "22 - re-installation des écrous anti back-lash", classes: "big-title tleft", tag: "h2" },
          { text: "Vissez les écrous à droite et a gauche sur les tiges trapézïdales. Placez les à meme hauteur." },
          { text: "Positionnez les 6 vis de vos tiges trapez, 3 par écrous." },
          { text: "Montez et maintenez le chariot de X vers les écrous et vissez un premier coté légèrement." },
          { text: "Vissez ensuite le second coté plus fermement." },
          { text: "Puis revenez au premier coté, afin de finir le vissage." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "nPIy6ubCOYk", type: "yt" }}
        content={[
          { text: "23 - installation du guide câble", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez la nouvelle pièce plastique : le guide câble." },
          { text: "Enlevez le colier plastique qui maintien les câbles de la tête, et installez le guide câble sur la tête afin de venir verouiller les câbles." },
          { text: "Placez un premier colier plastique dans l'emplacement." },
          { text: "Puis placez un second colier plastique à l'extrémité de ce câble afin de bien maintenir la gaine." },
        ]} />
      <Section
        t={t}
        media={{ id: "_9AG2FRfwLA", type: "yt" }}
        content={[
          { text: "24 - Passage de la gaine vers l'imprimante", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez l'extrémité contenant les bouts de câbles de la tête d'impression, et glissez les dans le nouveau cache coté arrière gauche de l'imprimante 3D." },
          { text: "Il s'agit bien sur du trou le plus à l'arrière, celui plus proche de la fixation coté servira pour l'alimentation." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "JUxbemzz6Sk", type: "yt" }}
        content={[
          { text: "25 - Câble du moteur de X", classes: "big-title tleft", tag: "h2" },
          { text: "Passez la mini gaine contenant les câbles du moteur de X ainsi que les 2 câbles de la butée de X dans la fixation coté (gauche), vers la carte électronique." }
        ]} />
      <Section
        t={t}
        media={{ id: "SKZqwPLo_Ww", type: "yt" }}
        content={[
          { text: "26 - préparation du TOP", classes: "big-title tleft", tag: "h2" },
          { text: "Re-prenez les 2 parties de votre TOP, et installez les 2 nouvelles et dernières barres de 360." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "_702LPWucco", type: "yt" }}
        content={[
          { text: "27 - mise en place du TOP", classes: "big-title tleft", tag: "h2" },
          { text: "Placez l'ensemble sur les barres verticales de votre disco, et enfoncez le TOP au maximum (vers le bas)." },
          { text: "Visez ensuite les 4 vis latérales." },
        ]} />
      <Section
        t={t}
        media={{ id: "vBrrsBDLORI", type: "yt" }}
        content={[
          { text: "28 - installation de la courroie de X", classes: "big-title tleft", tag: "h2" },
          { text: "Utiliser pour cela la nouvelle courroie mise à votre disposition." },
          { text: "Suivez le guide vidéo pour son installation." },
          { text: "Lorsque votre courroie est installée, vous pouvez coupez le surplus. Afin de pouvoir la re-tendre dans le futur, nous vous conseillons de laisser 2-3 cm tout de même !" },
        ]} />
      <Block
        t={t}
        content={[
          { text: "Montage de Z terminé", classes: "big-title" }
        ]}>
        <Validation t={t} step="/addon/xl/du/electronique-plateau" />
      </Block>
    </Layout>
  );
}

module.exports = Xl;