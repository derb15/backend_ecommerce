const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const productoController = require("../controllers/productoController");

router.get("/home", productoController.leerProductoHome);

router.get("/:id", authMiddleware, productoController.leerProducto );

router.get("/producto/:id", authMiddleware, productoController.leerProductoId );

router.get("/", authMiddleware, productoController.leerProducto );

router.post("/", authMiddleware, productoController.crearProducto);

router.put("/:id", authMiddleware, productoController.actualizarProducto );

router.delete("/:id", authMiddleware, productoController.borrarProducto );

module.exports = router;