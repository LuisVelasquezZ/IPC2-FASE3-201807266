const express = require('express');
const email = require('emailjs');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
  router.post('/email', (req, res, next) => {
    var server 	= email.server.connect({
       user:    "fervzacarias@gmail.com",
       password: "1906luisv",
       host: "smtp.gmail.com",
       ssl : true
    });
  
  server.send({
     text:    'Su código es: ' + req.body.texto,
     from:    "fervzacarias@gmail.com",
     to:      req.body.para,
     subject: "Recuperar Cuenta"
  }, 
  (error, results) => { if (error) {
    console.log(error);
    res.status(500).json({status: 'error'});
  } else {
    res.status(200).json(results);
  } });
  });

  
  return router;
}

module.exports = createRouter;