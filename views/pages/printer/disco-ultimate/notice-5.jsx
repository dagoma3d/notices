const React = require('react');
const Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/du');
const Title = require('../../../components/title');
const Block = require('../../../components/block');
const Section = require('../../../components/section');
const Validation = require('../../../components/validation');

function Printer(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={5} nav={nav} />
      <Block
        t={t}
        img="DiscoUltimate/Notice/5-a-intro.jpg"
        content={[
          { text: "Notice de montage DISCO ULTIMATE - assemblage de la base", classes: "title tleft", tag: "h1" },
          { text: "Assemblage de la base", classes: "big-title tleft", tag: "h2" },
          { text: "Nous allons commencer à assembler l'imprimante 3D. Première étape la base." }
        ]} />
      <Title t={t} content={[]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/5-b-prerequis.jpg", type: "image", classes: "notice-small-img" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          {
            list: {
              items: [
                { text: "A. Plaque de protection avant" },
                { text: "B. Plaque de protection arrière" },
                { text: "C. Face arrière montée" },
                { text: "D. Face avant montée" },
                { text: "E. Lot de cache côtés (4 pièces)" },
                { text: "F. Fixations latérales montées" },
                { text: "G. 4x Barres longues (360mm)" },
                { text: "H. Support de plaques de protection" },
                { text: "I. 4x Roulements linéaires" }
              ]
            }
          },
          { text: "Visserie :" },
          {
            list: {
              items: [
                { text: "8x vis M3x10 (reste 0)" }
              ]
            }
          }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "zOxMh6xRj6w", type: "yt" }}
        content={[
          { text: "Montage des barres", classes: "big-title" },
          { text: "Prenez la face avant et 4 barres." },
          { text: "Posez la face avant sur sa partie plate." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "okXiBXzyGnA", type: "yt" }}
        content={[
          { text: "Montage des fixations latérales", classes: "big-title" },
          { text: "Introduisez les fixations latérales sur les barres inférieures." },
          { text: "Attention à l'orientation des pièces, soyez attentif aux détails sur la vidéo." }
        ]} />
      <Section
        t={t}
        media={{ id: "KXwrq5J3JnQ", type: "yt" }}
        content={[
          { text: "Mise en place des roulements", classes: "big-title" },
          { text: "Ouvrez les sachets des roulements linéaires (encore couverts d'huile)." },
          { text: "Placez délicatement les roulements sur les barres supérieures, deux à droite et deux à gauche." },
          { text: "Astuce : de légères rotations permettent de rentrer le roulement plus facilement." },
          { text: "Une fois montés, faites quelques allers-retours pour qu'ils se fassent à la barre." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "N8GwY_UIcn4", type: "yt" }}
        content={[
          { text: "Montage de la face arrière", classes: "big-title" },
          { text: "Récupérez la face arrière montée." },
          { text: "Présentez-la, extrudeur vers le haut, et à gauche de la machine." },
          { text: "Positionnez les barres en face des trous et enfoncez-les légèrement." },
          { text: "Une fois en place, enfoncez fermement l'ensemble." },
          { text: "Utilisez un maillet si possible pour être sûr que les pièces sont correctement enfoncées." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/5-g-controle.jpg", type: "image" }}
        content={[
          { text: "Petit contrôle surprise", classes: "big-title" },
          { text: "Si vous avez bien suivi les vidéos, vous devez voir 12 petits trous sur les pièces plastiques." },
          { text: "Les fixations latérales sont sur les barres inférieures." },
          { text: "Les roulements sur les barres supérieures (2 à droite et 2 à gauche)." },
          { text: "Si ce n'est pas le cas, démontez et recommencez." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "h1TfAzOB22U", type: "yt" }}
        content={[
          { text: "Installation du cache côté avant droit", classes: "big-title" },
          { text: "A partir de maintenant, on désignera la face avec le logo comme l'avant et la face avec l'extrudeur comme l'arrière. La gauche sera votre gauche lorsque vous faites face à la machine." },
          { text: "Récupérez le cache côté fournis avec l'extrudeur+." },
          { text: "Clipsez-le sur la barre du bas et rapprochez-le de la face avant." },
          { text: "Respectez bien le sens de la pièce." }
        ]} />
      <Section
        t={t}
        media={{ id: "Pb4xFtM7z-w", type: "yt" }} Pb4xFtM7z-w
        content={[
          { text: "Installation du cache côté avant gauche", classes: "big-title" },
          { text: "Prenez le dernier cache côté long." },
          { text: "Clipsez-le sur la barre du bas et rapprochez-le de la face avant." },
          { text: "Respectez bien le sens de la pièce." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "7FG6c7dSgCE", type: "yt" }}
        content={[
          { text: "Installation des caches côtés arrières", classes: "big-title" },
          { text: "Rapprochez les fixations latérales de la face avant pour bien serrer les caches côtés." },
          { text: "Clipsez les petits caches côtés. Le simple va à droite (côté extrudeur). L'autre avec le trou va à gauche." }
        ]} />
      <Section
        t={t}
        media={{ id: "i5hEwuoYb9c", type: "yt" }}
        content={[
          { text: "Installation des plaques de protection noires", classes: "big-title" },
          { text: "Prenez la partie arrière, elle a deux formes prévu pour entourer les moteurs d'extrudeurs (un seul dans votre cas)." },
          { text: "Placez la face lisse / brillante vers le bas." },
          { text: "Prenez 3 vis M3x10 et vissez la dans les trous prévus dans la face arrière." },
          { text: "Prenez le clips de bar (petite pièce imprimée orange). Clipsez la sur la barre et alignez la sur le trou dans la plaque. Vissez le à l'aide d'une autre vis M3x10." },
          { text: "Prenez la partie avant, placez la comme la précédente et vissez les 4 vis M3x10." },
          { text: "Astuce : Bougez la structure pour alignez les trous de vis si nécessaire." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "YlDYXXPeNwg", type: "yt" }}
        content={[
          { text: "Serrage de la base", classes: "big-title" },
          { text: "Suivez la vidéo, vous avez 12 vis à serrer." }
        ]} />
      <Block
        t={t}
        img="DiscoUltimate/Notice/5-m-fin.jpg"
        content={[
          { text: "Assemblage de la base terminé.", classes: "big-title" },
          { text: "Mettez la base de côté, nous continuons le montage." }
        ]}>
        <Validation t={t} step="/printer/du/notice-6" text="Je passe à l'étape suivante" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;
