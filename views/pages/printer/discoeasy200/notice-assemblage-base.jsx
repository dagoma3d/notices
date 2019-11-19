var React = require('react');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/de200');
const Title = require('../../../components/title');
const Block = require('../../../components/block');
const Section = require('../../../components/section');
const Validation = require('../../../components/validation');
const Media = require('../../../components/media');

function Printer(props) {
  return (
    <Layout>
      <NavBar active={5} nav={nav} />
      <Title
        small={true}
        content={[
          { text: "Temps approximatif : 20 minutes", classes: "col-vspace" }
        ]} />
      <Block
        img="DiscoEasy/Notice/7-a-intro.jpg"
        content={[
          { text: "Notice de montage DiscoEasy200 - Page 6 - Assemblage de la base", classes: "title tleft", tag: "h1" },
          { text: "Assemblage de la base", classes: "big-title tleft" },
          { text: "Nous allons commencer à assembler l’imprimante 3D. Première étape la base." }
        ]} />
      <Section
        flip={true}
        media={{ src: "DiscoEasy/Notice/7-b-prerequis.jpg", type: "image" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          {
            list: {
              items: [
                { text: "4 barres longues" },
                { text: "L’assemblage des fixations latérales" },
                { text: "L’assemblage de la face avant" },
                { text: "L’assemblage de la face arrière" },
                { text: "La grappe de caches côtés (au nombre de 4 tous différents)" },
                { text: "4 roulements linéaires" },
              ]
            }
          }
        ]} />
      <Section
        media={{ src: "DiscoEasy/Notice/7-c-barre", type: "video" }}
        content={[
          { text: "Étape 1", classes: "title tleft", tag: "h2" },
          { text: "Montage des barres", classes: "big-title" },
          { text: "Prenez la face avant et 4 barres." },
          { text: "Posez la face avant sur sa partie plate." },
          { text: "Montez les 4 barres dans les trous à chaque angle." },
          { text: "Forcez bien pour que les barres soient au fond de chaque trou." },
          { text: "Astuce : Un petit coup de maillet en caoutchouc aidera bien.", classes: "italic bg-light-grey-blue" },
        ]} />
      <Section
        flip={true}
        media={{ src: "DiscoEasy/Notice/7-d-fixe-cote", type: "video" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h2" },
          { text: "Montage des fixations latérales", classes: "big-title" },
          { text: "Introduisez les fixations latérales sur les barres inférieures (les plus proches du logo Dagoma)" },
          { text: "Attention à l’orientation des pièces, soyez attentif aux détails sur la vidéo.", classes: "italic bg-light-grey-blue" },
        ]} />
      <Section
        media={{ src: "DiscoEasy/Notice/7-e-roulements-axe", type: "video" }}
        content={[
          { text: "Étape 3", classes: "title tleft", tag: "h2" },
          { text: "Mise en place des roulements", classes: "big-title" },
          { text: "Ouvrez les sachets des roulements linéaires (encore couverts d’huile)." },
          { text: "Placez délicatement les roulements sur les barres supérieures, deux à droite et deux à gauche." },
          { text: "Astuce : de légères rotations permettent de rentrer le roulement plus facilement.", classes: "italic bg-light-grey-blue" },
          { text: "Une fois montés, faites quelques allers-retours pour qu’ils se fassent à la barre." },
        ]} />
      <Section
        flip={true}
        media={{ src: "DiscoEasy/Notice/7-f-face-ar", type: "video" }}
        content={[
          { text: "Étape 4", classes: "title tleft", tag: "h2" },
          { text: "Montage de la face arrière", classes: "big-title" },
          { text: "Récupérez la face arrière montée." },
          { text: "Présentez-la, extrudeur vers le haut, et à gauche de la machine." },
          { text: "Positionnez les barres en face des trous et enfoncez-les légèrement." },
          { text: "Une fois en place, enfoncez fermement l’ensemble." },
          { text: "Utilisez un maillet si possible pour être sûr que les pièces sont correctement enfoncées." },
        ]} />
      <Section
        media={{ src: "DiscoEasy/Notice/7-f-controle.jpg", type: "image" }}
        content={[
          { text: "Étape 5", classes: "title tleft", tag: "h2" },
          { text: "Petit contrôle surprise", classes: "big-title" },
          { text: "Si vous avez bien suivi les vidéos, vous devez voir 8 petits ronds sur les pièces plastiques." },
          { text: "Les fixations latérales sont sur les barres inférieures." },
          { text: "Les roulements sur les barres supérieures (2 à droite et 2 à gauche)." },
          { text: "Si ce n’est pas le cas, démontez et recommencez." },
        ]} />
      <Section
        flip={true}
        media={{ src: "DiscoEasy/Notice/7-g-serrage-base", type: "video" }}
        content={[
          { text: "Étape 6", classes: "title tleft", tag: "h2" },
          { text: "Verrouillage des barres de la base", classes: "big-title" },
          { text: "Posez la base à plat." },
          { text: "Serrez les 8 vis se trouvant sur les côtés des faces avant et arrière." },
        ]} />
      <Section
        media={{ src: "DiscoEasy/Notice/7-h-cache-cote-av-gauche", type: "video" }}
        content={[
          { text: "Étape 7", classes: "title tleft", tag: "h2" },
          { text: "Installation du cache côté avant gauche", classes: "big-title" },
          { text: "A partir de maintenant, on désignera la face avec le logo comme l'avant et la face avec l'extrudeur comme l'arrière. La gauche sera votre gauche lorsque vous faites face à la machine.", classes: "italic bg-light-grey-blue" },
          { text: "Commencez par pousser les fixations latérales vers l’arrière." },
          { text: "Récupérez la grappe de caches côtés, séparez les pièces et nettoyez-les." },
          { text: "Vous devez avoir deux pièces longues et deux courtes. Pour chaque paire, une aura une géométrie particulière et l’autre sera simple." },
          { text: "Prenez la longue qui a une forme particulière (voir la vidéo). Elle vient se clipser sur la barre du bas. Rapprochez-la de la face avant. Sa forme s’adapte à celle de la face avant." },
        ]} />
      <Section
        flip={true}
        media={{ src: "DiscoEasy/Notice/7-i-cache-cote-av-droit", type: "video" }}
        content={[
          { text: "Étape 8", classes: "title tleft", tag: "h2" },
          { text: "Installation du cache côté avant droit", classes: "big-title" },
          { text: "Récupérez le long cache côté simple." },
          { text: "Clipsez-le sur la barre du bas et rapprochez-le de la face avant." },
          { text: "Respectez bien le sens de la pièce." },
        ]} />
      <Section
        media={{ src: "DiscoEasy/Notice/7-j-cache-cote-ar", type: "video" }}
        content={[
          { text: "Étape 9", classes: "title tleft", tag: "h2" },
          { text: "Installation des caches côtés arrières", classes: "big-title" },
          { text: "Rapprochez les fixations latérales de la face avant pour bien serrer les caches côtés.", classes: "bold" },
          { text: "Clipsez les petits caches côtés. Le simple va à droite (côté extrudeur). L’autre avec le trou va à gauche." },
        ]} />
      <Section
        flip={true}
        media={{ src: "DiscoEasy/Notice/7-k-serrage-fixe-cote", type: "video" }}
        content={[
          { text: "Étape 10", classes: "title tleft", tag: "h2" },
          { text: "Serrage des fixations latérales", classes: "big-title" },
          { text: "Serrez les 4 vis des fixations latérales fermement. Ces pièces vont maintenir toute l’arche de l’axe Z. Elles doivent être bien en place et bien maintenues." },
        ]} />
      <Block
        img="DiscoEasy/Notice/7-l-fin.jpg"
        content={[
          { text: "Montage de la base : CHECK !", classes: "big-title" },
          { text: "Vérifiez que le sens des pièces correspond à la photo." },
          { text: "Gardez la, l’assemblage continue." }
        ]}>
        <Validation step="/printer/de200/notice-montage-axe-z" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;