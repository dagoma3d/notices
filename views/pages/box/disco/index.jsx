const React = require('react');
const Layout = require('../../../layouts/default');
const GoogleDocument = require('../../../components/google-document');

function Box(props) {
  const t = props.__;
  const title = "Notice de Montage du Caisson de Protection";
  return (
    <Layout t={t} title={title}>
      <GoogleDocument t={t} title={title} id="1pb9p8DiMA_kkWuYlGFwrBIG6jwXSgbNV0l0ArSrqM90" />
    </Layout>
  );
}

module.exports = Box;