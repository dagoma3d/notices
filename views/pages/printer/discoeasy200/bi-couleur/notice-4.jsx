var React = require('react');
var Layout = require('../../../../layouts/default');
var NavBar = require('../../../../components/navbar');
var nav = require('../../../../../content/nav/bicolor/de200');
const SimpleTitle = require('../../../../components/simple-title');
const BasicSection = require('../../../../components/basic-section');
const SimpleSection = require('../../../../components/simple-section');
const Validation = require('../../../../components/validation');
const Media = require('../../../../components/media');

function BiColor(props) {
  return (
    <Layout>
      <NavBar active={4} nav={nav} />
      <BasicSection
        img="DiscoEasy/Add-on/Bicouleur/0-a-intro.jpg"
        content={[
          { text: "Notice de montage pack bi-couleur - finitions", classes: "title tleft", tag: "h1" },
          { text: "Finitions", classes: "big-title tleft" },
          { text: "Nous allons maintenant remonter les derniers éléments de finitions avant de remettre en marche votre machine." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/4-b-top", type: "video" }}
        content={[
          { text: "Remise en place du top", classes: "big-title tleft", tag: "h2" },
          { text: "Remettez le top en place. La partie la plus grande doit être vers la face avant." },
          { text: "Assurez-vous qu’il soit bien enfoncé." },
          { text: "Revissez les vis de serrage." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoEasy/Notice/11-e-tension-courroie-tete", type: "video" }}
        content={[
          { text: "Ajustement de la tension de la courroie de la tête", classes: "big-title tleft", tag: "h2" },
          { text: "Placez la tête à gauche.", classes: "text-red" },
          { text: "Détachez la courroie du côté droit." },
          { text: "Tirez sur le bout libre sans effort." },
          { text: "Forcez pour ajouter 2 crans de tension et re-verrouiller la courroie." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoEasy/Notice/11-g-gaine", type: "video" }}
        content={[
          { text: "Remise en place de la gaine", classes: "big-title tleft", tag: "h2" },
          { text: "Remettez la gaine en place en récupérant les câbles de la butée et du moteur." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoEasy/Notice/11-h-cable-management", type: "video" }}
        content={[
          { text: "Gestion des câbles", classes: "big-title tleft", tag: "h2" },
          { text: "Utilisez les colliers de serrage pour finir proprement votre montage." },
          { text: "Il est important qu’aucun câble ne se balade au dessus de la carte pour éviter d’être abîmé par le plateau." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/4-f-ptfe", type: "video" }}
        content={[
          { text: "Installation des tubes PTFE", classes: "big-title tleft", tag: "h2" },
          { text: "Branchez-les deux tubes PTFE dans les extrudeurs." },
          { text: "Faites-les passer entre les barres du top." },
          { text: "Raccordez-les naturellement dans la tête (celui venant de droite à droite)." }
        ]} />
      <BasicSection
        img="DiscoEasy/Add-on/Bicouleur/4-g-fin.jpg"
        content={[
          { text: "Finitions terminées", classes: "big-title" },
          { text: "Nous allons maintenant mettre à jour la machine pour qu’elle intègre sa nouvelle installation." }
        ]}>
        <Validation step="/firmware/de200/bicolor" />
      </BasicSection>
    </Layout>
  );
}

module.exports = BiColor;
