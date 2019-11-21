const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
  router.post('/publicacion', (req, res, next) => {
    db.query(
      'INSERT INTO publicacion (fechaLimite, titulo, contenido, idUsuario, idSeccion) VALUES (?,?,? ,?,?)',
      [req.body.fechaLimite, req.body.titulo, req.body.contenido, req.body.idUsuario, req.body.idSeccion],
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

  router.get('/publicacionSeccion/:idSeccion', function (req, res, next) {
    db.query(
      'SELECT idPublicacion, fechaLimite, date_format(fecha, "%Y-%m-%d") as fecha, titulo, contenido,  Publicacion.idUsuario ,Usuario.nombre as autor, idSeccion FROM Publicacion  INNER JOIN Usuario ON Publicacion.idUsuario = Usuario.idUsuario WHERE idSeccion=?',
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

  router.get('/publicacion/:idPublicacion', function (req, res, next) {
    db.query(
      'SELECT idPublicacion, fecha, fechaLimite, titulo, contenido, idUsuario, idSeccion FROM publicacion WHERE idPublicacion = ?',
      [req.params.idPublicacion],
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

  router.put('/publicacion/:idPublicacion', function (req, res, next) {
    db.query(
      'UPDATE publicacion SET fechaLimite=?, titulo=?, contenido=? WHERE idPublicacion=?',
      [req.body.fechalimite, req.body.titulo, req.body.contenido, req.params.idPublicacion],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  

  router.delete('/publicacion/:idPublicacion', function (req, res, next) {
    db.query(
      'DELETE  FROM publicacion WHERE idPublicacion=?',
      [req.params.idPublicacion],
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