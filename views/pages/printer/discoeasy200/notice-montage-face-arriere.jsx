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
      <NavBar t={t} active={2} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps approximatif : 20 minutes", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/4-a-intro.jpg"
        content={[
          { text: "Notice de montage DiscoEasy200 - Page 3 - Montage de la face arrière", classes: "title tleft", tag: "h1" },
          { text: "Montage de la face arrière", classes: "big-title tleft" },
          { text: "Nous allons monter la deuxième partie de l’imprimante 3D." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Notice/4-b-prerequis.jpg", type: "image" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          {
            list: {
              items: [
                { text: "1 face arrière" },
                { text: "1 moteur avec roue dentée" },
                { text: "1 corps d’extrudeur" },
                { text: "1 bras d’extrudeur" },
                { text: "1 ressort d’extrudeur (il n’y en a qu’un dans le sachet mécanique)" },
                { text: "2 roulements de courroie" },
                { text: "4 écrous M3 (il doit en rester 17)" },
                { text: "3 vis M3x25 (il doit en rester 1)" },
                { text: "5 vis M3x16 (il doit en rester 18)" },
              ]
            }
          }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Notice/4-c-vis-serrage", type: "video" }}
        content={[
          { text: "Étape 1", classes: "title tleft", tag: "h2" },
          { text: "Mise en place des vis de serrage", classes: "big-title" },
          { text: "Comme tout à l’heure, prenez 4 écrous et 4 vis moyennes (M3x16). Placez les écrous dans les logements comme sur la vidéo. Mettez en place les vis sans trop serrer, juste pour maintenir les écrous et éviter que les vis ne bougent. Nous les serrerons plus tard pour maintenir les barres." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Notice/4-d-roulement-courroie", type: "video" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h2" },
          { text: "Installation des roulements de courroie", classes: "big-title" },
          { text: "Nous allons placer les roulements qui feront le renvoi de courroie du plateau de l’imprimante." },
          { text: "Prenez le petit outil imprimé. Il permet de placer et maintenir les roulements facilement. Prenez 1 vis M3x16, placez en une dans le trou correspondant et vissez à travers les 2 roulements. Vérifiez que les roulements tournent bien après serrage." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Notice/4-e-extrudeur", type: "video" }}
        content={[
          { text: "Étape 3", classes: "title tleft", tag: "h2" },
          { text: "Montage de l’extrudeur", classes: "big-title" },
          { text: "Prenez le moteur et placez le depuis l’intérieur de la pièce plastique (roue dentée côté lisse de la pièce)." },
          { text: "Orientez le connecteur du moteur vers les roulements." },
          { text: "Placez 2 vis M3x25 dans le corps de l’extrudeur. Laissez le trou où la matière est la plus fine vide." },
          { text: "Orientez le comme sur la vidéo (trou vide dans le même sens que le connecteur)." },
          { text: "Serrez les deux vis." },
          { text: "Placez le ressort dans l'empreinte sur le corps de l’extrudeur." },
          { text: "Prenez le bras, placez le pour que le ressort soit pris dans la seconde empreinte." },
          { text: "Comprimez le ressort pour aligner les trous placez la dernière vis sans serrer." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Notice/4-e-extrudeur-serrage", type: "video" }}
        content={[
          { text: "Étape 4", classes: "title tleft", tag: "h2" },
          { text: "Serrage du bras d’extrudeur", classes: "big-title" },
          { text: "Le bras ne doit pas être trop serré pour éviter de le bloquer." },
          { text: "Serrez jusqu'à voir disparaître le jour entre les deux pièces orange." },
          { text: "Desserrez d’un quart de tour pour le faire réapparaître." },
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/4-f-fin.jpg"
        content={[
          { text: "Montage de la face arrière : CHECK !", classes: "big-title" },
          { text: "Mettez-la de côté, elle nous servira plus tard." }
        ]}>
        <Validation t={t} step="/printer/de200/notice-montage-fixations-laterales" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;