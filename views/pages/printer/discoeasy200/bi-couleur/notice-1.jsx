const React = require('react');
const Layout = require('../../../../layouts/default');
const NavBar = require('../../../../components/navbar');
const nav = require('../../../../../content/nav/bicolor/de200');
const Title = require('../../../../components/title');
const Block = require('../../../../components/block');
const Section = require('../../../../components/section');
const Validation = require('../../../../components/validation');

function BiColor(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={1} nav={nav} />
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
          { text: "Notice de montage pack bi-couleur - préparation et démontage", classes: "title tleft", tag: "h1" },
          { text: "ça y est, vous avez reçu votre pack bi-couleur.", classes: "big-title tleft" },
          { text: "Nous allons vous accompagner pour le montage et l’installation de ce 4ème add-on qui vous permettra d’imprimer avec deux couleurs différentes." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/1-b-contenu.jpg", type: "image" }}
        content={[
          { text: "Dans le pack vous avez trouvé...", classes: "big-title tleft", tag: "h2" },
          {
            list: {
              classes: "list-classic lsn tnormal row tleft-child",
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
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-c-prerequis.jpg", type: "image" }}
        content={[
          { text: "Les prérequis", classes: "big-title tleft", tag: "h2" },
          {
            list: {
              tag: "ol",
              classes: "list-classic lsn tnormal row tleft-child",
              items: [
                { text: "1. Un tournevis hexagonal 2.5 mm (fourni avec le kit DiscoEasy200)" },
                { text: "2. Un tournevis plat" },
                { text: "3. Un outil imprimé (fourni avec le kit DiscoEasy200)", link: { href: "/medias/DiscoEasy/Add-on/Trapezoidales/palette-montage-petits-roulements.STL", classes: "link-classic italic", download: "palette-montage-petits-roulements.STL", text: "Téléchargeable ici" } },
                { text: "4. Une pince coupante" }
              ]
            }
          }
        ]} />
      <Title
        t={t}
        content={[
          { text: "PLACE AU DÉMONTAGE", classes: "big-title" },
          { text: "A chaque étape, conservez les vis." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/1-d-gaine", type: "video" }}
        content={[
          { text: "Retrait de la gaine torsadée", classes: "big-title tleft", tag: "h2" },
          { text: "Retirez la gaine de la fixation latérale jusqu’au chariot." },
          { text: "Libérez les câbles de moteur et de butée." },
          { text: "Déclipsez la gaine du chariot." },
          { text: "Retirer le reste de la gaine." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-e-debrancher-mot", type: "video" }}
        content={[
          { text: "Débranchez le moteur de X", classes: "big-title tleft", tag: "h2" }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/1-f-butee", type: "video" }}
        content={[
          { text: "Débranchez la butée de l’axe X", classes: "big-title tleft", tag: "h2" },
          { text: "Retournez la machine." },
          { text: "Débranchez la butée de X connectée sur la borne X+." },
          { text: "Retirez complètement le câble du dessous de la machine." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/1-g-debrancher-tete", type: "video" }}
        content={[
          { text: "Débranchez la tête d’impression", classes: "big-title tleft", tag: "h2" },
          { text: "Sous la machine, débranchez le palpeur connecté sur la borne Y+." },
          { text: "Débranchez la sonde connectée sur la borne A13." },
          { text: "Retirez ensuite les fils connectés aux borniers E0, E1 et FAN." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/1-g-debrancher-tete", type: "video" }}
        content={[
          { text: "Démontage de la partie supérieure", classes: "big-title tleft", tag: "h2" },
          { text: "S'il vous reste du filament dans la tête d'impression, retirez-le." },
          { text: "Débranchez le tube PTFE en appuyant sur le connecteur noir et retirez-le du top." },
          { text: "Desserrez les 4 vis latérales." },
          { text: "Retirez la partie supérieure de l’imprimante." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-h-retirer-axe-x", type: "video" }}
        content={[
          { text: "Retrait de l’axe X", classes: "big-title tleft", tag: "h2" },
          { text: "Dévissez les vis supérieures des coupleurs." },
          { text: "Retirez les tiges filetées des coupleurs." },
          { text: "Tirez ensuite l’ensemble vers le haut pour le sortir de la machine." },
          { text: "Retirez ensuite les deux tiges filetées." },
          { text: "Attention, elles sont recouvertes d'huile." },
          { text: "Retenez les écrous supérieurs pour éviter qu’ils ne partent d’un coup." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-j-demontage-axe-x", type: "video" }}
        content={[
          { text: "Démontage de l’axe X", classes: "big-title tleft", tag: "h2" },
          { text: "Retirez la courroie de la tête." },
          { text: "Séparez tous les éléments." },
          { text: "Mettez les barres de côté." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/1-k-debrancher-mot-e", type: "video" }}
        content={[
          { text: "Débranchez le moteur d’extrudeur", classes: "big-title tleft", tag: "h2" },
          { text: "Retournez la machine pour accéder au câblage." },
          { text: "Retirez le tube PTFE." },
          { text: "Débranchez le câble relié au moteur d’extrudeur." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/1-l-retirer-courroie-plateau", type: "video" }}
        content={[
          { text: "Retrait de la courroie du plateau", classes: "big-title tleft", tag: "h2" },
          { text: "Toujours sous la machine, débloquez le premier brin de la courroie." },
          { text: "Retirez le second brin." },
          { text: "Tirez sur la courroie pour la retirer totalement." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/1-m-retirer-face-ar", type: "video" }}
        content={[
          { text: "Retrait de la face arrière", classes: "big-title tleft", tag: "h2" },
          { text: "Desserez les vis sur les côtés de la face arrière (il y en a 4)." },
          { text: "Tirez sur la pièce en maintenant le reste de la machine." },
          { text: "Soyez délicat" }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/Bicouleur/1-o-fin.jpg"
        content={[
          { text: "Démontage de l’imprimante terminé", classes: "big-title" }
        ]}>
        <Validation t={t} step="/addon/bicolor/de200/notice-2" />
      </Block>
    </Layout>
  );
}

module.exports = BiColor;
