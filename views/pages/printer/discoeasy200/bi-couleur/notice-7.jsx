const React = require('react');
const Layout = require('../../../../layouts/default');
const NavBar = require('../../../../components/navbar');
const nav = require('../../../../../content/nav/bicolor/de200');
const Block = require('../../../../components/block');
const Section = require('../../../../components/section');
const Validation = require('../../../../components/validation');

function BiColor(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={7} nav={nav} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/Bicouleur/7-a-intro.jpg"
        content={[
          { text: "Notice de montage pack bi-couleur - première impression", classes: "title tleft", tag: "h1" },
          { text: "Imprimer en bicouleur", classes: "big-title tleft" },
          { text: "Ca y est, votre Discoeasy200 est prête pour imprimer en bi-couleur." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "cQQ56sFSN8o", type: "yt" }}
        content={[
          { text: "Installation du filament", classes: "big-title tleft", tag: "h2" },
          { text: "Avant chaque insertion, coupez le filament pour que le bout soit propre." },
          { text: "Dans l'extrudeur n°2, présentez le filament dans l'extrudeur.  Poussez-le jusqu'à ce qu'il soit entrainé par l'extrudeur." },
          { text: "Si la tête d'impression est déjà chaude, le filament entrera directement." },
          { text: "Si la tête est froide, l'imprimante commencera par chauffer avant d'insérer le filament." },
          { text: "Retirez l'excédent de purge en sortie de la buse, attention c'est chaud." },
          { text: "Si vous avez déjà l'extrudeur+, vous connaissez déjà. Faites de même dans l'extrudeur n°1." },
          { text: "Si vous n'avez pas l'extrudeur+, chargez le filament manuellement comme à votre habitude." },
          { text: "Arrêtez le filament à l'extrémité du tube PTFE côté tête d'impression." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/7-c-fichier.jpg", type: "image" }}
        content={[
          { text: "Un gcode déjà tout prêt", classes: "big-title tleft", tag: "h2" },
          { text: "Si vous êtes impatient de lancer votre première impression bicouleur, nous vous avons préparer un gcode. Téléchargez le et mettez le sur votre carte SD. Il doit s'appeler dagoma0.g." },
          { link: { href: "https://drive.google.com/file/d/15NlVlYH7SCRBE2rW9YwX9w9JVSuAn9dK/view?usp=sharing", classes: "new-btn btn-classic btn-grey btn-wide", download: "dagoma0.g", text: "Télécharger", target: "_blank" } },
          { text: "Si vous voulez lancer votre propre fichier, rendez-vous dans la prochaine page !" },
          { text: "Vous connaissez la chanson, c'est un lancement tout à fait normal : téléchargez le fichier, transférez-le sur la carte SD, insérez la carte dans l'imprimante 3D puis allumez-la." }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/Bicouleur/7-a-intro.jpg"
        content={[
          { text: "Première impression terminée", classes: "big-title" },
          { text: "Nous allons maintenant voir comment préparer vous même un gcode bi-couleur à l'aide de notre nouveau cura." }
        ]}>
        <Validation t={t} step="/addon/bicolor/de200/notice-8" />
      </Block>
    </Layout>
  );
}

module.exports = BiColor;
