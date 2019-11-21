const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
  router.post('/actividad', (req, res, next) => {
    db.query(
      'INSERT INTO Actividad (idSeccion, nombre,  ponderacion) VALUES (?,?,?)',
      [req.body.idSeccion, req.body.nombre, req.body.ponderacion],
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

  router.get('/actividadSeccion/:idSeccion', function (req, res, next) {
    db.query(
      'SELECT idActividad, idSeccion, date_format(fecha, "%Y-%m-%d") as fecha, nombre,  ponderacion FROM Actividad  WHERE idSeccion=?',
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

  router.get('/actividad/:idActividad', function (req, res, next) {
    db.query(
      'SELECT idActividad, idSeccion, date_format(fecha, "%Y-%m-%d") as fecha, nombre,  ponderacion FROM Actividad  WHERE idActividad=?',
      [req.params.idActividad],
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

  router.put('/actividad/:idActividad', function (req, res, next) {
    db.query(
      'UPDATE Actividad SET nombre=?, ponderacion=? WHERE idActividad=?',
      [req.body.nombre, req.body.ponderacion, req.params.idActividad],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  

  router.delete('/actividad/:idActividad', function (req, res, next) {
    db.query(
      'DELETE  FROM Actividad WHERE idActividad=?',
      [req.params.idActividad],
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