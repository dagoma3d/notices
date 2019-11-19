const React = require('react');
const Layout = require('../../../layouts/default');
const GoogleDocument = require('../../../components/google-document');

function Printer(props) {
  const title = "Notice première utilisation";
  return (
    <Layout title={title}>
      <GoogleDocument title={title} id="1fOs7uHSiLsyRWO7CqBD_T2zFc1euJbUjEWQF60E0joM">
        <div className="col-xl-20 col-s-24 margin-bottom-shop tcenter">
          <p>Cette notice de première utilisation vous permettra :&nbsp;</p>
          <ul>
            <li>de calibrer votre imprimante</li>
            <li>de télécharger et d'utiliser Cura by Neva</li>
            <li>de lancer votre première impression 3D</li>
          </ul>
        </div>
      </GoogleDocument>
    </Layout>
  );
}

module.exports = Printer;