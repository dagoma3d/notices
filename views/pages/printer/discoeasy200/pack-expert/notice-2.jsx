var React = require('react');
var Layout = require('../../../../layouts/default');
var NavBar = require('../../../../components/navbar');
var nav = require("../../../../../content/nav/expert");
const Title = require('../../../../components/title');
const Block = require('../../../../components/block');
const Section = require('../../../../components/section');
const Validation = require('../../../../components/validation');
const Media = require('../../../../components/media');

function PackExpert(props) {
  return (
    <Layout>
      <NavBar active={1} nav={nav} />
      <Title
        small={true}
        content={[
          { text: "Temps approximatif : 30 minutes", classes: "col-vspace" }
        ]} />
      <Block
        img="DiscoEasy/Add-on/Trapezoidales/2-a-intro.jpg"
        content={[
          { text: "Notice de montage pack expert - Transfert des composants", classes: "title tleft", tag: "h1" },
          { text: "Transfert des composants", classes: "big-title tleft" },
          { text: "Nous allons transférer certains composants de votre ancienne imprimante dans les nouvelles pièces imprimées." }
        ]} />
      <Section
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/2-b-roulements-xd", type: "video" }}
        content={[
          { text: "Etape 1", classes: "title tleft", tag: "h2" },
          { text: "Récupération des roulements de courroie", classes: "big-title" },
          { text: "Prenez le chariot droit de l’axe X." },
          { text: "Dévissez la vis qui maintient les 2 roulements de courroie." },
          { text: "Mettez l’ancienne pièce de côté." },
          { text: "Installez les roulements dans la nouvelle pièce en vous aidant de l’outil imprimé." }
        ]} />
      <Section
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/2-c-mot-butee-x", type: "video" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h2" },
          { text: "Récupération du moteur de X et de la butée", classes: "big-title" },
          { text: "Prenez le chariot gauche de l’axe X." },
          { text: "Retirez les vis qui tiennent le moteur." },
          { text: "Retirez le moteur." },
          { text: "Retirez la butée et remontez-la dans la nouvelle pièce (attention à l’orientation de la languette)." },
          { text: "Mettez le moteur en place dans la nouvelle pièce (respectez la même orientation)." },
          { text: "Revissez-le (aidez-vous de l’outil imprimé pour placer la dernière vis)." }
        ]} />
      <Section
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/2-d-deverrouillage-tete", type: "video" }}
        content={[
          { text: "Etape 3", classes: "title tleft", tag: "h2" },
          { text: "Déverrouillage de la tête d’impression", classes: "big-title" },
          { text: "Retirez les deux vis sur le côté de la tête." },
          { text: "Retirez le verrou qui maintient la buse." },
          { text: "Retirez ensuite la vis de l’autre côté." },
          { text: "Coupez le collier de fixation qui maintient les câbles." }
        ]} />
      <Section
        flip={true}
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/2-e-composant-tete", type: "video" }}
        content={[
          { text: "Étape 4", classes: "title tleft", tag: "h2" },
          { text: "Démontage de la tête d’impression", classes: "big-title" },
          { text: "Retirez chacun des composants avec soin.", classes: "italic" },
          { text: "Retirez les câbles du ventilateur arrière et placez-y un repère pour le remontage." },
          { text: "Retirez les deux ventilateurs." },
          { text: "Retirez la buse à l’aide d’un tournevis plat pour faire levier." },
          { text: "Retirez le palpeur." },
        ]} />
      <Section
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/2-f-palpeur", type: "video" }}
        content={[
          { text: "Étape 5", classes: "title tleft", tag: "h2" },
          { text: "Remontage du palpeur", classes: "big-title" },
          { text: "Prenez la nouvelle pièce imprimée." },
          { text: "Placez la vis du palpeur dans son emplacement (la plus courte des 3 vis de la tête)." },
          { text: "Vissez-la pour qu’elle arrive à fleur dans l’emplacement du palpeur." },
          { text: "Positionnez le palpeur au plus bas en butée." },
          { text: "Serrez légèrement la vis pour le maintenir en place." },
        ]} />
      <Section
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/2-g-buse", type: "video" }}
        content={[
          { text: "Étape 6", classes: "title tleft", tag: "h2" },
          { text: "Remontage de la buse", classes: "big-title" },
          { text: "Prenez la buse et orientez-la pour que les câbles en sortie soient orientés vers le ventilateur avant (à l’opposé du palpeur)." },
          { text: "Enfoncez-la dans son logement comme sur la vidéo." },
          { text: "Assurez-vous qu'elle soit bien enfoncée et bien droite." },
          { text: "Attention, le bloc de chauffe (la partie carrée) ne doit pas toucher le plastique.", classes: "col-space color-orange" }
        ]} />
      <Section
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/2-h-ventilo", type: "video" }}
        content={[
          { text: "Étape 7", classes: "title tleft", tag: "h2" },
          { text: "Remontage des ventilateurs", classes: "big-title" },
          { text: "Prenez le ventilateur avant." },
          { text: "Orientez l’étiquette du côté de la buse, elle ne doit pas être visible de l’extérieur." },
          { text: "Placez également la sortie des câbles vers vous." },
          { text: "Poussez le pour le rentrer dans son logement." },
          { text: "Faire de même pour le ventilateur arrière et retirez son repérage." },
        ]} />
      <Section
        media={{ src: "DiscoEasy/Add-on/Trapezoidales/2-i-verrouillage-tete", type: "video" }}
        content={[
          { text: "Étape 8", classes: "title tleft", tag: "h2" },
          { text: "Reverrouillage de la tête", classes: "big-title" },
          { text: "Faites une petite boucle avec le câble du ventilateur avant." },
          { text: "Récupérez le verrou et faites passer les câbles comme sur la vidéo." },
          { text: "Clipsez-le sans pincer les câbles (risque de court-circuit).", classes: "bold text-red" },
          { text: "Revissez le fermement." },
          { text: "Faites passer les câbles du ventilateur arrière dans leur logement." },
          { text: "Récupérez la gaine, posez-la dans le passage arrière, puis maintenez-la à l’aide d’un collier de serrage." },
          { text: "Ne serrez pas trop fort pour éviter d'abîmer les câbles.", classes: "italic" }
        ]} />
      <Block
        img="DiscoEasy/Add-on/Trapezoidales/2-j-fin.jpg"
        content={[
          { text: "Transfert des composants : CHECK !", classes: "big-title" }
        ]}>
        <Validation step="/addon/expert/de200/notice-3" text="Je valide et je passe à la suite !" />
      </Block>
    </Layout>
  );
}

module.exports = PackExpert;