'use strict';


exports.index = function(req, res){
  Gambler.all(function(err, gamblers){
    console.log(gamblers);
   res.render('gamblers/index', {gamblers: gamblers});
  }); 
};
