const React = require('react');
const Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/de200');
const Title = require('../../../components/title');
const Block = require('../../../components/block');
const Section = require('../../../components/section');
const Validation = require('../../../components/validation');

function Printer(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={4} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps approximatif : 20 minutes", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/6-a-intro.jpg"
        content={[
          { text: "Notice de montage DiscoEasy200 - Page 5 - Montage de l'axe X", classes: "title tleft", tag: "h1" },
          { text: "Montage de l'axe X", classes: "big-title tleft" },
          { text: "Nous allons monter la dernière partie de l'imprimante 3D avant de passer à l'assemblage." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Notice/6-b-prerequis.jpg", type: "image" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          {
            list: {
              items: [
                { text: "Une tête d'impression prémontée" },
                { text: "Un chariot d'axe X gauche et un droit (pour l'instant occupez vous seulement du fait qu'ils soient différents)" },
                { text: "1 moteur avec poulie" },
                { text: "2 roulements linéaires" },
                { text: "2 roulements de courroie" },
                { text: "1 butée longue" },
                { text: "1 courroie de 75cm" },
                { text: "2 barres courtes" },
                { text: "1 vis M3x16 (il doit en rester 9)" },
                { text: "3 vis M3x6 (il doit en rester 8)" },
                { text: "...et une baguette pas trop cuite (facultatif)" },
              ]
            }
          }
        ]} />
      <Section
        t={t}
        media={{ id: "zIAedVAVu2c", type: "yt" }}
        content={[
          { text: "Étape 1", classes: "title tleft", tag: "h2" },
          { text: "Installation des roulements de courroie", classes: "big-title" },
          { text: "Nous allons placer les roulements qui feront le renvois de courroie de la tête de l'imprimante." },
          { text: "Reprenez le petit outil imprimé pour vous aider à placer les roulements. Prenez 1 vis M3x16, placez la dans le trou correspondant et vissez à travers les 2 roulements. Faites passer le tournevis par le trou prévu à cet effet dans la pièce plastique. Vérifiez que les roulements tournent bien après serrage." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "0zpbqmQxS9c", type: "yt" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h2" },
          { text: "Mise en place de la butée de X", classes: "big-title" },
          { text: "Prenez la butée avec le câble le plus long. Introduisez la dans le logement en commençant par faire passer la prise." },
          { text: "Orientez-la comme sur la vidéo." },
          { text: "Enfoncez la butée." },
          { text: "Elle dépasse d'un millimètre par rapport au plastique." },
        ]} />
      <Section
        t={t}
        media={{ id: "QMQYIsNsYNw", type: "yt" }}
        content={[
          { text: "Étape 3", classes: "title tleft", tag: "h2" },
          { text: "Installation du moteur de X", classes: "big-title" },
          { text: "Rentrez le moteur dans son support avec le connecteur vers la pièce (comme sur la vidéo)." },
          { text: "Vissez le moteur avec 3 vis M3x6." },
          { text: "Le dernier trou de vis est accessible avec l'outil plastique utilisé pour les roulements. Positionnez la vis en face du trou, passez le tournevis à travers la pièce, retirez l'outil imprimé, et vissez." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "VmWe8jPwtyI", type: "yt" }}
        content={[
          { text: "Étape 4", classes: "title tleft", tag: "h2" },
          { text: "Installation des roulements de la tête", classes: "big-title" },
          { text: "Sortez deux roulements linéaires de leur sachet (prévoyez de l'essuie-tout, ils sont pleins d'huile)." },
          { text: "Clipsez-les dans les portées prévues à cet effet sur la tête (centrez-les bien avant d'appuyer)." },
        ]} />
      <Section
        t={t}
        media={{ id: "B4XaJI9l2dY", type: "yt" }}
        content={[
          { text: "Étape 5", classes: "title tleft", tag: "h2" },
          { text: "Montage des barres de l'axe X", classes: "big-title" },
          { text: "Prenez 2 barres courtes." },
          { text: "Introduisez-les avec délicatesse dans les roulements (faites quelques rotations pour faciliter leur entrée). Une fois en place, faites quelques allers-retours pour vérifier que tout va bien." },
          { text: "Maintenant faites attention au sens des pièces. Référez-vous à la vidéo pour orienter les pièces. La tête et les deux chariots sont plus haut d'un côté (en haut sur la vidéo). Alignez ce côté. Le chariot avec le moteur sera à gauche, l'autre à droite. Pas besoin de forcer pour rentrer les barres. Dans l'étape suivante vous pourrez vérifier tout ça.", classes: "italic" },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "RGABPMBcaKE", type: "yt" }}
        content={[
          { text: "Étape 6", classes: "title tleft", tag: "h2" },
          { text: "Installation de la courroie de la tête", classes: "big-title" },
          { text: "Retournez l'ensemble pour voir le dessous de la tête." },
          { text: "Prenez la courroie de 75cm." },
          { text: "Les crans vers le haut de la tête, introduisez la courroie dans le trou supérieur." },
          { text: "Récupérez-la de l'autre côté et faite la revenir à droite (attention aux vrilles)." },
          { text: "Dans le chariot de droite, passez au-dessus des roulements puis revenez en dessous (crans vers le roulement)." },
          { text: "Tirez dessus pour récupérer du mou.Tirez dessus pour récupérer du mou." },
          { text: "Faites revenir la courroie vers le chariot de gauche en passant sous la tête." },
          { text: "Passez la courroie sous la poulie du moteur et revenez par dessus." },
          { text: "Dirigez le bout de la courroie vers la tête. Placez la courroie dans le logement (allez jusqu'au dernier cran)." },
          { text: "Reprenez l'autre bout et tirez dessus pour tendre la courroie. Tendez sans forcer, juste pour que tout tienne en place. Poussez la courroie pour la verrouiller dans les crans de la tête." },
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/6-i-fin.jpg"
        content={[
          { text: "Montage de l'axe X : CHECK !", classes: "big-title" },
          { text: "Vérifiez que le sens des pièces correspond à la photo." },
          { text: "Mettez le ensuite de côté, il nous servira plus tard." }
        ]}>
        <Validation t={t} step="/printer/de200/notice-assemblage-base" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;
