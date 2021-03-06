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
      <NavBar t={t} active={3} nav={nav} />
      <Block
        t={t}
        img="DiscoUltimate/Notice/4-a-intro.jpg"
        content={[
          { text: "Notice de montage DISCO ULTIMATE - montage des fixations latérales", classes: "title tleft", tag: "h1" },
          { text: "Montage des fixations latérales", classes: "big-title tleft" },
          { text: "Nous allons monter la troisième partie de l'imprimante 3D." }
        ]} />
      <Title t={t} content={[]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/4-b-prerequis.jpg", type: "image", classes: "notice-small-img" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          {
            list: {
              items: [
                { text: "A. 1x Fixation latérale imprimée" },
                { text: "B. 1x Barre courte (270mm)" },
                { text: "C. 1x Fixation latérale imprimée" }
              ]
            }
          },
          { text: "Visserie :" },
          {
            list: {
              items: [
                { text: "8x vis M3x16 (reste 11)" },
                { text: "8x écrous M3 (reste 9)" }
              ]
            }
          }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "pQIPEQ2bsT0", type: "yt" }}
        content={[
          { text: "Mise en place des vis de serrage", classes: "big-title" },
          { text: "Prenez 8 écrous et 8 vis (M3x16). Placez les écrous dans les logements comme sur la vidéo." },
          { text: "Mettez en place les vis sans trop serrer, juste pour maintenir les écrous et éviter que les vis ne bougent. Nous les serrerons plus tard pour maintenir les barres." }
        ]} />
      <Section
        t={t}
        media={{ id: "4zeaFUT-y2g", type: "yt" }}
        content={[
          { text: "Montage de la barre", classes: "big-title" },
          { text: "Rentrez la barre dans le logement transversal de la première fixation. Enfoncez-la avec force." },
          { text: "Prenez la seconde fixation et répétez l'opération. À la fin vous devez obtenir la même chose que sur la vidéo." }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/5-f-fin.jpg"
        content={[
          { text: "Montage des fixations latérales terminé.", classes: "big-title" },
          { text: "Mettez-les de côté, elles nous serviront plus tard." }
        ]}>
        <Validation t={t} step="/printer/du/notice-5" text="Je passe à l'étape suivante" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;
