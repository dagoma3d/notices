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
      <NavBar t={t} active={1} nav={nav} />
      <Block
        t={t}
        img="DiscoUltimate/Notice/2-a-intro.jpg"
        content={[
          { text: "Notice de montage DISCO ULTIMATE - montage de la face avant", classes: "title tleft", tag: "h1" },
          { text: "Montage de la face avant", classes: "big-title tleft" },
          { text: "Nous allons monter la première partie de l’imprimante 3D." }
        ]} />
      <Title t={t} content={[]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/2-b-prerequis", type: "image", classes: "notice-small-img" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          {
            list: {
              items: [
                { text: "A. Face avant imprimée" },
                { text: "B. 4x roulements de courroie" },
                { text: "C. Butée Y (180mm)" },
                { text: "D. Moteur NEMA avec poulie" }
              ]
            }
          },
          { text: "Visserie :" },
          {
            list: {
              items: [
                { text: "3x vis M3x6 (reste 11)" },
                { text: "6x vis M3x16 (reste 23)" },
                { text: "4x écrous M3 (reste 21)" }
              ]
            }
          }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoUltimate/Notice/2-c-vis-serrage", type: "video" }}
        content={[
          { text: "Mise en place des vis de serrage", classes: "big-title" },
          { text: "Prenez 4 écrous et 4 vis moyennes (M3x16). Placez les écrous dans les logements comme sur la vidéo. Mettez en place les vis sans trop serrer, juste pour maintenir les écrous et éviter que les vis ne bougent. Nous les serrerons plus tard pour maintenir les barres." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/2-d-roulement", type: "video" }}
        content={[
          { text: "Installation des 2 roulements de courroie", classes: "big-title" },
          { text: "Nous allons placer les roulements qui feront le renvoi de courroie du plateau de l’imprimante." },
          { text: "Prenez le petit outil imprimé pour vous aider à placer les roulements. Prenez 1 vis M3x16, placez la dans le trou correspondant et vissez à travers les 2 roulements. Vérifiez que les roulements tournent bien après serrage. Répétez l'opération pour le deuxième emplacement." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoUltimate/Notice/2-e-butee", type: "video" }}
        content={[
          { text: "Mise en place de la butée de Y", classes: "big-title" },
          { text: "Prenez la butée avec le câble le plus court. Introduisez la dans le logement en commençant par faire passer la prise." },
          { text: "Orientez le comme sur la vidéo." },
          { text: "Pliez les pattes en dessous puis enfoncez la butée. Elle dépasse d’un millimètre par rapport au plastique." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/2-f-moteur", type: "video" }}
        content={[
          { text: "Installation du moteur de Y", classes: "big-title" },
          { text: "Posez-la face avant à plat." },
          { text: "Rentrez le moteur dans son support avec le connecteur vers le haut." },
          { text: "La roue dentée se trouvera en face des roulements." }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/3-g-fin.jpg"
        content={[
          { text: "Montage de la face avant terminé", classes: "big-title" },
          { text: "Mettez-la de côté, elle nous servira plus tard." }
        ]}>
        <Validation t={t} step="/printer/du/notice-3" text="Je passe à l'étape suivante" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;