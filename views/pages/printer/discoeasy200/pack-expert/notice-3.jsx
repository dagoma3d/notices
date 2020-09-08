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
      <NavBar t={t} active={2} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps approximatif : 20 minutes", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/Trapezoidales/3-a-intro.jpg"
        content={[
          { text: "Notice de montage pack expert - Montage", classes: "title tleft", tag: "h1" },
          { text: "Montage du pack expert", classes: "big-title tleft" },
          { text: "Nous allons maintenant remonter la DiscoEasy200 avec les éléments du pack expert." }
        ]} />
      <Section
        t={t}
        media={{ id: "CISm6FZRhUc", type: "yt" }}
        content={[
          { text: "Etape 1", classes: "title tleft", tag: "h2" },
          { text: "Montage des barres de l'axe X", classes: "big-title" },
          { text: "Introduisez-les avec délicatesse dans les roulements (faites quelques rotations pour faciliter leur entrée). Une fois en place, faites quelques allers-retours pour vérifier que tout va bien." },
          { text: "Maintenant faites attention au sens des pièces. Référez-vous à la vidéo pour orienter les pièces. La tête et les deux chariots sont plus haut d'un côté (en haut sur la vidéo). Alignez ce côté. Le chariot avec le moteur sera à gauche, l'autre à droite. Dans l'étape suivante vous pourrez vérifier tout ça." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "ub4tP4PD5WA", type: "yt" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h2" },
          { text: "Installation de la courroie de la tête", classes: "big-title" },
          { text: "Retournez l'ensemble pour voir le dessous de la tête." },
          { text: "Reprenez la courroie." },
          { text: "Les crans vers le haut de la tête, introduisez la courroie dans le trou supérieur." },
          { text: "Récupérez-la de l'autre côté et faites-la revenir à droite (attention aux vrilles)." },
          { text: "Dans le chariot de droite, passez au-dessus des roulements puis revenez en dessous (crans vers le roulement)." },
          { text: "Tirez dessus pour récupérer du mou." },
          { text: "Faites revenir la courroie vers le chariot de gauche en passant sous la tête." },
          { text: "Passez la courroie sous la poulie du moteur et revenez par dessus." },
          { text: "Dirigez le bout de la courroie vers la tête. Placez la courroie dans le logement (allez jusqu'au dernier cran)." },
          { text: "Reprenez l'autre bout et tirez dessus pour tendre la courroie. Tendez sans forcer, juste pour que tout tienne en place. Poussez la courroie pour la verrouiller dans les crans de la tête." },
        ]} />
      <Section
        t={t}
        media={{ id: "YtQKtS8uoz0", type: "yt" }}
        content={[
          { text: "Etape 3", classes: "title tleft", tag: "h2" },
          { text: "Montage des moteur de Z avec tiges trapézoïdales", classes: "big-title" },
          { text: "Retirez les écrous anti-backslash (ça peut être un peu long)." },
          { text: "Soulevez l'imprimante 3D et insérez les moteurs." },
          { text: "Tournez-les pour aligner le connecteur du moteur vers l'extrudeur." },
          { text: "Vissez ensuite les moteurs (reprenez les vis utilisées pendant le démontage)." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "kLCBGsPSp-4", type: "yt" }}
        content={[
          { text: "Étape 4", classes: "title tleft", tag: "h2" },
          { text: "Remontage de l'axe X", classes: "big-title" },
          { text: "Prenez l'axe X, orientez-le pour que le moteur de X soit à gauche de la machine lorsque la face avant est devant vous." },
          { text: "Faites passer les câbles derrière les barres arrière." },
          { text: "Insérez délicatement les barres dans les roulements et faites coulisser l'axe jusqu'en bas." },
          { text: "Faites quelques allers-retours pour que l'ensemble s'ajuste bien." },
          { text: "Placez une des anciennes pièces plastiques en dessous. Elle protègera votre plateau pour la prochaine étape." },
        ]} />
      <Section
        t={t}
        media={{ id: "p0ynSmL_jic", type: "yt" }}
        content={[
          { text: "Étape 5", classes: "title tleft", tag: "h2" },
          { text: "Installation des écrous", classes: "big-title" },
          { text: "Si votre écrou s'est désassemblé, voici comment le remonter." },
          { text: "Présentez-le sur la tige, côté triangulaire vers le haut." },
          { text: "Maintenez le ressort pour pouvoir engager l'écrou en vissant." },
          { text: "Vissez l'écrou pour laisser la tige dépasser de 2 cm (un pouce)." },
          { text: "Faites de même pour le second." },
          { text: "Faites ensuite monter l'axe X pour faire rentrer les écrous dans leur logement." },
          { text: "Prenez ensuite les 6 vis M4x12 et vissez les écrous dans les chariots." },
          { text: "Faites ensuite descendre l'ensemble d'environ 5 cm." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "Jde-mMoUodw", type: "yt" }}
        content={[
          { text: "Étape 6", classes: "title tleft", tag: "h2" },
          { text: "Câblage", classes: "big-title" },
          { text: "Rebranchez ensuite le moteur de X." },
          { text: "Prenez le câble de la butée et faites-le passer sous la machine en suivant ceux déjà en place." },
          { text: "Rebranchez la butée sur le connecteur X+." },
          { text: "Rebranchez ensuite les deux moteurs de Z en faisant passer le câble entre la barre inférieure et la pièce plastique." },
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/Trapezoidales/3-h-fin.jpg"
        content={[
          { text: "Montage du pack expert : CHECK !", classes: "big-title" }
        ]}>
        <Validation t={t} step="/addon/expert/de200/notice-4" text="Je valide et je passe à la suite !" />
      </Block>
    </Layout>
  );
}

module.exports = PackExpert;