var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/de200');
const SimpleTitle = require('../../../components/simple-title');
const BasicSection = require('../../../components/basic-section');
const SimpleSection = require('../../../components/simple-section');
const Validation = require('../../../components/validation');
const Media = require('../../../components/media');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={8} nav={nav} />
        <SimpleTitle
          small={true}
          content={[
            { text: "Temps approximatif : 30 minutes", classes: "col-vspace" }
          ]} />
        <BasicSection
          img="DiscoEasy/Notice/10-a-intro.jpg"
          content={[
            { text: "Notice de montage DiscoEasy200 - Page 9 - Câblage", classes: "title tleft", tag: "h1" },
            { text: "Place au câblage", classes: "big-title tleft" },
            { text: "Nous allons maintenant mettre en place la carte de contrôle et y raccorder tous les éléments." }
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "DiscoEasy/Notice/10-b-prerequis.jpg", type: "image" }}
          content={[
            { text: "Les pré-requis", classes: "big-title" },
            {
              list: {
                items: [
                  { text: "1 carte de contrôle" },
                  { text: "1 sachet de câbles" },
                  { text: "1 sachet d'électronique" },
                  { text: "3 vis M3x6 (Il doit en rester 1)" },
                  { text: "1 tournevis plat 3mm (non fourni)" },
                ]
              }
            }
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Notice/10-b-preparation", type: "video" }}
          content={[
            { text: "Étape 1", classes: "title tleft", tag: "h2" },
            { text: "Préparation", classes: "big-title" },
            { text: "Faites monter l’axe X jusqu’à mi-hauteur (ça prend un peu de temps)." },
            { text: "Faites bien monter les 2 chariots en même temps." },
            { text: "Machine face à vous, placez la tête à droite et le plateau en arrière." },
            { text: "Retournez la machine pour avoir accès au dessous." },
            { text: "Posez-la sur la face arrière pour que nous ayons la même référence." },
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "DiscoEasy/Notice/10-c-carte", type: "video" }}
          content={[
            { text: "Étape 2", classes: "title tleft", tag: "h2" },
            { text: "Installation de la carte de contrôle", classes: "big-title" },
            { text: "Sortez la carte du sachet et retirez l’adaptateur branché sur EXP1 et EXP2." },
            { text: "Placez-la avec les connecteur face à vous, en diagonale, le lecteur USB vers la barre transversale regardant vers la face arrière." },
            { text: "Serrez-la à l’aide de deux vis M3x6" },
            { text: "Ne serrez pas trop fort pour éviter d’endommager la carte.", classes: "bold text-red" },
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Notice/10-d-mot-x", type: "video" }}
          content={[
            { text: "Étape 3", classes: "title tleft", tag: "h2" },
            { text: "Câblage du moteur de X", classes: "big-title" },
            { text: "Nous allons commencer par brancher tous les éléments de l’axe X." },
            { text: "Prenez le câble moteur le plus long dans le sachet." },
            { text: "Branchez-le au moteur (pas de soucis de sens, il y a des détrompeurs)." },
            { text: "Faites-le ensuite passer au niveau de la fixation latérale gauche, derrière la barre arrière." },
            { text: "Passez dans la pièce plastique comme sur la vidéo." },
            { text: "Passez ensuite entre la barre inférieure de la base et la pièce plastique grise." },
            { text: "Raccordez-le ensuite sur le connecteur X_MOT." },
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "DiscoEasy/Notice/10-e-butee-x", type: "video" }}
          content={[
            { text: "Étape 4", classes: "title tleft", tag: "h2" },
            { text: "Branchement de la butée de X", classes: "big-title" },
            { text: "Récupérez le câble de la butée de X." },
            { text: "Faites-le suivre le câble du moteur de X." },
            { text: "Raccordez-le ensuite sur le connecteur X+." },
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Notice/10-f-palpeur", type: "video" }}
          content={[
            { text: "Étape 5", classes: "title tleft", tag: "h2" },
            { text: "Branchement du palpeur de la tête", classes: "big-title" },
            { text: "Récupérez le câble du palpeur (le gris)." },
            { text: "Faites-le suivre les câbles du moteur de X et de la butée." },
            { text: "Raccordez-le ensuite sur le connecteur Y+." },
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "DiscoEasy/Notice/10-g-sonde", type: "video" }}
          content={[
            { text: "Étape 6", classes: "title tleft", tag: "h2" },
            { text: "Branchement de la sonde de température", classes: "big-title" },
            { text: "Récupérez le câble de la sonde (le blanc)." },
            { text: "Faites-le suivre les câble déjà en place." },
            { text: "Raccordez-le ensuite sur le connecteur A13." },
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Notice/10-h-cable-tete", type: "video" }}
          content={[
            { text: "Étape 7", classes: "title tleft", tag: "h2" },
            { text: "Branchement des câbles de la tête", classes: "big-title" },
            { text: "Dénudez tous les câbles avant de les brancher." },
            { text: "Récupérez les câbles du ventilateur arrière (celui qui parcourt la tête sur le côté)." },
            { text: "Repérez-les (nous l’avons fait ici avec du scotch)." },
            { text: "Prenez ensuite tous les fils restant et faites-les suivres les autres câbles." },
            { text: "Torsadez le bout pour faciliter leur insertion." },
            { text: "Commencez par les deux gros rouges." },
            { text: "Munissez-vous d’un tournevis plat." },
            { text: "Raccordez les deux fils rouge ou marron sur le bornier E0 (pas de sens entre + et -)." },
            { text: "Prenez ensuite les câbles du ventilateur non repéré (ventilateur avant)." },
            { text: "Raccordez les deux fils sur le bornier E1 (rouge sur + et noire sur -)." },
            { text: "Raccordez les deux derniers fils repérés sur le bornier FAN (rouge sur + et noire sur -)." },
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "DiscoEasy/Notice/10-i-butee-y", type: "video" }}
          content={[
            { text: "Étape 8", classes: "title tleft", tag: "h2" },
            { text: "Branchement de la butée de Y", classes: "big-title" },
            { text: "Récupérez le câble de la butée de Y (sur la face avant)." },
            { text: "Raccordez-le ensuite sur le connecteur X-." },
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Notice/10-j-mot-y", type: "video" }}
          content={[
            { text: "Étape 9", classes: "title tleft", tag: "h2" },
            { text: "Branchement du moteur de Y", classes: "big-title" },
            { text: "Récupérez le câble moteur le plus court." },
            { text: "Raccordez-le ensuite sur le moteur de la face avant puis sur le connecteur Y_MOT." },
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "DiscoEasy/Notice/10-k-mot-z", type: "video" }}
          content={[
            { text: "Étape 10", classes: "title tleft", tag: "h2" },
            { text: "Branchement des moteurs de Z", classes: "big-title" },
            { text: "Récupérez le câble moteur double." },
            { text: "Raccordez-le sur les moteurs de Z en passant entre la barre inférieure et la pièce plastique." },
            { text: "Raccordez-le ensuite sur le connecteur Z_MOT." },
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Notice/10-l-mot-e", type: "video" }}
          content={[
            { text: "Étape 11", classes: "title tleft", tag: "h2" },
            { text: "Branchement du moteur d'extrudeur", classes: "big-title" },
            { text: "Récupérez le dernier câble moteur." },
            { text: "Raccordez-le ensuite sur le moteur d’extrudeur (sur la face arrière) puis sur le connecteur E_MOT." },
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "DiscoEasy/Notice/10-m-interrupteur", type: "video" }}
          content={[
            { text: "Étape 12", classes: "title tleft", tag: "h2" },
            { text: "Installation de l'interrupteur", classes: "big-title" },
            { text: "Clipsez l’interrupteur sur la face avant (le bouton 1 vers le haut de la face avant)." },
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Notice/10-n-alim-positif", type: "video" }}
          content={[
            { text: "Étape 13", classes: "title tleft", tag: "h2" },
            { text: "Branchement de l’alimentation (positive)", classes: "big-title" },
            { text: "Récupérez le câble d’alimentation simple." },
            { text: "Raccordez-le sur le + du bornier d’alimentation de la carte." },
            { text: "Branchez-le ensuite sur le connecteur de l’interrupteur (le plus bas)." },
            { text: "Recouvrez-le avec la protection en plastique." },
            { text: "Si vos câbles d''alimentation sont noirs : branchez le câble avec le liseré blanc sur le pôle + du bornier de la carte.", classes: "bold text-red" },
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "DiscoEasy/Notice/10-o-alim-negatif", type: "video" }}
          content={[
            { text: "Étape 14", classes: "title tleft", tag: "h2" },
            { text: "Branchement de l'alimentation (négative)", classes: "big-title" },
            { text: "Récupérez le câble d'alimentation double avec le connecteur d'alimentation." },
            { text: "Dénudez le fil seul." },
            { text: "Raccordez-le sur le - du bornier d'alimentation de la carte." },
            { text: "Branchez ensuite l'autre bout sur le connecteur de l'interrupteur." },
            { text: "Recouvrez-le avec la protection en plastique." },
            { text: "Rentrez le connecteur d'alimentation de biais dans la pièce plastique arrière gauche prévue à cet effet. Poussez dessus pour le clipser." },
            { text: "Astuce : Présentez-le de biais, poussez-le au fond et ensuite poussez vers le bas pour l'enclencher).", classes: "italic bg-light-grey-blue" },
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Notice/10-p-lecteur-sd", type: "video" }}
          content={[
            { text: "Étape 15", classes: "title tleft", tag: "h2" },
            { text: "Installation du lecteur SD", classes: "big-title" },
            { text: "Récupérez le lecteur SD dans son sachet." },
            { text: "Machine à plat, installez-le dans le cache côté avant gauche, les pins vers le haut." },
            { text: "Bridez-le à l'aide d'une vis M3x6." },
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "DiscoEasy/Notice/10-q-nappe-sd", type: "video" }}
          content={[
            { text: "Étape 16", classes: "title tleft", tag: "h2" },
            { text: "Branchement de la nappe SD", classes: "big-title" },
            { text: "Prenez la nappe de lecteur SD." },
            { text: "Orientez-la, cordon rose vers la face avant, les connecteurs vers le bas.", classes: "bold" },
            { text: "Passez la nappe sous la courroie et branchez-la sur le lecteur SD." },
            { text: "Récupérez l'adaptateur retiré de la carte à l'étape 1." },
            { text: "Branchez la nappe dessus (il y a un détrompeur pour le sens)." },
            { text: "Remettez l'adaptateur sur la carte comme sur la vidéo." },
            { text: "Attention, assurez-vous que l'adaptateur est bien centré sur le connecteur de la carte et que toutes les pins sont enclenchées.", classes: "italic bg-light-grey-blue" },
          ]} />
        <BasicSection
          img="DiscoEasy/Notice/10-s-fin.jpg"
          content={[
            { text: "Cablâge : CHECK !", classes: "big-title" },
            { text: "Prochaine étape : les finitions." },
          ]}>
          <Validation step="/printer/de200/notice-finitions" />
        </BasicSection>
      </Layout>
    );
  }
}

module.exports = Printer;