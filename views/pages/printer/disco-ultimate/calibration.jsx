var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/du');
const SimpleTitle = require('../../../components/simple-title');
const BasicSection = require('../../../components/basic-section');
const SimpleSection = require('../../../components/simple-section');
const Validation = require('../../../components/validation');
const Media = require('../../../components/media');


class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={this.props.active ? this.props.active : 11} nav={this.props.nav ? this.props.nav : nav} />
        <BasicSection
          img="DiscoEasy/Software/a-intro-maj-disco.jpg"
          content={[
            { text: "Calibrez votre Disco Ultimate", classes: "big-title tleft" },
            { text: "Votre imprimante 3d a besoin de vous pour retrouver ses repères. Une bonne calibration permet d’obtenir une première couche propre." }
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Calibration/b1-prerequis-du.jpg", type: "image", classes: "notice-small-img-small" }}
          content={[
            { text: "Les prérequis", classes: "big-title" },
            {
              list: {
                classes: "",
                items: [
                  { text: "A. Il vous faut une imprimante 3d Dagoma", classes: "tleft" },
                  { text: "B. Un câble USB-B (fournis avec ton imprimante)", classes: "tleft" },
                  { text: "C. Un ordinateur et D. Dagom’app", classes: "tleft" },
                  { text: "E. Du filament", classes: "tleft" },
                  { text: "F. La cible fournie avec le kit (une carte de visite fonctionne aussi)", classes: "tleft" }
                ]
              }
            },
            { link: { classes: "new-btn btn-valid btn-wide", href: "https://dist.dagoma3d.com/DagomApp", target: "_blank", text: "Télécharger Dagom'app" } }
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Calibration/b2-parallelisme", type: "video" }}
          content={[
            { text: "Dernier ajustement", classes: "big-title" },
            { text: "Avant de commencer la calibration, vous avez un petit ajustement à faire. Il faut s’assurer que les barres sur lesquelles se déplace la tête soient bien parallèles au plateau." },
            { text: "Placez l’imprimante 3D face à vous. Vous allez agir manuellement sur les coupleurs comme sur la vidéo pour faire monter ou descendre l’axe." },
            { text: "Pour un réglage précis, placez le plateau au centre de la machine et la tête à gauche. Faites descendre la tête pour que la buse effleure le plateau. Déplacez la tête manuellement à droite et faites-la effleurer à nouveau le plateau." },
            { text: "Lorsque la tête effleure le plateau de gauche à droite, votre réglage est bon. Vous pouvez passer à la calibration." }
          ]} />
        <SimpleTitle
          content={[
            { text: "Commençons !", classes: "big-title" },
            { text: "Lancez Dagom’app et suivez les instructions" }
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Calibration/dagomapp-e1.jpg", type: "image", classes: "notice-small-img" }}
          content={[
            { text: "Etape 1", classes: "big-title" },
            { text: "Cliquez sur \"Je configure mon imprimante\"." }
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Calibration/dagomapp-e2.jpg", type: "image", classes: "notice-small-img" }}
          content={[
            { text: "Etape 2", classes: "big-title" },
            { text: "Cochez les étapes une fois vérifiées." }
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Calibration/dagomapp-e3.jpg", type: "image", classes: "notice-small-img" }}
          content={[
            { text: "Etape 3", classes: "big-title" },
            { text: "Cliquez sur Disco Ultimate" }
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Calibration/dagomapp-e4.jpg", type: "image", classes: "notice-small-img" }}
          content={[
            { text: "Etape 4", classes: "big-title" },
            { text: "Reliez votre imprimante 3d à l'ordinateur via le cable USB fournis." },
            { text: "Pour le passage du câble regarde la vidéo suivante :" }
          ]}>
          <p className="tleft col-vbspace">
            <button className="new-btn btn-classic btn-grey btn-wide btn-show-video">Lire la vidéo</button>
          </p>
          <section className="col-xl-24 row block-video block-video-hidden" style={{ border: "none" }}>
            <Media info={{ src: "DiscoEasy/Calibration/c-e3-du", type: "video" }}>
              <div className="close-video">
                <i className="fa fa-close"></i>
              </div>
            </Media>
          </section>
        </SimpleSection>
        <SimpleSection
          media={{ src: "DiscoEasy/Calibration/dagomapp-calibration-e5.jpg", type: "image", classes: "notice-small-img" }}
          content={[
            { text: "Etape 5", classes: "big-title" },
            { text: "Choisissez “Une impression parfaite” puis cliquez sur la flèche bleue." }
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Calibration/dagomapp-calibration-e6.jpg", type: "image", classes: "notice-small-img" }}
          content={[
            { text: "Etape 6", classes: "big-title" },
            { text: "Cliquez sur \"Réglage de la première couche\"." }
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Calibration/dagomapp-calibration-e7.jpg", type: "image", classes: "notice-small-img" }}
          content={[
            { text: "Etape 7", classes: "big-title" },
            { text: "Pour l’insertion du filament vous avez une petite vidéo d’aide ici :" },
          ]}>
          <p className="tleft col-vbspace">
            <button className="new-btn btn-classic btn-grey btn-wide btn-show-video">Lire la vidéo</button>
          </p>
          <section className="col-xl-24 row block-video block-video-hidden" style={{ border: "none" }}>
            <Media info={{ src: "DiscoEasy/Calibration/c-e5", type: "video" }}>
              <div className="close-video">
                <i className="fa fa-close"></i>
              </div>
            </Media>
          </section>
        </SimpleSection>
        <SimpleSection
          media={{ src: "DiscoEasy/Calibration/dagomapp-calibration-e8.jpg", type: "image", classes: "notice-small-img" }}
          content={[
            { text: "Etape 8", classes: "big-title" },
            { text: "Placez la cible (ou toute autre carte) sur la plateau, sous la buse, puis cliquez sur la flèche bleue." }
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Calibration/dagomapp-calibration-e9.jpg", type: "image", classes: "notice-small-img" }}
          content={[
            { text: "Etape 9", classes: "big-title" },
            { text: "Vous allez maintenant régler la hauteur de la tête d’impression." },
            { text: "Faites descendre la tête petit à petit à l’aide de la flèche du bas dans Dagom’app." },
            { text: "Faites bouger la cible d'avant en arrière. Lorsque vous sentez une résistance, arrêtez de la faire descendre." },
            { text: "Vous avez une petite vidéo des réactions de la machine ici :" },
          ]}>
          <p className="tleft col-vbspace">
            <button className="new-btn btn-classic btn-grey btn-wide btn-show-video">Lire la vidéo</button>
          </p>
          <p>Si la carte ne bouge plus, remontez d'un cran.</p>
          <p>Une fois réglé, cliquez sur la flèche bleue.</p>
          <section className="col-xl-24 row block-video block-video-hidden" style={{ border: "none" }}>
            <Media info={{ src: "DiscoEasy/Calibration/c-e5", type: "video" }}>
              <div className="close-video">
                <i className="fa fa-close"></i>
              </div>
            </Media>
          </section>
        </SimpleSection>
        <SimpleSection
          media={{ src: "DiscoEasy/Calibration/dagomapp-calibration-e10.jpg", type: "image", classes: "notice-small-img" }}
          content={[
            { text: "Etape 10", classes: "big-title" },
            { text: "C’est bientôt fini ! Après cette étape, votre imprimante 3d va se préparer à imprimer." },
            { text: "Elle va bouger un peu, chauffer et elle commencera à imprimer." },
            { text: "Dans l’étape suivant vous allez ajuster avec précisions la hauteur de la première couche." }
          ]} />
        <SimpleSection
          media={{ src: "DiscoEasy/Calibration/dagomapp-calibration-e11.jpg", type: "image", classes: "notice-small-img" }}
          content={[
            { text: "Etape 11", classes: "big-title" },
            { text: "Dans cette interface, vous allez pouvoir monter ou descendre la hauteur de la première couche." },
            { text: "Si elle est trop écrasé, l’extrudeur ne fera que forcer. Cliquez sur “plus haut”." },
            { text: "Si elle est trop haute, elle ne tiendra pas sur le plateau. Cliquez sur “plus bas”." },
            { text: "Elle va imprimer plusieurs petits cercles. Une fois que la hauteur de couche est bonne, cliquez sur “Je suis satisfait” puis sur “enregistrer”." },
            { text: "Vous avez une petite vidéo des réactions de la machine ici :" },
          ]}>
          <p className="tleft col-vbspace">
            <button className="new-btn btn-classic btn-grey btn-wide btn-show-video">Lire la vidéo</button>
          </p>
          <section className="col-xl-24 row block-video block-video-hidden" style={{ border: "none" }}>
            <Media info={{ src: "DiscoEasy/Calibration/c-e8", type: "video" }}>
              <div className="close-video">
                <i className="fa fa-close"></i>
              </div>
            </Media>
          </section>
        </SimpleSection>
        <SimpleSection
          media={{ src: "DiscoEasy/Calibration/dagomapp-calibration-e12.jpg", type: "image", classes: "notice-small-img" }}
          content={[
            { text: "Etape 12", classes: "big-title" },
            { text: "Votre imprimante 3d est calibrée et prête à imprimer." },
            { text: "Ne vous inquiétez pas si la valeur obtenue est différente de notre exemple." },
            { text: "Si vous étiez en train d'installer un add-on, n'oubliez que ce n'est pas fini." }
          ]} />
        <BasicSection
          content={[
            { text: "Vous pourrez intervenir manuellement sur votre imprimante pour ajuster la hauteur de la première couche." },
            { text: "Vous pourrez refaire cette calibration de temps en temps si la première couche n’est plus bonne." }
          ]}>
          <Validation step="/cura-by-dagoma/du" />
        </BasicSection>
      </Layout>
    );
  }
}

module.exports = Printer;