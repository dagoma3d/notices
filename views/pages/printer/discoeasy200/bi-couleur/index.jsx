var React = require('react');
var Layout = require('../../../../layouts/default');
var NavBar = require('../../../../components/navbar');
var nav = require('../../../../../content/nav/bicolor/de200');

class BiColor extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={0} nav={nav} />
        <section className="col-xl-24 block-white-space color-red text-white row">
          <p className="big-title">Avant de commencer</p>
        </section>
        <div class="wrap row">
          <section class="col-xl-24 display-flex block-video height-350 row">
            <section class="col col-xl-12 col-m-24 bg-white block-info-cursor row">
              <figure>
                <img class="condition-classic" src="/medias/DiscoEasy/Add-on/Bicouleur/1-c-prerequis-impression.jpg" />
              </figure>
            </section>
            <section class="col col-xl-12 col-m-24 row">
              <div class="block-caption-classic block-caption-left row col-vspace">
                <h2 class="big-title tleft">Votre attention s’il vous plaît !</h2>
                <p>Avant de démonter votre imprimante 3D, assurez-vous d’avoir imprimé les pièces nécessaires.</p>
                <ul class="list-classic tnormal col-vbspace row tleft-child">
                  <li class="tleft col-vbspace">Couleur : Gris anthracite.</li>
                  <li class="tleft col-vbspace">Remplissage : 17%.</li>
                  <li class="tleft col-vbspace">Qualité : 0,2mm.</li>
                  <li class="tleft col-vbspace">Supports : Aucun.</li>
                </ul>
                <p>
                  <a class="condition-classic new-btn btn-classic btn-grey" href="http://media.dagoma.fr/stl/stl_bicouleur.zip" download="stl_couleur.zip">
                    Télécharger
                            </a>
                </p>
              </div>
            </section>
          </section>
          <div class="col-xl-24 block-little-space row">
            <a class="new-btn btn-valid btn-big btn-wide btn-valid-options btn-condition" href="/start/discoeasy200/bi-couleur/notice-1.html">
              Je valide cette étape
                </a>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = BiColor;
