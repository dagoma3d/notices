const React = require('react');
const Layout = require('../../../layouts/default');
const GoogleDocument = require('../../../components/google-document');

function Printer(props) {
  const t = props.__;
  const title = "Notice première utilisation";
  return (
    <Layout t={t} title={title}>
      <GoogleDocument t={t} title={title} id="1fOs7uHSiLsyRWO7CqBD_T2zFc1euJbUjEWQF60E0joM">
        <div className="col-xl-20 col-s-24 margin-bottom-shop tcenter">
          <p>{t("Cette notice de première utilisation vous permettra :")}</p>
          <ul>
            <li>{t("de calibrer votre imprimante")}</li>
            <li>{t("de télécharger et d'utiliser Cura by Dagoma")}</li>
            <li>{t("de lancer votre première impression 3D")}</li>
          </ul>
        </div>
      </GoogleDocument>
    </Layout>
  );
}

module.exports = Printer;