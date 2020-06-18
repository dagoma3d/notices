const React = require('react');
const Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/magis');
const Title = require('../../../components/title');
const Block = require('../../../components/block');
const Section = require('../../../components/section');
const Validation = require('../../../components/validation');

function Printer(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={0} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps approximatif : 10 minutes", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="NevaMagis/Notice/0-a-magis-bobine.jpg"
        content={[
          { text: "Notice de première utilisation - Introduction", classes: "title tleft", tag: "h1" },
          { text: "Premiers pas", classes: "title tleft" },
          { text: "ça y est, vous avez reçu votre Magis.", classes: "big-title tleft" },
          { text: "Ensemble, nous allons découvrir votre imprimante et vous accompagner dans une expérience : celle de l'impression 3D avec Dagoma." },
          { text: "Nous vous avons préparé 4 objets à imprimer." },
          { text: "Pour toute cette initiation, vous aurez besoin d'environ 75g de PLA Chromatik. Une bobine de 250g fera donc amplement l'affaire." }
        ]} />
      <Title
        t={t}
        content={[
          { text: "Dans ce carton vous avez trouvé...", classes: "big-title" }
        ]} />
      <Section
        t={t}
        color="color-anthracite"
        media={{ src: "NevaMagis/Notice/0-c-a-gris-contenu.jpg", type: "image", classes: "notice-small-img" }}
        content={[
          { text: "Les indispensables", classes: "big-title" },
          { text: "Avec votre Magis vous recevrez à part les éléments indispensables pour lancer votre première impression." },
          { text: "L'échantillon de filament ne vous servira pas dans ce tutoriel." },
          {
            list: {
              items: [
                { text: "A. Bras aimantés" },
                { text: "B. Alimentation" },
                { text: "C. Échantillon de fil" },
                { text: "D. Carte SD" }
              ]
            }
          }
        ]} />
      <Section
        t={t}
        flip={true}
        color="color-anthracite"
        media={{ src: "NevaMagis/Notice/0-c-b-gris-contenu.jpg", type: "image", classes: "notice-small-img" }}
        content={[
          { text: "Les accessoires", classes: "big-title" },
          { text: "Bien sûr, ce n'est pas tout, voilà un petit kit pour prendre soin de votre Magis." },
          {
            list: {
              items: [
                { text: "E. Adaptateur SD" },
                { text: "F. Lingettes isopropyliques" },
                { text: "G. Cable USB" },
                { text: "H. Spatule" }
              ]
            }
          }
        ]} />
      <Section
        t={t}
        media={{ src: "NevaMagis/Notice/0-c-c-cales", type: "video" }}
        content={[
          { text: "Préparation", classes: "big-title" },
          { text: "Avant de commencer, retirez les 3 cales oranges qui se trouvent sous le plateau." }
        ]} />
      <Title
        t={t}
        content={[
          { text: "Place au montage", classes: "big-title" }
        ]} />
        <Section
        t={t}
        flip={true}
        media={{ src: "NevaMagis/Notice/0-d-a-maintien.jpg", type: "image" }}
        content={[
          { text: "Nouveauté", classes: "big-title" },
          { text: "Depuis juin 2020, les imprimantes 3D Magis sont équipées d'une pièce supplémentaire sur la tête d'impression et sur l’extrudeur pour maintenir davantage le tube blanc PTFE." },
          { text: "Si cet accessoire n'est pas présent sur votre imprimante 3D, nous vous invitons à l'imprimer en la téléchargeant", link: { href: "https://www.thingiverse.com/thing:4088130", target: "_blank", classes: "link-classic", text: "ici" } },
          { text: "Pour la suite de la notice, cet accessoire n'est pas présent sur les visuels." }
        ]} />
      <Section
        t={t}
        media={{ src: "NevaMagis/Notice/0-d-a-bras", type: "video" }}
        content={[
          { text: "Étape 1", classes: "title tleft", tag: "h3" },
          { text: "Les bras", classes: "big-title" },
          { text: "Placez la Neva face à vous, le bouton vers l'avant." },
          { text: "Déposez la tête au centre de l'imprimante." },
          { text: "Orientez le ventilateur face à la pièce orange, située à l'arrière de l'imprimante." },
          { text: "Reliez la tête aux chariots à l'aide des bras aimantés." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "NevaMagis/Notice/0-d-b-callibration", type: "video" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h3" },
          { text: "La calibration", classes: "big-title" },
          { text: "Calibrez la machine en suivant les instructions sur l'illustration (effectuez l'étape à chaque fois que vous déplacez l'imprimante)." },
          { text: "Cette étape dure 5 minutes pendant lesquelles votre imprimante va palper le plateau à différents endroits." },
          { text: "Attendez qu'elle ait fini avant de passer à la suite." }
        ]} />
      <Section
        t={t}
        media={{ src: "NevaMagis/Notice/0-d-c-filament", type: "video" }}
        content={[
          { text: "Étape 3", classes: "title tleft", tag: "h3" },
          { text: "Chaaargez !", classes: "big-title" },
          { text: "Prenez votre bobine et déroulez un peu de filament à la main." },
          { text: "N'utilisez pas l'échantillon fournis avec l'imprimante." },
          { text: "Avant chaque insertion, coupez le filament pour que le bout soit propre." },
          { text: "Présentez le filament dans l'extrudeur. Poussez-le jusqu'à ce qu'il soit entraîné par la machine sur quelques centimètres." },
          { text: "Ensuite attendez quelques secondes, elle chauffe." },
          { text: "Elle aspirera le reste du filament toute seule." },
          { text: "Assurez-vous que le filament soit bien arrivé jusqu'à la tête." }
        ]} />
      <Block
        t={t}
        img="NevaMagis/Notice/0-a-magis-bobine.jpg"
        content={[
          { text: "Premiers réglages : CHECK !", classes: "big-title" }
        ]}>
        <Validation t={t} step="/printer/magis/notice-1" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;