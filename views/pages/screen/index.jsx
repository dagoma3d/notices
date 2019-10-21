const React = require('react');
const Layout = require('../../layouts/default');
const GoogleDocument = require('../../components/google-document');

class Screen extends React.Component {
  render() {
    const title = "Notice";
    return (
      <Layout title={title}>
        <GoogleDocument title={title} id="1D9PiUPmOgiQVTnK-sEzR3mkpcpyyLFintxThjpuJIzg">
          <p style="text-align:center">La suite de la notice <a href="/start/utilisation-de-l-ecran.html">ici</a></p>
        </GoogleDocument>
      </Layout>
    );
  }
}

module.exports = Screen;
