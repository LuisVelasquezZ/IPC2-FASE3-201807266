const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
  router.post('/usuario', (req, res, next) => {
    db.query(
      'INSERT INTO usuario (nombre, carnet, correo, pass, tipo) VALUES (?,?,?,?,?)',
      [req.body.nombre, req.body.carnet, req.body.correo, req.body.pass, req.body.tipo],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.get('/usuario', function (req, res, next) {
    db.query(
      'SELECT idUsuario, nombre, carnet, correo, tipo FROM usuario',
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

  router.get('/auxiliar', function (req, res, next) {
    db.query(
      'SELECT idUsuario, nombre, carnet, correo FROM usuario WHERE tipo="Auxiliar"',
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

  router.get('/usuario/:idUsuario', function (req, res, next) {
    db.query(
      'SELECT idUsuario, nombre, carnet, correo, pass, tipo FROM usuario WHERE idUsuario = ?',
      [req.params.idUsuario],
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

  router.post('/recuperacion', (req, res, next) => {
    db.query(
      'SELECT idUsuario, pass, nombre, carnet, correo, tipo FROM usuario WHERE correo = ?',
      [req.body.correo],
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

  router.put('/usuario/:idUsuario', function (req, res, next) {
    db.query(
      'UPDATE usuario SET nombre=?, carnet=?, correo=?, tipo=? WHERE idUsuario=?',
      [req.body.nombre, req.body.carnet, req.body.correo, req.body.tipo, req.params.idUsuario],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.put('/recuperacion/:idUsuario', function (req, res, next) {
    db.query(
      'UPDATE usuario SET nombre=?, pass=?, carnet=?, correo=?, tipo=? WHERE idUsuario=?',
      [req.body.nombre, req.body.pass, req.body.carnet, req.body.correo, req.body.tipo, req.params.idUsuario],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  

  router.delete('/usuario/:idUsuario', function (req, res, next) {
    db.query(
      'DELETE  FROM usuario WHERE idUsuario=?',
      [req.params.idUsuario],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });
  return router;
}

module.exports = createRouter;