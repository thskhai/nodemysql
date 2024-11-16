require('dotenv').config()
const express = require('express');
var sanpham = require('./code/sanpham');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json());
app.use(sanpham);


app.listen(3000,console.log("server is running on port 3000"));