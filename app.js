var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ChumphonRouter = require('./routes/Chumphon');
var contactRouter = require('./routes/contact');
var CovidRouter = require('./routes/Covid');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var KrabiRouter = require('./routes/Krabi');
var NakhonSiThammaratRouter  = require('./routes/NakhonSiThammarat');
var PhangNgaRouter  = require('./routes/PhangNga');
var PhuketRouter  = require('./routes/Phuket');
var RanongRouter  = require('./routes/Ranong');
var SongkhlaRouter  = require('./routes/Songkhla');
var SuratThaniRouter  = require('./routes/SuratThani');
var Admin = require('./routes/Admin');
var app = express();
var sql = require('mysql');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'public/img/img')));
app.use('/css', express.static(path.join(__dirname, 'public/stylesheets/css')));

app.use('/lib', express.static(path.join(__dirname, 'lib')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Chumphon', ChumphonRouter);
app.use('/contact', contactRouter);
app.use('/Covid', CovidRouter);
app.use('/Krabi', KrabiRouter);
app.use('/NakhonSiThammarat', NakhonSiThammaratRouter);
app.use('/PhangNga', PhangNgaRouter);
app.use('/Phuket', PhuketRouter);
app.use('/Ranong', RanongRouter);
app.use('/Songkhla', SongkhlaRouter);
app.use('/SuratThani', SuratThaniRouter);
app.use('/Admin', Admin);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

app.use('/img', express.static(path.join(__dirname, 'public/img/img')));