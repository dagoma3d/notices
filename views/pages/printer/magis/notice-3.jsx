const React = require('react');
const Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/magis');
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
          { text: "Temps de préparation : 5 minutes", classes: "col-vtspace" },
          { text: "Temps d'impression : 1 heures 30 minutes", classes: "col-vbspace" }
        ]} />
      <Block
        t={t}
        flip={true}
        img="NevaMagis/Notice/2-a-1600x600.jpg"
        content={[
          { text: "Notice de première utilisation - page 2", classes: "title tleft", tag: "h1" },
          { text: "Utiliser la fonction Pause", classes: "title tleft", tag: "h2" },
          { text: "Accordez-vous une pause", classes: "big-title tleft" },
          { text: "Dans ce nouveau chapitre du grand livre de la Magis, vous apprenez à vous servir de la fonction Pause. Nous allons vous montrer une de ses utilisations." },
          { text: "Attention ! Pour ce nouveau tour, vous avez besoin d'un paquet de gros sel, riz, quinoa, ..." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "NevaMagis/Notice/2-b-photophore-pp-2-copie.jpg", type: "image" }}
        content={[
          { text: "Étape 1", classes: "title tleft", tag: "h3" },
          { text: "J'imprime avec ma Magis", classes: "big-title" },
          { text: "Tout d'abord, téléchargez le nouveau fichier que nous vous avons préparé." },
          { text: "Ce fichier va compléter votre première création. C'est un socle pour le photophore." },
          { classes: "tleft", link: { href: "/medias/NevaMagis/Notice/gcodes/chapitre-2/dagoma0.g", download: "dagoma0.g", classes: "new-btn btn-classic btn-grey btn-wide", text: "Téléchargez le fichier ici" } },
          { text: "Attention, ce fichier a été préparé pour être imprimé avec du filament Chromatik.", classes: "bg-orange text-white col-space" },
          { text: "Assurez-vous que le fichier s'appelle bien dagoma0.g une fois copié sur la carte.", classes: "bg-orange text-white col-space" },
        ]} />
      <Title
        t={t}
        content={[
          { text: "Étape 2", classes: "title", tag: "h3" },
          { text: "Lancez l'impression", classes: "big-title" },
          { text: "Placez le fichier dagoma0.g sur ta carte SD." },
          { text: "Insérez la carte dans l'imprimante." },
          { text: "Lancez ensuite l'impression." },
          { text: "Pssst ! Rappellez-vous de la ", classes: "italic", link: { href: "/printer/magis/notice-1", title: "Retourner à la page 1", classes: "link-classic", text: "page 1" } },
        ]}>
      </Title>
      <Section
        t={t}
        media={{ src: "NevaMagis/Notice/2-d-pause-manuelle", type: "video" }}
        content={[
          { text: "Étape 3", classes: "title tleft", tag: "h3" },
          { text: "Comment faire une pause ?", classes: "big-title", tag: "h4" },
          { text: "Laissez l'impression tourner pendant 45 minutes environ." },
          { text: "Appuyez ensuite sur le bouton pour la mettre en pause." },
          { text: "Vous n'avez pas de gros sel, riz, quinoa, ... ? Profitez de ces 45 minutes d'impression pour aller en acheter !", classes: "italic" }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "NevaMagis/Notice/2-e-video-remplissage", type: "video" }}
        content={[
          { text: "Étape 4", classes: "title tleft", tag: "h3" },
          { text: "Mais pourquoi du sel ?", classes: "big-title" },
          { text: "Le but est d'alourdir votre pièce pour la rendre plus stable." },
          { text: "Versez le gros sel dans les trous de l'impression." },
          { text: "Attention ! Utilisez du gros sel et non du sel fin. La Magis utilise un ventilateur pour refroidir le PLA. Le sel fin est trop volatile, votre bureau risque de le regretter. Assurez-vous que rien ne dépasse de la surface de votre pièce avant de continuer.", classes: "bg-orange text-white col-space" }
        ]} />
      <Section
        t={t}
        media={{ src: "NevaMagis/Notice/2-f-video-relance", type: "video" }}
        content={[
          { text: "Étape 5", classes: "title tleft", tag: "h3" },
          { text: "Et maintenant ?", classes: "big-title" },
          { text: "Appuyez sur le bouton pour relancer l'impression." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "NevaMagis/Notice/2-g-base", type: "video" }}
        content={[
          { text: "Il reste une demie-heure d'impression", classes: "big-title" }
        ]} />
      <Section
        t={t}
        media={{ src: "NevaMagis/Notice/2-h-1-copie.jpg", type: "image" }}
        content={[
          { text: "Étape 6", classes: "title tleft", tag: "h3" },
          { text: "Assemblage", classes: "big-title" },
          { text: "Reprenez le photophore, et assemblez-le avec son support. Il se visse comme un couvercle." }
        ]} />
      <Block
        t={t}
        flip={true}
        img="NevaMagis/Notice/2-a-1600x600.jpg"
        content={[
          { text: "J'ai réussi à assembler les deux premiers éléments !", classes: "big-title" }
        ]}>
        <Validation t={t} step="/printer/magis/notice-4" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;