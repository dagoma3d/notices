const React = require('react');
const Layout = require('../../layouts/default');
const GoogleDocument = require('../../components/google-document');

function Screen(props) {
  const t = props.__;
  const title = "Utilisation de l'écran";
  const subtitle = "Premiers pas";
  return (
    <Layout t={t} title={title}>
      <GoogleDocument t={t} title={subtitle + " - " + title} id="1LcGI4JbyUWR1o36fVPadU4zVReiIIckUGrPPswYqIt0" />
    </Layout>
  );
}

module.exports = Screen;