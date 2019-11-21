const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
  router.post('/destalleActividad', (req, res, next) => {
    db.query(
      'INSERT INTO detalleActividad (idActividad, idUsuario, nota, respuesta, adjuntos) VALUES (?,?,?,?,?)',
      [req.body.idActividad, req.body.idUsuario, req.body.nota, req.body.respuesta, req.body.adjuntos],
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

  router.get('/detalleActividad', function (req, res, next) {
    db.query(
      'SELECT *  FROM detalleActividad',
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

  router.get('/detalleActividad/:idDetalleActividad', function (req, res, next) {
    db.query(
      'SELECT * FROM detalleActividad WHERE idActividad = ?',
      [req.params.idDetalleActividad],
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

  router.put('/curso/:idCurso', function (req, res, next) {
    db.query(
      'UPDATE curso SET nombre=?, descripion=? WHERE idCurso=?',
      [req.body.nombre, req.body.descripion, req.params.idCurso],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  

  router.delete('/curso/:idCurso', function (req, res, next) {
    db.query(
      'DELETE  FROM curso WHERE idCurso=?',
      [req.params.idCurso],
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