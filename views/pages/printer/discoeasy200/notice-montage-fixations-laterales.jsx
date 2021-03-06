const React = require('react');
const Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/de200');
const Title = require('../../../components/title');
const Block = require('../../../components/block');
const Section = require('../../../components/section');
const Validation = require('../../../components/validation');

function Printer(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={3} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps approximatif : 5 minutes", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/5-a-intro.jpg"
        content={[
          { text: "Notice de montage DiscoEasy200 - Page 4 - Montage des fixations latérales", classes: "title tleft", tag: "h1" },
          { text: "Montage des fixations latérales", classes: "big-title tleft" },
          { text: "Nous allons monter la troisième partie de l'imprimante 3D." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Notice/5-b-prerequis.jpg", type: "image" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          {
            list: {
              items: [
                { text: "2 pièces de fixations latérales" },
                { text: "1 barre courte" },
                { text: "8 écrous M3 (il doit en rester 9)" },
                { text: "8 vis M3x16 (il doit en rester 10)" },
              ]
            }
          }
        ]} />
      <Section
        t={t}
        media={{ id: "k7hvwWYU-XY", type: "yt" }}
        content={[
          { text: "Étape 1", classes: "title tleft", tag: "h2" },
          { text: "Préparation", classes: "big-title" },
          { text: "Retirez la pièce que l'on appellera l'anti-wooble. Grattez votre pièce avec la spatule pour qu'elle soit propre. Répétez l'opération sur la seconde pièce." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "Xjtu-za9T38", type: "yt" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h2" },
          { text: "Mise en place des vis de serrage", classes: "big-title" },
          { text: "Prenez 8 écrous et 8 vis (M3x16). Placez les écrous dans les logements comme sur la vidéo. Mettez en place les vis sans trop serrer, juste pour maintenir les écrous et éviter que les vis ne bougent. Nous les serrerons plus tard pour maintenir les barres." }
        ]} />
      <Section
        t={t}
        media={{ id: "28n4f0pgdsQ", type: "yt" }}
        content={[
          { text: "Étape 3", classes: "title tleft", tag: "h2" },
          { text: "Montage de la barre", classes: "big-title" },
          { text: "Rentrez la barre dans le logement transversal de la première fixation. Enfoncez-la avec force. Prenez la seconde fixation et répétez l'opération. À la fin vous devez obtenir la même chose que sur la vidéo." }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/5-f-fin.jpg"
        content={[
          { text: "Montage des fixations latérales : CHECK !", classes: "big-title" },
          { text: "Mettez-les de côté, elles nous serviront plus tard." }
        ]}>
        <Validation t={t} step="/printer/de200/notice-montage-axe-x" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;
