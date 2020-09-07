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
      <NavBar t={t} active={9} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps approximatif : 25 minutes", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/11-a-intro.jpg"
        content={[
          { text: "Notice de montage DiscoEasy200 - Page 10 - Finition", classes: "title tleft", tag: "h1" },
          { text: "Les dernières finitions", classes: "big-title tleft" },
          { text: "Nous allons maintenant mettre la touche finale avant de commencer à la mettre en marche." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Notice/11-b-prerequis.jpg", type: "image" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          {
            list: {
              items: [
                { text: "1 gaine torsadée" },
                { text: "1 tube blanc (PTFE)" },
                { text: "2 pièces en plastique (appelées top)" },
                { text: "8 patins antidérapants" },
                { text: "4 colliers de serrage" },
                { text: "2 barres courtes" },
                { text: "8 écrous M3 (il doit en rester 1)" },
                { text: "8 vis M3x16 (il doit en rester 1)" },
              ]
            }
          }
        ]} />
      <Section
        t={t}
        media={{ id: "y3MpRMjUmyQ", type: "yt" }}
        content={[
          { text: "Étape 1", classes: "title tleft", tag: "h2" },
          { text: "Mise en place des vis de serrage", classes: "big-title" },
          { text: "Normalement vous êtes rodé. Prenez 8 écrous et 8 vis. Placez les écrous dans les logements comme sur la vidéo. Mettez en place les vis sans trop serrer, juste pour maintenir les écrous et éviter que les vis ne bougent. Nous les serrerons plus tard pour maintenir les barres." },
          { text: "Faites de même pour la deuxième pièce." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "UrbF3gU6H24", type: "yt" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h2" },
          { text: "Mise en place des barres", classes: "big-title" },
          { text: "Mettez les deux pièces à plat, en symétrie." },
          { text: "Introduisez les barres." },
          { text: "Placez l'ensemble sur l'imprimante, la partie la plus haute vers l'avant." },
          { text: "Appuyez fort pour que les pièces soient bien enfoncées." },
          { text: "Serrez les 8 vis du haut et les 4 vis présentes sur les côtés des fixations latérales." },
        ]} />
      <Section
        t={t}
        media={{ id: "fG_7xwTHC0E", type: "yt" }}
        content={[
          { text: "Étape 3", classes: "title tleft", tag: "h2" },
          { text: "Ajustement de la tension de courroie de la tête", classes: "big-title" },
          { text: "Placez la tête à gauche." },
          { text: "Détachez la courroie du côté droit." },
          { text: "Tirez sur le bout libre sans effort." },
          { text: "Forcez pour ajouter 2 crans de tension et re-verrouiller la courroie." },
          { text: "Couper le bout pour laisser 3 cm de mou." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "d8nT5L8Z9Zg", type: "yt" }}
        content={[
          { text: "Étape 4", classes: "title tleft", tag: "h2" },
          { text: "Ajustement de la tension de courroie du plateau", classes: "big-title" },
          { text: "Mettez la machine à l'envers." },
          { text: "Débloquez le bout replié de la courroie, puis déverouillez-la en la poussant vers la droite." },
          { text: "Faites-la passer entre la face avant et le plateau." },
          { text: "Tirez sur le bout libre sans effort." },
          { text: "Forcez pour ajouter 2 crans de tension et re-verrouiller la courroie." },
          { text: "Repliez le bout libre dans l'encoche de départ." },
        ]} />
      <Section
        t={t}
        media={{ id: "CO99gtptxz8", type: "yt" }}
        content={[
          { text: "Étape 5", classes: "title tleft", tag: "h2" },
          { text: "Mise en place de la gaine", classes: "big-title" },
          { text: "Placez la tête à droite de la machine (en vue de face)." },
          { text: "Engagez la gaine torsadé sur le début des câbles de la tête sur quelques centimètres." },
          { text: "Sur la tête, replacez les câbles convenablement." },
          { text: "Faites passer la gaine dans la forme sur la tête." },
          { text: "Prenez un collier de serrage, placez-le dans le trou comme sur la vidéo." },
          { text: "Serrez-le puis coupez le surplus qui dépasse." },
          { text: "Continuez de torsader la gaine jusqu'à atteindre l'angle supérieur opposé de l'imprimante." },
          { text: "Clipsez la gaine sur le chariot de gauche." },
          { text: "Récupérez les câbles du moteur et de la butée de X et continuez la gaine." },
          { text: "Egalisez la longueur des câbles en les tirants vers l'intérieur de l'imprimante." },
          { text: "Continuez la gaine jusqu'à l'entrée de la fixation latérale (coupez le surplus si besoin)." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "HBTfuzBZo9A", type: "yt" }}
        content={[
          { text: "Étape 6", classes: "title tleft", tag: "h2" },
          { text: "Gestion des câbles", classes: "big-title" },
          { text: "Dans cette étape, nous allons faire en sorte de bien maintenir les câbles. Notre solution n'est pas unique mais si vous ne vous sentez pas inspiré, suivez la vidéo." },
          { text: "Il est important qu'aucun câble ne se balade au dessus de la carte pour éviter d'être abîmé par le plateau." },
        ]} />
      <Section
        t={t}
        media={{ id: "gUpfMXQvzCo", type: "yt" }}
        content={[
          { text: "Étape 7", classes: "title tleft", tag: "h2" },
          { text: "Mise en place des patins antidérapant", classes: "big-title" },
          { text: "Des emplacements sont prévus sous la machine sur la face avant, la face arrière et les fixations latérales, collez-y un patin sur chacun." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "fjdKJRYabq4", type: "yt" }}
        content={[
          { text: "Étape 8", classes: "title tleft", tag: "h2" },
          { text: "Installation du tube PTFE", classes: "big-title" },
          { text: "Ce tube va guider le filament de l'extrudeur jusqu'à la tête d'impression." },
          { text: "Il est maintenu par des raccords pneumatique. Poussez-le bien jusqu'au fond à chaque extrémité. Faites-le passer entre les deux barres du haut de l'imprimante pour le guider." },
          { text: "Attention, sur la tête d'impression, il est important que ce dernier soit bien enfoncé. Regardez sur la vidéo pour avoir une idée de la longueur. Appuyez sur la collerette noire pour retirer le tube." },
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/11-k-fin.jpg"
        content={[
          { text: "Finitions : CHECK !", classes: "big-title" },
          { text: "Le montage est terminé. Soufflez, profitez, maintenant on va la mettre en marche." },
        ]}>
        <Validation t={t} step="/printer/de200/notice-controle" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;
