const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

//req = solicitud | res = respuesta
router.get('/', (req, res) => {
  //Retornamos una colección de datos. Consulta exitosa "results", falló "error"
  conexion.query("SELECT * FROM vehiculos", (error, results) => {
    if (error){
      throw error;
    }else{
      //Enviamos "json" los datos al navegador
      //res.send(results);
      //res.render('edit', { dev: 'Jhon Francia Minaya', skill: 'Javascript', friends: ['Sergio', 'José', 'Raul'] });
      res.render('index', { registros: results })
    }
  });
});

module.exports = router;