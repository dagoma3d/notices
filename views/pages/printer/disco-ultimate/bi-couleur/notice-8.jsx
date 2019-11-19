const React = require('react');
const Layout = require('../../../../layouts/default');
const NavBar = require('../../../../components/navbar');
const nav = require('../../../../../content/nav/bicolor/du');
const Title = require('../../../../components/title');
const Block = require('../../../../components/block');
const Section = require('../../../../components/section');

function BiColor(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={6} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "GCode", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/Bicouleur/7-a-intro.jpg"
        content={[
          { text: "Notice de montage pack bi-couleur - préparation d’un gcode bi-couleur", classes: "title tleft", tag: "h1" },
          { text: "Préparer un gcode", classes: "big-title tleft" },
          { text: "Nous avons ajouté dans notre dernier cura la possibilité de préparer des gcodes pour la double extrusion. Si vous n’êtes pas familiers de Cura, rendez-vous d’abord ", link: { href: "/cura-by-dagoma", classes: "link-classic", text: "ici" } }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/8-b-stl.jpg", type: "image" }}
        content={[
          { text: "Les fichiers STL pour la bi-couleur", classes: "big-title tleft", tag: "h2" },
          {
            text: "Les fichiers pour imprimer en bi-couleurs sont spécifique, ils doivent être au préalable séparés en deux avec la même origine. Cura peut ensuite les rassembler et les slicers en un seul et même gcode."
          },
          { text: "Nous vous avons préparé un pack de 15 objets pour la bi-couleur." },
          { link: { text: "Télécharger les 15 objets", href: "/medias/stl/15STL.zip", classes: "new-btn btn-classic btn-grey btn-wide", download: "15STL.zip" } }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/8-c-choix-du", type: "video" }}
        content={[
          { text: "Installation de Cura pour la double extrusion", classes: "big-title tleft", tag: "h2" },
          { text: "Si ce n’est pas déjà fait, téléchargez la dernière version de Cura.", classes: "text-red" },
          { link: { text: "Télécharger", href: "https://dist.dagoma3d.com/CuraByDagoma", classes: "new-btn btn-classic btn-grey btn-wide", target: "_blank" } },
          { text: "Une fois installé, sur l’écran de choix d’imprimante, cliquez sur DiscoUltimate, choisissez oui pour la double extrusion, et appuyez sur OK." },
          { text: "Voilà ! Nous vous expliquons la nouvelle interface et son fonctionnement juste après." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/8-d-nouvelle-interface.jpg", type: "image" }}
        content={[
          { text: "Les nouveautés de l’interface", classes: "big-title tleft", tag: "h2" },
          { text: "A - Double extrusion signifie double réglage de filament. Chargez un filament dans l’extrudeur 1 (le numéro d’extrudeur est également repéré sur votre machine) puis choisissez son paramètre. Faites de même pour le second. Nous verrons ensuite comment affecter un filament à un STL." },
          { text: "B - Le choix du filament pour le support. Si vous activez le support, vous pouvez choisir un des filaments pour le support uniquement. Nous allons vous montrer l’impact de ce paramètre." },
          { text: "C - Le choix du volume de purge. Ce paramètre est très important pour obtenir une pièce propre. Nous vous expliquons tout plus bas." },
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/8-e-filament", type: "video" }}
        content={[
          { text: "Associer la couleur de filament", classes: "big-title tleft", tag: "h2" },
          { text: "Choisissez les paramètres des filaments chargés dans vos extrudeur 1 et 2." },
          { text: "Importez les STL." },
          { text: "Faites un 'clic droit' sur un des deux puis 'Assemblage pour la double extrusion'." },
          { text: "Centrez le fichier." },
          { text: "Astuce: Vous pouvez intervertir les couleurs au besoin dans le menu du clic droit.", classes: "italic" },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/8-f-type-support.jpg", type: "image" }}
        content={[
          { text: "Choisir le type de support", classes: "big-title tleft", tag: "h2" },
          { text: "Pour notre exemple, nous avons mis du orange dans l’extrudeur 1 et du gris dans l’extrudeur 2." },
          { text: "La bi-extrusion offre la possibilité de gérer les supports de différentes façon (bien-sur il faut au préalable activer les supports) :" },
          {
            list: {
              classes: "lsn tleft-child",
              items: [
                { text: "A. Les deux : Les deux filaments seront utilisés pour faire le support.", classes: "col-hlspace", tag: { name: "p" } },
                { text: "B. Filament 1 : Seul le filament 1 sera utilisé pour le support, orange ici.", classes: "col-hlspace", tag: { name: "p" } },
                { text: "C. Filament 2 : Seul le filament 2 sera utilisé pour le support, gris ici.", classes: "col-hlspace", tag: { name: "p" } },
                { text: "D. Il est possible d’imprimer une pièce monochrome avec un support d’une autre matière. Ici, nous avons imprimé le “T” avec le filament 1 et le support avec le filament 2. Pour se faire, il faut choisir “Filament 2” dans type de support.", classes: "col-hlspace", tag: { name: "p" } }
              ]
            }
          }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Add-on/Bicouleur/8-g-volume-purge.jpg", type: "image" }}
        content={[
          { text: "Choisir le volume de purge", classes: "big-title tleft", tag: "h2" },
          { text: "Pour passer d’un filament à l’autre il est nécessaire de purger le restant de couleur présent dans la buse. Ce volume est généralement réglé sur standard." },
          { text: "Pour des couleurs proches tel que le blanc et le beige (A), passer sur “Petit (30 mm3)” permet de réduire les pertes sans perdre en qualité." },
          { text: "Pour des couleurs très contrastées (C) tel que le beige et le noir, passer sur “Grand (125 mm3)” permet de conserver la qualité, dans ce cas les pertes sont plus importante." },
          { text: "Pour la plupart des couleurs proches (B), “Standard (90 mm3)” suffira." },
          { text: "N’hésitez pas à nous partager vos expériences de mélange de filaments." },
          { text: "Remarque : Pour les mélanges de matière, préférez “Grand (125 mm3)”." },
        ]} />
      <Title
        t={t}
        content={[
          { text: "Il ne vous reste plus qu’à préparer votre fichier et lancer votre impression bi-couleur.", classes: "big-title" }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/Bicouleur/7-a-intro.jpg"
        content={[
          { text: "Préparation d’un fichier bi-couleur terminée", classes: "big-title" },
          { text: "Vous savez tout sur l’impression bi-couleur. Partagez nous vos créations sur le Club Dagoma." }
        ]} />
    </Layout>
  );
}

module.exports = BiColor;