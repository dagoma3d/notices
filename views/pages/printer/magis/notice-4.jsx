var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/magis');
const SimpleTitle = require('../../../components/simple-title');
const BasicSection = require('../../../components/basic-section');
const SimpleSection = require('../../../components/simple-section');
const Validation = require('../../../components/validation');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={4} nav={nav} />
        <SimpleTitle
          small={true}
          content={[
            { text: "Temps de préparation : 5 minutes", classes: "col-vtspace" },
            { text: "Temps d'impression : 45 minutes", classes: "col-vbspace" }
          ]} />
        <BasicSection
          flip={true}
          img="NevaMagis/Notice/3-a-photophore-pp-3-1600x600.jpg"
          content={[
            { text: "Notice de première utilisation - page 3", classes: "title tleft", tag: "h1" },
            { text: "Changement de couleur", classes: "title tleft", tag: "h2" },
            { text: "L’apparition de la couleur", classes: "big-title tleft" },
            { text: "Vous êtes maintenant prêt pour notre petit secret." },
            { text: "Il est impératif d’avoir deux couleurs différentes pour aboutir au résultat attendu. Si vous n’en avez qu’une, continuez quand même pour maîtriser toutes les fonctionnalités." }
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "NevaMagis/Notice/3-b-copie.jpg", type: "image" }}
          content={[
            { text: "Étape 1", classes: "title tleft", tag: "h3" },
            { text: "J'imprime avec ma Magis", classes: "big-title" },
            { text: "Tout d’abord, téléchargez le nouveau fichier que nous vous avons préparé." },
            { text: "Ce fichier va finaliser votre dernière création. C’est un cache pour la bougie." }
          ]}>
          <p className="tleft">
            <a href="/medias/NevaMagis/Notice/gcodes/chapitre-3/dagoma0.g" className="new-btn btn-classic btn-grey btn-wide" download="dagoma0.g">
              Téléchargez le fichier ici
            </a>
          </p>
          <p className="bg-orange text-white col-space">
            Attention, ce fichier a été préparé pour être imprimé avec du filament Chromatik.<br /><br /> Assurez-vous que le fichier s’appelle bien dagoma0.g une fois copié sur la carte.
          </p>
        </SimpleSection>
        <SimpleTitle
          content={[
            { text: "Étape 2", classes: "title", tag: "h3" },
            { text: "Lancez l'impression", classes: "big-title" },
            { text: "Placez le fichier dagoma0.g sur ta carte SD." },
            { text: "Insérez la carte dans l’imprimante." },
            { text: "Lancez ensuite l’impression." }
          ]}>
          <p className="italic">
            Pssst ! Rappellez-vous de la <a className="link-classic" href="/printer/magis/notice-1" title="Retourner à la page 1">page 1</a>
          </p>
        </SimpleTitle>
        <SimpleSection
          media={{ src: "NevaMagis/Notice/3-d-pause-auto", type: "video" }}
          content={[
            { text: "Étape 3", classes: "title tleft", tag: "h3" },
            { text: "Surprise !", classes: "big-title", tag: "h4" },
            { text: "Votre Magis s’est arrêtée toute seule. Pas de panique, nous avons programmé une pause dans le fichier." },
            { text: "Vous allez découvrir la fonction Tap-Tap." },
            { text: "Vous n'avez pas de gros sel, riz, quinoa, ... ? Profitez de ces 45 minutes d'impression pour aller en acheter !", classes: "italic" }
          ]}>
          <p className="italic">
            Si vous avez le moindre problème, commencez par <a className="link-classic" href="/firmware/magis" target="_blank" title="Mise à jour firmware">mettre à jour votre firmware</a>.
          </p>
          <p className="italic">
            Si ce n'est pas résolu, nous sommes à votre disposition via <a className="link-classic" href="https://support.dagoma.fr/support/home" title="Le support">le support</a>.
          </p>
        </SimpleSection>
        <SimpleSection
          flip={true}
          media={{ src: "NevaMagis/Notice/3-e-tap-tap-changement-filament", type: "video" }}
          content={[
            { text: "Étape 4", classes: "title tleft", tag: "h3" },
            { text: "Le Tap-Tap", classes: "big-title" },
            { text: "Tapotez 2 fois sur votre plateau." },
            { text: "Le filament est éjecté de l’imprimante. Vous n'avez plus qu’à le saisir et à tirer pour l’enlever." },
            { text: "Vérifiez que l’extrémité du filament est bien propre. N’hésitez pas à casser le bout du filament pour que l’insertion se fasse bien." },
            { text: "Prenez votre autre bobine." },
            { text: "Si vous n'en avez pas, vous pouvez utiliser la première bobine ou l'échantillon fourni avec votre Magis.", classes: "italic" },
            { text: "Présentez le filament dans l’extrudeur. Poussez-le jusqu’à ce qu’il soit entraîné par la machine." },
            { text: "Pensez à retirer le PLA qui coule sous la tête." }
          ]} />
        <SimpleSection
          media={{ src: "NevaMagis/Notice/3-f-reprise-manuelle", type: "video" }}
          content={[
            { text: "Étape 5", classes: "title tleft", tag: "h3" },
            { text: "Relancez l'impression", classes: "big-title" },
            { text: "Appuyez sur le bouton pour relancer l'impression." }
          ]} />
        <SimpleSection
          flip={true}
          media={{ src: "NevaMagis/Notice/3-g-bi-colore", type: "video" }}
          content={[
            { text: "Plus que 10 minutes d’impression", classes: "big-title" }
          ]} />
        <SimpleSection
          media={{ src: "NevaMagis/Notice/3-i-photophore-pp-3-copie.jpg", type: "image" }}
          content={[
            { text: "Étape 6", classes: "title tleft", tag: "h3" },
            { text: "Assemblage", classes: "big-title" },
            { text: "Reprenez le photophore, et assemblez-le avec le reste." }
          ]} />
        <BasicSection
          flip={true}
          img="NevaMagis/Notice/3-a-photophore-pp-3-1600x600.jpg"
          content={[
            { text: "Je vois la vie en couleur !", classes: "big-title" }
          ]}>
          <Validation step="/cura-by-dagoma" />
        </BasicSection>
      </Layout>
    );
  }
}

module.exports = Printer;