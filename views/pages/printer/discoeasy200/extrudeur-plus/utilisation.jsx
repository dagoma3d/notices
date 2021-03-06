const React = require('react');
const Layout = require('../../../../layouts/default');
const Title = require('../../../../components/title');
const Block = require('../../../../components/block');
const Section = require('../../../../components/section');

function Extruder(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <Block
        t={t}
        img="DiscoEasy/Add-on/ExtrudeurPlus/B-a-intro.JPG"
        content={[
          { text: "Notice - Utilisation", classes: "title tleft", tag: "h1" },
          { text: "Votre DiscoEasy200 est prête.", classes: "big-title tleft" },
          { text: "C'est le moment d'utiliser votre nouvelle installation. C'est parti !" }
        ]} />
      <Title
        t={t}
        content={[
          { text: "Commencez par mettre à jour l'imprimante 3D.", classes: "big-title" },
          { text: "Revenez sur cette page une fois la mise à jour terminée." },
          {
            link: {
              href: "/firmware/de200", target: "_blank", classes: "new-btn btn-classic btn-grey btn-big btn-wide", text: "C'est par ici !"
            }
          },
          { text: "Une fois votre imprimante 3d mise à jour, passez à la suite." }
        ]} />
      <Title
        t={t}
        color={true}
        content={[
          { text: "Comment utiliser ces nouveautés ?", classes: "big-title" }
        ]} />
      <Section
        t={t}
        media={{ id: "a3YhXjDsips", type: "yt" }}
        content={[
          { text: "La détection de fin de filament", classes: "big-title" },
          { text: "Désormais pendant une impression, si l'imprimante 3D est à court de filament, elle se mettra en pause toute seule et éjectera le restant de filament." },
          { text: "Après 10 minutes de pause, la DiscoEasy200 s'arrêtera de chauffer." },
          { text: "Elle attendra que vous en insériez un nouveau pour reprendre l'impression." },
          { text: "Appuyez sur le bouton une fois le filament inséré." },
          { text: "Si vous lancez votre imprimante 3D sans filament, aucun soucis, elle vous attendra avant de commencer." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "DXtqwqNnw-g", type: "yt" }}
        content={[
          { text: "La pause", classes: "big-title" },
          { text: "Pendant une impression, vous êtes capable de mettre l'imprimante en pause en appuyant sur le bouton. Elle continuera d'imprimer pendant quelques secondes avant de s'arrêter." },
          { text: "Après 10 minutes de pause, la DiscoEasy200 s'arrêtera de chauffer pour des raisons de sécurité." },
          { text: "Rappuyez sur le bouton pour qu'elle recommence à imprimer. Si votre imprimante 3D était froide, elle commencera par chauffer avant de reprendre l'impression." },
          { text: "Fonction accessible depuis l'écran : \"Interrompre impr.\"", classes: "col-space bg-light-grey-blue italic" },
          { text: "Si vous appuyez sur le bouton pendant le palpage, cela interrompra totalement le lancement. Vous n'aurez qu'à relancer l'impression.", classes: "bg-orange text-white col-space" }
        ]} />
      <Section
        t={t}
        media={{ id: "bTaBU_9ca3M", type: "yt" }}
        content={[
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
        media={{ src: "DiscoEasy/Add-on/ExtrudeurPlus/B-g-flexible.jpg", type: "image" }}
        content={[
          { text: "Le flexible", classes: "big-title" },
          { text: "L'extrudeur+ a spécialement été conçu pour l'impression du filament flexible. Sa forme permet d'imprimer ce filament avec des performances se rapprochant d'un filament classique." }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/ExtrudeurPlus/B-a-intro.JPG"
        content={[
          { text: "Votre add-on est prêt. À vous de créer !", classes: "big-title tleft" }
        ]} />
    </Layout>
  );
}

module.exports = Extruder;
