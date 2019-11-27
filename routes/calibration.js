exports.index = function (req, res) {
  var props = {
    title: res.__("Firmware"),
  };
  const printer = req.params.printer;
  const addon = req.params.addon;

  switch (printer) {
    case 'de200':
      props.printerInfo = {
        name: "DiscoEasy200",
        abbr: "DE200",
        img: "b1-prerequis-de200.jpg",
        video: "c-e3",
        firmware: "E200",
        notice: "de200"
      };
      switch (addon) {
        case 'bicolor':
          props.active = 6;
          props.nav = require('../content/nav/bicolor/de200');
          props.step = '/addon/bicolor/de200/notice-7';
          break;
        case 'expert':
          props.active = 5;
          props.nav = require('../content/nav/expert');
          break;
        case "xl":
          props.active = 5;
          props.nav = require('../content/nav/xl/de200');
          break;
        default:
          props.active = 12;
          props.nav = require('../content/nav/de200');
          props.step = '/cura-by-dagoma/de200'
      }
      break;
    case 'du':
      props.printerInfo = {
        name: "Disco Ultimate",
        abbr: "DU",
        img: "b1-prerequis-du.jpg",
        video: "c-e3-du",
        firmware: "Ultimate",
        notice: "du"
      };
      switch (addon) {
        case "bicolor":
          props.active = 4;
          props.nav = require('../content/nav/bicolor/du');
          props.step = '/addon/bicolor/du/notice-7';
          break;
        case "xl":
          props.active = 5;
          props.nav = require('../content/nav/xl/du');
          break;
        default:
          props.active = 11;
          props.nav = require('../content/nav/du');
          props.step = '/cura-by-dagoma/du'
      }
      break;
    default:
      props.printerInfo = {};
  }

  res.render('pages/calibration', props);
};