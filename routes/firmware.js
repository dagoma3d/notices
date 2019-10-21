exports.index = function (req, res) {
  var printerInfo;
  switch (req.params.printer) {
    case 'easy200':
      printerInfo = {
        name: "DiscoEasy200",
        abbr: "DE200",
        img: "d-prerequis-maj-de200.jpg",
        video: "c-e3",
        firmware: "E200",
        notice: "discoeasy200"
      };
      break;
    case 'ultimate':
      printerInfo = {
        name: "Disco Ultimate",
        abbr: "DU",
        img: "d-prerequis-du.jpg",
        video: "c-e3-du",
        firmware: "Ultimate",
        notice: "disco-ultimate"
      };
      break;
    default:
      printerInfo = {};
  }
  var props = {
    title: res.__("Firmware"),
    printerInfo: printerInfo
  };

  res.render('pages/firmware', props);
};