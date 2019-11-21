const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
  router.post('/mensaje', (req, res, next) => {
    db.query(
      'INSERT INTO Mensaje (idUsuarioDestino, idUsuarioRemitente,  asunto, cuerpo,adjuntos) VALUES (?,?)',
      [req.body.nombre, req.body.descripion],
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

  router.get('/curso', function (req, res, next) {
    db.query(
      'SELECT idCurso, nombre, descripion FROM curso',
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

  router.get('/curso/:idCurso', function (req, res, next) {
    db.query(
      'SELECT idCurso, nombre, descripion FROM curso WHERE idCurso = ?',
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