exports.index = function (req, res) {
  var options = {
    title: res.__("Notices de montage et d'utilisation")
  };
  const printer = req.params.printer;
  var p = null;
  if (printer === 'de200') p = "discoeasy200";
  if (printer === 'du') p = "disco-ultimate";
  const step = req.params.step;
  if (step) {
    res.render(['pages/printer', p, 'bi-couleur', step].join('/'), options);
  }
  else {
    res.render(['pages/printer', p, 'bi-couleur'].join('/'), options);
  }
};