const React = require('react');
const Layout = require('../../../../layouts/default');
const NavBar = require('../../../../components/navbar');
const nav = require('../../../../../content/nav/bicolor/de200');
const Block = require('../../../../components/block');
const Section = require('../../../../components/section');
const Validation = require('../../../../components/validation');

function BiColor(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={2} nav={nav} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/Bicouleur/2-a-intro.jpg"
        content={[
          { text: "Notice de montage pack bi-couleur - préparation et démontage", classes: "title tleft", tag: "h1" },
          { text: "Transfert des composants.", classes: "big-title tleft" },
          { text: "Nous allons transférer certains composants de votre ancienne imprimante dans les nouvelles pièces imprimées." }
        ]} />
      <Section
        t={t}
        media={{ id: "NrCEmVkD-IU", type: "yt" }}
        content={[
          { text: "Montage des roulements linéaires", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez les 6 roulements LM8UU livrés avec votre pack. Insérez les roulements dans les chariots que vous avez imprimés. Faites bien attention et insérez les bien droit pour éviter de casser votre pièce." },
          { text: "Astuce : Placez vous en bord de table et tapez à l'aide d'un maillet en caoutchouc.", classes: "italic" }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "r2QiciuZN6U", type: "yt" }}
        content={[
          { text: "Récupération des roulements de courroie X", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez le chariot droit de l'axe X." },
          { text: "Dévissez la vis qui maintient les 2 roulements de courroie." },
          { text: "Mettez l'ancienne pièce de côté." },
          { text: "Installez les roulements dans la nouvelle pièce." }
        ]} />
      <Section
        t={t}
        media={{ id: "QpEgkxH984c", type: "yt" }}
        content={[
          { text: "Récupération du moteur de x et de la butée", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez le chariot gauche de l'axe X." },
          { text: "Retirez les vis qui tiennent le moteur." },
          { text: "Retirez le moteur." },
          { text: "Retirez la butée et remontez-la dans la nouvelle pièce (attention à l'orientation de la languette)." },
          { text: "Mettez le moteur en place dans la nouvelle pièce (respectez la même orientation)." },
          { text: "Revissez-le (aidez-vous de l'outil imprimé pour placer la dernière vis)." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "GbbNgkJ-m90", type: "yt" }}
        content={[
          { text: "Démontage de l'extrudeur", classes: "big-title tleft", tag: "h2" },
          { text: "Retirez les 3 vis de l'extrudeur." },
          { text: "Retirez l'extrudeur une fois libéré." },
          { text: "Retirez le moteur." }
        ]} />
      <Section
        t={t}
        media={{ id: "Vqim7MYfgDg", type: "yt" }}
        content={[
          { text: "Récupération des roulements de courroie Y", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez la face arrière." },
          { text: "Dévissez la vis qui maintient les 2 roulements de courroie." },
          { text: "Installez les roulements dans la nouvelle face arrière." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "kCJ-efn9Yes", type: "yt" }}
        content={[
          { text: "Retirez les vis de serrage", classes: "big-title tleft", tag: "h2" },
          { text: "Toujours sur la face arrière, retirez les 4 vis de serrage." },
          { text: "Récupérez également les écrous." },
          { text: "Décollez les patins de l'ancienne pièce pour les mettres sur la nouvelle." }
        ]} />
      <Section
        t={t}
        media={{ id: "hLLLwNQb0GQ", type: "yt" }}
        content={[
          { text: "Remontage des extrudeurs", classes: "big-title tleft", tag: "h2" },
          { text: "Montez l'extrudeur livré avec votre pack en suivant la vidéo." },
          { text: "Prenez vos moteurs d'extrudeur. Placez les dans le face arrière." },
          { text: "Les connecteurs doivent se faire face.", classes: "text-red" },
          { text: "Montez ensuite les extrudeur en suivant la vidéo." },
          { text: "Suivez les marquages E0 et E1 pour l'emplacement.", classes: "text-red" },
          { text: "Pour plus de détails,", link: { target: "_blank", href: "/addon/extruder-plus/de200", classes: "link-classic", text: "rendez-vous ici" } }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "kw9A0y43vqE", type: "yt" }}
        content={[
          { text: "Serrage du bras d'extrudeur", classes: "big-title tleft", tag: "h2" },
          { text: "Le bras ne doit pas être trop serré pour éviter de le bloquer." },
          { text: "Serrez jusqu'à voir disparaître le jour entre les deux pièces orange." },
          { text: "Desserrez d'un quart de tour pour le faire réapparaître." }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/Bicouleur/2-i-fin.jpg"
        content={[
          { text: "Transfert des composants terminé", classes: "big-title" }
        ]}>
        <Validation t={t} step="/addon/bicolor/de200/notice-3" />
      </Block>
    </Layout>
  );
}

module.exports = BiColor;
