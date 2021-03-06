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
      <NavBar t={t} active={9} nav={nav} />
      <Block
        t={t}
        img="DiscoUltimate/Notice/10-a-intro.jpg"
        content={[
          { text: "Notice de montage DISCO ULTIMATE - finitions", classes: "title tleft", tag: "h1" },
          { text: "Câblage", classes: "big-title tleft", tag: "h2" },
          { text: "Les dernières finitions" },
          { text: "A la fin de cette page, le montage sera terminé." }
        ]} />
      <Title t={t} content={[]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/10-b-prerequis.jpg", type: "image", classes: "notice-small-img" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          {
            list: {
              items: [
                { text: "A. Surface d'accroche Buildgrip" },
                { text: "B. Plaque de fond (blanche sur l'image)" },
                { text: "C. Gaine torsadée (350mm)" },
                { text: "D. Logo imprimé" },
                { text: "E. Couple de fixations hautes" },
                { text: "F. 2x Barres courtes (270mm)" },
                { text: "G. 2x Barres courtes (270mm)" }
              ]
            }
          },
          { text: "Visserie :" },
          {
            list: {
              items: [
                { text: "6x vis M3x16 (reste 5)" },
                { text: "6x écrous M3 (reste 3)" }
              ]
            }
          }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "6rPy5mCtTCE", type: "yt" }}
        content={[
          { text: "Mise en place des vis de serrage", classes: "big-title" },
          { text: "Normalement vous êtes rodé. Prenez 6 écrous et 6 vis M3x16. Placez les écrous dans les logements comme sur la vidéo." },
          { text: "Récupéré le petite pièce imprimée, insérez un écrou et placez la dans son logement avant de la serrer. Ne serrez pas à fond, les barres doivent passer dans les logements." },
          { text: "Faites de même pour la deuxième pièce." },
          { text: "Mettez ensuite deux barres dans les logements prévus à cet effet." }
        ]} />
      <Section
        t={t}
        media={{ id: "RMQ6gxwAdKs", type: "yt" }}
        content={[
          { text: "Finition du portique", classes: "big-title" },
          { text: "Placez l'ensemble sur l'imprimante, la partie la plus haute vers l'avant." },
          { text: "Appuyez fort pour que les pièces soient bien enfoncées." },
          { text: "Serrez les 4 vis présentes sur les côtés." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "abMPzUF0R04", type: "yt" }}
        content={[
          { text: "Ajustement de la tension de la courroie de la tête", classes: "big-title" },
          { text: "Placez la tête à gauche." },
          { text: "Détachez la courroie du côté droit." },
          { text: "Tirez sur le bout libre sans effort." },
          { text: "Forcez pour ajouter 2 crans de tension et re-verrouiller la courroie." },
          { text: "Coupez le bout pour laisser 3 cm de mou." }
        ]} />
      <Section
        t={t}
        media={{ id: "x6cI4AT0AjI", type: "yt" }}
        content={[
          { text: "Serrage de l'axe Z", classes: "big-title" },
          { text: "Serrez les 2 vis restantes en haut puis les 4 vis des fixations latérales." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "OftcXC-WJgs", type: "yt" }}
        content={[
          { text: "Insertion du logo", classes: "big-title" },
          { text: "Prenez le logo Dagoma imprimé en orange." },
          { text: "Clipsez-le dans la face avant pour faire correspondre les formes." }
        ]} />
      <Section
        t={t}
        media={{ id: "uf4ckCovk-0", type: "yt" }}
        content={[
          { text: "Mise en place de la gaine", classes: "big-title" },
          { text: "Prenez la gaine torsadée." },
          { text: "Ajustez les longueurs de câble pour qu'elles soient identiques à l'extérieur de la machine." },
          { text: "Installez-la sur les câbles du moteur et de la butée de X." },
          { text: "Fixez-la ensuite à l'aide d'un collier de serrage au chariot (il y a un passage prévu à cet effet)." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "3d4ci1Fne-s", type: "yt" }}
        content={[
          { text: "Gestion des câbles", classes: "big-title" },
          { text: "Commencez par fixer les câbles de la tête à l'aide d'un collier de serrage." },
          { text: "Ensuite, nous allons faire en sorte de bien maintenir les autres câbles." },
          { text: "Notre solution n'est pas unique." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/10-k-cable-management-controle.jpg", type: "image" }}
        content={[
          { text: "Vérification des câbles", classes: "big-title" },
          { text: "Aucun câble maintenu ne doit dépasser de la machine." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "wZfl8R_WCaw", type: "yt" }}
        content={[
          { text: "Installation de la plaque protectrice de fond", classes: "big-title" },
          { text: "Prenez la plaque de fond et retirez les films protecteurs." },
          { text: "Alignez cette plaque avec le dessous de la machine." },
          { text: "Utilisez les 12 patins caoutchoucs pour maintenir la plaque." },
          { text: "Appuyez fermement dessus pour les bloquer." }
        ]} />
      <Section
        t={t}
        media={{ id: "bOdpeYqQqaE", type: "yt" }}
        content={[
          { text: "Installation du tube PTFE", classes: "big-title" },
          { text: "Ce tube va guider le filament de l'extrudeur jusqu'à la tête d'impression." },
          { text: "Il est maintenu par des raccords pneumatique. Poussez-le bien jusqu'au fond à chaque extrémité. Faites-le passer entre les deux barres du haut de l'imprimante pour le guider." },
          { text: "Attention, sur la tête d'impression, il est important que ce dernier soit bien enfoncé. Regardez sur la vidéo pour avoir une idée de la longueur. Appuyez sur la collerette noire pour retirer le tube." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoUltimate/Notice/10-n-bis-film-plateau.jpg", type: "image" }}
        content={[
          { text: "Retirez le film protecteur du plateau", classes: "big-title" },
          { text: "Si vous avez un film protecteur, pensez à le retirer." }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoUltimate/Notice/10-n-buildgrip.jpg", type: "image" }}
        content={[
          { text: "Installation de la surface d'accroche", classes: "big-title" },
          { text: "Vous trouverez un article complet pour vous expliquer l'installation de la surface d'accroche et sa maintenance.", link: { href: "https://support.dagoma.fr/support/solutions/articles/36000070827-discoeasy200-changer-la-surface-d-accroche", target: "_blank", classes: "new-btn btn-valid btn-wide btn-big", text: "C'est par ici" } }
        ]} />
      <Block
        t={t}
        img="DiscoUltimate/Notice/10-o-fin.jpg"
        content={[
          { text: "Le montage de votre Disco Ultimate est terminé !", classes: "big-title" }
        ]}>
        <Validation t={t} step="/firmware/du" text="Je passe à l'étape suivante" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;
