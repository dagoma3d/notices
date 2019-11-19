const React = require('react');
const Layout = require('../../layouts/default');
const GoogleDocument = require('../../components/google-document');

function Screen(props) {
  const t = props.__;
  const title = "Montage de l'écran";
  const subtitle = "Premiers pas";
  return (
    <Layout t={t} title={title}>
      <GoogleDocument t={t} title={subtitle + " - " + title} id="1D9PiUPmOgiQVTnK-sEzR3mkpcpyyLFintxThjpuJIzg">
        <p className="tcenter">{t("La suite de la notice ")}<a href="/addon/screen/utilisation-de-l-ecran">{t("ici")}</a>.</p>
      </GoogleDocument>
    </Layout>
  );
}

module.exports = Screen;
