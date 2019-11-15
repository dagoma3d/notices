var React = require('react');
var Layout = require('../../../../layouts/default');
var NavBar = require('../../../../components/navbar');
var nav = require("../../../../../content/nav/expert");
const SimpleTitle = require('../../../../components/simple-title');
const BasicSection = require('../../../../components/basic-section');
const SimpleSection = require('../../../../components/simple-section');
const Validation = require('../../../../components/validation');
const Media = require('../../../../components/media');

class PackExpert extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={0} nav={nav} />
        <SimpleTitle
          small={true}
          content={[
            { text: "Temps approximatif : 15 minutes", classes: "col-vspace" }
          ]} />
        <BasicSection
          img="DiscoEasy/Add-on/Trapezoidales/1-a-intro.jpg"
          content={[
            { text: "Notice de montage pack expert - Préparation et démontage", classes: "title tleft", tag: "h1" },
            { text: "Ça y est, vous avez reçu votre pack expert.", classes: "big-title tleft" },
            { text: "Nous allons vous accompagner dans le montage et l’utilisation de cette amélioration pour votre DiscoEasy200." }
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-b-contenu.jpg", type: "image" }}
          content={[
            { text: "Dans ces deux cartons vous avez trouvé...", classes: "big-title" },
            { text: "Part 1", classes: "bold" },
            {
              list: {
                tag: "ol",
                items: [
                  { text: "1 tête d'impression non montée" },
                  { text: "2 chariots de X" },
                  { text: "6 vis M4x12" },
                  { text: "3 colliers de fixation (blancs ou noirs)" }
                ]
              }
            },
            { text: "Part 2", classes: "bold" },
            {
              list: {
                items: [
                  { text: "2 moteurs de Z avec tiges filetées intégrées + écrous anti-backslash" }
                ]
              }
            }
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-c-prerequis.jpg", type: "image" }}
          content={[
            { text: "Les prérequis", classes: "big-title" },
            {
              list: {
                items: [
                  { text: "Une DiscoEasy200 montée et un pack expert" },
                  { text: "Un tournevis hexagonal 2.5 mm (fourni avec le kit DiscoEasy200)" },
                  { text: "Un tournevis plat" },
                  { text: "Un outil imprimé (fourni avec le kit DiscoEasy200)", link: { href: "/medias/DiscoEasy/Add-on/Trapezoidales/palette-montage-petits-roulements.STL", classes: "link-classic italic", download: "palette-montage-petits-roulements.STL", text: "Téléchargeable ici" } },
                  { text: "Une pince coupante" },
                ]
              }
            }
          ]} />
        <SimpleTitle
          content={[
            { text: "Place au démontage", classes: "big-title" },
            { text: "A chaque étape, conservez les vis." }
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-d-gaine", type: "video" }}
          content={[
            { text: "Etape 1", classes: "title tleft", tag: "h2" },
            { text: "Retrait de la gaine torsadée", classes: "big-title" },
            { text: "Retirez la gaine de la fixation latérale jusqu’au chariot." },
            { text: "Libérez les câbles de moteur et de butée." },
            { text: "Déclipsez la gaine du chariot." }
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-e-debrancher-mot", type: "video" }}
          content={[
            { text: "Étape 2", classes: "title tleft", tag: "h2" },
            { text: "Débranchez le moteur de X", classes: "big-title" }
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-f-debrancher-butee", type: "video" }}
          content={[
            { text: "Etape 3", classes: "title tleft", tag: "h2" },
            { text: "Débranchement de la butée et des moteurs de Z", classes: "big-title" },
            { text: "Retournez la machine." },
            { text: "Débranchez la butée de X connectée sur la borne X+." },
            { text: "Retirez complètement le câble du dessous de la machine." },
            { text: "Débranchez les moteurs de Z." },
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-g-retirer-top", type: "video" }}
          content={[
            { text: "Étape 4", classes: "title tleft", tag: "h2" },
            { text: "Démontage de la partie supérieure de la machine", classes: "big-title" },
            { text: "S'il vous reste du filament dans la tête d'impression, retirez-le.", classes: "italic" },
            { text: "Débranchez le tube PTFE en appuyant sur le connecteur noir et retirez-le du top." },
            { text: "Desserrez les 4 vis latérales." },
            { text: "Retirez la partie supérieure de l’imprimante." },
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-h-retirer-axe-x", type: "video" }}
          content={[
            { text: "Étape 5", classes: "title tleft", tag: "h2" },
            { text: "Retrait de l’axe X", classes: "big-title" },
            { text: "Dévissez les vis supérieures des coupleurs." },
            { text: "Retirez les tiges filetées des coupleurs." },
            { text: "Tirez ensuite l’ensemble vers le haut pour le sortir de la machine." },
            { text: "Retirez ensuite les deux tiges filetées." },
            { text: "Attention, elles sont recouvertes d'huile.", classes: "italic" },
            { text: "Retenez les écrous supérieurs pour éviter qu’ils ne partent d’un coup." },
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-i-retirer-mot-z", type: "video" }}
          content={[
            { text: "Étape 6", classes: "title tleft", tag: "h2" },
            { text: "Démontage des moteurs de Z", classes: "big-title" },
            { text: "Dévissez les moteurs de Z." },
            { text: "Soulevez la base et retirez-les." }
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-j-demontage-axe-x", type: "video" }}
          content={[
            { text: "Étape 7", classes: "title tleft", tag: "h2" },
            { text: "Démontage de l’axe X", classes: "big-title" },
            { text: "Retirez la courroie de la tête." },
            { text: "Séparez tous les éléments." },
            { text: "Mettez les barres de côté." }
          ]} />
        <BasicSection
          img="DiscoEasy/Add-on/Trapezoidales/1-k-fin.jpg"
          content={[
            { text: "Démontage de l’imprimante : CHECK !", classes: "big-title" }
          ]}>
          <Validation step="/addon/expert/de200/notice-2" text="Je valide et je passe à la suite !" />
        </BasicSection>
      </Layout>
    );
  }
}

module.exports = PackExpert;