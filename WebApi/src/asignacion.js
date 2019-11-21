const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
  router.post('/asignacion', (req, res, next) => {
    db.query(
      'INSERT INTO Aisgnacion (idSeccion, idUsuario) VALUES (?,?)',
      [req.body.idSeccion, req.body.idUsuario],
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

  router.get('/asignacion/:idUsuario', function (req, res, next) {

    db.query(
        'SELECT idAsignacion,Seccion.idSeccion, Seccion.nombre, idCurso ,horaInicio, horaFin, Usuario.nombre as auxiliar,  semestre, anio, estado, observacion FROM Aisgnacion  INNER JOIN Usuario ON Aisgnacion.idUsuario = Usuario.idUsuario  INNER JOIN Seccion ON Aisgnacion.idSeccion = Seccion.idSeccion WHERE Aisgnacion.idUsuario =?',
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

  router.get('/asignacionSeccion/:idSeccion', function (req, res, next) {

    db.query(
        'SELECT idAsignacion,Seccion.idSeccion, Usuario.idUsuario , Usuario.nombre as alumno,  Usuario.carnet, Usuario.correo FROM Aisgnacion  INNER JOIN Usuario ON Aisgnacion.idUsuario = Usuario.idUsuario  INNER JOIN Seccion ON Aisgnacion.idSeccion = Seccion.idSeccion WHERE Aisgnacion.idSeccion =?',
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

  

  router.delete('/asignacion/:idAsignacion', function (req, res, next) {
    db.query(
      'DELETE  FROM Aisgnacion WHERE idAsignacion=?',
      [req.params.idAsignacion],
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