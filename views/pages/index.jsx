var React = require('react');
var Layout = require('../layouts/default');
var Block = require('../components/block');
var Title = require('../components/title');
var Section = require('../components/section');
var NevaVersion = require('../components/neva-version');

function Home(props) {
  return (
    <Layout title="Notices et de montage et d'utilisation">
      <Block
        img="FirstStep/premier-pas.jpg"
        content={[
          { text: "Premiers pas", classes: "title big tleft", tag: "h1" },
          { text: "C'est parti !", classes: "tleft big-title" },
          { text: "Félicitations ! Si vous êtes ici c'est que vous avez fait un (bon) choix : vous lancer dans l'aventure de l'impression 3D. Nous allons vous accompagner étape par étape, du montage à la première utilisation de votre machine ou de vos nouveaux composants. Vous êtes prêts ?", classes: "tleft light" },
        ]} />
      <Title
        content={[
          { text: "Choisissez votre imprimante 3D pour commencer", classes: "big-title" }
        ]} />
      <Section
        articles={[
          { id: "neva-magis", picto: "neva-magis-svg.svg", alt: "Magis" },
          { id: "neva", picto: "neva-svg.svg", alt: "Neva" },
          { id: "discoeasy200", picto: "discoeasy-svg.svg", alt: "DiscoEasy200" },
          { id: "disco-ultimate", picto: "disco-ultimate.svg", alt: "Disco Ultimate" },
          { href: "/cura-by-dagoma", picto: "a-logo-cura.svg", alt: "Cura by Dagoma" },
        ]} />
      <Section
        id="neva-magis"
        title="Magis"
        articles={[
          { href: "/printer/magis", picto: "neva-magis-svg.svg", alt: "Magis", title: "Premiers pas" },
          { href: "/addon/box/neva-magis", picto: "caisson-neva-magis.svg", alt: "Caisson" },
          { href: "/cura-by-dagoma/magis", picto: "a-logo-cura.svg", alt: "Cura by Dagoma" }
        ]} />
      <Section
        id="neva"
        title="Neva"
        articles={[
          { href: "/printer/neva", picto: "neva-svg.svg", alt: "Neva", title: "Premiers pas" },
          { href: "/addon/box/neva-magis", picto: "caisson-neva-magis.svg", alt: "Caisson" },
          { href: "/cura-by-dagoma", picto: "a-logo-cura.svg", alt: "Cura by Dagoma" }
        ]} />
      <Section
        id="discoeasy200"
        title="DiscoEasy200"
        articles={[
          { href: "/printer/de200", picto: "discoeasy-svg.svg", alt: "DiscoEasy200", title: "Notice de montage" },
          { href: "/addon/screen", picto: "accessoires-52.svg", alt: "Ecran" },
          { href: "/addon/extruder-plus/de200", picto: "accessoires-52.svg", alt: "Extrudeur+" },
          { href: "/addon/expert/de200", picto: "accessoires-52.svg", alt: "Pack expert" },
          { href: "/addon/bicolor/de200", picto: "accessoires-52.svg", alt: "Pack bi-couleur" },
          { href: "/addon/box/disco", picto: "caisson-disco.svg", alt: "Caisson de protection" },
          { href: "/addon/evo/de200", picto: "picto-pack-evo.svg", alt: "Pack évolution Ultimate" },
          { href: "/cura-by-dagoma/de200", picto: "a-logo-cura.svg", alt: "Cura by Dagoma" }
        ]} />
      <Section
        id="disco-ultimate"
        title="Disco Ultimate"
        articles={[
          { href: "/printer/du", picto: "disco-ultimate.svg", alt: "Disco Ultimate", title: "Notice de montage" },
          { href: "/addon/screen", picto: "accessoires-52.svg", alt: "Ecran" },
          { href: "/addon/bicolor/du", picto: "accessoires-52.svg", alt: "Pack bi-couleur" },
          { href: "/addon/box/disco", picto: "accessoires-49.svg", alt: "Caisson de protection" },
          { href: "/cura-by-dagoma/du", picto: "a-logo-cura.svg", alt: "Cura by Dagoma" }
        ]} />
      <NevaVersion />
    </Layout>
  );
}

module.exports = Home;