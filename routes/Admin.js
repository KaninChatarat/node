var express = require('express');
var router = express.Router();
const mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"admin"
})
/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('Admin', { title: 'Express' });
});

router.get('/getData', function(req, res, next) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected! DB:admin");
        var sql = "select * from ads ";
        con.query(sql,function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        })
    con.end()
    });
});

module.exports = router;
