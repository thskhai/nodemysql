var express = require('express');
var db = require('../public/db');
var app = express();

app.get('/sanpham',function(req,res){
    let sql = "select * from sanpham";
    db.getItem(sql,function(resultQuery){     
        res.json(resultQuery);
    });
});




module.exports = app;