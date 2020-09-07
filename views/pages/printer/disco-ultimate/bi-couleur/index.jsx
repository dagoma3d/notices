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
      <NavBar t={t} active={0} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps total de montage approximatif : 1h30min", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/Bicouleur/0-a-intro.jpg"
        content={[
          { text: "Notice de montage pack bi-couleur Disco Ultimate - préparation et démontage", classes: "title tleft", tag: "h1" },
          { text: "Vous avez reçu votre pack bi-couleur.", classes: "big-title tleft" },
          { text: "Nous allons vous accompagner pour le montage et l'installation de ce 2ème add-on qui vous permettra d'imprimer avec deux couleurs différentes." }
        ]} />
      <Title t={t} content={[]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/1-b-contenu.jpg", type: "image" }}
        content={[
          { text: "Dans le pack vous avez trouvé...", classes: "big-title tleft", tag: "h2" },
          {
            list: {
              items: [
                { text: "A - Une tête d'impression bi-couleur" },
                { text: "B - Un bras d'extrudeur+" },
                { text: "C - Un corps d'extrudeur+ E1" },
                { text: "D - Un tube PTFE" },
                { text: "E - Un moteur d'extrudeur" },
                { text: "F - Un ressort d'extrudeur" },
                { text: "G - 3x grandes vis (M3x25mm) et 1x petite vis (M3x6mm)" },
                { text: "H - 6 roulements linéaire (inutiles si vous avez le pack expert)" },
                { text: "I - Câble pour le moteur d'extrudeur E1" }
              ]
            }
          }
        ]} />
      <Section
        t={t}
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
      <Title
        t={t}
        content={[
          { text: "Place au démontage", classes: "big-title" }
        ]} />
      <Section
        t={t}
        media={{ id: "TlygdqeUFpI", type: "yt" }}
        content={[
          { text: "Retrait du tube ptfe", classes: "big-title tleft", tag: "h2" },
          { text: "S'il vous reste du filament dans la tête d'impression, retirez-le." },
          { text: "Débranchez le tube PTFE en appuyant sur le connecteur noir et retirez-le du top." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "NYqUiCr_8n4", type: "yt" }}
        content={[
          { text: "Démontage de la partie supérieure", classes: "big-title tleft", tag: "h2" },
          { text: "Desserrez les 4 vis latérales." },
          { text: "Retirez la partie supérieure de l'imprimante." }
        ]} />
      <Section
        t={t}
        media={{ id: "kdw6GuqZ6Bo", type: "yt" }}
        content={[
          { text: "Retrait de l'axe X", classes: "big-title tleft", tag: "h2" },
          { text: "Tournez les tiges pour faire monter l'axe X jusqu'en haut." },
          { text: "Retirez-le une fois désengagé." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "0if7P6y-JEU", type: "yt" }}
        content={[
          { text: "Démontage de l'axe X", classes: "big-title tleft", tag: "h2" },
          { text: "Retirez la courroie de la tête." },
          { text: "Séparez tous les éléments." },
          { text: "Mettez les barres de côté." }
        ]} />
      <Section
        t={t}
        media={{ id: "EPB7hwdkFTI", type: "yt" }}
        content={[
          { text: "Retrait de la plaque de fond", classes: "big-title tleft", tag: "h2" },
          { text: "Déclipsez la plaque de fond en retirant les patins." },
          { text: "Gardez le tout de côté et ne les perdez pas." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "uGZcVd6WlkM", type: "yt" }}
        content={[
          { text: "Débranchez la tête d'impression", classes: "big-title tleft", tag: "h2" },
          { text: "Sous la machine, retirez les colliers de fixation." },
          { text: "Débranchez les fils connectés aux borniers Heater, FAN 1 et FAN 2." },
          { text: "Débranchez le palpeur connecté sur le connecteur Z." },
          { text: "Débranchez la sonde sur le connecteur T0." }
        ]} />
      <Block
        t={t}
        img="DiscoUltimate/Addon/Bicouleur/1-j-fin.jpg"
        content={[
          { text: "Démontage de l'imprimante terminé", classes: "big-title" }
        ]}>
        <Validation t={t} step="/addon/bicolor/du/notice-2" />
      </Block>
    </Layout>
  );
}

module.exports = BiColor;
