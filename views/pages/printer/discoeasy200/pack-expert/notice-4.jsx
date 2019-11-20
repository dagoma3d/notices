const React = require('react');
const Layout = require('../../../../layouts/default');
const NavBar = require('../../../../components/navbar');
const nav = require("../../../../../content/nav/expert");
const Title = require('../../../../components/title');
const Block = require('../../../../components/block');
const Section = require('../../../../components/section');

function PackExpert(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={3} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps approximatif : 10 minutes", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/Trapezoidales/1-a-intro.jpg"
        content={[
          { text: "Notice de montage pack expert - Finitions", classes: "title tleft", tag: "h1" },
          { text: "Finitions", classes: "big-title tleft" },
          { text: "Nous allons maintenant remonter les derniers éléments de finitions avant de remettre en marche votre machine." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/4-b-top", type: "video" }}
        content={[
          { text: "Etape 1", classes: "title tleft", tag: "h2" },
          { text: "Remise en place du top", classes: "big-title" },
          { text: "Remettez le top en place. La partie la plus grande doit être vers la face avant." },
          { text: "Assurez-vous qu'il soit bien enfoncé." },
          { text: "Revissez les vis de serrage." },
          { text: "Remettez le tube PTFE en place en le passant entre les deux barres du top." },
        ]} />
      <Section
        t={t}
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
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/4-d-gaine", type: "video" }}
        content={[
          { text: "Etape 3", classes: "title tleft", tag: "h2" },
          { text: "Remise en place de la gaine", classes: "big-title" },
          { text: "Remettez la gaine en place en récupérant les câbles de la butée et du moteur." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/4-e-cable-management", type: "video" }}
        content={[
          { text: "Étape 4", classes: "title tleft", tag: "h2" },
          { text: "Gestion des câbles", classes: "big-title" },
          { text: "Utilisez les colliers de serrage pour finir proprement votre montage." },
          { text: "Il est important qu'aucun câble ne se balade au dessus de la carte pour éviter d'être abîmé par le plateau." }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/Trapezoidales/1-a-intro.jpg"
        content={[
          { text: "Finitions : CHECK !", classes: "big-title" },
          { text: "Nous allons maintenant mettre à jour la machine pour qu'elle intègre sa nouvelle installation." },
          { link: { classes: "new-btn btn-valid btn-big btn-wide", href: "/firmware/de200/expert", text: "Mettre à jour" } }
        ]}>
      </Block>
    </Layout>
  );
}

module.exports = PackExpert;