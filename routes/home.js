exports.index = function (req, res) {
  var options = {
    title: res.__("Notices de montage et d'utilisation")
  };

  res.render('pages/index', options);
};