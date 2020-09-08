exports.index = function (req, res) {
  var props = {
    title: res.__("Firmware")
  };
  const printer = req.params.printer;
  const addon = req.params.addon;
  props.step = null;

  switch (printer) {
    case 'de200':
      props.printerInfo = {
        name: "DiscoEasy200",
        abbr: "DE200",
        date: "15/11/2019",
        img: "d-prerequis-maj-de200.jpg",
        video: "TEQbka4ouhc",
        firmware: "E200",
        notice: "de200"
      };
      switch (addon) {
        case 'bicolor':
          props.active = 5;
          props.nav = require('../content/nav/bicolor/de200');
          props.step = '/calibration/de200/bicolor';
          break;
        case 'expert':
          props.active = 4;
          props.nav = require('../content/nav/expert');
          props.step = '/calibration/de200/expert';
          break;
        case "xl":
          props.active = 4;
          props.nav = require('../content/nav/xl/de200');
          props.step = '/calibration/de200/xl';
          break;
        default:
          props.active = 11;
          props.nav = require('../content/nav/de200');
          props.step = '/calibration/de200';
      }
      break;
    case 'du':
      props.printerInfo = {
        name: "Disco Ultimate",
        abbr: "DU",
        date: "15/11/2019",
        img: "d-prerequis-du.jpg",
        video: "7xCQ0SH4ONg",
        firmware: "Ultimate",
        notice: "du"
      };
      switch (addon) {
        case "bicolor":
          props.active = 3;
          props.nav = require('../content/nav/bicolor/du');
          props.step = '/calibration/du/bicolor';
          break;
        case "xl":
          props.active = 4;
          props.nav = require('../content/nav/xl/du');
          props.step = '/calibration/du/xl';
          break;
        default:
          props.active = 10;
          props.nav = require('../content/nav/du');
          props.step = '/calibration/du';
      }
      break;
    case 'magis':
      props.printerInfo = {
        name: "Magis",
        abbr: "Magis",
        date: "15/11/2019",
        img: "d-prerequis-du.jpg",
        video: "7xCQ0SH4ONg",
        firmware: "Magis",
        notice: "magis"
      };
      props.active = 4;
      props.nav = require('../content/nav/magis');
      props.step = '/printer/magis#calibration';
      break;
    default:
      props.printerInfo = {};
  }
  res.render('pages/firmware', props);
};