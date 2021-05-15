const mysql = require("mysql")

const mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"manuelperez.0000@gmail.com",
    password:"password",
    database:"coindb"
})

mysqlConnection.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("db conected")
    }
})

module.exports = mysqlConnection