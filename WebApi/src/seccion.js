const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
  router.post('/seccion', (req, res, next) => {
    db.query(
      'INSERT INTO seccion (nombre, idCurso, horaInicio, horaFin, idUsuario, semestre, anio, estado, observacion) VALUES (?,?,?,?,?,?,?,?,?)',
      [req.body.nombre, req.body.idCurso, req.body.horaInicio, req.body.horaFin, req.body.idUsuario, req.body.semestre, req.body.anio, req.body.estado, req.body.observacion],
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

  router.get('/seccionCurso/:idCurso', function (req, res, next) {

    db.query(
        'SELECT idSeccion, Seccion.nombre, idCurso ,horaInicio, horaFin, Usuario.nombre as auxiliar, Usuario.idUsuario, semestre, anio, estado, observacion'
        +' FROM Seccion  INNER JOIN Usuario ON Seccion.idUsuario = Usuario.idUsuario WHERE idCurso =?',
      [req.params.idCurso],
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

  router.get('/seccionAuxiliar/:idUsuario', function (req, res, next) {

    db.query(
        'SELECT idSeccion, Seccion.nombre, horaInicio, horaFin, Curso.nombre as curso, Curso.idCurso, semestre, anio, estado, observacion'
        +' FROM Seccion  INNER JOIN Curso ON Seccion.idCurso = Curso.idCurso WHERE idUsuario =?',
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

  router.get('/seccion/:idSeccion', function (req, res, next) {
    db.query(
        'SELECT idSeccion, Seccion.nombre, idCurso, horaInicio, horaFin, Usuario.nombre as auxiliar, Usuario.idUsuario, semestre, anio, estado, observacion FROM seccion  INNER JOIN Usuario ON Seccion.idUsuario = Usuario.idUsuario WHERE idSeccion = ?',
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

  router.put('/seccion/:idSeccion', function (req, res, next) {
    db.query(
      'UPDATE seccion SET nombre=?,  horaInicio=?, horaFin=?, idUsuario=?, semestre=?, anio=?, estado=?,  observacion=?  WHERE idSeccion=?',
      [req.body.nombre,  req.body.horaInicio, req.body.horaFin, req.body.idUsuario, req.body.semestre, req.body.anio, req.body.estado, req.body.observacion,req.params.idSeccion],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  

  router.delete('/seccion/:idSeccion', function (req, res, next) {
    db.query(
      'DELETE  FROM seccion WHERE idSeccion=?',
      [req.params.idSeccion],
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