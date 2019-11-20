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
      <NavBar t={t} active={0} nav={nav} />
      <Section
        t={t}
        media={{ id: "D2N3U52IAVM", type: "yt" }}
        content={[
          { text: "01 - démontage TOP", classes: "big-title tleft", tag: "h2" },
          { text: "Afin de démonter la partie supérieure (TOP), dévissez légèrement les 4 vis sur le coté droit et gauche." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "anmxMEYRhHc", type: "yt" }}
        content={[
          { text: "02 - démontage chariot X", classes: "big-title tleft", tag: "h2" },
          { text: "Tout d'abord dévissez les 6 vis (3 par cotés) de maintient des tiges trapézoïdales." },
          { text: "Ensuite, enlevez les écrous anti back-lash." },
          { text: "Enfin, vous pouvez faire coulisser vers le haut le chariot et l'enlever de l'imprimante." },
        ]} />
      <Section
        t={t}
        media={{ id: "2TfW-dSIywo", type: "yt" }}
        content={[
          { text: "03 - démontage électronique", classes: "big-title tleft", tag: "h2" },
          { text: "Retournez l'imprimante 3D et placez là à l'envers. Ainsi, vous pouvez enlever la plaque transparente de protection." },
          { text: "Débranchez soigneusement l'ensemble des câbles de la carte électronique. Nous vous invitons en amont à repérer et disssocier les ventilateurs Avant et Arrière de la tête d'impression." },
          { text: "Dé-visser les 2 vis de maintient de la carte F5, et retirez là." },
          { text: "Vous pouvez maintenant retirer les cache cotés avant : le lecteur de carte SD (ou l'écran) ainsi que le bouton pause de l'autre coté." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "0HPpvWhwARk", type: "yt" }}
        content={[
          { text: "04 - démontage face avant", classes: "big-title tleft", tag: "h2" },
          { text: "Afin de démonter la face avant, nous allons tout d'abord enlever la plaque de renfort noire avant. Pour cela, dévisser les 4 vis de maintien." },
          { text: "Ensuite, dévissez légèrement les 4 vis sur les cotés de la face avant." },
          { text: "N'oubliez pas d'enlever la courroie (le desserage se fait sous le plateau)." },
          { text: "Retirez soigneusement la face avant et placez là sur le coté tel quel." },
        ]} />
      <Section
        t={t}
        media={{ id: "xHfAOKqOmBw", type: "yt" }}
        content={[
          { text: "05 - démontage fix cotés", classes: "big-title tleft", tag: "h2" },
          { text: "Pour démonter les Fixations Cotés, retirez tout d'abord la vis de maintien de la plaque arrière noire. Vous pouvez également retirer le support, nous allons le changer." },
          { text: "Faites glisser l'ensemble des 2 fixations coté vers l'avant de l'imprimante, puis dé-solidarisez les cotés droit et gauche." },
          { text: "Enfin, vous pouvez enlever toutes les vis, barres et moteurs que nous réutiliserons plus tard. Les pièces plastiques elles vont être changées." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "4TLf-LeGA68", type: "yt" }}
        content={[
          { text: "06 - démontage axe X", classes: "big-title tleft", tag: "h2" },
          { text: "Afin de démonter l'axe X, il faut tout d'abord détendre et enlever la courroie vous pouvez la mettre de coté, tout comme les 2 barres, que nous allons changer." }
        ]} />
      <Section
        t={t}
        media={{ id: "jZRgQxPn4DY", type: "yt" }}
        content={[
          { text: "07 - démontage cache coté arrière", classes: "big-title tleft", tag: "h2" },
          { text: "Enfin, dernier détail du démontage, n'oublions pas d'enlever le cache coté arrière gauche, qui va lui aussi être changé." }
        ]} />
      <Block
        t={t}
        content={[
          { text: "Démontage terminé", classes: "big-title" }
        ]}>
        <Validation t={t} step="/addon/xl/du/montage-base" />
      </Block>
    </Layout>
  );
}

module.exports = Xl;