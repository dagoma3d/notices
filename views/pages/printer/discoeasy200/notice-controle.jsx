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
      <NavBar t={t} active={10} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps approximatif : 15 minutes", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/11-k-fin.jpg"
        content={[
          { text: "Notice de montage DiscoEasy200 - Page 11 - Contrôle", classes: "title tleft", tag: "h1" },
          { text: "Contrôlons le bon fonctionnement des éléments de la machine", classes: "big-title tleft" },
          { text: "Nous allons procéder à des vérifications de l'ensemble des composants à l'aide de fichiers de test." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Notice/12-b-g28", type: "video" }}
        content={[
          { text: "Étape 1", classes: "title tleft", tag: "h2" },
          { text: "Contrôle des butées et des moteurs", classes: "big-title" },
          { text: "Le fichier suivant fera quelques déplacements simples. Voyez la vidéo ci-contre." },
          { text: "Récupérez l'alimentation et branchez la machine au secteur." },
          { text: "Téléchargez le fichier ci-dessous et mettez le sur la carte SD. Nommez bien le fichier \"dagoma0.g\" sur la carte sinon la machine ne démarrera pas." },
          { link: { href: "/medias/DiscoEasy/Notice/12-gcode-controle/12-b-g28.zip", classes: "new-btn btn-valid btn-big btn-wide", download: "12-b-g28.zip", text: "Télécharger" } },
          { text: "Mettez la carte SD dans la machine et mettez l'interrupteur sur 1 (elle démarre lorsque l'interrupteur passe de 0 à 1)." },
          { text: "Si le comportement est différent de celui observé, vérifiez votre câblage", classes: "color-orange text-white col-space", link: { href: "/printer/de200/notice-cablage", classes: "link-classic", text: "ici" } },
          { text: "Si le câblage est bon mais que le problème persiste, rendez-vous", classes: "color-orange text-white col-space", link: { href: "https://support.dagoma.fr/support/solutions/articles/36000096568-discoeasy200-la-carte-sd-n-est-pas-reconnue", target: "_blank", classes: "link-classic", text: "ici" } },
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Notice/12-c-deplacement", type: "video" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h2" },
          { text: "Contrôle des déplacements des axes", classes: "big-title" },
          { text: "Le fichier suivant fera quelques déplacements sur toute la longueur des axes. Voyez la vidéo ci-contre. Lors du déplacement de l'axe X de haut en bas, huilez les barres et les tiges filetées." },
          { text: "Téléchargez le fichier ci-dessous et mettez le sur la carte SD. Nommez bien le fichier \"dagoma0.g\" sur la carte." },
          { link: { href: "/medias/DiscoEasy/Notice/12-gcode-controle/12-c-deplacement.zip", classes: "new-btn btn-valid btn-big btn-wide", download: "12-c-deplacement.zip", text: "Télécharger" } },
          { text: "Mettez la carte SD dans la machine et mettez l'interrupteur sur 1." },
          { text: "Lorsque les mouvements sont terminés, arrêtez la machine (interrupteur sur 0)." },
          { text: "Si le comportement est différent de celui observé, vérifiez votre câblage", classes: "color-orange text-white col-space", link: { href: "/printer/de200/notice-cablage", classes: "link-classic", text: "ici" } }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Notice/12-d-ventilateur", type: "video" }}
        content={[
          { text: "Étape 3", classes: "title tleft", tag: "h2" },
          { text: "Contrôle des ventilateurs", classes: "big-title" },
          { text: "Le fichier suivant fera tourner les ventilateurs l'un après l'autre. Le ventilateur arrière va s'allumer 5 secondes puis ce sera le tour de l'avant." },
          { text: "Téléchargez le fichier ci-dessous et mettez le sur la carte SD. Nommez bien le fichier \"dagoma0.g\" sur la carte." },
          { link: { href: "/medias/DiscoEasy/Notice/12-gcode-controle/12-d-ventilateur.zip", classes: "new-btn btn-valid btn-big btn-wide", download: "12-d-ventilateur.zip", text: "Télécharger" } },
          { text: "Mettez la carte SD dans la machine et mettez l'interrupteur sur 1." },
          { text: "Lorsque les mouvements sont terminés, arrêtez la machine (interrupteur sur 0)." },
          { text: "Si le comportement est différent de celui observé, vérifiez votre câblage", classes: "color-orange text-white col-space", link: { href: "/printer/de200/notice-cablage", classes: "link-classic", text: "ici" } },
          { text: "Si le câblage est bon mais que le problème persiste, rendez-vous", classes: "color-orange text-white col-space", link: { href: "https://support.dagoma.fr/support/solutions/articles/36000071235-discoeasy200-discoultimate-un-ventilateur-ne-tourne-pas-ou-les-deux-", target: "_blank", classes: "link-classic", text: "ici" } },
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Notice/12-e-chauffe", type: "video" }}
        content={[
          { text: "Étape 4", classes: "title tleft", tag: "h2" },
          { text: "Contrôle de la chauffe et de l'extrusion", classes: "big-title" },
          { text: "Le fichier suivant fera chauffer la tête à 200°C (ne touchez pas la buse en métal)." },
          { text: "Elle va se déplacer de gauche à droite le temps de sa chauffe." },
          { text: "Une fois à droite, elle sera chaude." },
          { text: "Elle se mettra ensuite en pause (elle montera un peu et le plateau avancera)." },
          { text: "Introduisez du filament dans l'extrudeur jusqu'à la tête. Appuyez sur le bras pour débrider l'extrudeur et introduire le filament. Quelques torsions peuvent aider à le rentrer. (Après la mise à jour, avec l'extrudeur+, l'insertion sera automatique.)" },
          { text: "Appuyez ensuite sur la butée. La machine sortira du filament par la buse. Retirez-le en faisant attention, la tête est chaude." },
          { text: "Téléchargez le fichier ci-dessous et mettez le sur la carte SD. Nommez bien le fichier \"dagoma0.g\" sur la carte." },
          { link: { href: "/medias/DiscoEasy/Notice/12-gcode-controle/12-e-chauffe.zip", classes: "new-btn btn-valid btn-big btn-wide", download: "12-e-chauffe.zip", text: "Télécharger" } },
          { text: "Mettez la carte SD dans la machine et mettez l'interrupteur sur 1." },
          { text: "Lorsque les mouvements sont terminés, arrêtez la machine (interrupteur sur 0)." },
          { text: "Si le comportement est différent de celui observé, vérifiez votre câblage", classes: "color-orange text-white col-space", link: { href: "/printer/de200/notice-cablage", classes: "link-classic", text: "ici" } },
          { text: "Si le câblage est bon mais que le problème persiste, rendez-vous", classes: "color-orange text-white col-space", link: { href: "https://support.dagoma.fr/support/solutions/articles/36000129400-discoeasy200-ultimate-test-d-extrusion", target: "_blank", classes: "link-classic", text: "ici" } },
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/11-k-fin.jpg"
        content={[
          { text: "Contrôle : CHECK !", classes: "big-title" },
          { text: "Si vous en êtes là, c'est que votre machine est prête à fonctionner." },
          { text: "Nous touchons au but, il nous reste à mettre à jour la machine, à la calibrer et vous serez paré pour votre première impression." },
        ]}>
        <Validation t={t} step="/firmware/de200" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;