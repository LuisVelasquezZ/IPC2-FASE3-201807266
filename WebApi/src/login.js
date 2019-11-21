const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here


  router.get('/login',  (req, res, next) => {
    console.log(req.body);
    db.query(
      'SELECT idUsuario, nombre, carnet, correo, tipo FROM usuario WHERE correo = ? AND pass= ?',
      [req.body.correo, req.body.pass],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          console.log(results);
          res.status(200).json(results);
        }
      }
    );
  });


  router.post('/login', (req, res, next) => {
    db.query(
      'SELECT idUsuario, nombre, carnet, correo, tipo FROM usuario WHERE correo = ? AND pass= ?',
      [req.body.correo, req.body.pass],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;