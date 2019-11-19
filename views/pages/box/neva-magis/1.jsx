const React = require('react');
const Layout = require('../../../layouts/default');
const Navbar = require('../../../components/navbar');
const nav = require('../../../../content/nav/box');
const SimpleTitle = require('../../../components/simple-title');
const BasicSection = require('../../../components/basic-section');
const SimpleSection = require('../../../components/simple-section');
const Validation = require('../../../components/validation');

function Box(props) {
  return (
    <Layout>
      <Navbar active={1} nav={nav} />
      <SimpleTitle
        small={true}
        content={[
          { text: "Temps approximatif : 20 min", classes: "col-vspace" }
        ]} />
      <BasicSection
        img="NevaMagis/Notice/Addons/Caisson/2-a-intro.jpg"
        content={[
          { text: "Notice de montage caisson Magis - assemblage du caisson", classes: "title tleft", tag: "h1" },
          { text: "Assemblage du caisson de protection", classes: "big-title tleft" },
          { text: "Nous allons assembler le caisson de protection qui entourera votre imprimante 3D." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-b-preparation-vitre", type: "video" }}
        content={[
          { text: "Préparation de la vitre", classes: "big-title tleft", tag: "h2" },
          { text: "La vitre vous a été livrée à plat. Nous allons fixer les bouts pour former un tube." }
        ]}>
        <ol className="list-classic tnormal row tleft-child">
          <li className="tleft col-vbspace">Retirez partiellement les films protecteurs de chaque face sur les deux bouts.</li>
          <li className="tleft col-vbspace">Repliez les deux bords, entrelacez les encoches pour qu'elles se prennent les unes dans les
                    autres. Relâchez en vous assurant que chaque encoche est bien enclenchée.</li>
          <li className="tleft col-vbspace">Tirez de part et d’autre de la couture pour verrouiller le tout.</li>
        </ol>
      </SimpleSection>
      <SimpleSection
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-b-bis-preparation-vitre", type: "video" }}
        content={[
          { text: "Serrage de la vitre", classes: "big-title tleft", tag: "h2" },
          { text: "Tirez de part et d’autre de la couture pour la serrer." },
          { text: "Recommencez de l’autre côté." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-c-montage-guide-sup-ar-prepa.jpg", type: "image" }}
        content={[
          { text: "Préparation des cerclages supérieurs", classes: "big-title tleft", tag: "h2" },
          { text: "Disposez les 3 premiers cerclages comme indiqué sur l’image." }
        ]} />
      <SimpleSection
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-c-montage-guide-sup-ar", type: "video" }}
        content={[
          { text: "Montage du cerclage arrière supérieur", classes: "big-title tleft", tag: "h2" },
          { text: "L’arrière du caisson est représenté par la couture. Le bas du caisson présente des encoches comme sur la vidéo." },
          { text: "Placez vous du côté sans encoche. Récupérez le cerclage supérieur arrière." },
          { text: "Appuyez sur le caisson pour le plier, enclenchez le cerclage dans trous prévu à cet effet et relâchez pour le bloquer. Tous les ergots doivent entrer dans les trous sur la vitre." },
          { text: "Ensuite, prenez 2 élastiques et installez les autours des 2 ergots arrières." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-c-montage-guide-sup-ar-control.jpg", type: "image" }}
        content={[
          { text: "Vérification", classes: "big-title tleft", tag: "h2" },
          { text: "L’ergot doit être centré dans le trou de la vitre. Tirez sur la vitre pour l’aligner." }
        ]} />
      <SimpleSection
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-d-montage-guide-sup-av", type: "video" }}
        content={[
          { text: "Montage des cerclages avant supérieur", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez 2 cerclages avant. Pincez la vitre pour la plier au milieu des deux trous comme sur la vidéo et installez le premier cerclage. Orientez le pour compléter l’encoche présente sur le cerclage arrière." },
          { text: "Prenez 3 élastique et verrouillez les 3 ergots disponibles." },
          { text: "Faites de même avec le second cerclage. Cette fois ci, il faudra 4 élastiques." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-d-montage-guide-sup-av-control.jpg", type: "image" }}
        content={[
          { text: "Vérification", classes: "big-title tleft", tag: "h2" },
          { text: "Assurez-vous d’obtenir la même chose que sur la photo. La vitre doit bien suivre le cerclage." }
        ]} />

      <SimpleSection
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-e-montage-guide-inf-ar-prepa.jpg", type: "image" }}
        content={[
          { text: "Préparation des cerclages inférieurs", classes: "big-title tleft", tag: "h2" },
          { text: "Disposez les 3 premiers cerclages comme indiqué sur l’image." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-e-montage-guide-inf-ar", type: "video" }}
        content={[
          { text: "Montage du cerclage arrière inférieur", classes: "big-title tleft", tag: "h2" },
          { text: "Retournez le caisson pour installer le prochain cerclage. Prenez le cerclage inférieur arrière. Pliez le caisson au niveau de la couture et placez les ergots dans les trous." },
          { text: "Récupérez 2 élastiques pour verrouiller les ergots disponibles." }
        ]} />
      <SimpleSection
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-f-montage-guide-inf-av", type: "video" }}
        content={[
          { text: "Montage des cerclages avant inférieur", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez les 2 derniers cerclages. Pincez la vitre pour la plier au milieu des deux trous comme sur la vidéo et installez le premier cerclage. Orientez le pour compléter l’encoche présente sur le cerclage arrière. Faites de même avec le second cerclage." },
          { text: "Prenez 7 élastique et verrouillez les 7 ergots disponibles." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-f-montage-guide-inf-av-controle.jpg", type: "image" }}
        content={[
          { text: "Vérification", classes: "big-title tleft", tag: "h2" },
          { text: "Assurez-vous d’obtenir la même chose que sur la photo. La vitre doit bien suivre le cerclage." }
        ]} />
      <SimpleSection
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-g-retrait-film-vitre.jpg", type: "image" }}
        content={[
          { text: "Retrait des films protecteur", classes: "big-title tleft", tag: "h2" },
          { text: "Retirez le film présent sur la vitre." },
          { text: "Astuce : Vous pouvez écarter la vitre du cerclage pour retirer les morceaux restant.", classes: "italic" }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-h-montage-chariot", type: "video" }}
        content={[
          { text: "Installation du chariot", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez le chariot et 2 vis bombées." },
          { text: "Insérez les vis dans les trous du cerclage." },
          { text: "Retirez la butée aimantée." },
          { text: "Présentez le chariot pour aligner les trous." },
          { text: "Vissez le ensuite fermement à l’aide de la petite clef fournie." },
          { text: "Prenez ensuite le verrou et 2 vis fraisées." },
          { text: "Présentez le verrou en face des trou à l’extérieur du caisson pour pincer la vitre entre le chariot et le verrou." },
          { text: "Vissez ensuite fermement à l’aide de la petite clef fournie." }
        ]} />
      <SimpleSection
        media={{ src: "NevaMagis/Notice/Addons/Caisson/2-i-montage-guide-cable", type: "video" }}
        content={[
          { text: "Installation des guides câbles", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez les deux guides câbles." },
          { text: "Orientez les pour les aligner aux différentes formes." },
          { text: "Vissez les ensuite à l’aide des deux dernières vis fraisées." }
        ]} />
      <BasicSection
        img="NevaMagis/Notice/Addons/Caisson/2-j-fin.jpg"
        content={[
          { text: "Assemblage du caisson terminé", classes: "big-title" }
        ]}>
        <Validation step="/addon/box/neva-magis/2" />
      </BasicSection>
    </Layout>
  );
}

module.exports = Box;