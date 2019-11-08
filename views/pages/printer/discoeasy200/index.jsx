var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/de200');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={0} nav={nav} />
        <section className="col-xl-24 bg-gradient-orange row">
        </section>

        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Notice/2-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage DiscoEasy200 - Page 1 - Préparation</h1>
            <h2 className="big-title tleft">Préparons nous au montage</h2>
            <p>Nous allons préparer tous les éléments nécessaires au montage du kit.</p>
            <p className="col-vspace bold">Temps approximatif de montage : 3 heures 30 minutes.</p>
          </section>
        </section>

        <section className="col-xl-24 block-white-space bg-gradient-orange row">
        </section>

        <section id="disco-1-prerequis" className="col-xl-24 display-flex height-350 row">
          <section className="col col-xl-12 col-xl-push-12 col-m-24 col-m-push-0 color-anthracite block-info-cursor row">
            <figure className="notice-small-img">
              <img src="/medias/DiscoEasy/Notice/2-b-prerequis.jpg" alt="" />
            </figure>
          </section>
          <section className="col col-xl-12 col-xl-pull-12 col-m-24 col-m-pull-0 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Les pré-requis</p>
              <p>Un kit Discoeasy200</p>
              <ol className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">1 tournevis hexagonal 2.5mm (fourni)</li>
                <li className="tleft col-vbspace">1 tournevis cruciforme PH1</li>
                <li className="tleft col-vbspace">1 tournevis plat de 3mm</li>
                <li className="tleft col-vbspace">1 cutter ou
                        <a className="link-classic" target="_blank" href="https://dagoma.fr/boutique/produit/accessoires/ebavureur-1.html">
                    1 ébavureur</a></li>
                <li className="tleft col-vbspace">1 maillet</li>
                <li className="tleft col-vbspace">
                  <a className="link-classic" target="_blank" href="https://dagoma.fr/boutique/produit/accessoires/huile-liquide-3.html">
                    De l'huile liquide</a></li>
              </ol>

              <div className="tleft col-vspace">
                <a href="/boutique/accessoires.html" target="_blank" className="new-btn btn-valid btn-big btn-wide">Les accessoires</a>
              </div>
            </div>
          </section>
        </section>

        <section id="disco-1-0" className="col-xl-24 display-flex bg-light-grey-blue height-350 row">
          <section className="col col-xl-12 col-m-24 block-info-cursor row">
            <figure>
              <img src="/medias/DiscoEasy/Notice/2-d-contenu.jpg" alt="" />
            </figure>
          </section>
          <section className="col col-xl-12 col-m-24 row">
            <div className="block-caption-classic block-caption-left row col-vspace">
              <p className="big-title">Dans le carton du kit vous allez trouver …</p>
              <ol className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">1 sachet de composants mécaniques (courroies, roulements, ressorts …)</li>
                <li className="tleft col-vbspace">1 sachet de vis (7 types de visserie)</li>
                <li className="tleft col-vbspace">1 sachet de câbles</li>
                <li className="tleft col-vbspace">1 sachet de composants électroniques</li>
                <li className="tleft col-vbspace">1 tête d’impression prémontée</li>
                <li className="tleft col-vbspace">1 carte de contrôle</li>
              </ol>
              <p className="tleft col-vbspace">1 tournevis hexagonal 2.5 mm et une spatule</p>
              <p className="col-vtspace">Dans le carton, il vous reste 5 moteurs (2 avec poulie, 1 avec roue dentée, 2 plus petits), un ensemble de
                  barres (dans le filet jaune : 5 courtes, 8 longues, 2 filetées), les pièces imprimées, un outil imprimé, un plateau, des éléments
                  de finition et une alimentation.
                  (2 avec poulie, 1 avec roue dentée, 2 plus petits)
                  , un ensemble de barres
                  (dans le filet jaune : 5 courtes, 8 longues, 2 filetées)
                  , les pièces imprimées, un outil imprimé, un plateau, des éléments de finition et une alimentation.
                </p>


              <p className="col-vtspace">Conseil : Sortez les vis et <span className="link-classic">regroupez-les par type</span>. Utilisez un
                    récipient pour ne pas les perdre. Laissez les roulements dans leur sachet.</p>
            </div>
          </section>
        </section>




        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoEasy/Notice/2-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">Je suis prêt : CHECK !</p>
            <div className="checkbox-classic checkbox-full-width">
              <input id="yo" type="checkbox" />
              <label className="tnormal valid-step" data-redirect="/start/discoeasy200/notice-montage-face-avant.html" htmlFor="yo">
                Je valide cette étape !
                </label>
            </div>
          </section>
        </section>
      </Layout>
    );
  }
}

module.exports = Printer;