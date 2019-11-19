var React = require('react');
var Layout = require('../../../../layouts/default');
const SimpleTitle = require('../../../../components/simple-title');
const BasicSection = require('../../../../components/basic-section');
const SimpleSection = require('../../../../components/simple-section');
const Validation = require('../../../../components/validation');
const Media = require('../../../../components/media');

function Extruder(props) {
  return (
    <Layout>
      <SimpleTitle
        small={true}
        content={[
          { text: "Temps approximatif : 15 minutes", classes: "col-vspace" }
        ]} />
      <BasicSection
        img="DiscoEasy/Add-on/ExtrudeurPlus/A-a-intro.jpg"
        content={[
          { text: "Notice - Montage", classes: "title tleft", tag: "h1" },
          { text: "ça y est, vous avez reçu votre Extrudeur+.", classes: "big-title tleft" },
          { text: "Nous allons vous accompagner dans le montage et l’utilisation de cette amélioration pour votre DiscoEasy200." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoEasy/Add-on/ExtrudeurPlus/A-c-contenu.jpg", type: "image" }}
        content={[
          { text: "Dans ce carton vous avez trouvé...", classes: "big-title tleft", tag: "h2" },
          {
            list: {
              tag: "ol",
              items: [
                { text: "Un nouveau cache côté intégrant un bouton" },
                { text: "Un extrudeur+" },
                { text: "Un bras d'extrudeur+" },
                { text: "Deux colliers de fixation" }
              ]
            }
          }
        ]} />
      <SimpleSection
        media={{ src: "DiscoEasy/Add-on/ExtrudeurPlus/A-c-prerequis-extru-plus.jpg", type: "image" }}
        content={[
          { text: "Les pré-requis", classes: "big-title tleft", tag: "h2" },
          {
            list: {
              tag: "ol",
              items: [
                { text: "Il vous faut une DiscoEasy200" },
                { text: "Un pack extrudeur+" },
                { text: "Un tournevis hex 2.5mm (fourni dans le kit DiscoEasy200)" }
              ]
            }
          }
        ]} />
      <SimpleTitle
        content={[
          { text: "Place au montage", classes: "big-title" }
        ]} />
      <SimpleSection
        media={{ src: "DiscoEasy/Add-on/ExtrudeurPlus/A-e-demontage-extrudeur", type: "video" }}
        content={[
          { text: "Etape 1", classes: "title tleft", tag: "h2" },
          { text: "Démontage de l’extrudeur", classes: "big-title" },
          { text: "Commencez par retirer le tube blanc en appuyant sur la collerette noire." },
          { text: "En maintenant le bras d’extrudeur enfoncé, retirez les 3 vis qui maintiennent l’extrudeur." },
          { text: "Retirez ensuite l’ensemble." },
          { text: "Conservez le ressort et les vis, ils vont vite reprendre du service." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoEasy/Add-on/ExtrudeurPlus/A-f-montage-bras-extrudeur", type: "video" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h2" },
          { text: "Montage du bras d’extrudeur", classes: "big-title" },
          { text: "Placez le ressort dans l'empreinte sur le corps de l’extrudeur." },
          { text: "Prenez le bras, placez le pour que le ressort soit pris dans la seconde empreinte." },
          { text: "Comprimez le ressort pour que le bras rentre dans l’encoche." },
          { text: "Déplacez le bras pour que le trou de vis soit aligné avec celui du corps." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoEasy/Add-on/ExtrudeurPlus/A-g-montage-extrudeur-plus", type: "video" }}
        content={[
          { text: "Etape 3", classes: "title tleft", tag: "h2" },
          { text: "Montage de l’extrudeur+", classes: "big-title" },
          { text: "Placez les vis de l’ancien extrudeur sur le nouveau." },
          { text: "Faites passer le câble dans le trou en haut à gauche." },
          { text: "Présentez l’extrudeur en face du moteur." },
          { text: "Vissez-le fermement en maintenant le moteur." },
          { text: "Assurez-vous que le bras d’extrudeur bouge encore après serrage. (Voir vidéo)" },
          { text: "Rebranchez le tube blanc sur le nouvel extrudeur. Enfoncez-le d'environ 15mm." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoEasy/Add-on/ExtrudeurPlus/A-h-montage-cache", type: "video" }}
        content={[
          { text: "Étape 4", classes: "title tleft", tag: "h2" },
          { text: "Montage du cache côté", classes: "big-title" },
          { text: "Retirez l’ancien cache côté." },
          { text: "Faites passer les câbles entre les deux barres." },
          { text: "Glissez-le cache côté en appuyant sur la pièce centrale." },
          { text: "Clipsez-le ensuite sur la barre du bas." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoEasy/Add-on/ExtrudeurPlus/A-j-cablage", type: "video" }}
        content={[
          { text: "Étape 5", classes: "title tleft", tag: "h2" },
          { text: "Câblage", classes: "big-title" },
          { text: "Posez votre DiscoEasy200 sur sa face avant pour accéder au câblage." },
          { text: "Connectez ensuite les câbles sur la carte." },
          { text: "Branchez le câble de l’extrudeur sur le plot Z+." },
          { text: "Branchez le câble du cache côté sur le plot Z-." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoEasy/Add-on/ExtrudeurPlus/A-k-finition", type: "video" }}
        content={[
          { text: "Étape 6", classes: "title tleft", tag: "h2" },
          { text: "Finition", classes: "big-title" },
          { text: "Utilisez les colliers pour fixer proprement les câbles sous la machine." },
          { text: "Vos anciennes pièces ne serviront plus, pensez au recyclage." }
        ]} />
      <BasicSection
        img="DiscoEasy/Add-on/ExtrudeurPlus/A-a-intro.jpg"
        content={[
          { text: "Montage de l'extrudeur+ : CHECK !", classes: "big-title" }
        ]}>
        <Validation step="/addon/extruder-plus/de200/utilisation" text="Je valide et je passe à la suite !" />
      </BasicSection>
    </Layout>
  );
}

module.exports = Extruder;
