exports.index = function (req, res) {
  var options = {
    title: res.__("Cura by Dagoma")
  };

  switch (req.params.printer) {
    case 'magis':
      options.active = 5;
      options.nav = require('../content/nav/magis');
      break;
    case 'du':
      options.active = 12;
      options.nav = require('../content/nav/du');
      break;
    case 'de200':
      options.active = 13;
      options.nav = require('../content/nav/de200');
      break;
  }

  res.render('pages/cura-by-dagoma', options);
};