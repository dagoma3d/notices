exports.index = function (req, res) {
  var options = {
    title: res.__("Notices de montage et d'utilisation")
  };
  const printer = req.params.printer;
  var p = null;
  if (printer === 'de200') p = "discoeasy200";
  if (printer === 'du') p = "disco-ultimate";
  const step = req.params.step;
  res.render(['pages/printer', p, 'xl', step].join('/'), options);
};