const React = require('react');
const Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/du');
const Title = require('../../../components/title');
const Block = require('../../../components/block');
const Section = require('../../../components/section');

function Printer(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={13} nav={nav} />
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
          { text: "Notice de montage Disco Ultimate - Page 14 - Utilisation", classes: "title tleft", tag: "h1" },
          { text: "Lançons une première impression", classes: "big-title tleft", tag: "h2" },
          { text: "Dernière étape avant le grand large. Nous allons vous montrer les bonnes pratiques et les rudiments de l'impression 3D sur la Discoeasy200." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "NevaMagis/Notice/b-derouleur.jpg", type: "image" }}
        content={[
          { text: "Etape 1", classes: "big-title" },
          { text: "Choisir un fichier" },
          { text: "Nous vous proposons ici un dérouleur de bobine. Il vous sera bien utile lors de chacune de vos impressions." },
          { text: "Téléchargez le fichier ci-dessous. Nous allons ensuite le préparer sur Cura.", link: { href: "https://drive.google.com/file/d/1_1N0OnGBdfcMY00hV2dENDK4LJA5IRyw/view?usp=sharing", classes: "new-btn btn-valid btn-big btn-wide", download: "support-bobine.zip", text: "Télécharger", target: "_blank" } }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Notice/16-c-slicer-cura.jpg", type: "image" }}
        content={[
          { text: "Étape 2", classes: "big-title" },
          { text: "Préparation du fichier sur Cura" },
          { text: "Ouvrez le fichier sur cura by dagoma." },
          { text: "Nous vous proposons les paramètres d'impression suivant : 33% en rapide." },
          { text: "Insérez la carte SD dans l'ordinateur et cliquez sur \"préparer l'impression\"." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "OkfM4_sDQ00", type: "yt" }}
        content={[
          { text: "Étape 3", classes: "title tleft" },
          { text: "Insertion du filament", classes: "big-title", tag: "h2" },
          { text: "Avant chaque insertion, coupez le filament pour que le bout soit propre." },
          { text: "Normalement à cette étape, le filament est déjà en place." },
          { text: "Nous allons quand même vous remontrer la technique." },
          { text: "Sur un extrudeur standard, appuyez sur le bras pour le débrider." },
          { text: "Passez le filament à la main en poussant et en effectuant de légères torsions pour faciliter son entrée." },
          { text: "Poussez le filament jusqu'à la tête d'impression." },
          { text: "Avec l'extrudeur+, c'est automatique." }
        ]} />
      <Section
        t={t}
        media={{ id: "V4tu5wQuJn4", type: "yt" }}
        content={[
          { text: "Étape 4", classes: "title tleft" },
          { text: "Lancement d'une impression", classes: "big-title", tag: "h2" },
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
                { text: "L'impression commence" }
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
          { text: "Ajustement de la première couche", classes: "big-title", tag: "h2" },
          { text: "La qualité de la première couche dépend de votre calibration sur Dagom'App. Il se peut que ce réglage varie entre deux lancements." },
          { text: "Nous vous conseillons de refaire une calibration de temps en temps lorsque la première couche perd en précision." },
          { text: "Il vous est possible d'agir sur les coupleurs pour ajuster la hauteur de la première couche." },
          { text: "En tournant les deux en même temps dans le sens inverse des aiguilles d'une montre, la couche sera plus basse (trop basse sur la vidéo)." },
          { text: "En tournant dans l'autre sens, elle sera plus haute (trop haute sur la vidéo)." },
          { text: "Regardez à la fin de la vidéo pour voir les 3 niveaux d'appréciations de hauteur de première couche." }
        ]} />
      <Section
        t={t}
        media={{ id: "a3YhXjDsips", type: "yt" }}
        content={[
          { text: "Étape 6", classes: "title tleft" },
          { text: "La détection de fin de filament", classes: "big-title" },
          { text: "Désormais pendant une impression, si l'imprimante 3D est à court de filament, elle se mettra en pause toute seule et éjectera le restant de filament." },
          { text: "Après 10 minutes de pause, la Disco Ultimate s'arrêtera de chauffer." },
          { text: "Elle attendra que vous en insériez un nouveau pour reprendre l'impression." },
          { text: "Appuyez sur le bouton une fois le filament inséré." },
          { text: "Si vous lancez votre imprimante 3D sans filament, aucun soucis, elle vous attendra avant de commencer." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "DXtqwqNnw-g", type: "yt" }}
        content={[
          { text: "Étape 7", classes: "title tleft" },
          { text: "La pause", classes: "big-title" },
          { text: "Pendant une impression, vous êtes capable de mettre l'imprimante en pause en appuyant sur le bouton. Elle continuera d'imprimer pendant quelques secondes avant de s'arrêter." },
          { text: "Après 10 minutes de pause, la Disco Ultimate s'arrêtera de chauffer pour des raisons de sécurité." },
          { text: "Rappuyez sur le bouton pour qu'elle recommence à imprimer. Si votre imprimante 3D était froide, elle commencera par chauffer avant de reprendre l'impression." },
          { text: "Fonction accessible depuis l'écran : \"Interrompre impr.\"", classes: "col-space bg-light-grey-blue italic" },
          { text: "Si vous appuyez sur le bouton pendant le palpage, cela interrompra totalement le lancement. Vous n'aurez qu'à relancer l'impression.", classes: "bg-orange text-white col-space" }
        ]} />
      <Section
        t={t}
        media={{ id: "bTaBU_9ca3M", type: "yt" }}
        content={[
          { text: "Étape 8", classes: "title tleft" },
          { text: "Ejection du filament", classes: "big-title" },
          { text: "Vous êtes en mesure de retirer automatiquement le filament en restant appuyer sur le bouton de la pause. Vous pouvez relâcher lorsque l'imprimante réagit." },
          { text: "Si la tête d'impression est déjà chaude, le filament sortira directement." },
          { text: "Si la tête est froide, l'imprimante commencera par chauffer avant de retirer le filament." },
          { text: "Nous avons ajouté un témoin de progression de chauffe. La tête se déplace par rapport à sa température. Quand elle arrive à droite, elle est prête." },
          { text: "Fonction accessible depuis l'écran : \"Changement de filament\"", classes: "col-space bg-light-grey-blue italic" }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "2vbEgZNEk04", type: "yt" }}
        content={[
          { text: "Étape 9", classes: "title tleft" },
          { text: "Insertion du filament", classes: "big-title" },
          { text: "Avant chaque insertion, coupez le filament pour que le bout soit propre." },
          { text: "Lorsque l'imprimante n'a pas de filament, vous pouvez en insérer un nouveau en le présentant dans l'extrudeur. Poussez-le jusqu'à ce qu'il soit entrainé par l'extrudeur." },
          { text: "Comme pour l'éjection, vous pouvez l'utiliser à chaud comme à froid avec le même comportement :" },
          { text: "Si la tête d'impression est déjà chaude, le filament entrera directement." },
          { text: "Si la tête est froide, l'imprimante commencera par chauffer avant d'insérer le filament." },
          { text: "Retirez l'excédent de purge en sortie de la buse, attention c'est chaud." }
        ]} />
      <Section
        t={t}
        media={{ id: "A6-EyRaKC0g", type: "yt" }}
        content={[
          { text: "Étape 10", classes: "title tleft" },
          { text: "Arrêter proprement la Disco Ultimate", classes: "big-title" },
          { text: "Pendant une impression, passez l'interrupteur à 0." },
          { text: "Retirez la carte SD." },
          { text: "Rallumez la machine pour que la tête refroidisse convenablement." },
          { text: "Quand le ventilateur avant s'arrête, vous pouvez l'éteindre sans soucis." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "NevaMagis/Notice/c-assemblage-derouleur.jpg", type: "image" }}
        content={[
          { text: "Étape 11", classes: "title tleft" },
          { text: "Assemblage du dérouleur", classes: "big-title" },
          { text: "N'hésitez pas à le faire tourner un peu à la main si vous voyez que l'assemblage ne pivote pas bien." }
        ]} />
      <Section
        t={t}
        media={{ src: "NevaMagis/Notice/d-assemblage-derouleur.jpg", type: "image" }}
        content={[
          { text: "Étape 12", classes: "title tleft" },
          { text: "Assemblage du dérouleur", classes: "big-title" },
          { text: "Déposez la bobine sur votre dérouleur." },
          { text: "Nous proposons un modèle plus évolué", link: { href: "https://drive.google.com/file/d/1_1N0OnGBdfcMY00hV2dENDK4LJA5IRyw/view?usp=sharing", classes: "link-classic", text: "ici", download: "support-bobine.zip", target: "_blank" } }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/11-k-fin.jpg"
        content={[
          { text: "Étape 13", classes: "big-title" },
          { text: "Votre montage et votre initiation sont terminés." }
        ]} />
    </Layout>
  );
}

module.exports = Printer;
