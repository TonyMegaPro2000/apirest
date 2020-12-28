//aqui se llaman nuestros paquetes

const express=require('express');
const bodyParser=require('body-parser')
const app=express();


app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());
//EXISTEN 4 METODOS     
//GET para recuperar datos
//POST para guardar registros
//PUT para actualizar un registro
//DELETE para eliminar un registro

//GET METHODS
app.get('/',(req,res)=>{

res.send("hello World");
});
//second method
app.get('/saludo',(req,res)=>{

    res.send("Hola que hace");
    });
app.get('/welcome',(req,res)=>{

        res.send("bienvenid@");
    });

//POST METHODS

app.post('/crearusuario',(req,res)=>{

    let body=req.body;

    res.json({
            ok:true,
            datos:body
    });

})


app.listen(3000,()=>{

console.log("aplicación corriendo en el puerto 3000");

});