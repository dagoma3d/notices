var React = require('react');
var Layout = require('../layouts/default');
var SimpleSection = require('../components/simple-section');
var BasicSection = require('../components/basic-section');
var SimpleTitle = require('../components/simple-title');
const NavBar = require('../components/navbar');
var Media = require('../components/media');
var Validation = require('../components/validation');

class Firmware extends React.Component {
  render() {
    const { title, printerInfo } = this.props;
    return (
      <Layout title={title}>
        <NavBar active={this.props.active} nav={this.props.nav} />
        <BasicSection
          img="DiscoEasy/Software/a-intro-maj-disco.jpg"
          content={[
            { text: `Mise à jour pour votre ${printerInfo.name}`, classes: "big-title tleft" },
            { text: "Profitez de la mise à jour de votre firmware et bénéficiez de nouvelles fonctionnalités sur votre imprimante." },
            { text: `Marlin ${printerInfo.abbr} - 16/10/2019`, classes: "small tleft light italic" }
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
            { text: "Avant d’aller plus loin, téléchargez et installez Cura by Dagoma. Lors de l’installation, nous installons des éléments nécessaires au bon fonctionnement de Dagom’app." }
          ]}>
          <p className="tleft col-vspace">
            <a href="https://dist.dagoma3d.com/CuraByDagoma" target="_blank" className="new-btn btn-valid btn-wide">Télécharger Cura by Dagoma</a>
          </p>
        </SimpleSection>
        <SimpleSection
          media={{ src: `DiscoEasy/Calibration/${printerInfo.img}`, type: "image" }}
          content={[
            { text: "Les pré-requis", classes: "big-title" }
          ]}>
          <ul>
            <li><p className="tleft">Une {printerInfo.name}</p></li>
            <li><p className="tleft">Un câble USB-B (fournis avec ton imprimante)</p></li>
            <li><p className="tleft">Un ordinateur et Dagom'app</p></li>
          </ul>
          <p className="tleft col-vspace">
            <a href="https://dist.dagoma3d.com/DagomApp" target="_blank" className="new-btn btn-valid btn-wide">Télécharger Dagom'app</a>
          </p>
          <p>Et suivez le tutoriel ci-dessous, étape par étape.</p>
        </SimpleSection>
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
          <p className="tleft col-vbspace">
            <button className="new-btn btn-classic btn-grey btn-wide btn-show-video">Lire la vidéo</button>
          </p>
          <section className="col-xl-24 row block-video block-video-hidden" style={{ border: "none" }}>
            <Media info={{ src: `DiscoEasy/Calibration/${printerInfo.video}`, type: "video" }}>
              <div className="close-video">
                <i className="fa fa-close"></i>
              </div>
            </Media>
          </section>
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
            { text: `Téléchargez le firmware HEX pour votre ${printerInfo.name} :` }
          ]}>
          <p className="tleft col-vbspace">
            <a href={`https://dist.dagoma3d.com/Marlin-Firmwares/${printerInfo.firmware}`} target="_blank" className="new-btn btn-valid btn-wide">Télécharger le firmware HEX</a>
          </p>
          <p className="bg-orange text-white col-space">Choisissez les options dont votre machine est équipée uniquement !</p>
          <p className="col-vtspace">Cliquez sur “sélectionnez un fichier .hex”</p>
        </SimpleSection>
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
        <section className="col-xl-24 block-big-white-space bg-gradient-orange row">
          <section className="col-xl-12 col-xl-offset-6 col-l-18 col-l-offset-3 col-m-24 col-m-offset-0 row">
            <div className="col-xl-24 block-caption row col-vspace">
              <p className="big-title">Etape {this.props.active + 1}</p>
              <p>Après une mise à jour, il est nécessaire de recalibrer l’imprimante 3D.</p>
              <Validation step={`/printer/${printerInfo.notice}/calibration`} />
            </div>
          </section>
        </section>
      </Layout>
    );
  }
}

module.exports = Firmware;
