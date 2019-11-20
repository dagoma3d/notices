const React = require('react');
const Layout = require('../layouts/default');
const CuraBlock = require('../components/cura-block');
const Section = require('../components/section');
const Block = require('../components/block');
const Title = require('../components/title');
const NavBar = require('../components/navbar');
const Validation = require('../components/validation');

function CuraByDagoma(props) {
  const t = props.__;
  const { title, active, nav, step } = props;
  return (
    <Layout t={t} title={title}>
      <NavBar t={t} active={active} nav={nav} />
      <Block
        t={t}
        img="Cura/Notice/a-intro.jpg"
        content={[
          { text: "Notice d'utilisation du logiciel Cura", classes: "title tleft", tag: "h1" },
          { text: "Cura, Slicer, ... On vous explique tout !", classes: "big-title tleft" },
          { text: "Ajustez la taille, la qualité ou le remplissage et maîtrisez la personnalisation de vos objets 3D à l'aide du logiciel Cura by Dagoma." },
          { text: "Dans ce tutoriel, vous découvrirez en quoi consiste ce logiciel." }
        ]} />
      <Section
        t={t}
        id="formats"
        flip={true}
        media={{ src: "Cura/Notice/b-stl-gcode.jpg", type: "image" }}
        content={[
          { text: "Quels sont les formats utilisés ?", classes: "big-title" },
          { text: "Le STL est à l'impression 3D ce que le MP3 est à la musique, ou le JPEG à la photo." },
          { text: "La plupart des logiciels de modélisation 3D permettent l'export des fichiers en STL." },
          { text: "Cependant, ce format est une coquille vide pour votre imprimante. Elle ne saura pas s'en servir." },
          { text: "Le Gcode est une suite d'instructions pour faire fonctionner votre imprimante 3D. Ces instructions représentent l'ensemble des trajectoires que va parcourir la tête d'impression, couche par couche. Il est spécifique à un type d'imprimante." },
          { text: "Il s'obtient après transformation du STL en Gcode dans un slicer (c'est là que Cura by Dagoma intervient). Une fois mis sur une carte SD, il est reconnu par l'imprimante 3D." }
        ]} />
      <Section
        t={t}
        id="road"
        media={{ src: "NevaMagis/Notice/4-c-road.jpg", type: "image" }}
        content={[
          { text: "ROAD", classes: "big-title" },
          { text: "ROAD est une plateforme de téléchargement de fichiers 3D optimisés pour la NEVA et la Magis (ou des fichiers STL pour la DiscoEasy200). Tous les objets de la plateforme ROAD ont été testés et approuvés par Dagoma. L'endroit idéal pour s'inspirer et débuter." },
          { classes: "tleft", link: { href: "//road.dagoma.fr", target: "_blank", classes: "new-btn btn-classic btn-grey btn-wide", text: "Visiter ROAD" } }
        ]} />
      <Section
        t={t}
        id="cura"
        flip={true}
        media={{ src: "NevaMagis/Software/a-cura.jpg", type: "image" }}
        content={[
          { text: "CURA", classes: "big-title" },
          { text: "CURA by Dagoma est un logiciel qui vous permet de transformer en Gcode les fichiers 3D trouvés sur Internet au format STL (compatible également avec : obj, 3mf, amf, ...). Vous pourrez modifier vos paramètres d'impression (taille de la pièce, finition, ...). CURA est un logiciel gratuit et open-source, que Dagoma a simplifié pour optimiser l'utilisation de votre imprimante." },
          { classes: "tleft", link: { href: "//dist.dagoma3d.com/CuraByDagoma", target: "_blank", classes: "new-btn btn-valid btn-wide", text: "Télécharger" } }
        ]} />
      <Section
        t={t}
        id="cura-2"
        media={{ src: "Cura/Notice/d-installation.png", type: "image" }}
        content={[
          { text: "CURA", classes: "big-title" },
          { text: "CURA by Dagoma est un logiciel qui vous permet de transformer en Gcode les fichiers 3D trouvés sur Internet au format STL (compatible également avec : obj, 3mf, amf, ...). Vous pourrez modifier vos paramètres d'impression (taille de la pièce, finition, ...). CURA est un logiciel gratuit et open-source, que Dagoma a simplifié pour optimiser l'utilisation de votre imprimante." },
          { text: "Vous changez d'imprimantes ou vous en avez plusieurs ? Aucun problème, vous pourrez modifier ce choix depuis l'onglet \"Préférences\"." }
        ]} />
      <CuraBlock t={t} />
      <Section
        t={t}
        id="cura-2"
        media={{ id: "my-video-communaute", src: "NevaMagis/Notice/4-f-Cura-pause", type: "video" }}
        content={[
          { text: "Programmer une pause", classes: "big-title" },
          { text: "Cura vous permet de programmer à l'avance des pauses durant l'impression." },
          {
            list: {
              classes: "list-classic tleft-child",
              items: [
                { tag: { name: "p" }, text: "Ouvrez un fichier dans Cura.", classes: "" },
                { tag: { name: "p" }, text: "Appuyez sur le bouton \"Changement(s) de couleur\".", classes: "" },
                { tag: { name: "p" }, text: "Choisissez la couche grâce au slider.", classes: "" },
                { tag: { name: "p" }, text: "Cliquez sur le (+) de \"Ajouter une pause\" : vous verrez s'afficher une nouvelle ligne juste en dessous indiquant le numéro de la couche et la hauteur correspondante.", classes: "" },
                { tag: { name: "p" }, text: "Une fois terminé, appuyez sur \"Préparer l'impression\" pour générer le Gcode.", classes: "" }
              ]
            }
          }
        ]} />
      <Section
        t={t}
        id="pause-2"
        flip={true}
        media={{ src: "NevaMagis/Notice/3-b-copie.jpg", type: "image" }}
        content={[
          { text: "L'intérêt de faire une pause", classes: "big-title" },
          { text: "Programmer une pause a plusieurs intérêts : le changement de couleur, de filament ou l'insertion d'un objet au milieu de l'impression (écrou, aimant, ...)." },
          { text: "Voici le rendu final de la pièce préparée juste au dessus." },
          { text: "Il s'agit d'une partie des pièces imprimées dans", link: { href: "/start/neva-magis/notice-1.html", classes: "link-classic", target: "_blank", text: "la notice de la Magis" } }
        ]} />
      <Title
        t={t}
        content={[
          { text: "Les paramètres d'impression", classes: "big-title" },
          { text: "Concrètement ça donne quoi ?" }
        ]} />
      <Section
        t={t}
        id="qualite"
        media={{ src: "Cura/Notice/g-qualite.jpg", type: "image" }}
        content={[
          { text: "Choisir sa qualité", classes: "big-title" },
          { text: "Nos imprimantes 3D fonctionnent avec la technologie FDM. Elles déposent du plastique chaud couche par couche pour obtenir une pièce." },
          { text: "Plus la hauteur de couche est basse, plus la qualité de la pièce sera haute. Cependant ce paramètre a une forte influence sur le temps d'impression. Il faut donc choisir en fonction de la taille de la pièce, le niveau de détail attendu pour avoir le meilleur compromis." },
          { text: "Nous vous recommandons de commencer par des impressions en 0,2 mm." }
        ]} />
      <Section
        t={t}
        id="remplissage"
        flip={true}
        media={{ src: "Cura/Notice/h-remplissage.jpg", type: "image" }}
        content={[
          { text: "Choisir son remplissage", classes: "big-title" },
          { text: "Cura vous permet de définir le taux de remplissage de la pièce. plusieurs choix sont possibles." },
          { text: "Vase : seule la couche extérieure de votre objet sera imprimée (en spirale). Ce mode ultra rapide est adapté aux objets creux et ouverts sur leur dessus (bref un vase !)." },
          { text: "Creux (0%) : pour une impression sans remplissage et rapide (limite les géométries imprimables, on vous explique ça juste après avec le support)." },
          { text: "Rempli (17%) : pour une impression simple et efficace." },
          { text: "Renforcé (33%) : pour une pièce résistante." },
          { text: "Plus il y a de remplissage plus le temps d'impression augmentera." }
        ]} />
      <Title
        t={t}
        content={[
          { text: "Les autres ajustements", classes: "big-title" },
          { text: "Deux autres paramètres sont disponibles sur Cura, le support et l'amélioration de la surface d'accroche." }
        ]} />
      <Section
        t={t}
        id="support"
        media={{ src: "Cura/Notice/i-support-pourquoi.jpg", type: "image" }}
        content={[
          { text: "Le support, c'est quoi ? ça sert à quoi ?", classes: "big-title" },
          { text: "La gravité (nom de zeus) nous empêche d'imprimer au-dessus du vide. Par conséquent chaque couche d'impression doit donc être supportée par celle du dessous (a minima chevauchée à 50%). Le support soutien donc les parties de la pièce qui se trouvent au-dessus du vide." },
          { text: "Le YHT ci-contre montre les différentes possibilités." },
          { text: "Y : il est possible d'imprimer au dessus du vide tant que l'angle de la surface ne dépasse pas 45°." },
          { text: "H : il est possible d'imprimer entre deux tours (nous appelons ça un bridge). A partir d'une certaine longueur, le bridge ne tiendra pas, Il faudra du support." },
          { text: "T : Sans support il est impossible d'imprimer un surplomb comme les branches du T." }
        ]} />
      <Section
        t={t}
        id="support-2"
        flip={true}
        media={{ src: "Cura/Notice/i-support-avec-sans.jpg", type: "image" }}
        content={[
          { text: "Avec et sans support", classes: "big-title" },
          { text: "L'image ci-contre illustre bien le résultat obtenu lorsqu'un objet aurait dû être imprimé avec support. Le support garantit la réussite d'une impression complexe." },
          { text: "Toute l'ingéniosité d'une pièce bien conçue pour l'impression 3D réside dans l'orientation des géométries évitant au maximum l'utilisation du support." }
        ]} />
      <Section
        t={t}
        id="support-3"
        media={{ src: "Cura/Notice/i-support-post-pro.jpg", type: "image" }}
        content={[
          { text: "Le côté obscur du support", classes: "big-title" },
          { text: "Il n'y a pas que des avantages dans l'utilisation du support. C'est de la matière perdue puisqu'elle ne fait pas partie de la pièce finale. C'est également une opération manuelle supplémentaire pour le retirer. Il laisse une surface grossière qu'il faut parfois gratter et poncer pour obtenir un résultat propre." }
        ]} />
      <Section
        t={t}
        id="warp"
        flip={true}
        media={{ src: "Cura/Notice/j-warp.jpg", type: "image" }}
        content={[
          { text: "Le décollement des pièces", classes: "big-title" },
          { text: "C'est malheureusement un impondérable de l'impression 3D. Selon les géométries, la qualité de la première couche, la qualité des surfaces d'accroches, la pièce peut se décoller. Un décollement partiel comme sur l'image (appelé warping) est gênant puisqu'il a déformé la pièce. Un décollement complet entraîne un échec total de l'impression et peut endommager l'imprimante." },
          { text: "La case à cocher \"Amélioration de la surface d'adhésion\" permet de limiter ce phénomène. Cette option vient ajouter une fine couche tout autour de la pièce et la stabilise sur la surface. Il faudra la retirer à la fin de l'impression." }
        ]} />
      <Section
        t={t}
        id="filaments"
        media={{ src: "Cura/Notice/k-les-filaments.png", type: "image" }}
        content={[
          { text: "Les filaments", classes: "big-title" },
          { text: "Dans Cura, il est nécessaire de choisir le type et la couleur du filament utilisé pour fabriquer votre pièce. Ce choix permet d'ajuster plusieurs paramètres afin d'imprimer la pièce de manière optimale (la température de la buse, la quantité de matière extrudée, la rétractation, etc...)." },
          { text: "Cura by Dagoma a été conçu pour vous éviter de régler tous ces paramètres. Tous les filaments disponibles sur Cura et sur notre site ont été testés et approuvés. Nous ne pouvons pas vous assurer une bonne qualité d'impression avec un filament ne figurant pas dans la liste. L'idéal pour débuter est la gamme de filaments Chromatik que nous vous proposons", link: { href: "https://www.dagoma3d.com/shop/category/filaments-2", classes: "link-classic", target: "_blank", text: "ici" } }
        ]} />
      <Block
        t={t}
        img="Cura/Notice/a-intro.jpg"
        content={[
          { text: "Vous savez tout sur Cura by Dagoma", classes: "big-title tleft", tag: "h1" },
          { text: "Merci d'avoir suivi cette notice. Nous mettons tout en oeuvre pour vous simplifier l'expérience de l'impression 3D avec Dagoma. Pour nous aider à améliorer cette notice, pourriez-vous prendre dix secondes (promis pas plus) pour nous donnez votre avis ?" }
        ]}>
        <Validation t={t} step={step} />
      </Block>
    </Layout >
  );
}

module.exports = CuraByDagoma;
