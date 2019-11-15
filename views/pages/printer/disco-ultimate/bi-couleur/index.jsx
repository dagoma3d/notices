var React = require('react');
var Layout = require('../../../../layouts/default');
var NavBar = require('../../../../components/navbar');
var nav = require('../../../../../content/nav/bicolor/du');
const SimpleTitle = require('../../../../components/simple-title');
const BasicSection = require('../../../../components/basic-section');
const SimpleSection = require('../../../../components/simple-section');
const Validation = require('../../../../components/validation');

class BiColor extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={0} nav={nav} />
        <SimpleTitle
          small={true}
          content={[
            { text: "Temps total de montage approximatif : 1h30min", classes: "col-vspace" }
          ]} />
        <BasicSection
          img="DiscoEasy/Add-on/Bicouleur/0-a-intro.jpg"
          content={[
            { text: "Notice de montage pack bi-couleur Disco Ultimate - préparation et démontage", classes: "title tleft", tag: "h1" },
            { text: "Vous avez reçu votre pack bi-couleur.", classes: "big-title tleft" },
            { text: "Nous allons vous accompagner pour le montage et l’installation de ce 2ème add-on qui vous permettra d’imprimer avec deux couleurs différentes." }
          ]} />
        <SimpleTitle content={[]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Add-on/Bicouleur/1-b-contenu.jpg", type: "image" }}
          content={[
            { text: "Dans le pack vous avez trouvé...", classes: "big-title tleft", tag: "h2" },
            {
              list: {
                items: [
                  { text: "A - Une tête d’impression bi-couleur" },
                  { text: "B - Un bras d’extrudeur+" },
                  { text: "C - Un corps d’extrudeur+ E1" },
                  { text: "D - Un tube PTFE" },
                  { text: "E - Un moteur d’extrudeur" },
                  { text: "F - Un ressort d’extrudeur" },
                  { text: "G - 3x grandes vis (M3x25mm) et 1x petite vis (M3x6mm)" },
                  { text: "H - 6 roulements linéaire (inutiles si vous avez le pack expert)" },
                  { text: "I - Câble pour le moteur d’extrudeur E1" }
                ]
              }
            }
          ]}>
        </SimpleSection>
        <SimpleSection
          media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-c-prerequis.jpg", type: "image" }}
          content={[
            { text: "Les pré-requis", classes: "big-title tleft", tag: "h2" },
            {
              list: {
                items: [
                  { text: "1. Un tournevis hexagonal 2.5 mm (fourni avec le kit Disco Ultimate)" },
                  { text: "2. Un tournevis plat" },
                  { text: "3. Un outil imprimé (fourni avec le kit Disco Ultimate)", link: { href: "/medias/DiscoEasy/Add-on/Trapezoidales/palette-montage-petits-roulements.STL", classes: "link-classic italic", download: "palette-montage-petits-roulements.STL", text: "téléchargeable ici" } },
                  { text: "4. Une pince coupante" },
                ]
              }
            }
          ]} />
        <SimpleTitle
          content={[
            { text: "Place au démontage", classes: "big-title" }
          ]} />
        <SimpleSection
          media={{ src: "DiscoUltimate/Addon/Bicouleur/1-d-ptfe", type: "video" }}
          content={[
            { text: "Retrait du tube ptfe", classes: "big-title tleft", tag: "h2" },
            { text: "S'il vous reste du filament dans la tête d'impression, retirez-le." },
            { text: "Débranchez le tube PTFE en appuyant sur le connecteur noir et retirez-le du top." }
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "DiscoUltimate/Addon/Bicouleur/1-e-top", type: "video" }}
          content={[
            { text: "Démontage de la partie supérieure", classes: "big-title tleft", tag: "h2" },
            { text: "Desserrez les 4 vis latérales." },
            { text: "Retirez la partie supérieure de l’imprimante." }
          ]} />
        <SimpleSection
          media={{ src: "DiscoUltimate/Addon/Bicouleur/1-f-retrait-axe-x", type: "video" }}
          content={[
            { text: "Retrait de l’axe X", classes: "big-title tleft", tag: "h2" },
            { text: "Tournez les tiges pour faire monter l’axe X jusqu’en haut." },
            { text: "Retirez-le une fois désengagé." }
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "DiscoUltimate/Addon/Bicouleur/1-g-demontage-axe-x", type: "video" }}
          content={[
            { text: "Démontage de l’axe X", classes: "big-title tleft", tag: "h2" },
            { text: "Retirez la courroie de la tête." },
            { text: "Séparez tous les éléments." },
            { text: "Mettez les barres de côté." }
          ]} />
        <SimpleSection
          media={{ src: "DiscoUltimate/Addon/Bicouleur/1-h-plaque-fond", type: "video" }}
          content={[
            { text: "Retrait de la plaque de fond", classes: "big-title tleft", tag: "h2" },
            { text: "Déclipsez la plaque de fond en retirant les patins." },
            { text: "Gardez le tout de côté et ne les perdez pas." }
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "DiscoUltimate/Addon/Bicouleur/1-i-debrancher-tete", type: "video" }}
          content={[
            { text: "Débranchez la tête d’impression", classes: "big-title tleft", tag: "h2" },
            { text: "Sous la machine, retirez les colliers de fixation." },
            { text: "Débranchez les fils connectés aux borniers Heater, FAN 1 et FAN 2." },
            { text: "Débranchez le palpeur connecté sur le connecteur Z." },
            { text: "Débranchez la sonde sur le connecteur T0." }
          ]} />
        <BasicSection
          img="DiscoUltimate/Addon/Bicouleur/1-j-fin.jpg"
          content={[
            { text: "Démontage de l’imprimante terminé", classes: "big-title" }
          ]}>
          <Validation step="/addon/bicolor/du/notice-2" />
        </BasicSection>
      </Layout>
    );
  }
}

module.exports = BiColor;