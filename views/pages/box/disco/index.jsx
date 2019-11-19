const React = require('react');
const Layout = require('../../../layouts/default');
const GoogleDocument = require('../../../components/google-document');

function Box(props) {
  const t = props.__;
  const title = "Notice de Montage du Caisson de Protection";
  return (
    <Layout t={t} title={title}>
      <GoogleDocument t={t} title={title} id="1q8Raod1ZWvwtKMbVTOcrO2Z9OxAs5-4HPZvWPsVyeJ0" />
    </Layout>
  );
}

module.exports = Box;