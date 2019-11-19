var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/du');
const Title = require('../../../components/title');
const Block = require('../../../components/block');
const Section = require('../../../components/section');
const Validation = require('../../../components/validation');

function Printer(props) {
  return (
    <Layout>
      <NavBar active={0} nav={nav} />
      <Block
        img="DiscoUltimate/Notice/1-a-intro.jpg"
        content={[
          { text: "Notice de montage DISCO ULTIMATE - préparation", classes: "title tleft", tag: "h1" },
          { text: "Préparons nous au montage", classes: "big-title tleft", tag: "h2" },
          { text: "Nous allons préparer tous les éléments nécessaires au montage du kit." },
          { text: "Temps approximatif de montage : 3 heures 30 minutes." }
        ]} />
      <Title content={[]} />
      <Section
        media={{ src: "DiscoEasy/Notice/2-b-prerequis.jpg", type: "image", classes: "notice-small-img" }}
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
                { text: "1 cutter ou 1 ébavureur" },
                { text: "1 maillet" },
                { text: "De l'huile liquide" }
              ]
            }
          }
        ]} />
      <Block
        img="DiscoUltimate/Notice/1-a-intro.jpg"
        content={[
          { text: "A vos marques … Go !", classes: "big-title" }
        ]}>
        <Validation step="/printer/du/notice-2" text="Je passe à l'étape suivante" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;