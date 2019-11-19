const React = require('react');
const Layout = require('../../../../layouts/default');
const GoogleDocument = require('../../../../components/google-document');

function PackEvo(props) {
  const title = "Notice";
  return (
    <Layout title={title}>
      <GoogleDocument title={title} id="1KLkN2rAL5I5WhkXsaeU6IOZ8eZChpFW8odcKbjdmZDQ" />
    </Layout>
  );
}

module.exports = PackEvo;