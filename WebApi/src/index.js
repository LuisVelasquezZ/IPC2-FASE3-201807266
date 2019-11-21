const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const usuario = require('./usuario');
const login = require('./login');
const curso = require('./curso');
const seccion = require('./seccion');
const publicacion = require('./foro');
const comentario = require('./comentario');
const actividad = require('./actividad');
const asignacion = require('./asignacion');
const detalleActividad = require('./detalleActividad');
const email = require('./email');
const evaluacion = require('./evaluacion');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'notas'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(usuario(connection))
  .use(login(connection))
  .use(curso(connection))
  .use(seccion(connection))
  .use(publicacion(connection))
  .use(comentario(connection))
  .use(actividad(connection))
  .use(asignacion(connection))
  .use(detalleActividad(connection))
  .use(email(connection))
  .use(evaluacion(connection))

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});