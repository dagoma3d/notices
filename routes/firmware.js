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
        video: "c-e3",
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
        video: "c-e3-du",
        firmware: "Ultimate",
        notice: "du"
      };
      if (addon === "bicolor") {
        props.active = 3;
        props.nav = require('../content/nav/bicolor/du');
        props.step = '/calibration/du/bicolor';
      } else {
        props.active = 10;
        props.nav = require('../content/nav/du');
        props.step = '/calibration/du';
      }
      break;
    case 'expert':
      props.printerInfo = {
        name: "DiscoEasy200",
        abbr: "DE200",
        img: "d-prerequis-maj-de200.jpg",
        video: "c-e3",
        firmware: "E200",
        notice: "de200"
      };
      props.active = 4;
      props.nav = require('../content/nav/expert');
      break;
    default:
      props.printerInfo = {};
  }
  res.render('pages/firmware', props);
};