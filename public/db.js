var mysql = require('mysql')
var connection = mysql.createConnection({
    host:"b3t4uitpad93nstjpi6b-mysql.services.clever-cloud.com",
    user:"uyhs2oprdrciwh2k",
    password:"KNZ6Qh4nKz6aIspK0Oad",
    database:"b3t4uitpad93nstjpi6b"
    // host:process.env.HOST_NAME,
    // user:process.env.USER,
    // password:process.env.PASSWORD,
    // database:process.env.DATABASE
});

var connect = function(){
    connection.connect(function(err){
        if(!err){
            console.log('Database is connection')
        }else{
            console.log('connection is error');
        }
    })
}
var closeDB = function(){
    connection.end(function(err){
        if(err) console.log("closed db");
    })
}
exports.excute_Item = function(sql,callbackInsertSp){
    connect();
    connection.query(sql,function(err,results,fields){
        if(!err) {
            callbackInsertSp(results);
        }  else{
            console.log(err);
        }
    });
}

exports.getItem = function (sql,callbackQuery){
    connect();
    connection.query(sql, function(err,results){
        if(!err){
            callbackQuery(results);
        }else{
            connect.log(err);
        }
    });
}