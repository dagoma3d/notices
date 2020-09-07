const React = require('react');
const Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/de200');
const Title = require('../../../components/title');
const Block = require('../../../components/block');
const Section = require('../../../components/section');

function Printer(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={14} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps approximatif : 30 minutes", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/11-k-fin.jpg"
        content={[
          { text: "Notice de montage DiscoEasy200 - Page 15 - Utilisation", classes: "title tleft", tag: "h1" },
          { text: "Lançons une première impression", classes: "big-title tleft" },
          { text: "Dernière étape avant le grand large. Nous allons vous montrer les bonnes pratiques et les rudiments de l'impression 3D sur la Discoeasy200." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "NevaMagis/Notice/b-derouleur.jpg", type: "image" }}
        content={[
          { text: "Étape 1", classes: "title tleft" },
          { text: "Choisir un fichier", classes: "big-title" },
          { text: "Nous vous proposons ici un dérouleur de bobine. Il vous sera bien utile lors de chacune de vos impressions." },
          { text: "Téléchargez le fichier ci-dessous. Nous allons ensuite le préparer sur Cura." },
          { link: { href: "/medias/DiscoEasy/Notice/16-support-bobine-stl/support-bobine.zip", classes: "new-btn btn-valid btn-big btn-wide", download: "support-bobine.zip", text: "Télécharger" } },
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Notice/16-c-slicer-cura.jpg", type: "image" }}
        content={[
          { text: "Étape 2", classes: "title tleft" },
          { text: "Préparation du fichier sur Cura", classes: "big-title" },
          { text: "Ouvrez le fichier sur cura by dagoma." },
          { text: "Nous vous proposons les paramètres d'impression suivant : 33% en rapide." },
          { text: "Insérez la carte SD dans l'ordinateur et cliquez sur \"préparer l'impression\"." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "OkfM4_sDQ00", type: "yt" }}
        content={[
          { text: "Étape 3", classes: "title tleft" },
          { text: "Insertion du filament", classes: "big-title" },
          { text: "Avant chaque insertion, coupez le filament pour que le bout soit propre." },
          { text: "Normalement à cette étape, le filament est déjà en place." },
          { text: "Nous allons quand même vous remontrer la technique." },
          { text: "Sur un extrudeur standard, appuyez sur le bras pour le débrider." },
          { text: "Passez le filament à la main en poussant et en effectuant de légères torsions pour faciliter son entrée." },
          { text: "Poussez le filament jusqu'à la tête d'impression." },
          { text: "Avec l'extrudeur+, c'est automatique." },
        ]} />
      <Section
        t={t}
        media={{ id: "V4tu5wQuJn4", type: "yt" }}
        content={[
          { text: "Étape 4", classes: "title tleft" },
          { text: "Lancement d'une impression", classes: "big-title" },
          { text: "Insérez la carte SD dans le lecteur." },
          { text: "Elle doit avoir un fichier GCODE nommé \"dagoma0.g\" pour être reconnu." },
          { text: "Mettez la machine sous tension en mettant l'interrupteur sur 1." },
          { text: "Info : si l'interrupteur est sur 1, que vous débranchez puis rebranchez l'imprimante 3D, elle sera mise sous tension et le fonctionnement sera le même. L'impression se lancera.", classes: "italic bg-light-grey-blue" },
          { text: "Explication du rituel de démarrage :" },
          {
            list: {
              items: [
                { text: "Prise d'origine des axes" },
                { text: "Temps de préchauffage" },
                { text: "Repérage du plateau (si l'option \"utilisation du palpeur\" est activée)" },
                { text: "Dernier temps de chauffe" },
                { text: "L'impression commence" },
              ]
            }
          }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "cdmfZ8FZ2I8", type: "yt" }}
        content={[
          { text: "Étape 5", classes: "title tleft" },
          { text: "Ajustement de la première couche", classes: "big-title" },
          { text: "La qualité de la première couche dépend de votre calibration sur Dagom'App. Il se peut que ce réglage varie entre deux lancements." },
          { text: "Nous vous conseillons de refaire une calibration de temps en temps lorsque la première couche perd en précision." },
          { text: "Il vous est possible d'agir sur les coupleurs pour ajuster la hauteur de la première couche." },
          { text: "En tournant les deux en même temps dans le sens inverse des aiguilles d'une montre, la couche sera plus basse (trop basse sur lavidéo)." },
          { text: "En tournant dans l'autre sens, elle sera plus haute (trop haute sur la vidéo)." },
          { text: "Regardez à la fin de la vidéo pour voir les 3 niveaux d'appréciations de hauteur de première couche." },
        ]} />
      <Section
        t={t}
        media={{ id: "A6-EyRaKC0g", type: "yt" }}
        content={[
          { text: "Étape 6", classes: "title tleft" },
          { text: "Arrêter proprement la Discoeasy200", classes: "big-title" },
          { text: "Pendant une impression, passez l'interrupteur à 0." },
          { text: "Retirez la carte SD." },
          { text: "Rallumez la machine pour que la tête refroidisse convenablement." },
          { text: "Quand le ventilateur avant s'arrête, vous pouvez l'éteindre sans soucis." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "NevaMagis/Notice/c-assemblage-derouleur.jpg", type: "image" }}
        content={[
          { text: "Étape 7", classes: "title tleft" },
          { text: "Assemblage du dérouleur", classes: "big-title" },
          { text: "N'hésitez pas à le faire tourner un peu à la main si vous voyez que l'assemblage ne pivote pas bien." },
        ]} />
      <Section
        t={t}
        media={{ src: "NevaMagis/Notice/d-assemblage-derouleur.jpg", type: "image" }}
        content={[
          { text: "Étape 8", classes: "title tleft" },
          { text: "Assemblage du dérouleur", classes: "big-title" },
          { text: "Déposez la bobine sur votre dérouleur." },
          { text: "Nous proposons un modèle plus évolué", link: { href: "/medias/DiscoEasy/Notice/16-support-bobine-stl/support-bobine.zip", classes: "link-classic", text: "ici" } }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/11-k-fin.jpg"
        content={[
          { text: "Votre Discoeasy est prête", classes: "big-title" },
          { text: "Votre montage et votre initiation sont terminés." }
        ]} />
    </Layout>
  );
}

module.exports = Printer;
