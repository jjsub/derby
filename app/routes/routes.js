'use strict';

var morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('express-method-override'),
<<<<<<< HEAD
    home           = require('../controllers/home'),
    gamblers        = require('../controllers/gamblers');
=======
    home           = require('../controllers/home');
>>>>>>> 4a3e479e8ae881cc03329a072bf6515a38284e00

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../static'));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(methodOverride());

  app.get('/', home.index);
<<<<<<< HEAD
  app.get('/gamblers', gamblers.init);
=======
>>>>>>> 4a3e479e8ae881cc03329a072bf6515a38284e00

  console.log('Routes Loaded');
};

