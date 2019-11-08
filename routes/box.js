exports.index = function (req, res) {
  var options = {
    title: res.__("Notices de montage et d'utilisation")
  };
  const serie = req.params.serie;
  const step = req.params.step;
  if (step) {
    res.render(['pages/box', serie, step].join('/'), options);
  } else {
    res.render(['pages/box', serie].join('/'), options);
  }
};