const React = require('react');
const Layout = require('../../layouts/default');
const GoogleDocument = require('../../components/google-document');

function Screen(props) {
  const title = "Utilisation de l'écran";
  const subtitle = "Premiers pas";
  return (
    <Layout title={title}>
      <GoogleDocument title={subtitle + " - " + title} id="1VcaoXhBkdJWHYMbDP4RpdPPnC1xtKx1iW3eJGG4Oxak" />
    </Layout>
  );
}

module.exports = Screen;