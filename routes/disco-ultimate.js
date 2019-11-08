exports.index = function (req, res) {
  var options = {
    title: res.__("Notices de montage et d'utilisation")
  };

  const addon = req.param.addon;
  if (addon) {
    options.active = 4;
    options.nav = require(`../content/nav/${addon}/du`);
  }

  const step = req.params.step;
  if (step) {
    res.render('pages/printer/disco-ultimate/' + step, options);
  }
  else {
    res.render('pages/printer/disco-ultimate', options);
  }
};