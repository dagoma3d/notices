exports.index = function (req, res) {
  var options = {
    title: res.__("Cura by Dagoma")
  };

  switch (req.query.printer) {
    case 'magis':
      options.active = 5;
      options.nav = require('../content/nav-magis');
      break;
    case 'ultimate':
      options.active = 13;
      options.nav = require('../content/nav-ultimate');
      break;
    case 'easy200':
      options.active = 5;
      options.nav = require('../content/nav-easy200');
      break;
  }

  res.render('pages/cura-by-dagoma', options);
};