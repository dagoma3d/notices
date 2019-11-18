var React = require('react');
var Layout = require('../layouts/default');
var SimpleSection = require('../components/simple-section');
var BasicSection = require('../components/basic-section');
var SimpleTitle = require('../components/simple-title');
const NavBar = require('../components/navbar');
var Validation = require('../components/validation');
var HiddenVideo = require('../components/hidden-video');

class Firmware extends React.Component {
  render() {
    const { title, active, nav, step, printerInfo } = this.props;
    return (
      <Layout title={title}>
        <NavBar active={active} nav={nav} />
        <BasicSection
          img="DiscoEasy/Software/a-intro-maj-disco.jpg"
          content={[
            { text: `Mise à jour pour votre ${printerInfo.name}`, classes: "big-title tleft" },
            { text: "Profitez de la mise à jour de votre firmware et bénéficiez de nouvelles fonctionnalités sur votre imprimante." },
            { text: `Marlin ${printerInfo.abbr} - ${printerInfo.date}`, classes: "small tleft light italic" }
          ]} />
        <SimpleTitle
          content={[
            { text: "Comment faire la mise à jour ?", classes: "big-title" }
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "NevaMagis/Software/a-cura.jpg", type: "image" }}
          content={[
            { text: "Nécessaire pour fonctionner", classes: "big-title" },
            { text: "Avant d’aller plus loin, téléchargez et installez Cura by Dagoma. Lors de l’installation, nous installons des éléments nécessaires au bon fonctionnement de Dagom’app." },
            { classes: "tleft col-vspace", link: { href: "https://dist.dagoma3d.com/CuraByDagoma", target: "_blank", classes: "new-btn btn-valid btn-wide", text: "Télécharger Cura by Dagoma" } }
          ]} />
        <SimpleSection
          media={{ src: `DiscoEasy/Calibration/${printerInfo.img}`, type: "image" }}
          content={[
            { text: "Les pré-requis", classes: "big-title" },
            {
              list: {
                classes: "",
                items: [
                  { tag: { name: "p", classes: "tleft" }, text: `Une ${printerInfo.name}` },
                  { tag: { name: "p", classes: "tleft" }, text: "Un câble USB-B (fournis avec ton imprimante)" },
                  { tag: { name: "p", classes: "tleft" }, text: "Un ordinateur et Dagom'app" }
                ]
              }
            },
            { classes: "tleft col-vspace", link: { href: "https://dist.dagoma3d.com/DagomApp", target: "_blank", classes: "new-btn btn-valid btn-wide", text: "Télécharger Dagom'app" } },
            { text: "Et suivez le tutoriel ci-dessous, étape par étape." }
          ]} />
        <SimpleTitle
          content={[
            { text: "Commençons !", classes: "big-title" },
            { text: "Lancez dagom’app et suivez les instructions" }
          ]} />
        <SimpleSection
          wrap={true}
          media={{ src: "DiscoEasy/Calibration/dagomapp-e1.jpg", type: "image", classes: "notice-small" }}
          content={[
            { text: "Etape 1", classes: "big-title" },
            { text: "Cliquez sur \"Je configure mon imprimante\"." }
          ]} />
        <SimpleSection
          wrap={true}
          media={{ src: "DiscoEasy/Calibration/dagomapp-e2.jpg", type: "image", classes: "notice-small" }}
          content={[
            { text: "Etape 2", classes: "big-title" },
            { text: "Cochez les étapes une fois vérifiées." }
          ]} />
        <SimpleSection
          wrap={true}
          media={{ src: "DiscoEasy/Calibration/dagomapp-e3.jpg", type: "image", classes: "notice-small" }}
          content={[
            { text: "Etape 3", classes: "big-title" },
            { text: `Cliquez sur ${printerInfo.name}.` }
          ]} />
        <SimpleSection
          wrap={true}
          media={{ src: "DiscoEasy/Calibration/dagomapp-e4.jpg", type: "image", classes: "notice-small" }}
          content={[
            { text: "Etape 4", classes: "big-title" },
            { text: `Reliez la ${printerInfo.name} à l'ordinateur via le cable USB fournis.` },
            { text: "Pour le passage du câble regarde la vidéo suivante :" }
          ]}>
          <HiddenVideo src={`DiscoEasy/Calibration/${printerInfo.video}`} />
        </SimpleSection>
        <SimpleSection
          wrap={true}
          media={{ src: "DiscoEasy/Calibration/dagomapp-maj-e5.jpg", type: "image", classes: "notice-small" }}
          content={[
            { text: "Etape 5", classes: "big-title" },
            { text: "Choisissez “Je donne de nouveaux pouvoirs” puis cliquez sur la flèche bleue." }
          ]} />
        <SimpleSection
          wrap={true}
          media={{ src: "DiscoEasy/Calibration/dagomapp-maj-e6.jpg", type: "image", classes: "notice-small" }}
          content={[
            { text: "Etape 7", classes: "big-title" },
            { text: "On y est presque !" },
            { text: `Téléchargez le firmware HEX pour votre ${printerInfo.name} :` },
            { classes: "tleft col-vbspace", link: { href: `https://dist.dagoma3d.com/Marlin-Firmwares/${printerInfo.firmware}`, target: "_blank", classes: "new-btn btn-valid btn-wide", text: "Télécharger le firmware HEX" } },
            { text: "Choisissez les options dont votre machine est équipée uniquement !", classes: "bg-orange text-white col-space" },
            { text: "Cliquez sur “sélectionnez un fichier .hex”", classes: "col-vtspace" }
          ]} />
        <SimpleSection
          wrap={true}
          media={{ src: "DiscoEasy/Calibration/dagomapp-maj-e7.jpg", type: "image", classes: "notice-small" }}
          content={[
            { text: "Etape 8", classes: "big-title" },
            { text: "Une fois upload, cliquez sur “Flasher”" },
            { text: "Cette action peut durer quelques minutes." }
          ]} />
        <SimpleSection
          wrap={true}
          media={{ src: "DiscoEasy/Calibration/dagomapp-maj-e8.jpg", type: "image", classes: "notice-small" }}
          content={[
            { text: "Etape 9", classes: "big-title" },
            { text: `Votre ${printerInfo.name} a été mise à jour. Vous pouvez fermer Dagom'app.` },
            { text: "Encore une dernière étape." }
          ]} />
        <BasicSection
          content={[
            { text: `Etape ${this.props.active + 1}`, classes: "big-title" },
            { text: "Après une mise à jour, il est nécessaire de recalibrer l’imprimante 3D." }
          ]}>
          <Validation step={step} />
        </BasicSection>
      </Layout>
    );
  }
}

module.exports = Firmware;
