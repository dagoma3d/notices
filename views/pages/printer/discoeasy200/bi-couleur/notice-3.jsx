const React = require('react');
const Layout = require('../../../../layouts/default');
const NavBar = require('../../../../components/navbar');
const nav = require('../../../../../content/nav/bicolor/de200');
const Block = require('../../../../components/block');
const Section = require('../../../../components/section');
const Validation = require('../../../../components/validation');
const HiddenVideo = require('../../../../components/hidden-video');

function BiColor(props) {
  const t = props.__;
  return (
    <Layout t={t}>
      <NavBar t={t} active={3} nav={nav} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/Bicouleur/2-i-fin.jpg"
        content={[
          { text: "Notice de montage pack bi-couleur", classes: "title tleft", tag: "h1" },
          { text: "Installation du pack bi-couleur.", classes: "big-title tleft" },
          { text: "Nous allons maintenant remonter votre DiscoEasy200 avec les éléments du pack bi-couleur." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "hhJ-ITH0Ybw", type: "yt" }}
        content={[
          { text: "Installation de la face arrière", classes: "big-title tleft", tag: "h2" },
          { text: "Présentez la face arrière comme sur la vidéo." },
          { text: "Alignez les barres avec les emplacements dans la face arrière." },
          { text: "Poussez pour que les barres se logent dans ces emplacements." },
          { text: "Pour l'enfoncer convenablement, bloquez la face avant et tapez sur la face arrière avec un outil adapté (ex: maillet en caoutchouc)." },
          { text: "Un fois bien en place, serrez les vis latérale." },
          { text: "Astuce : Utilisez le plateau pour vérifier l'équerrage.", classes: "italic" }
        ]}>
        <HiddenVideo t={t} id="H0yMALquw8A" />
      </Section>
      <Section
        t={t}
        media={{ id: "Nf-nci005Ao", type: "yt" }}
        content={[
          { text: "Installation de la courroie du plateau", classes: "big-title tleft", tag: "h2" },
          { text: "Attention, le plateau est encore mobile, faites attention à vos doigts !", classes: "text-red" },
          { text: "Retournez la Discoeasy200 pour avoir accès au dessous de la machine." },
          { text: "Faites passer le brin de l'inscription A vers B dans le support plateau avant (les crans vers vous)." },
          { text: "Laissez le brin dépasser du côté B d'environ 2cm." },
          { text: "Faites-le coulisser vers la gauche pour le verrouiller." },
          { text: "Passez entre la carte de contrôle et le plateau, bien au dessus des câbles.", classes: "text-red" },
          { text: "Prenez l'autre brin et faites-le passer au dessus du premier roulement en haut de la face avant (crans vers le roulement)." },
          { text: "Récupérez-le en dessous et tirez pour retirer le mou." },
          { text: "Attention aux vrilles dans la courroie.", classes: "text-red" },
          { text: "Faites passer le brin entre la poulie moteur et le second roulement." },
          { text: "Passez la courroie derrière la carte." },
          { text: "Sur la face arrière, faites passer la courroie sous le roulement et poussez pour le récupérer au dessus." },
          { text: "Faites entrer le brin dans le support plateau avant de B vers A." },
          { text: "Tirez sur la courroie pour la tendre et pousser vers le bas pour la verrouiller." },
          { text: "Repliez le brin et faites-le passer dans le clips pour finir." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "ZxKyORfWNnU", type: "yt" }}
        content={[
          { text: "Remontage de l'axe X", classes: "big-title tleft", tag: "h2" },
          { text: "Introduisez les barres avec délicatesse dans les roulements (faites quelques rotations pour faciliter leur entrée). Une fois en place, faites quelques allers-retours pour vérifier que tout va bien." },
          { text: "Maintenant faites attention au sens des pièces. Référez-vous à la vidéo pour orienter les pièces. Le chariot avec le moteur sera à gauche, l'autre à droite. Dans l'étape suivante vous pourrez vérifier tout ça." }
        ]} />
      <Section
        t={t}
        media={{ id: "3Yvpvgz-ckE", type: "yt" }}
        content={[
          { text: "Installation de la courroie de la tête", classes: "big-title tleft", tag: "h2" },
          { text: "Retournez l'ensemble pour voir le dessous de la tête." },
          { text: "Reprenez la courroie." },
          { text: "Les crans vers le haut de la tête, introduisez la courroie dans le trou supérieur." },
          { text: "Récupérez-la de l'autre côté et faites-la revenir à droite (attention aux vrilles)." },
          { text: "Dans le chariot de droite, passez au-dessus des roulements puis revenez en dessous (crans vers le roulement)." },
          { text: "Tirez dessus pour récupérer du mou." },
          { text: "Faites revenir la courroie vers le chariot de gauche en passant sous la tête." },
          { text: "Passez la courroie sous la poulie du moteur et revenez par dessus." },
          { text: "Dirigez le brin de la courroie vers la tête. Placez la courroie dans le logement (allez jusqu'au dernier cran)." },
          { text: "Reprenez l'autre brin et tirez dessus pour tendre la courroie. Tendez sans forcer, juste pour que tout tienne en place. Poussez la courroie pour la verrouiller dans les crans de la tête." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "o_HlS5ri1NM", type: "yt" }}
        content={[
          { text: "Installation de l'axe X", classes: "big-title tleft", tag: "h2" },
          { text: "Prenez l'axe X, orientez-le comme sur la vidéo." },
          { text: "Insérez les barres dans les roulements sans forcer et faites-le coulisser jusqu'en bas." },
          { text: "Faites quelques allers-retours pour que l'ensemble s'ajuste bien." },
          { text: "Vissez l'écrou M8 sur une tige jusqu'à environ 1 pouce de l'extrémité." },
          { text: "Faites de même sur la seconde tige." },
          { text: "Mettez un ressort dans le logement sur le chariot." },
          { text: "Prenez un anti-wooble. Soulevez un chariot de X. Placez la fourche autour de la tige arrière et alignez l'écrou sur le trou du coupleur." },
          { text: "Reprenez une tige filetée et présentez-la côté écrou dans le logement où se trouve le ressort." },
          { text: "Dévissez la tige pour faire descendre l'écrou en dessous de la lucarne." },
          { text: "Une fois en dessous, commencez à visser dans l'anti-wooble." },
          { text: "Arrêtez de visser lorsque le chariot commence à se lever." },
          { text: "Répétez l'opération sur le deuxième chariot." },
          { text: "Soulevez un chariot pour vous assurer que la tige filetée est bien prise dans le coupleur." },
          { text: "Remettez-le en place, appuyez sur le coupleur pour le compresser, puis serrez la vis supérieure." },
          { text: "Répétez l'opération sur le second coupleur." }
        ]} />
      <Section
        t={t}
        media={{ id: "ehYSZztI3Zk", type: "yt" }}
        content={[
          { text: "Câblage de l'axe X", classes: "big-title tleft", tag: "h2" },
          { text: "Rebranchez ensuite le moteur de X." },
          { text: "Prenez le câble de la butée et faites-le passer sous la machine en suivant ceux déjà en place." },
          { text: "Rebranchez la butée sur le connecteur X+." }
        ]} />
      <Section
        t={t}
        flip={true}
        media={{ id: "Hb01HZXPGlw", type: "yt" }}
        content={[
          { text: "Câblage de la tête", classes: "big-title tleft", tag: "h2" },
          { text: "Dénudez tous les câbles avant de les brancher." },
          { text: "Tous les fils doivent suivre le même passage que le câble de la butée." },
          { text: "Récupérez le câble du palpeur (le gris) et raccordez-le ensuite sur le connecteur Y+." },
          { text: "Récupérez le câble de la sonde (le blanc) et raccordez-le ensuite sur le connecteur A13." },
          { text: "Récupérez les câbles du ventilateur arrière et repérez-les (nous avons fait un petit noeud)." },
          { text: "Raccordez les deux fils rouge (ou marron) sur le bornier E0 (pas de sens entre + et -)." },
          { text: "Prenez ensuite les câbles du ventilateur non repéré (ventilateur avant)." },
          { text: "Raccordez les deux fils sur le bornier E1 (rouge sur + et noire sur -)." },
          { text: "Raccordez les deux derniers fils repérés sur le bornier FAN (rouge sur + et noire sur -)." },
          { text: "NB: Votre connecteur A13 est différent ?", classes: "col-vtspace text-red italic" }
        ]}>
        <HiddenVideo t={t} id="JInMwtu_4n4" />
      </Section>
      <Section
        t={t}
        media={{ id: "bRjaMLajTKU", type: "yt" }}
        content={[
          { text: "Câblage des extrudeurs", classes: "big-title tleft", tag: "h2" },
          { text: "Rebranchez le câble raccordé sur la borne E0_MOT à l'extrudeur E0." },
          { text: "Prenez le câble fournis dans le pack et raccordez l'extrudeur E1 à la borne E1_MOT." },
          { text: "Branchez le fil rouge du capteur de fin de filament de l'extrudeur E1 sur la borne Y-." }
        ]} />
      <Block
        t={t}
        img="DiscoEasy/Add-on/Bicouleur/3-k-fin.jpg"
        content={[
          { text: "Montage du pack bi-couleur terminé", classes: "big-title" }
        ]}>
        <Validation t={t} step="/addon/bicolor/de200/notice-4" />
      </Block>
    </Layout>
  );
}

module.exports = BiColor;
