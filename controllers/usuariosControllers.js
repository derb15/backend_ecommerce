const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");


exports.crearUsuario = async (req, res) => {
    //console.log(req.body);
    //res.json({ msg: "desde controller post el primer request"})
    const { password, email } = req.body;
    try{
        // revisar que sea un unico correo
        let usuario = await Usuario.findOne({ email });

        if (usuario){
            return res.status(400).json({ msg : " el usuario ya existe "});
        }
        //crear nuevo usuario
        usuario = new Usuario(req.body);
      
        //hash
        usuario.password = await bcryptjs.hash(password, 10)
        //Guardar usuario en la bd
        const usuarioAlmacenado = await usuario.save();
        res.json(usuarioAlmacenado);


    }catch(error){
        console.log(error);
    }

    /*exports.actualizarUsuario = async ( req, res ) => {
        //res.json({ msg: "se ejecuto actualizar producto"});
        const { id } = req.params;
    
        const usuario = await Usuario.findById(id);
    
        if(!usuario){
            return res.status(400).json({ msg: "usuario no encontrado"});
        }
        
        usuario.email = req.body.email || usuario.email;
        usuario.password = req.body.password || usuario.password;
       
        usuario.save();
        res.json({ usuario });
    }*/

    //prueba git
};