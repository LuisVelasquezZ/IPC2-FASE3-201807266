const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
  router.post('/evaluacion', (req, res, next) => {
    db.query(
      'INSERT INTO Evaluacion (idActividad, estado,  aleatorio) VALUES (?,?,?)',
      [req.body.idActividad, req.body.estado, req.body.aleatorio],
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


  router.get('/evaluacionSeccion/:idSeccion', function (req, res, next) {
    db.query(
      'SELECT idEvaluacion, Actividad.idActividad, Actividad.nombre, Actividad.idSeccion, date_format(Evaluacion.fecha, "%Y-%m-%d") as fecha, estado,  aleatorio  FROM Evaluacion  INNER JOIN Actividad ON Evaluacion.idActividad = Actividad.idActividad WHERE Actividad.idSeccion=?',
      [req.params.idSeccion],
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
  router.get('/evaluacion/:idEvaluacion', function (req, res, next) {
    db.query(
      'SELECT idEvaluacion, idActividad, date_format(fecha, "%Y-%m-%d") as fecha, estado,  aleatorio FROM Evaluacion  WHERE idEvaluacion=?',
      [req.params.idEvaluacion],
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

  router.put('/evaluacion/:idEvaluacion', function (req, res, next) {
    db.query(
      'UPDATE Evaluacion SET estado=?, aleatorio=? WHERE idEvaluacion=?',
      [req.body.estado, req.body.aleatorio, req.params.idEvaluacion],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  

  router.delete('/evaluacion/:idEvaluacion', function (req, res, next) {
    db.query(
      'DELETE  FROM Evaluacion WHERE idEvaluacion=?',
      [req.params.idEvaluacion],
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