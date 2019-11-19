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
      <NavBar t={t} active={2} nav={nav} />
      <Block
        t={t}
        img="DiscoUltimate/Notice/3-a-intro.jpg"
        content={[
          { text: "Notice de montage DISCO ULTIMATE - montage de la face arrière", classes: "title tleft", tag: "h1" },
          { text: "Montage de la face arrière", classes: "big-title tleft" },
          { text: "Nous allons monter la deuxième partie de l’imprimante 3D." }
        ]} />
      <Title t={t} content={[]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/3-b-prerequis.jpg", type: "image", classes: "notice-small-img" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          {
            list: {
              items: [
                { text: "A. Face arrière imprimée" },
                { text: "B. 1x Poulie" },
                { text: "C. Corps d’extrudeur" },
                { text: "D. Moteur NEMA avec roue d’extrusion" },
                { text: "E. Bras d’extrudeur" },
                { text: "F. Ressort d’extrudeur" }
              ]
            }
          },
          { text: "Visserie :" },
          {
            list: {
              items: [
                { text: "1x vis M3x6 (reste 10)" },
                { text: "4x vis M3x16 (reste 19)" },
                { text: "4x vis M3x25 (reste 1)" },
                { text: "4x écrous M3 (reste 17)" }
              ]
            }
          }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoUltimate/Notice/3-c-vis-serrage", type: "video" }}
        content={[
          { text: "Mise en place des vis de serrage", classes: "big-title" },
          { text: "Comme tout à l’heure, prenez 4 écrous et 4 vis moyennes (M3x16). Placez les écrous dans les logements comme sur la vidéo. Mettez en place les vis sans trop serrer, juste pour maintenir les écrous et éviter que les vis ne bougent. Nous les serrerons plus tard pour maintenir les barres." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/3-d-poulie-courroie-y", type: "video" }}
        content={[
          { text: "Installation de la poulie de Y", classes: "big-title" },
          { text: "Nous allons placer la poulie qui fera le renvoi de courroie du plateau de l’imprimante." },
          { text: "Placez la poulie et alignez la avec le trou de passage de la vis." },
          { text: "Prenez 1 vis M3x25, placez la dans le trou correspondant et vissez à travers la poulie." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoUltimate/Notice/3-e-extrudeur", type: "video" }}
        content={[
          { text: "Installation du moteur d’extrudeur", classes: "big-title" },
          { text: "Placez le moteur dans le logement repéré E0." },
          { text: "Positionnez le connecteur vers l’intérieur." },
          { text: "Prenez une vis M3x6, placez la dans le trou supérieur droit et serrez le moteur." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/3-f-extrudeur-montage", type: "video" }}
        content={[
          { text: "Pré-montage de l’extrudeur", classes: "big-title" },
          { text: "Montez le bras d’extrudeur." },
          { text: "Placez le ressort dans l'empreinte sur le corps de l’extrudeur." },
          { text: "Prenez le bras, placez le pour que le ressort soit pris dans la seconde empreinte." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoUltimate/Notice/3-g-extrudeur-installation", type: "video" }}
        content={[
          { text: "Installation du corps d’extrudeur", classes: "big-title" },
          { text: "Passez le fil du capteur dans le trou comme sur la vidéo." },
          { text: "Orientez l’extrudeur puis vissez les 3 vis M3x25." },
          { text: "La tête de la vis M3x6 rentre dans un logement prévu dans le corps d’extrudeur." }
        ]} />
      <Block
        t={t}
        img="DiscoUltimate/Notice/3-h-fin.jpg"
        content={[
          { text: "Montage de la face arrière terminé", classes: "big-title" },
          { text: "Mettez-la de côté, elle nous servira plus tard." }
        ]}>
        <Validation t={t} step="/printer/du/notice-4" text="Je passe à l'étape suivante" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;
