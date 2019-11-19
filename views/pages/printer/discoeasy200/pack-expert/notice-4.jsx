var React = require('react');
var Layout = require('../../../../layouts/default');
var NavBar = require('../../../../components/navbar');
var nav = require("../../../../../content/nav/expert");
const SimpleTitle = require('../../../../components/simple-title');
const BasicSection = require('../../../../components/basic-section');
const SimpleSection = require('../../../../components/simple-section');
const Validation = require('../../../../components/validation');
const Media = require('../../../../components/media');

function PackExpert(props) {
  return (
    <Layout>
      <NavBar active={3} nav={nav} />
      <SimpleTitle
        small={true}
        content={[
          { text: "Temps approximatif : 10 minutes", classes: "col-vspace" }
        ]} />
      <BasicSection
        img="DiscoEasy/Add-on/Trapezoidales/1-a-intro.jpg"
        content={[
          { text: "Notice de montage pack expert - Finitions", classes: "title tleft", tag: "h1" },
          { text: "Finitions", classes: "big-title tleft" },
          { text: "Nous allons maintenant remonter les derniers éléments de finitions avant de remettre en marche votre machine." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/4-b-top", type: "video" }}
        content={[
          { text: "Etape 1", classes: "title tleft", tag: "h2" },
          { text: "Remise en place du top", classes: "big-title" },
          { text: "Remettez le top en place. La partie la plus grande doit être vers la face avant." },
          { text: "Assurez-vous qu’il soit bien enfoncé." },
          { text: "Revissez les vis de serrage." },
          { text: "Remettez le tube PTFE en place en le passant entre les deux barres du top." },
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/4-c-tension-courroie-tete", type: "video" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h2" },
          { text: "Ajustement de la tension de la courroie de la tête", classes: "big-title" },
          { text: "Placez la tête à gauche." },
          { text: "Détachez la courroie du côté droit." },
          { text: "Tirez sur le bout libre sans effort." },
          { text: "Forcez pour ajouter 2 crans de tension et re-verrouiller la courroie." },
        ]} />
      <SimpleSection
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/4-d-gaine", type: "video" }}
        content={[
          { text: "Etape 3", classes: "title tleft", tag: "h2" },
          { text: "Remise en place de la gaine", classes: "big-title" },
          { text: "Remettez la gaine en place en récupérant les câbles de la butée et du moteur." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/4-e-cable-management", type: "video" }}
        content={[
          { text: "Étape 4", classes: "title tleft", tag: "h2" },
          { text: "Gestion des câbles", classes: "big-title" },
          { text: "Utilisez les colliers de serrage pour finir proprement votre montage." },
          { text: "Il est important qu’aucun câble ne se balade au dessus de la carte pour éviter d’être abîmé par le plateau." }
        ]} />
      <BasicSection
        img="DiscoEasy/Add-on/Trapezoidales/1-a-intro.jpg"
        content={[
          { text: "Finitions : CHECK !", classes: "big-title" },
          { text: "Nous allons maintenant mettre à jour la machine pour qu’elle intègre sa nouvelle installation." },
          { link: { classes: "new-btn btn-valid btn-big btn-wide", href: "/firmware/de200/expert", text: "Mettre à jour" } }
        ]}>
      </BasicSection>
    </Layout>
  );
}

module.exports = PackExpert;