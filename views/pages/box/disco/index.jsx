const React = require('react');
const Layout = require('../../../layouts/default');
const GoogleDocument = require('../../../components/google-document');

function Box(props) {
  const title = "Notice de Montage du Caisson de Protection";
  return (
    <Layout title={title}>
      <GoogleDocument title={title} id="1q8Raod1ZWvwtKMbVTOcrO2Z9OxAs5-4HPZvWPsVyeJ0" />
    </Layout>
  );
}

module.exports = Box;