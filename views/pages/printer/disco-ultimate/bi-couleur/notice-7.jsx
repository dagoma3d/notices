var React = require('react');
var Layout = require('../../../../layouts/default');
var NavBar = require('../../../../components/navbar');
var nav = require('../../../../../content/nav/bicolor/du');
const SimpleTitle = require('../../../../components/simple-title');
const BasicSection = require('../../../../components/basic-section');
const SimpleSection = require('../../../../components/simple-section');
const Validation = require('../../../../components/validation');

function BiColor(props) {
  return (
    <Layout>
      <NavBar active={5} nav={nav} />
      <SimpleTitle
        small={true}
        content={[
          { text: "Impression", classes: "col-vspace" }
        ]} />
      <BasicSection
        img="DiscoEasy/Add-on/Bicouleur/7-a-intro.jpg"
        content={[
          { text: "Notice de montage pack bi-couleur - première impression", classes: "title tleft", tag: "h1" },
          { text: "Imprimer en bicouleur", classes: "big-title tleft" },
          { text: "Ça y est, votre Discoeasy200 est prête pour imprimer en bi-couleur." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoEasy/Add-on/Bicouleur/7-b-chargement-filament", type: "video" }}
        content={[
          { text: "Installation du filament", classes: "big-title tleft", tag: "h2" },
          { text: "Avant chaque insertion, coupez le filament pour que le bout soit propre." },
          { text: "Dans l’extrudeur n°2, présentez le filament dans l’extrudeur. Poussez-le jusqu’à ce qu’il soit entrainé par l’extrudeur." },
          { text: "Si la tête d’impression est déjà chaude, le filament entrera directement." },
          { text: "Si la tête est froide, l’imprimante commencera par chauffer avant d'insérer le filament." },
          { text: "Retirez l'excédent de purge en sortie de la buse, attention c'est chaud." },
          { text: "Si vous avez déjà l’extrudeur+, vous connaissez déjà. Faites de même dans l’extrudeur n°1." },
          { text: "Si vous n’avez pas l’extrudeur+, chargez le filament manuellement comme à votre habitude." },
          { text: "Arrêtez le filament à l’extrémité du tube PTFE côté tête d’impression." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoEasy/Add-on/Bicouleur/7-c-fichier.jpg", type: "image" }}
        content={[
          { text: "Un gcode déjà tout prêt", classes: "big-title tleft", tag: "h2" },
          { text: "Si vous êtes impatient de lancer votre première impression bicouleur, nous vous avons préparer un gcode. Téléchargez le et mettez le sur votre carte SD. Il doit s’appeler dagoma0.g." },
          { link: { text: "Télécharger", href: "/medias/DiscoEasy/Add-on/Bicouleur/fichiers/dagoma0.g", classes: "new-btn btn-classic btn-grey btn-wide", download: "dagoma0.g" } },
          { text: "Si vous voulez lancer votre propre fichier, rendez-vous dans la prochaine page !" },
          { text: "Vous connaissez la chanson, c’est un lancement tout à fait normal : téléchargez le fichier, transférez-le sur la carte SD, insérez la carte dans l’imprimante 3D puis allumez-la." }
        ]} />
      <BasicSection
        img="DiscoEasy/Add-on/Bicouleur/7-a-intro.jpg"
        content={[
          { text: "Première impression terminée", classes: "big-title" },
          { text: "Nous allons maintenant voir comment préparer vous même un gcode bi-couleur à l’aide de notre nouveau cura." }
        ]}>
        <Validation step="/addon/bicolor/du/notice-8" />
      </BasicSection>
    </Layout>
  );
}

module.exports = BiColor;