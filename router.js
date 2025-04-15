const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req, res) => {
  conexion.query("SELECT * FROM vehiculos", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render('index', { results : results});
    }
  });
});

router.get('/create', (req, res) => {
  res.render('create')
});

//Ruta para editar los registros
router.get('/edit/:id', (req, res) => {
  conexion.query("SELECT * FROM vehiculos WHERE id = ?", [req.params.id], (error, results) => {
    if (error){
      throw error;
    }else{
      res.render('edit', {vehiculo: results[0]});
    }
  });
})


//Ruta para eliminar
router.get('/delete/:id', (req, res) => {
  conexion.query("DELETE FROM vehiculos WHERE id = ?", [ req.params.id], (error, results) => {
    if (error){
      throw error;
    }else{
      res.redirect('/');
    }
  });
});

//Accedemos a toda la lógica
const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;