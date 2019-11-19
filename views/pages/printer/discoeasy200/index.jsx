var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/de200');
const SimpleTitle = require('../../../components/simple-title');
const BasicSection = require('../../../components/basic-section');
const SimpleSection = require('../../../components/simple-section');
const Validation = require('../../../components/validation');
const Media = require('../../../components/media');

function Printer(props) {
  return (
    <Layout>
      <NavBar active={0} nav={nav} />
      <BasicSection
        img="DiscoEasy/Notice/2-a-intro.jpg"
        content={[
          { text: "Notice de montage DiscoEasy200 - Page 1 - Préparation", classes: "title tleft", tag: "h1" },
          { text: "Préparons nous au montage", classes: "big-title tleft", tag: "h2" },
          { text: "Nous allons préparer tous les éléments nécessaires au montage du kit." },
          { text: "Temps approximatif de montage : 3 heures 30 minutes.", classes: "col-vspace bold" }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoEasy/Notice/2-b-prerequis.jpg", type: "image" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          { text: "Un kit Discoeasy200" },
          {
            list: {
              tag: "ol",
              items: [
                { text: "1 tournevis hexagonal 2.5mm (fourni)" },
                { text: "1 tournevis cruciforme PH1" },
                { text: "1 tournevis plat de 3mm" },
                { text: "1 cutter ou ", link: { href: "https://www.dagoma3d.com/shop/product/dku000813-ebavureur-3318?page=2&category=3", classes: "link-classic", target: "_blank", text: "1 ébavureur" } },
                { text: "1 maillet" },
                { link: { href: "https://www.dagoma3d.com/shop/product/dku000809-huile-liquide-3538?category=3", classes: "link-classic", target: "_blank", text: "De l'huile liquide" } },
              ]
            }
          },
          { link: { href: "https://www.dagoma3d.com/shop/category/accessoires-3", target: "_blank", classes: "new-btn btn-valid btn-big btn-wide", text: "Les accessoires" } }
        ]} />
      <SimpleSection
        media={{ src: "DiscoEasy/Notice/2-d-contenu.jpg", type: "image" }}
        content={[
          { text: "Dans le carton du kit vous allez trouver...", classes: "big-title" },
          {
            list: {
              tag: "ol",
              items: [
                { text: "1 sachet de composants mécaniques (courroies, roulements, ressorts...)" },
                { text: "1 sachet de vis (7 types de visserie)" },
                { text: "1 sachet de câbles" },
                { text: "1 sachet de composants électroniques" },
                { text: "1 tête d’impression prémontée" },
                { text: "1 carte de contrôle" },
              ]
            }
          },
          { text: "1 tournevis hexagonal 2.5 mm et une spatule", classes: "tleft col-vbspace" },
          { text: "Dans le carton, il vous reste 5 moteurs (2 avec poulie, 1 avec roue dentée, 2 plus petits), un ensemble de barres (dans le filet jaune : 5 courtes, 8 longues, 2 filetées), les pièces imprimées, un outil imprimé, un plateau, des éléments de finition et une alimentation. (2 avec poulie, 1 avec roue dentée, 2 plus petits), un ensemble de barres (dans le filet jaune : 5 courtes, 8 longues, 2 filetées), les pièces imprimées, un outil imprimé, un plateau, des éléments de finition et une alimentation.", classes: "col-vtspace" },
          { text: "Conseil : Sortez les vis et regroupez-les par type. Utilisez un récipient pour ne pas les perdre. Laissez les roulements dans leur sachet.", classes: "col-vtspace" },
        ]} />
      <BasicSection
        img="DiscoEasy/Notice/2-a-intro.jpg"
        content={[
          { text: "Je suis prêt : CHECK !", classes: "big-title" }
        ]}>
        <Validation step="/printer/de200/notice-montage-face-avant" />
      </BasicSection>
    </Layout>
  );
}

module.exports = Printer;