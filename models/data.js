const pool = require('../config/db')
const models = {};


  models.GuardarVentas = (anio,mes,producto,total,callback) => {

    let query = 'call sp_ventas(?,?,?,?);';
    
    pool.query(query,[anio,mes,producto,total], callback);
  
  };

  models.getVentasEstadistia = (callback) => {
    let query = 'SELECT * FROM estadistica';
    pool.query(query,callback);
  
  };

  


module.exports = models;