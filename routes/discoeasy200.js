exports.index = function (req, res) {
  var options = {
    title: res.__("Notices de montage et d'utilisation")
  };

  const addon = req.params.addon;
  if (addon) {
    options.active = 6;
    options.nav = require(`../content/nav/${addon}/de200`);
  }

  const step = req.params.step;
  if (step) {
    res.render('pages/printer/discoeasy200/' + step, options);
  }
  else {
    res.render('pages/printer/discoeasy200', options);
  }
};