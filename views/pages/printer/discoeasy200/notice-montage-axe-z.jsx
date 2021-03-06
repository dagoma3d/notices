const React = require('react');
const Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/de200');
const Title = require('../../../components/title');
const Block = require('../../../components/block');
const Section = require('../../../components/section');
const Validation = require('../../../components/validation');

function Printer(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={6} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps approximatif : 25 minutes", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/8-a-intro.jpg"
        content={[
          { text: "Notice de montage DiscoEasy200 - Page 7 - Assemblage de l'axe Z", classes: "title tleft", tag: "h1" },
          { text: "Assemblage de l'axe Z", classes: "big-title tleft" },
          { text: "Nous allons maintenant assembler l'axe Z de l'imprimante 3D. Elle va commencer à ressembler de plus en plus au produit fini." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Notice/8-b-prerequis.jpg", type: "image" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          {
            list: {
              items: [
                { text: "1 axe X assemblé" },
                { text: "1 base" },
                { text: "4 barres longues" },
                { text: "2 anti-woobles (les pièces retirées page 5)" },
                { text: "2 ressorts" },
                { text: "2 coupleurs" },
                { text: "2 moteurs de Z (les plus petits)" },
                { text: "2 tiges filetées" },
                { text: "2 écrous M8 (il doit en rester 0)" },
                { text: "4 vis M3x6 (il doit en rester 4)" },
              ]
            }
          }
        ]} />
      <Section
        t={t}
        media={{ id: "_WPxOo7abg4", type: "yt" }}
        content={[
          { text: "Étape 1", classes: "title tleft", tag: "h2" },
          { text: "Installation des moteurs de Z", classes: "big-title" },
          { text: "La base à plat, prenez un moteur, axe vers le haut, et glissez-le sous la base." },
          { text: "Faites-le ressortir au niveau des fixations latérales." },
          { text: "Orientez le de biais, le connecteur pointant vers la face arrière." },
          { text: "Vissez-le à l'aide de deux vis M3x6." },
          { text: "Prenez ensuite un coupleur. Placez-le sur l'axe du moteur (attention, les deux côtés ont un trou de diamètre différent, choisissez le plus serré)." },
          { text: "Il doit être à fleur de la fixation latérale. Utilisez la spatule pour le poser dessus puis serrez la vis inférieure fermement." },
          { text: "Répétez l'opération sur le second moteur." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "CiJjhhGbTnE", type: "yt" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h2" },
          { text: "Montage des barres de l'axe Z", classes: "big-title" },
          { text: "Prenez les 4 barres longues." },
          { text: "Montez-les dans les trous des fixations latérales." },
          { text: "Forcez bien pour que les barres soient au fond de chaque trou." },
          { text: "Astuce : Un petit coup de maillet en caoutchouc aidera bien.", classes: "italic bg-light-grey-blue" },
        ]} />
      <Section
        t={t}
        media={{ id: "6acmTjy3fxw", type: "yt" }}
        content={[
          { text: "Étape 3", classes: "title tleft", tag: "h2" },
          { text: "Installation de l'axe X", classes: "big-title" },
          { text: "Prenez l'axe X, orientez-le pour que le moteur de X soit à gauche de la machine lorsque la face avant est devant vous." },
          { text: "Insérez les barres dans les roulements sans forcer et faites coulisser l'axe jusqu'en bas." },
          { text: "Faites quelques allers-retours pour que l'ensemble s'ajuste bien." },
          { text: "Mettez ensuite les ressorts dans leur logement comme sur la vidéo." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Notice/8-e-controle.jpg", type: "image" }}
        content={[
          { text: "Étape 4", classes: "title tleft", tag: "h2" },
          { text: "Petite vérification", classes: "big-title" },
          { text: "Normalement voici ce que vous avez obtenu. Vérifiez bien le sens des éléments." },
        ]} />
      <Section
        t={t}
        media={{ id: "k2asdPSAomM", type: "yt" }}
        content={[
          { text: "Étape 5", classes: "title tleft", tag: "h2" },
          { text: "Montage des tiges filetées", classes: "big-title" },
          { text: "Vissez l'écrou M8 sur une tige jusqu'à environ 1 pouce de l'extrémité." },
          { text: "Faites de même sur la seconde tige." },
          { text: "Prenez un anti-wooble. Soulevez un chariot de X. Placez la fourche autour de la tige arrière et alignez l'écrou sur le trou du coupleur." },
          { text: "Reprenez une tige filetée et présentez-la côté écrou dans le logement où se trouve le ressort." },
          { text: "Assurez-vous d'être bien aligné sur l'écrou de l'anti-wooble." },
          { text: "Dévissez la tige pour faire descendre l'écrou en dessous de la lucarne." },
          { text: "Une fois en dessous, commencez à visser dans l'anti-wooble." },
          { text: "Arrêtez de visser lorsque le chariot commence à se lever." },
          { text: "Répétez l'opération sur le deuxième chariot." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "nHGdXm3ABrc", type: "yt" }}
        content={[
          { text: "Étape 6", classes: "title tleft", tag: "h2" },
          { text: "Serrage des coupleurs", classes: "big-title" },
          { text: "Soulevez un chariot pour vous assurer que la tige filetée est bien prise dans le coupleur." },
          { text: "Remettez-le en place puis vissez légèrement pour avoir un peu d'espace." },
          { text: "Appuyez sur le coupleur pour le compresser, puis serrez la vis supérieure." },
          { text: "En relâchant, vous verrez le chariot monter légèrement." },
          { text: "Répétez l'opération sur le second coupleur." },
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/8-h-fin.jpg"
        content={[
          { text: "Assemblage de l'axe Z : CHECK !", classes: "big-title" },
          { text: "Vérifiez que les pièces sont orientées comme sur la photo." },
        ]}>
        <Validation t={t} step="/printer/de200/notice-assemblage-plateau" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;
