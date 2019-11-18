const React = require('react');

function NevaVersion(props) {
  return (
    <section className="col-xl-24 col-space row">
      <div className="wrap row">
        <p className="tcenter"><a className="link-classic btn-sub-step"
          data-id="open-neva">Comment vérifier la version de votre Neva ?</a></p>
      </div>
      <div id="open-neva" className="block-hidden block-sub row col-xl-24">
        <div className="col-xl-24 block-white-space">
          <p className="tcenter bold col-vspace">Magis : Numéro de série &gt; 6000</p>
          <p className="tcenter bold col-vspace">Neva : Numéro de série &lt; 6000 ou pas de numéro de série</p>
          <figure className="col-xl-18 col-xl-offset-3 col-l-20 col-l-offset-2 col-m-24 col-m-offset-0 col-space row">
            <img className="col-xl-24" src="/medias/home/n-serie-neva.jpg" alt="Trouver numéro de série de ma Neva" />
          </figure>
        </div>
      </div>
    </section>
  );
}

module.exports = NevaVersion;
