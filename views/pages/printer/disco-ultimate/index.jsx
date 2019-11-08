var React = require('react');
var Layout = require('../../../layouts/default');
const NavBar = require('../../../components/navbar');
const nav = require('../../../../content/nav/du');

class Printer extends React.Component {
  render() {
    return (
      <Layout>
        <NavBar active={0} nav={nav} />
        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/1-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <h1 className="title tleft">Notice de montage DISCO ULTIMATE - préparation</h1>
            <h2 className="big-title tleft">Préparons nous au montage</h2>
            <p>Nous allons préparer tous les éléments nécessaires au montage du kit.</p>
            <p>Temps approximatif de montage : 3 heures 30 minutes.</p>
          </section>
        </section>

        <section className="col-xl-24 block-white-space bg-gradient-orange row">
        </section>

        <section id="ultimate-1-prerequis" className="col-xl-18 col-xl-offset-3 col-l-24 col-l-offset-0 block-white-space row">
          <section className="col-xl-12 col-l-24 row">
            <figure>
              <img src="/medias/DiscoEasy/Notice/2-b-prerequis.jpg" alt="" />
            </figure>
          </section>
          <section className="col-xl-12 col-l-24 row">
            <div className="block-caption row col-vspace">
              <p className="big-title">Les pré-requis</p>
              <p>Un kit Discoeasy200</p>
              <ol className="list-classic tnormal row tleft-child">
                <li className="tleft col-vbspace">1 tournevis hexagonal 2.5mm (fourni)</li>
                <li className="tleft col-vbspace">1 tournevis cruciforme PH1</li>
                <li className="tleft col-vbspace">1 tournevis plat de 3mm</li>
                <li className="tleft col-vbspace">1 cutter ou 1 ébavureur</li>
                <li className="tleft col-vbspace">1 maillet</li>
                <li className="tleft col-vbspace">De l'huile liquide</li>
              </ol>
            </div>
          </section>
        </section>


        <section className="col-xl-24 notice-mask row">
          <figure className="row col-xl-24">
            <img className="col-xl-24" src="/medias/DiscoUltimate/Notice/1-a-intro.jpg" alt="" />
          </figure>

          <section className="block-caption-classic block-caption-right">
            <p className="big-title">A vos marques … Go !</p>
            <div className="checkbox-classic checkbox-full-width">
              <input id="yo" type="checkbox" />
              <label className="tnormal valid-step" data-redirect="/start/disco-ultimate/notice-2.html" htmlFor="yo">
                Je passe à l'étape suivante
                    </label>
            </div>
          </section>
        </section>
      </Layout >
    );
  }
}

module.exports = Printer;