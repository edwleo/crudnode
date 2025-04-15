const conexion = require('../database/db');

exports.save = (req, res) => {
  const tipo = req.body.tipo;
  const marca = req.body.marca;
  const color = req.body.color;

  //Evidenciamos si llegan los datos
  //console.log(tipo, marca, color);
  conexion.query("INSERT INTO vehiculos SET ?", 
    { tipo: tipo, marca: marca, color: color }, (error, results) => {
      if (error){
        console.log(error);
      }else{
        //redireccionando
        res.redirect('/');
      }
    });
};

exports.update = (req, res) => {
  const id = req.body.id;
  const tipo = req.body.tipo;
  const marca = req.body.marca;
  const color = req.body.color;

  conexion.query("UPDATE vehiculos SET ? WHERE id = ?", 
    [{tipo: tipo, marca: marca, color: color}, id], (error, results) => {
      if (error){
        console.log(error);
      }else{
        res.redirect('/');
      }
    });
};

//exports.delete