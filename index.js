const mysql = require('mysql');
const express = require ('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host:'35.184.116.229',
    user: 'root',
    password: '',
    database : 'safelane'
});

mysqlConnection.connect((err)=>{
    if (!err)
    console.log('DB connection succeeded.');
    else
    console.log('DB connection failed \n Error : '+ JSON.stringify(err, undefined, 2));
});

app.listen(3000,()=>console.log('Express server is running at port no: 3000'));

// get all fatal collisions
app.get('/fatal_collisions',(req,res)=>{
    mysqlConnection.query('Select * FROM fatal_collisions',(err, rows, fields)=>{
        if (!err)
         res.send(rows);
        else
         console.log(err);
    })
})

// get a fatal collision
app.get('/fatal_collisions/:id',(req,res)=>{
    mysqlConnection.query('Select * FROM fatal_collisions WHERE id = ?',[req.params.id],(err, rows, fields)=>{
        if (!err)
         res.send(rows);
         else
         console.log(err);
    })
})