const React = require('react');
const Layout = require('../../../../layouts/default');
const NavBar = require('../../../../components/navbar');
const nav = require('../../../../../content/nav/xl/du');
const Title = require('../../../../components/title');
const Block = require('../../../../components/block');
const Section = require('../../../../components/section');
const Validation = require('../../../../components/validation');

function Xl(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={3} nav={nav} />
      <Title
        t={t}
        content={[
          { text: "PARTIE 2.3 - Electronique et le plateau XL !", classes: "big-title" },
        ]} />
      <Section
        t={t}
        media={{ id: "gL9pE1s4AKg", type: "yt" }}
        content={[
          { text: "30 - branchements électronique", classes: "big-title tleft", tag: "h2" },
          { text: "La première étape consiste à re-positionner la carte électronique. Vissez les 2 vis de maintien (M3-6mm)." },
          { text: "Ensuite, passez au câblage. pour cela, suivez le guide par ", link: { href: "/printer/du/notice-9", target: "_blank", text: "ici" } },
          { text: "Enfin, vous pouvez ré-installer la plaque de protection transparente en positionnant les 12 patins antis dérapant." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "3fJs_3eS3CI", type: "yt" }}
        content={[
          { text: "31 - installation des patins extérieur", classes: "big-title tleft", tag: "h2" },
          { text: "Ajouter les 4 patins extérieur sur les fixations cotés." }
        ]} />
      <Section
        t={t}
        media={{ id: "eGlCMGdKGGk", type: "yt" }}
        content={[
          { text: "32 - préparation du plateau XL", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez les vis M3-6mm et 2 écrous. Nous allons les installer sur les 2 oreilles. Attention au sens : la tête de la vis doit se trouver sur le plateau XL du coté des fraisages - comme montré sur la vidéo." },
          { text: "Serrez les vis M3-6mm à fond." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "q6KSlxXTL9Q", type: "yt" }}
        content={[
          { text: "33 - installation du plateau XL", classes: "big-title tleft", tag: "h2" },
          { text: "Placez le plateau avec les oreilles vers l'arrière de la Disco." },
          { text: "Vissez légèrement les 4 vis fraisées de 10mm, (les écrous frein n'ont pas été enlevé), puis après avoir installé et pré-vissé les 4 vis, vous pouvez serrer à fond." },
          { text: "Il est important de visser correctement à ce moment là, tout en vérifiant que votre plateau XL coulisse correctement suivant l'axe Y (avant / arr.)." },
        ]} />
      <Section
        t={t}
        media={{ id: "Auvbl-zhMLE", type: "yt" }}
        content={[
          { text: "34 - installation du plateau flex XL", classes: "big-title tleft", tag: "h2" },
          { text: "3 étapes dans cette vidéo :", classes: "bold" },
          { text: "1- installation de l'aimant : nettoyer et enlevez la poussière sur le plateau en fibre, puis positionnez l'aimant : pour cela vous pouvez utiliser les 2 vis à l'arrière du plateau pour venir le bloquer. Attention, lors du collage, il est imporant de NE PAS créer de bulles d'air sous l'aimant. Retirez le film protecteur et collez l'aimant." },
          { text: "2- vous pouvez désormais placer la tole flexible XL sur l'aimant. les 2 vis au niveau des oreilles à l'arrière du plateau XL servent à venir le positionner." },
          { text: "3- coller le Buildgrip XL. Faire bien attention à ne pas créer de bulles sous le buildgrip." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "LYd8lqV80y4", type: "yt" }}
        content={[
          { text: "35 - premier essai !", classes: "big-title tleft", tag: "h2" },
          { text: "Ne pas oublier de remettre le ou les tubes PTFE dans le buse, et vous pouvez tester votre plateau : voici la démo en vidéo !" }
        ]} />
      <Section
        t={t}
        media={{ id: "UJC7JPnJ0qo", type: "yt" }}
        content={[
          { text: "36 - Option écran", classes: "big-title tleft", tag: "h2" },
          { text: "Vous avez l'add-on 1 : l'écran. vous êtes au bon endroit : suivez le dernier guide." },
          { text: "Vous avez une vis supplémentaire afin de viser le nouveau bloc de déport de l'écran sur le cache coté." },
        ]} />
      <Block
        t={t}
        content={[
          { text: "Montage terminé", classes: "big-title" }
        ]}>
        <Validation t={t} step="/firmware/du/xl" />
      </Block>
    </Layout>
  );
}

module.exports = Xl;