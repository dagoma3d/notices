exports.index = function (req, res) {
  var options = {
    title: res.__("Notices de montage et d'utilisation")
  };
  const step = req.params.step;
  if (step) {
    res.render(['pages/printer/discoeasy200/extrudeur-plus', step].join('/'), options);
  }
  else {
    res.render(['pages/printer/discoeasy200/extrudeur-plus'].join('/'), options);
  }
};