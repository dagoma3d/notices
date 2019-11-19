const React = require('react');
const Layout = require('../../layouts/default');
const GoogleDocument = require('../../components/google-document');

function Screen(props) {
  const t = props.__;
  const title = "Utilisation de l'écran";
  const subtitle = "Premiers pas";
  return (
    <Layout t={t} title={title}>
      <GoogleDocument t={t} title={subtitle + " - " + title} id="1VcaoXhBkdJWHYMbDP4RpdPPnC1xtKx1iW3eJGG4Oxak" />
    </Layout>
  );
}

module.exports = Screen;