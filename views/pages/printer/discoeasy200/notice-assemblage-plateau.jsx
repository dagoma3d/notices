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
      <NavBar t={t} active={7} nav={nav} />
      <Title
        t={t}
        small={true}
        content={[
          { text: "Temps approximatif : 25 minutes", classes: "col-vspace" }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/9-a-intro.jpg"
        content={[
          { text: "Notice de montage DiscoEasy200 - Page 8 - Assemblage du plateau", classes: "title tleft", tag: "h1" },
          { text: "Assemblage du plateau", classes: "big-title tleft" },
          { text: "Nous allons maintenant assembler la pièce qui viendra accueillir vos impression : le plateau." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Notice/9-b-prerequis.jpg", type: "image" }}
        content={[
          { text: "Les pré-requis", classes: "big-title" },
          {
            list: {
              items: [
                { text: "1 grappe de support plateau" },
                { text: "1 plateau" },
                { text: "1 courroie de 85cm" },
                { text: "4 vis fraisées M3x10 cruciforme (il doit en rester 1)" },
                { text: "4 écrous freins M3 (il doit en rester 1)" },
                { text: "1 tournevis cruciforme PH1 (non fourni)" },
              ]
            }
          }
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Notice/9-c-support-plateau", type: "video" }}
        content={[
          { text: "Étape 1", classes: "title tleft", tag: "h2" },
          { text: "Montage des supports plateau", classes: "big-title" },
          { text: "Détachez et nettoyez les pièces à l'aide de la spatule." },
          { text: "Mettez en place les écrous dans les pièces, côté caoutchouc de l’écrou vers les logements qui accueilleront les roulements" },
          { text: "Prenez le grand support, positionnez la lettre A vers le côté le plus court du plateau." },
          { text: "Allez à l'étape d’en dessous pour vérifier le sens.", classes: "bold" },
          { text: "Retirez le scotch qui déborde sur les trous de vis." },
          { text: "Vissez légèrement uniquement pour maintenir les pièces." },
          { text: "Répétez l'opération pour les deux autres pièces (écrous vers l’extérieur)." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Notice/9-c-controle.jpg", type: "image" }}
        content={[
          { text: "Étape 2", classes: "title tleft", tag: "h2" },
          { text: "Vérifions tout ça", classes: "big-title" },
          { text: "Voilà le rendu final. Faites bien attention au sens des éléments." },
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Notice/9-d-clips", type: "video" }}
        content={[
          { text: "Étape 3", classes: "title tleft", tag: "h2" },
          { text: "Installation sur l’imprimante", classes: "big-title" },
          { text: "Faites monter l’axe X pour laisser passer le plateau (tourner les deux coupleurs dans le sens des aiguilles d'une montre)." },
          { text: "Pré-positionnez les roulements sur les barres." },
          { text: "Prenez le plateau avec le support long vers la face avant (comme sur la vidéo)." },
          { text: "Posez le sur les roulements." },
          { text: "Sur un côté, alignez les roulements au milieu des pièces orange." },
          { text: "Appuyez sur le plateau pour clipser les roulements." },
          { text: "Répétez l’opération de l’autre côté." },
          { text: "Faites des aller-retours avec le plateau pour que l’assemblage coulisse bien." },
          { text: "Serrez les vis du plateau (sans forcer)." },
          { text: "Assurez-vous qu’il coulisse toujours après serrage. Si ce n’est pas le cas, desserrez légèrement les vis." },
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ src: "DiscoEasy/Notice/9-e-control-base", type: "video" }}
        content={[
          { text: "Étape 4", classes: "title tleft", tag: "h2" },
          { text: "Contrôle de la perpendicularité de la base", classes: "big-title" },
          { text: "Maintenant que le plateau est monté, nous pouvons effectuer une vérification importante." },
          { text: "Avancez le plateau jusqu'à la face avant." },
          { text: "Vérifiez que les deux soient parallèles (quelques mm d’écart sont acceptables)." },
          { text: "Faites pareil avec la face arrière." },
          { text: "Si ce n’est pas le cas, une barre doit être mal enfoncée (voir page 7)." },
        ]} />
      <Section
        t={t}
        media={{ src: "DiscoEasy/Notice/9-f-courroie", type: "video" }}
        content={[
          { text: "Étape 5", classes: "title tleft", tag: "h2" },
          { text: "Installation de la courroie du plateau", classes: "big-title" },
          { text: "Attention, le plateau est encore mobile, faites attention à vos doigts !", classes: "bold text-red link-classic" },
          { text: "Prenez la courroie de 85cm." },
          { text: "Retournez la Discoeasy200 pour avoir accès au dessous de la machine." },
          { text: "Dans cette vidéo n’hésitez pas à utiliser le bouton pause.", classes: "italic bg-light-grey-blue" },
          { text: "Faites passer le bout de l’inscription A vers B dans le support plateau avant (crans vers le bas de la machine)." },
          { text: "Laissez-le dépasser du côté B d’environ 2cm." },
          { text: "Faites-le coulisser vers le bas pour le verrouiller." },
          { text: "Prenez l'autre bout et faites-le passer au dessus du premier roulement en haut de la face avant (crans vers le roulement)." },
          { text: "Récupérez-le en dessous et tirez pour retirer le mou (faites la même chose à chaque étape). Attention aux vrilles dans la courroie." },
          { text: "Faites passer le bout entre la poulie moteur et le second roulement." },
          { text: "Passez la courroie entre la barre transversale et le plateau." },
          { text: "Sur la face arrière, faites passer la courroie sous le roulement et poussez pour le récupérer au dessus." },
          { text: "Repassez entre la barre et le plateau et faites entrer le bout dans le support plateau avant de B vers A." },
          { text: "Tirez sans forcer sur la courroie pour la tendre et pousser vers le bas pour la verrouiller." },
          { text: "Repliez le bout et faites-le passer dans le clips pour finir." },
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Notice/9-g-fin.jpg"
        content={[
          { text: "Assemblage du plateau : CHECK !", classes: "big-title" },
          { text: "On approche de la fin. Prochaine étape, le câblage." },
        ]}>
        <Validation t={t} step="/printer/de200/notice-cablage" />
      </Block>
    </Layout>
  );
}

module.exports = Printer;