const Producto = require ("../models/producto");
const Categoria = require ("../models/categoria");
const producto = require("../models/producto");

exports.leerProductoHome = async ( req, res ) => {
    //res.json({ msg: "se ejecuto leer categoria"});
    try{
        const producto = await Producto.find();
        res.json({ producto });
    }catch(error){
        console.log(error);
    }

}

exports.leerProducto = async ( req, res ) => {
    //res.json({ msg: "se ejecuto leer producto"});
    const {id} = req.params;
    const producto = await Producto.find().where("categoriaId").equals(id);
    res.json(producto)
   /* try {
        const producto = await Producto.find();
        res.json({ producto });
    } catch (error) {
        console.log(error);
    }*/
}

exports.crearProducto = async ( req, res ) => {
    //res.json({ msg: "se ejecuto crear producto"});
    //const {categoriaId}= req.body;
    //console.log(categoriaId);
    try {
        const producto = new Producto(req.body);
        producto.save();
        //const productoencontrado = await Producto.findById(productoId);
        res.json(producto);

    } catch (error) {
        console.log(error);
    }
}

exports.leerProductoId = async ( req, res ) => {
    //res.json({ msg: "se ejecuto leer categoria"});
    const {id} = req.params
    try{
        const producto = await Producto.findById(id); 
        res.json({ producto });
    }catch(error){
        console.log(error);
    }

}

exports.actualizarProducto = async ( req, res ) => {
    //res.json({ msg: "se ejecuto actualizar producto"});
    const { id } = req.params;

    const producto = await Producto.findById(id);

    if(!producto){
        return res.status(400).json({ msg: "producto no encontrado"});
    }

    producto.nombre = req.body.nombre || producto.nombre;
    producto.descripcion = req.body.descripcion || producto.descripcion;
    producto.stock = req.body.stock || producto.stock;
    producto.precio = req.body.precio || producto.precio;
    producto.productoId = req.producto || producto.productoId;
    producto.save();
    res.json({ producto });

}

exports.borrarProducto = async ( req, res ) => {
    //res.json({ msg: "se ejecuto borrar producto"});
    try {
        await Producto.deleteOne({_id: req.params.id});
        res.json({ msg: "producto eliminado"});
    } catch (error) {
        console.log(error);
    }
}