const React = require('react');
const Layout = require('../../../../layouts/default');
const GoogleDocument = require('../../../../components/google-document');

function PackEvo(props) {
  const t = props.__;
  const title = "Notice";
  return (
    <Layout t={t} title={title}>
      <GoogleDocument t={t} title={title} id="1lE4srM8vIYxkKgGEAYcFeu9diLxNf1NF6PBiBOxNcSo" />
    </Layout>
  );
}

module.exports = PackEvo;