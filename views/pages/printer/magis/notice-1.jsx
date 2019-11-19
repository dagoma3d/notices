var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/magis');
const Title = require('../../../components/title');
const Block = require('../../../components/block');
const Section = require('../../../components/section');
const Slide = require('../../../components/slide');
const Validation = require('../../../components/validation');

function Printer(props) {
  return (
    <Layout>
      <NavBar active={1} nav={nav} />
      <Title
        small={true}
        content={[
          { text: "Temps de préparation : 5 minutes", classes: "col-vtspace" },
          { text: "Temps d'impression : 2 heures", classes: "col-vbspace" }
        ]} />
      <Block
        flip={true}
        img="NevaMagis/Notice/1-a-photophore-pp-1-3.jpg"
        content={[
          { text: "Notice de première utilisation - page 1", classes: "title tleft", tag: "h1" },
          { text: "Première impression", classes: "title tleft", tag: "h2" },
          { text: "Votre Magis est prête !", classes: "big-title tleft" },
          { text: "C'est l'heure pour vous de réussir votre première impression." },
          { text: "Dans ce parcours, découvrez toutes les fonctionnalités de votre imprimante 3D. À l'arrivée, devenez le maître de la Magis !" }
        ]} />
      <Section
        flip={true}
        media={{ src: "NevaMagis/Notice/1-c-photophore-pp-1-copie.jpg", type: "image" }}
        content={[
          { text: "Étape 1", classes: "title tleft", tag: "h3" },
          { text: "J'imprime avec ma Magis", classes: "big-title" },
          { text: "Tout d'abord, téléchargez le fichier que nous vous avons sélectionné avec soin." },
          { text: "Ceci est un... photophore." },
          { classes: "tleft", link: { href: "/medias/NevaMagis/Notice/gcodes/chapitre-1/dagoma0.g", download: "dagoma0.g", classes: "new-btn btn-classic btn-grey btn-wide", text: "Télécharger" } },
          { text: "Attention, ce fichier a été préparé pour être imprimé avec du filament Chromatik.", classes: "bg-orange text-white col-space" },
        ]} />
      <Section
        media={{ src: "NevaMagis/Notice/dagoma0-to-SD.png", type: "image", classes: "notice-small-img" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h3" },
          { text: "Préparez la carte SD", classes: "big-title" },
          { text: "Déplacez le fichier dagoma0.g sur la carte SD." },
          { text: "Assurez-vous que le fichier s'appelle bien dagoma0.g une fois copié sur la carte.", classes: "bg-orange text-white col-space" }
        ]} />
      <Title
        content={[
          { text: "Pour une impression de qualité, votre buse doit être parfaitement propre.", classes: "big-title" }
        ]} />
      <Slide
        content={[
          {
            img: "NevaMagis/Notice/1-e-buse-sale.jpg",
            title: "Tête avec PLA",
            text: "Si vous imprimez comme ça, votre première couche sera trop haute. Votre impression n'accrochera pas au plateau car il reste du PLA sur la tête. Attention, ça peut être chaud."
          },
          {
            ok: true,
            img: "NevaMagis/Notice/1-e-buse-propre.jpg",
            title: "Tête propre",
            text: "Super ! Elle est prête à imprimer."
          }
        ]} />
      <Section
        flip={true}
        media={{ src: "NevaMagis/Notice/1-f-sd-machine", type: "video" }}
        content={[
          { text: "Étape 3", classes: "title tleft", tag: "h3" },
          { text: "Lancement de l'impression", classes: "big-title" },
          { text: "Insérez la carte SD dans la machine et appuyez sur le bouton. Si le bouton est allumé de manière fixe, tout est ok." },
          { text: "La buse doit être propre.", classes: "text-red" },
          { text: "Une fois lancée, elle passera par les étapes suivantes :" },
          {
            list: {
              items: [
                { text: "Un temps de pré-chauffe", classes: "tleft" },
                { text: "Un palpage du plateau", classes: "tleft" },
                { text: "Un temps de chauffe", classes: "tleft" },
                { text: "Début de l'impression", classes: "tleft" }
              ]
            }
          }
        ]} />
      <Section
        media={{ src: "NevaMagis/Notice/1-g-piece-beige", type: "video" }}
        content={[
          { text: "Cette pièce s’imprime en 2 heures environ", classes: "big-title" }
        ]} />
      <Section
        flip={true}
        media={{ src: "NevaMagis/Notice/1-h-plateau", type: "video" }}
        content={[
          { text: "Après chaque impression", classes: "big-title" },
          { text: "Retirez tout ce qu'il reste sur le plateau à l'aide de votre spatule." },
          { text: "Pour une excellente adhérence au plateau, nettoyez régulièrement celui-ci à l'aide des lingettes isopropyliques." }
        ]} />
      <Block
        flip={true}
        img="NevaMagis/Notice/1-a-photophore-pp-1-3.jpg"
        content={[
          { text: "J'ai réussi ma première impression !", classes: "big-title" }
        ]}>
        <Validation step="/printer/magis/notice-2" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;