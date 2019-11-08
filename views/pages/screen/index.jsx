const React = require('react');
const Layout = require('../../layouts/default');
const GoogleDocument = require('../../components/google-document');

class Screen extends React.Component {
  render() {
    const title = "Montage de l'écran";
    const subtitle = "Premiers pas";
    return (
      <Layout title={title}>
        <GoogleDocument title={subtitle + " - " + title} id="1D9PiUPmOgiQVTnK-sEzR3mkpcpyyLFintxThjpuJIzg">
          <p className="tcenter">La suite de la notice <a href="/addon/screen/utilisation-de-l-ecran">ici</a></p>
        </GoogleDocument>
      </Layout>
    );
  }
}

module.exports = Screen;
