const React = require('react');
const Layout = require('../../../layouts/default');
const Navbar = require('../../../components/navbar');
const nav = require('../../../../content/nav/box');
const Title = require('../../../components/title');
const Block = require('../../../components/block');
const Section = require('../../../components/section');
const Validation = require('../../../components/validation');

function Box(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <Navbar t={t} active={1} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps approximatif : 20 min", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="NevaMagis/Notice/Addons/Caisson/2-a-intro.jpg"
        content={[
          { text: "Notice de montage caisson Magis - assemblage du caisson", classes: "title tleft", tag: "h1" },
          { text: "Assemblage du caisson de protection", classes: "big-title tleft" },
          { text: "Nous allons assembler le caisson de protection qui entourera votre imprimante 3D." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "7asohpm9Y_A", type: "yt" }}
        content={[
          { text: "Préparation de la vitre", classes: "big-title tleft", tag: "h2" },
          { text: "La vitre vous a été livrée à plat. Nous allons fixer les bouts pour former un tube." },
          {
            list: {
              tag: "ol",
              items: [
                { text: "Retirez partiellement les films protecteurs de chaque face sur les deux bouts." },
                { text: "Repliez les deux bords, entrelacez les encoches pour qu'elles se prennent les unes dans les autres. Relâchez en vous assurant que chaque encoche est bien enclenchée." },
                { text: "Tirez de part et d'autre de la couture pour verrouiller le tout." },
              ]
            }
          }
        ]} />
      <Section
        t={t}
        media={{ id: "k8Zf0oeg_f0", type: "yt" }}
        content={[
          { text: "Serrage de la vitre", classes: "big-title tleft", tag: "h2" },
          { text: "Tirez de part et d'autre de la couture pour la serrer." },
          { text: "Recommencez de l'autre côté." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-c-montage-guide-sup-ar-prepa.jpg", type: "image" }}
        content={[
          { text: "Préparation des cerclages supérieurs", classes: "big-title tleft", tag: "h2" },
          { text: "Disposez les 3 premiers cerclages comme indiqué sur l'image." }
        ]} />
      <Section
        t={t}
        media={{ id: "09mqSkudGZ8", type: "yt" }}
        content={[
          { text: "Montage du cerclage arrière supérieur", classes: "big-title tleft", tag: "h2" },
          { text: "L'arrière du caisson est représenté par la couture. Le bas du caisson présente des encoches comme sur la vidéo." },
          { text: "Placez vous du côté sans encoche. Récupérez le cerclage supérieur arrière." },
          { text: "Appuyez sur le caisson pour le plier, enclenchez le cerclage dans trous prévu à cet effet et relâchez pour le bloquer. Tous les ergots doivent entrer dans les trous sur la vitre." },
          { text: "Ensuite, prenez 2 élastiques et installez les autours des 2 ergots arrières." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-c-montage-guide-sup-ar-control.jpg", type: "image" }}
        content={[
          { text: "Vérification", classes: "big-title tleft", tag: "h2" },
          { text: "L'ergot doit être centré dans le trou de la vitre. Tirez sur la vitre pour l'aligner." }
        ]} />
      <Section
        t={t}
        media={{ id: "KnO79In9AL4", type: "yt" }}
        content={[
          { text: "Montage des cerclages avant supérieur", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez 2 cerclages avant. Pincez la vitre pour la plier au milieu des deux trous comme sur la vidéo et installez le premier cerclage. Orientez le pour compléter l'encoche présente sur le cerclage arrière." },
          { text: "Prenez 3 élastique et verrouillez les 3 ergots disponibles." },
          { text: "Faites de même avec le second cerclage. Cette fois ci, il faudra 4 élastiques." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-d-montage-guide-sup-av-control.jpg", type: "image" }}
        content={[
          { text: "Vérification", classes: "big-title tleft", tag: "h2" },
          { text: "Assurez-vous d'obtenir la même chose que sur la photo. La vitre doit bien suivre le cerclage." }
        ]} />

      <Section
        t={t}
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-e-montage-guide-inf-ar-prepa.jpg", type: "image" }}
        content={[
          { text: "Préparation des cerclages inférieurs", classes: "big-title tleft", tag: "h2" },
          { text: "Disposez les 3 premiers cerclages comme indiqué sur l'image." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "WMMHlas7r30", type: "yt" }}
        content={[
          { text: "Montage du cerclage arrière inférieur", classes: "big-title tleft", tag: "h2" },
          { text: "Retournez le caisson pour installer le prochain cerclage. Prenez le cerclage inférieur arrière. Pliez le caisson au niveau de la couture et placez les ergots dans les trous." },
          { text: "Récupérez 2 élastiques pour verrouiller les ergots disponibles." }
        ]} />
      <Section
        t={t}
        media={{ id: "36G_2rFRBiM", type: "yt" }}
        content={[
          { text: "Montage des cerclages avant inférieur", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez les 2 derniers cerclages. Pincez la vitre pour la plier au milieu des deux trous comme sur la vidéo et installez le premier cerclage. Orientez le pour compléter l'encoche présente sur le cerclage arrière. Faites de même avec le second cerclage." },
          { text: "Prenez 7 élastique et verrouillez les 7 ergots disponibles." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-f-montage-guide-inf-av-controle.jpg", type: "image" }}
        content={[
          { text: "Vérification", classes: "big-title tleft", tag: "h2" },
          { text: "Assurez-vous d'obtenir la même chose que sur la photo. La vitre doit bien suivre le cerclage." }
        ]} />
      <Section
        t={t}
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-g-retrait-film-vitre.jpg", type: "image" }}
        content={[
          { text: "Retrait des films protecteur", classes: "big-title tleft", tag: "h2" },
          { text: "Retirez le film présent sur la vitre." },
          { text: "Astuce : Vous pouvez écarter la vitre du cerclage pour retirer les morceaux restant.", classes: "italic" }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "O3PW5eITQcY", type: "yt" }}
        content={[
          { text: "Installation du chariot", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez le chariot et 2 vis bombées." },
          { text: "Insérez les vis dans les trous du cerclage." },
          { text: "Retirez la butée aimantée." },
          { text: "Présentez le chariot pour aligner les trous." },
          { text: "Vissez le ensuite fermement à l'aide de la petite clef fournie." },
          { text: "Prenez ensuite le verrou et 2 vis fraisées." },
          { text: "Présentez le verrou en face des trou à l'extérieur du caisson pour pincer la vitre entre le chariot et le verrou." },
          { text: "Vissez ensuite fermement à l'aide de la petite clef fournie." }
        ]} />
      <Section
        t={t}
        media={{ id: "mYBrmVXwDsI", type: "yt" }}
        content={[
          { text: "Installation des guides câbles", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez les deux guides câbles." },
          { text: "Orientez les pour les aligner aux différentes formes." },
          { text: "Vissez les ensuite à l'aide des deux dernières vis fraisées." }
        ]} />
      <Block
        t={t}
        img="NevaMagis/Notice/Addons/Caisson/2-j-fin.jpg"
        content={[
          { text: "Assemblage du caisson terminé", classes: "big-title" }
        ]}>
        <Validation t={t} step="/addon/box/neva-magis/2" />
      </Block>
    </Layout>
  );
}

module.exports = Box;