const React = require('react');

function CuraBlock(props) {
  return (
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
  );
}

module.exports = CuraBlock;