const React = require('react');
const Layout = require('../../../layouts/default');
const Navbar = require('../../../components/navbar');
const nav = require('../../../../content/nav/box');
const SimpleTitle = require('../../../components/simple-title');
const BasicSection = require('../../../components/basic-section');
const SimpleSection = require('../../../components/simple-section');
const Validation = require('../../../components/validation');

class Box extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar active={0} nav={nav} />
        <SimpleTitle
          small={true}
          content={[
            { text: "Préparation", classes: "col-vspace" }
          ]} />
        <BasicSection
          img="NevaMagis/Notice/Addons/Caisson/1-a-intro.jpg"
          content={[
            { text: "Notice de montage caisson Magis et Neva - préparation", classes: "title tleft", tag: "h1" },
            { text: "Vous avez reçu votre caisson pour Magis et Neva", classes: "big-title tleft" },
            { text: "Nous allons vous accompagner pour le montage et l’installation de votre protection pour l’imprimante 3D Magis et Neva." }
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "NevaMagis/Notice/Addons/Caisson/1-d-contenu.jpg", type: "image" }}
          content={[
            { text: "Dans ce carton vous avez trouvé", classes: "big-title tleft", tag: "h2" }
          ]}>
          <ol className="list-classic tnormal row tleft-child">
            <li className="tleft col-vbspace">x2 guides câbles</li>
            <li className="tleft col-vbspace">x1 fixation chariot</li>
            <li className="tleft col-vbspace">x1 butée aimantée (aimantée au chariot)</li>
            <li className="tleft col-vbspace">x3 pieds de Magis </li>
            <li className="tleft col-vbspace">x1 chariot</li>
            <li className="tleft col-vbspace">x1 sachet de vis & outils (clef de 6, clef de 2.5, 2 vis M8x20, 4 vis fraisées M3x10, 2 vis
                            bombées M3x12, 6 patins, 20 élastiques, 2 clips imprimés)</li>
            <li className="tleft col-vbspace">x1 rail</li>
            <li className="tleft col-vbspace">x1 vitre de protection</li>
            <li className="tleft col-vbspace">x1 socle en bois noir</li>
            <li className="tleft col-vbspace">x6 cerclages (1 fixation arrière supérieure, 1 fixation arrière inférieure, 4 fixations avant)
                        </li>
          </ol>
        </SimpleSection>
        <SimpleSection
          media={{ src: "NevaMagis/Notice/Addons/Caisson/1-e-installation-patin", type: "video" }}
          content={[
            { text: "Installation des patins", classes: "big-title tleft", tag: "h2" },
            { text: "Prenez les 6 patins dans le petit sachet de vis." },
            { text: "Sous le socle en bois, enfoncez 3 patins dans les angles comme sur la vidéo." },
            { text: "Ensuite sous chacun des trois pieds, enfoncez un patin." },
            { text: "Mettez le socle de côté, il servira plus tard." }
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "NevaMagis/Notice/Addons/Caisson/1-f-installation-pieds", type: "video" }}
          content={[
            { text: "Installation des pieds sur la Magis", classes: "big-title tleft", tag: "h2" },
            { text: "Reprenez les 3 pieds et installez les sur votre imprimante 3D." },
            { text: "Rentrez l’ergo dans le trou prévu à cet effet." }
          ]} />
        <SimpleSection
          media={{ src: "NevaMagis/Notice/Addons/Caisson/1-g-retrait-dibon.jpg", type: "image" }}
          content={[
            { text: "Préparation des cerclages", classes: "big-title tleft", tag: "h2" },
            { text: "Retirez le film protecteur présent sur les pièces." }
          ]} />
        <BasicSection
          img="NevaMagis/Notice/Addons/Caisson/1-a-intro.jpg"
          content={[
            { text: "Préparation des éléments terminée", classes: "big-title" }
          ]}>
          <Validation step="/addon/box/neva-magis/1" />
        </BasicSection>
      </Layout>
    );
  }
}

module.exports = Box;