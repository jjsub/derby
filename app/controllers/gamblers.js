
'use strict';

var Gambler =  require('../models/gambler');

exports.init = function(req, res){
  Gambler.all(function(err,gamblers){
    console.log(gamblers);
    res.render('gamblers/index', {gamblers:gamblers});
  });
};

