const mysql =require('mysql2');

const db=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"root",
    database:'studentdb',
});

db.connect((error)=>{
    if(error) throw error;
    console.log("MySql Connected");
})

module.exports=db;