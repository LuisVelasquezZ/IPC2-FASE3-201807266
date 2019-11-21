const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
  router.post('/comentario', (req, res, next) => {
    db.query(
      'INSERT INTO RespuestaPublicacion ( contenido, idUsuario, idPublicacion) VALUES (?,?,?)',
      [ req.body.contenido, req.body.idUsuario, req.body.idPublicacion],
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

  router.get('/comentario/:idPublicacion', function (req, res, next) {
    db.query(
      'SELECT idRespuestaPublicacion, date_format(fecha, "%Y-%m-%d") as fecha, contenido,  RespuestaPublicacion.idUsuario, Usuario.nombre as autor, idPublicacion FROM RespuestaPublicacion  INNER JOIN Usuario ON RespuestaPublicacion.idUsuario = Usuario.idUsuario WHERE idPublicacion=?',
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

  router.get('/comentario/:idComentario', function (req, res, next) {
    db.query(
        'SELECT idRespuestaPublicacion, date_format(fecha, "%Y-%m-%d") as fecha, contenido,  RespuestaPublicacion.idUsuario, Usuario.nombre as autor, idPublicacion FROM RespuestaPublicacion  INNER JOIN Usuario ON RespuestaPublicacion.idUsuario = Usuario.idUsuario WHERE idRespuestaPublicacion=?',
      [req.params.idComentario],
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

  router.put('/comentario/:idComentario', function (req, res, next) {
    db.query(
      'UPDATE RespuestaComentario SET  contenido=? WHERE idRespuestaPublicacion=?',
      [req.body.contenido,  req.params.idComentario],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  

  router.delete('/comentario/:idComentario', function (req, res, next) {
    db.query(
      'DELETE  FROM comentario WHERE idRespuestaPublicacion=?',
      [req.params.idComentario],
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