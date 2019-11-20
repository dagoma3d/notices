const React = require('react');
const Layout = require('../../../../layouts/default');
const NavBar = require('../../../../components/navbar');
const nav = require("../../../../../content/nav/expert");
const Title = require('../../../../components/title');
const Block = require('../../../../components/block');
const Section = require('../../../../components/section');
const Validation = require('../../../../components/validation');

function PackExpert(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={0} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps approximatif : 15 minutes", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/Trapezoidales/1-a-intro.jpg"
        content={[
          { text: "Notice de montage pack expert - Préparation et démontage", classes: "title tleft", tag: "h1" },
          { text: "Ça y est, vous avez reçu votre pack expert.", classes: "big-title tleft" },
          { text: "Nous allons vous accompagner dans le montage et l'utilisation de cette amélioration pour votre DiscoEasy200." }
        ]} />
      <Section
        t={t}
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
      <Section
        t={t}
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
      <Title
        t={t}
        content={[
          { text: "Place au démontage", classes: "big-title" },
          { text: "A chaque étape, conservez les vis." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-d-gaine", type: "video" }}
        content={[
          { text: "Etape 1", classes: "title tleft", tag: "h2" },
          { text: "Retrait de la gaine torsadée", classes: "big-title" },
          { text: "Retirez la gaine de la fixation latérale jusqu'au chariot." },
          { text: "Libérez les câbles de moteur et de butée." },
          { text: "Déclipsez la gaine du chariot." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-e-debrancher-mot", type: "video" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h2" },
          { text: "Débranchez le moteur de X", classes: "big-title" }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-f-debrancher-butee", type: "video" }}
        content={[
          { text: "Etape 3", classes: "title tleft", tag: "h2" },
          { text: "Débranchement de la butée et des moteurs de Z", classes: "big-title" },
          { text: "Retournez la machine." },
          { text: "Débranchez la butée de X connectée sur la borne X+." },
          { text: "Retirez complètement le câble du dessous de la machine." },
          { text: "Débranchez les moteurs de Z." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-g-retirer-top", type: "video" }}
        content={[
          { text: "Étape 4", classes: "title tleft", tag: "h2" },
          { text: "Démontage de la partie supérieure de la machine", classes: "big-title" },
          { text: "S'il vous reste du filament dans la tête d'impression, retirez-le.", classes: "italic" },
          { text: "Débranchez le tube PTFE en appuyant sur le connecteur noir et retirez-le du top." },
          { text: "Desserrez les 4 vis latérales." },
          { text: "Retirez la partie supérieure de l'imprimante." },
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-h-retirer-axe-x", type: "video" }}
        content={[
          { text: "Étape 5", classes: "title tleft", tag: "h2" },
          { text: "Retrait de l'axe X", classes: "big-title" },
          { text: "Dévissez les vis supérieures des coupleurs." },
          { text: "Retirez les tiges filetées des coupleurs." },
          { text: "Tirez ensuite l'ensemble vers le haut pour le sortir de la machine." },
          { text: "Retirez ensuite les deux tiges filetées." },
          { text: "Attention, elles sont recouvertes d'huile.", classes: "italic" },
          { text: "Retenez les écrous supérieurs pour éviter qu'ils ne partent d'un coup." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-i-retirer-mot-z", type: "video" }}
        content={[
          { text: "Étape 6", classes: "title tleft", tag: "h2" },
          { text: "Démontage des moteurs de Z", classes: "big-title" },
          { text: "Dévissez les moteurs de Z." },
          { text: "Soulevez la base et retirez-les." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/1-j-demontage-axe-x", type: "video" }}
        content={[
          { text: "Étape 7", classes: "title tleft", tag: "h2" },
          { text: "Démontage de l'axe X", classes: "big-title" },
          { text: "Retirez la courroie de la tête." },
          { text: "Séparez tous les éléments." },
          { text: "Mettez les barres de côté." }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/Trapezoidales/1-k-fin.jpg"
        content={[
          { text: "Démontage de l'imprimante : CHECK !", classes: "big-title" }
        ]}>
        <Validation t={t} step="/addon/expert/de200/notice-2" text="Je valide et je passe à la suite !" />
      </Block>
    </Layout>
  );
}

module.exports = PackExpert;