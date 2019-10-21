const React = require('react');
const Layout = require('../../layouts/default');
const GoogleDocument = require('../../components/google-document');

class Screen extends React.Component {
  render() {
    return (
      <Layout>
        <GoogleDocument title={title} id="1VcaoXhBkdJWHYMbDP4RpdPPnC1xtKx1iW3eJGG4Oxak" />
      </Layout>
    );
  }
}

module.exports = Screen;