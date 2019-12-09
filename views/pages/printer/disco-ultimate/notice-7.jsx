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
      <NavBar t={t} active={6} nav={nav} />
      <Block
        t={t}
        img="DiscoUltimate/Notice/7-a-intro.jpg"
        content={[
          { text: "Notice de montage DISCO ULTIMATE - montage de l'axe X", classes: "title tleft", tag: "h1" },
          { text: "Montage de l'axe X", classes: "big-title tleft", tag: "h2" },
          { text: "Nous allons monter l'axe qui supporte la tête d'impression." }
        ]} />
      <Title t={t} content={[]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/7-b-prerequis.jpg", type: "image", classes: "notice-small-img" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          {
            list: {
              items: [
                { text: "A. 2x Barres courtes (270mm)" },
                { text: "B. Couple de chariots d'axe X" },
                { text: "C. Moteur NEMA avec poulie" },
                { text: "D. Courroie courte (75cm)" },
                { text: "E. 1x Poulie" },
                { text: "F. Butée longue" },
                { text: "G. Tête d'impression montée" }
              ]
            }
          },
          { text: "Visserie :" },
          {
            list: {
              items: [
                { text: "3x vis M3x6 (reste 7)" },
                { text: "1x vis M3x25 (reste 0)" }
              ]
            }
          }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoUltimate/Notice/7-c-roulement-courroie", type: "video" }}
        content={[
          { text: "Installation de la poulie de X", classes: "big-title" },
          { text: "Nous allons placer la poulie qui fera le renvoi de courroie du plateau de l'imprimante." },
          { text: "Placez la poulie et alignez la avec le trou de passage de la vis." },
          { text: "Prenez 1 vis M3x25, placez la dans le trou correspondant et vissez à travers la poulie." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/7-d-butee", type: "video" }}
        content={[
          { text: "Installation de la butée de X", classes: "big-title" },
          { text: "Dans l'autre chariot, installez la butée comme sur le vidéo." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoUltimate/Notice/7-e-moteur-x", type: "video" }}
        content={[
          { text: "Installation du moteur de X", classes: "big-title" },
          { text: "Rentrez le moteur dans son support avec le connecteur vers la pièce (comme sur la vidéo)." },
          { text: "Vissez le moteur avec 3 vis M3x6." },
          { text: "Le dernier trou de vis est accessible avec l'outil plastique utilisé pour les roulements de la face avant. Positionnez la vis en face du trou, passez le tournevis à travers la pièce, retirez l'outil imprimé, et vissez." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/7-f-barre", type: "video" }}
        content={[
          { text: "Montage des barres de l'axe X", classes: "big-title" },
          { text: "Prenez 2 barres courtes." },
          { text: "Introduisez-les avec délicatesse dans les roulements (faites quelques rotations pour faciliter leur entrée). Une fois en place, faites quelques allers-retours pour vérifier que tout va bien." }
        ]} />
      <Section
        t={t}
        flip={true}
        id="du-courroie-x"
        media={{ src: "DiscoUltimate/Notice/7-g-courroie-tete", type: "video" }}
        content={[
          { text: "Installation de la courroie de la tête", classes: "big-title" },
          { text: "Nous vous conseillons de suivre la vidéo avec attention." }
        ]} />
      <Block
        t={t}
        img="DiscoUltimate/Notice/7-h-fin.jpg"
        content={[
          { text: "Montage de l'axe X terminé", classes: "big-title" },
          { text: "Vérifiez que le sens des pièces correspond à la photo." },
          { text: "Mettez-le ensuite de côté, il nous servira plus tard" }
        ]}>
        <Validation t={t} step="/printer/du/notice-8" text="Je passe à l'étape suivante" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;
