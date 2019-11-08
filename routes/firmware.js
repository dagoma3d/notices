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
        img: "d-prerequis-maj-de200.jpg",
        video: "c-e3",
        firmware: "E200",
        notice: "de200"
      };
      switch (addon) {
        case 'bicolor':
          props.active = 5;
          props.nav = require('../content/nav/bicolor/de200');
          break;
        case 'expert':
          props.active = 4;
          props.nav = require('../content/nav/expert');
          break;
        default:
          props.active = 11;
          props.nav = require('../content/nav/de200');
      }
      break;
    case 'du':
      props.printerInfo = {
        name: "Disco Ultimate",
        abbr: "DU",
        img: "d-prerequis-du.jpg",
        video: "c-e3-du",
        firmware: "Ultimate",
        notice: "du"
      };
      if (addon === "bicolor") {
        props.active = 3;
        props.nav = require('../content/nav/bicolor/du');
      } else {
        props.active = 10;
        props.nav = require('../content/nav/du');
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