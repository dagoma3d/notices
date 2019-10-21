const express = require('express');
const i18n = require("i18n");
const app = express();
const port = 5000;

i18n.configure({
  locales: ['en', 'fr'],
  directory: __dirname + '/locales',
  queryParameter: 'lang',
  defaultLocale: 'fr',
  autoReload: true
});

app.use(i18n.init);
app.use(function (req, res, next) {
  // mustache helper
  res.locals.__ = function () {
    return function (text, render) {
      return i18n.__.apply(req, arguments);
    };
  };

  next();
});

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', require('./routes/home').index);
app.get('/cura-by-dagoma', require('./routes/cura-by-dagoma').index);
app.get('/firmware/:printer', require('./routes/firmware').index);
app.get('/printer/neva', require('./routes/neva').index);
app.get('/printer/magis/:step?', require('./routes/magis').index);
app.get('/box/:serie/:step', require('./routes/box').index);

app.listen(port);
console.log(`Express server listening on port ${port}`);
