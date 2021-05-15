var express = require('express');
var fetch = require('node-fetch');

const mysqlConnection = require("../db");

var fs = require('fs');
var router = express.Router();
var archivoJson = "criptos.json";
var nombreArchivo = "time.txt";
router.get('/api/:cant', (req, res)=> {
    //leer el ultimo tiempo del archivo
    var time = fs.readFileSync(nombreArchivo, (err) => {console.log(err)});
    console.log("Tiempo viejo: "+time);
    //leer el tiempo actual
    var tiempoNuevo = new Date();
    var sigT = tiempoNuevo.getTime();
    console.log("Tiempo ahora: "+sigT);
    var segTrans = (sigT-time)/1000;
    console.log("transcurridos: "+segTrans+"seg");
    var cant = 5
    if(segTrans>6){
        console.log("Van mas de 10 minutos: "+segTrans/60);
        fs.writeFileSync(nombreArchivo, sigT.toString(), e => console.log(e));
        //entrega el nuevo request
        fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${cant}&convert=usd`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                'X-CMC_PRO_API_KEY':'8c93e619-76d1-4732-b976-55eb10508ffc'
            }
        })
        .then((res)=>{
            return res.json();
        })
        .then((criptos)=>{
            var wArchivo = JSON.stringify(criptos.data,null,2);
            fs.writeFileSync(archivoJson,wArchivo,(err)=>{
                console.log("Error en la escritura del archivo cod:"+err)
            });
            res.json(criptos.data);
        })
        .catch((error)=> {
            console.log('ERROR: Request failed:', error);
        });
    }else{
        //entregar el archivo viejo json
        console.log("Van menos de 10 minutos:"+segTrans/60);
        var criptosjson = fs.readFileSync(archivoJson);
        var objJson = JSON.parse(criptosjson);
        res.json(objJson);
    }
    res.end()
});

router.get("/mysql",(req, res)=>{
    console.log("ejecutar el query")
    mysqlConnection.query("SELECT * FROM users ",(err, rows, fields)=>{
        if(err){
            console.log("Error: "+err);
        }else{
            res.json(rows);
        }
    })
});

router.post("/api/login",(req,res)=>{
    var { user } = req.Body;
    console.log("Intentando hacer login");
    mysqlConnection.query("SELECT * FROM users WHERE email = ? AND pass = ?",email,user, (err,rows,fields)=>{
        if(err){
            console.log("Eror: "+err)
        }else{
            res.json({"permisions":"Conceded"})
        }
    })
})

router.post("/api/register", async(req , res)=>{
    console.log("Intentando registrar - 2");
    console.log("el body: "+req.params.nombre);
    var name = "req.body.name";
    var newLink = {
        name:name,
        pass:"dfgd",
        phone:"fdfg",
        ci:"456456",
        email:"fdfg@34234"
    }
    try {
        var respuesta = await mysqlConnection.query("INSERT INTO users set ?",[newLink]);
        console.log("Respuesta del register: "+respuesta)
    } catch (error) {
        console.log("error:" + error)
    }
    res.end()
/*     res.json(req); */
})


module.exports = router;