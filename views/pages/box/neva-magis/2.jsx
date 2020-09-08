const React = require('react');
const Layout = require('../../../layouts/default');
const Navbar = require('../../../components/navbar');
const nav = require('../../../../content/nav/box');
const Title = require('../../../components/title');
const Block = require('../../../components/block');
const Section = require('../../../components/section');

function Box(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <Navbar t={t} active={2} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps approximatif : 10 min", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="NevaMagis/Notice/Addons/Caisson/3-a-intro.jpg"
        content={[
          { text: "Notice de montage caisson Magis - installation du caisson", classes: "title tleft", tag: "h1" },
          { text: "Installation du caisson de protection", classes: "big-title tleft" },
          { text: "Nous allons maintenant installer l'imprimante dans le caisson et terminer son assemblage." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "DC87kaw55Bo", type: "yt" }}
        content={[
          { text: "Fixation du rail de guidage", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez le socle en bois, une grosse vis et le rail." },
          { text: "Retournez la plaque et introduisez la vis." },
          { text: "Vissez le rail à la main sans efforts.", classes: "text-red" },
          { text: "Alignez le sur la gravure présente sur le socle." }
        ]} />
      <Section
        t={t}
        media={{ id: "FynHWAKxUU4", type: "yt" }}
        content={[
          { text: "Installation de l'imprimante", classes: "big-title tleft", tag: "h2" },
          { text: "Posez l'imprimante sur le socle. Des empreintes permettent de positionner les pieds. L'arrière de la machine s'aligne sur le rail." },
          { text: "Prenez le clips le plus large et enfoncez le dans la fente sur le socle (à gauche vue de derrière)." },
          { text: "Passez le câble d'alimentation sous la machine puis branchez-le." },
          { text: "Clipsez-le câble après le cylindre de ferrite." },
          { text: "Le câble ne doit surtout pas être contraint.", classes: "text-red" },
          { text: "Vous pouvez installer le clips du côté droit en fonction de la longueur entre votre connecteur et la ferrite.", classes: "text-red" }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "vwjIPQjnQwU", type: "yt" }}
        content={[
          { text: "Installation du filament", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez le dernier clips et installez le dans la fente à l'avant droit du socle." },
          { text: "Si votre bobine passe sous la machine, installez là avec un dérouleur horizontal." },
          { text: "Si votre bobine ne passe pas ou est installée avec un dérouleur vertical, passer le filament dans le clips avant de le présenter dans l'extrudeur (comme sur la vidéo)." }
        ]} />
      <Section
        t={t}
        media={{ id: "lezRz7emJV8", type: "yt" }}
        content={[
          { text: "Installation du caisson", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez le caisson avec le chariot vers le bas." },
          { text: "Faites le coulisser sur le rail jusqu'en bas." },
          { text: "Alignez le caisson dans la rainure du socle." },
          { text: "Accédez à la vis sous le socle pour serrer fermement le rail." },
          { text: "Astuce : faites-le glisser sur le bord d'une table pour accéder à la vis.", classes: "italic" },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "Rtkpkz99xzY", type: "yt" }}
        content={[
          { text: "Montage de la butée", classes: "big-title tleft", tag: "h2" },
          { text: "Récupérez la butée magnétique." },
          { text: "Placez-la les aimants vers le bas." },
          { text: "Vissez-la sur le rail fermement." }
        ]} />
      <Section
        t={t}
        media={{ id: "zvqDrmodG3Q", type: "yt" }}
        content={[
          { text: "Utilisation", classes: "big-title tleft", tag: "h2" },
          { text: "La simplicité même." },
          { text: "Placez vos main sur les côtés." },
          { text: "Levez le caisson en soulevant le cerclage." },
          { text: "Soulevez jusqu'à la butée et il tiendra tout seul." },
          { text: "Tirez sur le cerclage pour le faire redescendre." },
          { text: "NB: Pour sortir la machine du caisson, vous devez retirer la butée, retirer le caisson et sortir la machine.", classes: "italic" }
        ]} />
      <Block
        t={t}
        img="NevaMagis/Notice/Addons/Caisson/1-a-intro.jpg"
        content={[
          { text: "Félicitation ! Le montage du caisson est terminé.", classes: "big-title" }
        ]} />
    </Layout>
  );
}

module.exports = Box;