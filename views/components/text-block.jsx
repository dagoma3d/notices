const React = require('react');

function Text(props) {
  const { tag, classes, text } = props;
  const CustomTag = tag ? `${tag}` : `p`;
  return <CustomTag className={classes}>{text}</CustomTag>;
}

module.exports = Text;
