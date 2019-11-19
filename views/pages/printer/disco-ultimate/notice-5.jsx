var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/du');
const SimpleTitle = require('../../../components/simple-title');
const BasicSection = require('../../../components/basic-section');
const SimpleSection = require('../../../components/simple-section');
const Validation = require('../../../components/validation');

function Printer(props) {
  return (
    <Layout>
      <NavBar active={5} nav={nav} />
      <BasicSection
        img="DiscoUltimate/Notice/5-a-intro.jpg"
        content={[
          { text: "Notice de montage DISCO ULTIMATE - assemblage de la base", classes: "title tleft", tag: "h1" },
          { text: "Assemblage de la base", classes: "big-title tleft", tag: "h2" },
          { text: "Nous allons commencer à assembler l’imprimante 3D. Première étape la base." }
        ]} />
      <SimpleTitle content={[]} />
      <SimpleSection
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
      <SimpleSection
        flip={true}
        media={{ src: "DiscoEasy/Notice/7-c-barre", type: "video" }}
        content={[
          { text: "Montage des barres", classes: "big-title" },
          { text: "Prenez la face avant et 4 barres." },
          { text: "Posez la face avant sur sa partie plate." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoUltimate/Notice/5-d-fixe-cote", type: "video" }}
        content={[
          { text: "Montage des fixations latérales", classes: "big-title" },
          { text: "Introduisez les fixations latérales sur les barres inférieures." },
          { text: "Attention à l’orientation des pièces, soyez attentif aux détails sur la vidéo." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoUltimate/Notice/5-e-roulements-axe", type: "video" }}
        content={[
          { text: "Mise en place des roulements", classes: "big-title" },
          { text: "Ouvrez les sachets des roulements linéaires (encore couverts d’huile)." },
          { text: "Placez délicatement les roulements sur les barres supérieures, deux à droite et deux à gauche." },
          { text: "Astuce : de légères rotations permettent de rentrer le roulement plus facilement." },
          { text: "Une fois montés, faites quelques allers-retours pour qu’ils se fassent à la barre." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoUltimate/Notice/5-f-face-ar", type: "video" }}
        content={[
          { text: "Montage de la face arrière", classes: "big-title" },
          { text: "Récupérez la face arrière montée." },
          { text: "Présentez-la, extrudeur vers le haut, et à gauche de la machine." },
          { text: "Positionnez les barres en face des trous et enfoncez-les légèrement." },
          { text: "Une fois en place, enfoncez fermement l’ensemble." },
          { text: "Utilisez un maillet si possible pour être sûr que les pièces sont correctement enfoncées." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoUltimate/Notice/5-g-controle.jpg", type: "image" }}
        content={[
          { text: "Petit contrôle surprise", classes: "big-title" },
          { text: "Si vous avez bien suivi les vidéos, vous devez voir 12 petits trous sur les pièces plastiques." },
          { text: "Les fixations latérales sont sur les barres inférieures." },
          { text: "Les roulements sur les barres supérieures (2 à droite et 2 à gauche)." },
          { text: "Si ce n’est pas le cas, démontez et recommencez." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoUltimate/Notice/5-h-cache-cote-av-droit", type: "video" }}
        content={[
          { text: "Installation du cache côté avant droit", classes: "big-title" },
          { text: "A partir de maintenant, on désignera la face avec le logo comme l'avant et la face avec l'extrudeur comme l'arrière. La gauche sera votre gauche lorsque vous faites face à la machine." },
          { text: "Récupérez le cache côté fournis avec l’extrudeur+." },
          { text: "Clipsez-le sur la barre du bas et rapprochez-le de la face avant." },
          { text: "Respectez bien le sens de la pièce." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoUltimate/Notice/5-i-cache-cote-av-gauche", type: "video" }}
        content={[
          { text: "Installation du cache côté avant gauche", classes: "big-title" },
          { text: "Prenez le dernier cache côté long." },
          { text: "Clipsez-le sur la barre du bas et rapprochez-le de la face avant." },
          { text: "Respectez bien le sens de la pièce." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoUltimate/Notice/5-j-cache-cote-ar", type: "video" }}
        content={[
          { text: "Installation des caches côtés arrières", classes: "big-title" },
          { text: "Rapprochez les fixations latérales de la face avant pour bien serrer les caches côtés." },
          { text: "Clipsez les petits caches côtés. Le simple va à droite (côté extrudeur). L’autre avec le trou va à gauche." }
        ]} />
      <SimpleSection
        media={{ src: "DiscoUltimate/Notice/5-k-installation-plaques-sup", type: "video" }}
        content={[
          { text: "Installation des plaques de protection noires", classes: "big-title" },
          { text: "Prenez la partie arrière, elle a deux formes prévu pour entourer les moteurs d’extrudeurs (un seul dans votre cas)." },
          { text: "Placez la face lisse / brillante vers le bas." },
          { text: "Prenez 3 vis M3x10 et vissez la dans les trous prévus dans la face arrière." },
          { text: "Prenez le clips de bar (petite pièce imprimée orange). Clipsez la sur la barre et alignez la sur le trou dans la plaque. Vissez le à l’aide d’une autre vis M3x10." },
          { text: "Prenez la partie avant, placez la comme la précédente et vissez les 4 vis M3x10." },
          { text: "Astuce : Bougez la structure pour alignez les trous de vis si nécessaire." }
        ]} />
      <SimpleSection
        flip={true}
        media={{ src: "DiscoUltimate/Notice/5-l-serrage-base", type: "video" }}
        content={[
          { text: "Serrage de la base", classes: "big-title" },
          { text: "Suivez la vidéo, vous avez 12 vis à serrer." }
        ]} />
      <BasicSection
        img="DiscoUltimate/Notice/5-m-fin.jpg"
        content={[
          { text: "Assemblage de la base terminé.", classes: "big-title" },
          { text: "Mettez la base de côté, nous continuons le montage." }
        ]}>
        <Validation step="/printer/du/notice-6" text="Je passe à l'étape suivante" />
      </BasicSection>
    </Layout>
  );
}

module.exports = Printer;
