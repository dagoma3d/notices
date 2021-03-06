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
      <NavBar t={t} active={1} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps approximatif : 15 minutes", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/3-a-intro.jpg"
        content={[
          { text: "Notice de montage DiscoEasy200 - Page 2 - Montage de la face avant", classes: "title tleft", tag: "h1" },
          { text: "Montage de la face avant", classes: "big-title tleft" },
          { text: "Nous allons monter la première partie de l'imprimante 3D." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Notice/3-b-prerequis.jpg", type: "image" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          {
            list: {
              items: [
                { text: "1 face avant" },
                { text: "1 moteur avec poulie" },
                { text: "1 butée courte (sachet de câbles)" },
                { text: "4 roulements de courroie (sachet de composants mécaniques)" },
                { text: "4 écrous M3 (il doit en rester 21)" },
                { text: "6 vis M3x16 (il doit en rester 23)" },
                { text: "3 vis M3x6 (il doit en rester 11)" },
              ]
            }
          }
        ]} />
      <Section
        t={t}
        media={{ id: "XWGzA1HvZnc", type: "yt" }}
        content={[
          { text: "Étape 1", classes: "title tleft", tag: "h2" },
          { text: "Mise en place des vis de serrage", classes: "big-title" },
          { text: "Prenez 4 écrous et 4 vis moyennes (M3x16). Placez les écrous dans les logements comme sur la vidéo. Mettez en place les vis sans trop serrer, juste pour maintenir les écrous et éviter que les vis ne bougent. Nous les serrerons plus tard pour maintenir les barres." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "1lBJU6nMfg4", type: "yt" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h2" },
          { text: "Installation des 2 roulements de courroie", classes: "big-title" },
          { text: "Nous allons placer les roulements qui feront le renvoi de courroie du plateau de l'imprimante." },
          { text: "Prenez le petit outil imprimé pour vous aider à placer les roulements. Prenez 1 vis M3x16, placez la dans le trou correspondant et vissez à travers les 2 roulements. Vérifiez que les roulements tournent bien après serrage. Répétez l'opération pour le deuxième emplacement." }
        ]} />
      <Section
        t={t}
        media={{ id: "nnsbsWUvgmk", type: "yt" }}
        content={[
          { text: "Étape 3", classes: "title tleft", tag: "h2" },
          { text: "Mise en place de la butée de Y", classes: "big-title" },
          { text: "Prenez la butée avec le câble le plus court. Introduisez la dans le logement en commençant par faire passer la prise." },
          { text: "Orientez le comme sur la vidéo." },
          { text: "Pliez les pattes en dessous puis enfoncez la butée. Elle dépasse d'un millimètre par rapport au plastique." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "zFQDMFbY8yk", type: "yt" }}
        content={[
          { text: "Étape 4", classes: "title tleft", tag: "h2" },
          { text: "Installation du moteur de Y", classes: "big-title" },
          { text: "Posez-la face avant à plat." },
          { text: "Rentrez le moteur dans son support avec le connecteur vers le haut." },
          { text: "La poulie se trouvera en face des roulements." },
          { text: "Vissez le moteur avec 3 vis M3x6." },
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/3-g-fin.jpg"
        content={[
          { text: "Montage de la face avant : CHECK !", classes: "big-title" },
          { text: "Mettez-la de côté, elle nous servira plus tard." }
        ]}>
        <Validation t={t} step="/printer/de200/notice-montage-face-arriere" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;
