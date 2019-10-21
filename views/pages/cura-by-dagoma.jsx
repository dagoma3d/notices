var React = require('react');
var Layout = require('../layouts/default');
var SimpleSection = require('../components/simple-section');
var BasicSection = require('../components/basic-section');
var SimpleTitle = require('../components/simple-title');
const NavBar = require('../components/navbars/magis');

class CuraByDagoma extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
        <NavBar active={this.props.active} nav={this.props.nav} />
        <BasicSection
          img="Cura/Notice/a-intro.jpg"
          content={[
            { text: "Notice d'utilisation du logiciel Cura", classes: "title tleft", tag: "h1" },
            { text: "Cura, Slicer, … On vous explique tout !", classes: "big-title tleft" },
            { text: "Ajustez la taille, la qualité ou le remplissage et maîtrisez la personnalisation de vos objets 3D à l’aide du logiciel Cura by Dagoma." },
            { text: "Dans ce tutoriel, vous découvrirez en quoi consiste ce logiciel." }
          ]} />
        <SimpleSection
          id="formats"
          flip={true}
          media={{ src: "Cura/Notice/b-stl-gcode.jpg", type: "image" }}
          content={[
            { text: "Quels sont les formats utilisés ?", classes: "big-title" },
            { text: "Le STL est à l’impression 3D ce que le MP3 est à la musique, ou le JPEG à la photo." },
            { text: "La plupart des logiciels de modélisation 3D permettent l’export des fichiers en STL." },
            { text: "Cependant, ce format est une coquille vide pour votre imprimante. Elle ne saura pas s’en servir." },
            { text: "Le Gcode est une suite d’instructions pour faire fonctionner votre imprimante 3D. Ces instructions représentent l’ensemble des trajectoires que va parcourir la tête d’impression, couche par couche. Il est spécifique à un type d'imprimante." },
            { text: "Il s’obtient après transformation du STL en Gcode dans un slicer (c’est là que Cura by Dagoma intervient). Une fois mis sur une carte SD, il est reconnu par l’imprimante 3D." }
          ]} />
        <SimpleSection
          id="road"
          media={{ src: "NevaMagis/Notice/4-c-road.jpg", type: "image" }}
          content={[
            { text: "ROAD", classes: "big-title" },
            { text: "ROAD est une plateforme de téléchargement de fichiers 3D optimisés pour la NEVA et la Magis (ou des fichiers STL pour la DiscoEasy200). Tous les objets de la plateforme ROAD ont été testés et approuvés par Dagoma. L’endroit idéal pour s’inspirer et débuter." }
          ]}>
          <p className="tleft">
            <a href="https://road.dagoma.fr/" target="_blank" className="new-btn btn-classic btn-grey btn-wide">Visiter ROAD</a>
          </p>
        </SimpleSection>
        <SimpleSection
          id="cura"
          flip={true}
          media={{ src: "NevaMagis/Software/a-cura.jpg", type: "image" }}
          content={[
            { text: "CURA", classes: "big-title" },
            { text: "CURA by Dagoma est un logiciel qui vous permet de transformer en Gcode les fichiers 3D trouvés sur Internet au format STL (compatible également avec : obj, 3mf, amf, …). Vous pourrez modifier vos paramètres d’impression (taille de la pièce, finition, …). CURA est un logiciel gratuit et open-source, que Dagoma a simplifié pour optimiser l’utilisation de votre imprimante." }
          ]}>
          <p className="tleft">
            <a href="https://dist.dagoma3d.com/CuraByDagoma" target="_blank" className="new-btn btn-valid btn-wide">Télécharger</a>
          </p>
        </SimpleSection>
        <SimpleSection
          id="cura-2"
          media={{ src: "Cura/Notice/d-installation.png", type: "image" }}
          content={[
            { text: "CURA", classes: "big-title" },
            { text: "CURA by Dagoma est un logiciel qui vous permet de transformer en Gcode les fichiers 3D trouvés sur Internet au format STL (compatible également avec : obj, 3mf, amf, …). Vous pourrez modifier vos paramètres d’impression (taille de la pièce, finition, …). CURA est un logiciel gratuit et open-source, que Dagoma a simplifié pour optimiser l’utilisation de votre imprimante." },
            { text: "Vous changez d’imprimantes ou vous en avez plusieurs ? Aucun problème, vous pourrez modifier ce choix depuis l’onglet “Préférences”." }
          ]} />
        <section id="cura-full" className="col-xl-24 block-big-white-space bg-gradient-orange row">
          <div className="wrap row margin-bottom-shop">
            <div className="col-xl-24 row container-interface">
              <img src="/medias/Cura/Notice/e-interface-cura.jpg" />
              <div className="mask"></div>
              <div className="zone" data-top="12%" data-left="3.5%" data-name="Ouvrir des fichiers">
                Accès rapide pour ouvrir un nouveau fichier STL. Vous pouvez aussi ouvrir plusieurs fichiers sur un même plateau.
                </div>
              <div className="zone" data-top="2%" data-left="15.7%" data-name="Fichier">
                Depuis l’onglet “Fichier” , ouvrez un nouveau fichier STL, sauvegardez le contenu de vos plateaux pour une prochaine impression, transformez votre STL en Gcode, et accédez aux objets récemment ouverts.
                </div>
              <div className="zone" data-top="2%" data-left="22%" data-name="Préférences">
                Depuis l’onglet “Préférences”, changez la langue du logiciel (prise en compte à la prochaine ouverture du logiciel) ou de modèle d’imprimante 3D Dagoma.
                </div>
              <div className="zone zone-big" data-top="52%" data-left="37.5%" data-name="Mon objet">
                Cette zone représente le volume d’impression de votre imprimante. L’objet ouvert apparaîtra en gris s’il dépasse du volume d’impression. Vous pouvez dupliquer cet objet ou en ouvrir d’autres pour remplir votre plateau.
                </div>
              <div className="zone zone-medium" data-top="47.5%" data-left="50.5%" data-name="Clic droit">
                Avec le clic droit sur un objet, un sous-menu s’affiche :
                    <ul className="list-classic tleft-child">
                  <li>Centrer l’objet sur le plateau</li>
                  <li>Supprimer l’objet</li>
                  <li>Multiplier l’objet</li>
                  <li>Diviser l’objet en plusieurs parties</li>
                </ul>
              </div>
              <div className="zone" data-top="12%" data-left="71.5%" data-name="Mode couches">
                Ici, vous pouvez accéder à un autre mode de visualisation. Passez en mode couches permet de voir le travail réel de l’imprimante, le remplissage et les trajectoires par exemple.
                </div>
              <div className="zone zone-medium" data-top="11%" data-left="87%" data-name="Sélection de couleurs">
                Choisissez ici la marque du filament que vous utilisez dans “PLA Chromatik” ainsi que sa couleur dans “Générique”. Sachez que tous les filaments dans la liste ont été testés. Si vous utilisez un autre filament que ceux présents dans la liste, il se peut que l’impression échoue.
                </div>
              <div className="zone zone-big" data-top="36%" data-left="87%" data-name="Paramètres d'impression">
                Choisissez ici les paramètres de l’impression, le remplissage et la qualité (plus bas nous allons expliquer tout ça).
                </div>
              <div className="zone zone-medium" data-top="57.5%" data-left="87.5%" data-name="Supports pour impression">
                Ici d’autres paramètres plus spécifiques. Ce sont des ajouts à faire en fonction de la forme de l’objet. Nous expliquerons plus bas ces éléments.
                </div>
              <div className="zone" data-top="66.5%" data-left="82%" data-name="Changement(s) de couleur">
                Avec ce bouton vous pouvez paramétrer un changement de filament. Juste en dessous vous avez une vidéo qui montre la programmation d’une pause.
                </div>
              <div className="zone" data-top="70%" data-left="93%" data-name="Préparer l'impression">
                En cliquant sur “Préparer l’impression” vous allez valider votre préparation. Si une carte SD est déjà dans le lecteur, le fichier s'enregistre directement dessus. <br />Sinon, une boîte de dialogue s’ouvre pour choisir l’emplacement d’enregistrement. <br />Le fichier s’enregistre sous le nom “dagoma0.g” c’est le seul nom de fichier qui permet de démarrer une impression.
                </div>
              <div className="zone zone-medium" data-top="91%" data-left="69%" data-name="Informations">
                Toutes les informations pratiques se trouvent ici. Le temps d’impression est estimé, il peut varier.
                </div>
              <div className="zone" data-top="91%" data-left="3.5%" data-name="Orientation">
                Ce bouton apparaît uniquement si un objet est sélectionné. Il permet de modifier l’orientation de la pièce. Des anneaux sont apparus autour de la pièce pour la manoeuvrer. Par défaut, la pièce bougera par pas de 15° (pour plus de précision appuyez sur ⇧SHIFT en bougeant la pièce).
                </div>
              <div className="zone" data-top="91%" data-left="8.5%" data-name="Dimensions">
                Ce bouton apparaît uniquement si un objet est sélectionné. Il permet de changer la taille de la pièce. Décochez le verrou pour modifier une dimension dans un axe uniquement.
                </div>
              <div className="zone" data-top="91%" data-left="13.5%" data-name="Symétrie">
                Ce bouton apparaît uniquement si un objet est sélectionné. Il sert à symétriser. Si vous vous posez la question, oui ça sert à quelque chose.
                </div>
            </div>
            <div className="buttons-container">
            </div>
          </div>
        </section>
        <SimpleSection
          id="cura-2"
          media={{ id: "my-video-communaute", src: "NevaMagis/Notice/4-f-Cura-pause", type: "video" }}
          content={[
            { text: "Programmer une pause", classes: "big-title" },
            { text: "Cura vous permet de programmer à l’avance des pauses durant l’impression." }
          ]}>
          <ul className="list-classic tleft-child">
            <li><p>Ouvrez un fichier dans Cura.</p></li>
            <li><p>Appuyez sur le bouton “Changement(s) de couleur”.</p></li>
            <li><p>Choisissez la couche grâce au slider.</p></li>
            <li><p>Cliquez sur le (+) de “Ajouter une pause” : vous verrez s’afficher une nouvelle ligne juste en dessous indiquant le numéro de la couche et la hauteur correspondante.</p></li>
            <li><p>Une fois terminé, appuyez sur “Préparer l’impression” pour générer le Gcode.</p></li>
          </ul>
        </SimpleSection>
        <SimpleSection
          id="pause-2"
          flip={true}
          media={{ src: "NevaMagis/Notice/3-b-copie.jpg", type: "image" }}
          content={[
            { text: "L’intérêt de faire une pause", classes: "big-title" },
            { text: "Programmer une pause a plusieurs intérêts : le changement de couleur, de filament ou l’insertion d’un objet au milieu de l’impression (écrou, aimant, …)." },
            { text: "Voici le rendu final de la pièce préparée juste au dessus." }
          ]}>
          <p>Il s’agit d’une partie des pièces imprimées dans <a href="/start/neva-magis/notice-1.html" className="link-classic" target="_blank">la notice de la Magis</a>.</p>
        </SimpleSection>
        <SimpleTitle
          content={[
            { text: "Les paramètres d’impression", classes: "big-title" },
            { text: "Concrètement ça donne quoi ?" }
          ]} />
        <SimpleSection
          id="qualite"
          media={{ src: "Cura/Notice/g-qualite.jpg", type: "image" }}
          content={[
            { text: "Choisir sa qualité", classes: "big-title" },
            { text: "Nos imprimantes 3D fonctionnent avec la technologie FDM. Elles déposent du plastique chaud couche par couche pour obtenir une pièce." },
            { text: "Plus la hauteur de couche est basse, plus la qualité de la pièce sera haute. Cependant ce paramètre a une forte influence sur le temps d’impression. Il faut donc choisir en fonction de la taille de la pièce, le niveau de détail attendu pour avoir le meilleur compromis." },
            { text: "Nous vous recommandons de commencer par des impressions en 0,2 mm." }
          ]} />
        <SimpleSection
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
            { text: "Plus il y a de remplissage plus le temps d’impression augmentera." }
          ]} />
        <SimpleTitle
          content={[
            { text: "Les autres ajustements", classes: "big-title" },
            { text: "Deux autres paramètres sont disponibles sur Cura, le support et l’amélioration de la surface d’accroche." }
          ]} />
        <SimpleSection
          id="support"
          media={{ src: "Cura/Notice/i-support-pourquoi.jpg", type: "image" }}
          content={[
            { text: "Le support, c’est quoi ? ça sert à quoi ?", classes: "big-title" },
            { text: "La gravité (nom de zeus) nous empêche d’imprimer au-dessus du vide. Par conséquent chaque couche d’impression doit donc être supportée par celle du dessous (a minima chevauchée à 50%). Le support soutien donc les parties de la pièce qui se trouvent au-dessus du vide." },
            { text: "Le YHT ci-contre montre les différentes possibilités." },
            { text: "Y : il est possible d’imprimer au dessus du vide tant que l’angle de la surface ne dépasse pas 45°." },
            { text: "H : il est possible d’imprimer entre deux tours (nous appelons ça un bridge). A partir d’une certaine longueur, le bridge ne tiendra pas, Il faudra du support." },
            { text: "T : Sans support il est impossible d’imprimer un surplomb comme les branches du T." }
          ]} />
        <SimpleSection
          id="support-2"
          flip={true}
          media={{ src: "Cura/Notice/i-support-avec-sans.jpg", type: "image" }}
          content={[
            { text: "Avec et sans support", classes: "big-title" },
            { text: "L’image ci-contre illustre bien le résultat obtenu lorsqu’un objet aurait dû être imprimé avec support. Le support garantit la réussite d’une impression complexe." },
            { text: "Toute l’ingéniosité d’une pièce bien conçue pour l’impression 3D réside dans l’orientation des géométries évitant au maximum l’utilisation du support." }
          ]} />
        <SimpleSection
          id="support-3"
          media={{ src: "Cura/Notice/i-support-post-pro.jpg", type: "image" }}
          content={[
            { text: "Le côté obscur du support", classes: "big-title" },
            { text: "Il n’y a pas que des avantages dans l’utilisation du support. C’est de la matière perdue puisqu’elle ne fait pas partie de la pièce finale. C’est également une opération manuelle supplémentaire pour le retirer. Il laisse une surface grossière qu’il faut parfois gratter et poncer pour obtenir un résultat propre." }
          ]} />
        <SimpleSection
          id="warp"
          flip={true}
          media={{ src: "Cura/Notice/j-warp.jpg", type: "image" }}
          content={[
            { text: "Le décollement des pièces", classes: "big-title" },
            { text: "C’est malheureusement un impondérable de l’impression 3D. Selon les géométries, la qualité de la première couche, la qualité des surfaces d’accroches, la pièce peut se décoller. Un décollement partiel comme sur l’image (appelé warping) est gênant puisqu’il a déformé la pièce. Un décollement complet entraîne un échec total de l’impression et peut endommager l’imprimante." },
            { text: "La case à cocher “Amélioration de la surface d’adhésion” permet de limiter ce phénomène. Cette option vient ajouter une fine couche tout autour de la pièce et la stabilise sur la surface. Il faudra la retirer à la fin de l’impression." }
          ]} />
        <SimpleSection
          id="filaments"
          media={{ src: "Cura/Notice/k-les-filaments.png", type: "image" }}
          content={[
            { text: "Les filaments", classes: "big-title" },
            { text: "Dans Cura, il est nécessaire de choisir le type et la couleur du filament utilisé pour fabriquer votre pièce. Ce choix permet d’ajuster plusieurs paramètres afin d’imprimer la pièce de manière optimale (la température de la buse, la quantité de matière extrudée, la rétractation, etc…)." }
          ]}>
          <p>
            Cura by Dagoma a été conçu pour vous éviter de régler tous ces paramètres.
            Tous les filaments disponibles sur Cura et sur notre site ont été testés et approuvés.
            Nous ne pouvons pas vous assurer une bonne qualité d’impression avec un filament ne figurant pas dans la liste.
            L’idéal pour débuter est la gamme de filaments Chromatik que nous vous proposons <a href="/boutique/filaments.html" className="link-classic" target="_blank">ici.</a>
          </p>
        </SimpleSection>
        <BasicSection
          img="Cura/Notice/a-intro.jpg"
          content={[
            { text: "Vous savez tout sur Cura by Dagoma", classes: "big-title tleft", tag: "h1" },
            { text: "Merci d’avoir suivi cette notice. Nous mettons tout en oeuvre pour vous simplifier l’expérience de l’impression 3D avec Dagoma. Pour nous aider à améliorer cette notice, pourriez-vous prendre dix secondes (promis pas plus) pour nous donnez votre avis ?" }
          ]} />
      </Layout>
    );
  }
}

module.exports = CuraByDagoma;
