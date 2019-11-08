const React = require('react');

function Text(props) {
  const { tag, classes, text, link, link_text, link_classes, download, link_target } = props;
  const CustomTag = tag ? `${tag}` : `p`;
  return <CustomTag className={classes}>{text}{(link) ? <a href={link} className={link_classes} download={download} target={link_target}>{link_text}</ a> : ""}</CustomTag>;
}

module.exports = Text;
