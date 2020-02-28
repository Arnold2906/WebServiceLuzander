const express = require("express")
const router = express.Router()
const sistemaController = require("../controller/sistemaController")

router.post("/guardar", sistemaController.PostVentas);
router.get("/listar", sistemaController.getVentas);

module.exports = router;
