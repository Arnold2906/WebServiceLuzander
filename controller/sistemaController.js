const models = require("../models/data.js")
const controller = {};

  controller.PostVentas = (req, res) => {

    let venta = {
      anio: req.body.anio,
      mes: req.body.mes,
      producto: req.body.producto,
      total: req.body.total
    };
    console.log(venta);
  
    models.GuardarVentas(venta.anio,venta.mes,venta.producto,venta.total,(err, rows)=>{
      if (err) {
        return res.status(400).json({
            ok: false,
            err
        });
    }

    res.json({
              ok: true,
              venta: rows
            });

    });


 /* 
res.json({
  ok: true,
  venta
});
*/
  };

  controller.getVentas = (req, res) => {
    models.getVentasEstadistia((err, rows)=>{
      if (err) {
        return res.status(400).json({
            ok: false,
            err
        });
    }

    res.json({
              results: rows
            });
 
     });

 
   };

  


  module.exports = controller;