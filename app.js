const express = require('express');
const cookieParser = require('cookie-parser');
const i18n = require("i18n");
const app = express();
const port = 5000;

app.use(cookieParser());

i18n.configure({
  locales: ['en', 'fr'],
  directory: __dirname + '/locales',
  cookie: 'user_locale',
  defaultLocale: 'fr',
  autoReload: true
});

app.use(i18n.init);
app.use(function (req, res, next) {
  res.__ = function () {
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
app.get('/cura-by-dagoma/:printer?', require('./routes/cura-by-dagoma').index);
app.get('/firmware/:printer/:addon?', require('./routes/firmware').index);
app.get('/calibration/:printer/:addon?', require('./routes/calibration').index);
app.get('/printer/neva', require('./routes/neva').index);
app.get('/printer/magis/:step?', require('./routes/magis').index);
app.get('/printer/du/:step?/:addon?', require('./routes/disco-ultimate').index);
app.get('/printer/de200/:step?/:addon?', require('./routes/discoeasy200').index);
app.get('/addon/box/:serie/:step?', require('./routes/box').index);
app.get('/addon/screen/:step?', require('./routes/screen').index);
app.get('/addon/bicolor/:printer/:step?', require('./routes/bicolor').index);
app.get('/addon/evo/de200/:step?', require('./routes/evo').index);
app.get('/addon/expert/de200/:step?', require('./routes/expert').index);
app.get('/addon/extruder-plus/de200/:step?', require('./routes/extruder-plus').index);

app.listen(port);
console.log(`Express server listening on port ${port}`);
