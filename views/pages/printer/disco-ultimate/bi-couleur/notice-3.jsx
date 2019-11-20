const React = require('react');
const Layout = require('../../../../layouts/default');
const NavBar = require('../../../../components/navbar');
const nav = require('../../../../../content/nav/bicolor/du');
const Title = require('../../../../components/title');
const Block = require('../../../../components/block');
const Section = require('../../../../components/section');
const Validation = require('../../../../components/validation');

function BiColor(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={2} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps total de montage approximatif : 1h30min", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="DiscoUltimate/Addon/Bicouleur/2-m-fin.jpg"
        content={[
          { text: "Notice de montage pack bi-couleur - finitions", classes: "title tleft", tag: "h1" },
          { text: "Finitions", classes: "big-title tleft" },
          { text: "Nous allons maintenant remonter les derniers éléments de finitions avant de remettre en marche votre machine." }
        ]} />
      <Title t={t} content={[]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/10-d-top-installation", type: "video" }}
        content={[
          { text: "Remise en place du top", classes: "big-title tleft", tag: "h2" },
          { text: "Remettez le top en place. La partie la plus grande doit être vers la face avant." },
          { text: "Assurez-vous qu'il soit bien enfoncé." },
          { text: "Revissez les vis de serrage." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoUltimate/Notice/10-e-tension-courroie-tete", type: "video" }}
        content={[
          { text: "Ajustement de la tension de la courroie de la tête", classes: "big-title tleft", tag: "h2" },
          { text: "Placez la tête à gauche." },
          { text: "Détachez la courroie du côté droit." },
          { text: "Tirez sur le bout libre sans effort." },
          { text: "Forcez pour ajouter 2 crans de tension et re-verrouiller la courroie." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/10-j-cable-management", type: "video" }}
        content={[
          { text: "Gestion des câbles", classes: "big-title tleft", tag: "h2" },
          { text: "Commencez par fixer les câbles de la tête à l'aide d'un collier de serrage." },
          { text: "Ensuite, nous allons faire en sorte de bien maintenir les autres câbles." },
          { text: "Notre solution n'est pas unique." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoUltimate/Notice/10-m-ptfe-bicouleur", type: "video" }}
        content={[
          { text: "Installation du tube PTFE", classes: "big-title tleft", tag: "h2" },
          { text: "Ce tube va guider le filament de l'extrudeur jusqu'à la tête d'impression." },
          { text: "Il est maintenu par des raccords pneumatique." },
          { text: "Poussez-le bien jusqu'au fond à chaque extrémité." },
          { text: "Attention, sur la tête d'impression, il est important que ce dernier soit bien enfoncé. Regardez sur la vidéo pour avoir une idée de la longueur. Appuyez sur la collerette noire pour retirer le tube." }
        ]} />
      <Block
        t={t}
        img="DiscoUltimate/Addon/Bicouleur/3-g-fin-bicouleur.jpg"
        content={[
          { text: "Finitions terminées", classes: "big-title" },
          { text: "Nous allons maintenant mettre à jour la machine pour qu'elle intègre sa nouvelle installation." }
        ]}>
        <Validation t={t} step="/firmware/du/bicolor" />
      </Block>
    </Layout>
  );
}

module.exports = BiColor;