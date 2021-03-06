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
      <NavBar t={t} active={7} nav={nav} />
      <Block
        t={t}
        img="DiscoUltimate/Notice/8-a-intro.jpg"
        content={[
          { text: "Notice de montage DISCO ULTIMATE - montage de l'axe Z", classes: "title tleft", tag: "h1" },
          { text: "Montage de l'axe Z", classes: "big-title tleft", tag: "h2" },
          { text: "Nous allons monter le portique de l'imprimante. On s'approche de la fin." }
        ]} />
      <Title t={t} content={[]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/8-b-prerequis.jpg", type: "image", classes: "notice-small-img" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          {
            list: {
              items: [
                { text: "A. Axe X monté" },
                { text: "B. 2x moteur de Z avec tiges trapézoïdales et écrous" },
                { text: "C. 4x Barres longues (360mm)" }
              ]
            }
          },
          { text: "Visserie :" },
          {
            list: {
              items: [
                { text: "4x vis M3x6 (reste 3)" },
                { text: "6x vis M4x12 (reste 0)" }
              ]
            }
          }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "aG_vpe3A7pw", type: "yt" }}
        content={[
          { text: "Montage des moteurs de Z", classes: "big-title" },
          { text: "Retirez les écrous anti-backslash (ça peut être un peu long)." },
          { text: "Soulevez l'imprimante 3D et insérez les moteurs." },
          { text: "Tournez-les pour aligner le connecteur du moteur vers l'extrudeur." },
          { text: "Vissez ensuite les moteurs." }
        ]} />
      <Section
        t={t}
        media={{ id: "jk-LfNvIg8s", type: "yt" }}
        content={[
          { text: "Montage des barres de l'axe Z", classes: "big-title" },
          { text: "Prenez les 4 barres longues." },
          { text: "Montez-les dans les trous des fixations latérales." },
          { text: "Forcez bien pour que les barres soient au fond de chaque trou." },
          { text: "Astuce : Un petit coup de maillet en caoutchouc aidera bien.", classes: "italic" }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "w6QMes1YAks", type: "yt" }}
        content={[
          { text: "Installation de l'axe X", classes: "big-title" },
          { text: "Prenez l'axe X, orientez-le pour que le moteur de X soit à gauche de la machine lorsque la face avant est devant vous." },
          { text: "Insérez les barres dans les roulements sans forcer et faites coulisser l'axe jusqu'en bas." },
          { text: "Faites quelques allers-retours pour que l'ensemble s'ajuste bien." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/8-f-controle.jpg", type: "image" }}
        content={[
          { text: "Deuxième contrôle surprise", classes: "big-title" },
          { text: "Normalement voici ce que vous avez obtenu. Vérifiez bien le sens des éléments." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "iECxDaGQSLI", type: "yt" }}
        content={[
          { text: "Installation des écrous", classes: "big-title" },
          { text: "Si votre écrou s'est désassemblé, voici comment le remonter." },
          { text: "Présentez-le sur la tige, côté triangulaire vers le haut." },
          { text: "Maintenez le ressort pour pouvoir engager l'écrou en vissant." },
          { text: "Vissez l'écrou jusqu'en bas." },
          { text: "Faites de même pour le second." },
          { text: "Prenez ensuite les 6 vis M4x12 et vissez fermement les écrous dans les chariots." },
          { text: "Faites ensuite appel à un ami pour remonter l'axe X jusqu'en haut (5cm avant la fin des tiges)." },
          { text: "Montez équitablement le chariot pour le garder parallèle au plateau." }
        ]} />
      <Block
        t={t}
        img="DiscoUltimate/Notice/8-h-fin.jpg"
        content={[
          { text: "Montage de l'axe Z terminé.", classes: "big-title" },
          { text: "Vérifiez que les pièces sont orientées comme sur la photo." }
        ]}>
        <Validation t={t} step="/printer/du/notice-9" text="Je passe à l'étape suivante" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;
