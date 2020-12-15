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
  res.render('contact', { title: 'Express' });
});

  router.post('/send',function(req,res,next){
    var name_id = req.body.name;
    var email_name = req.body.email;
    var subject_name = req.body.sub;
    var message_name = req.body.mess;

    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected! DB:admin");
     
      var sql = "INSERT INTO ads (name_id,email_name,subject_name,message_name)" ;
      sql += "VALUES('" + name_id + "','" + email_name +"','" + subject_name + "', '" +message_name+"')";
      con.query(sql,function (err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
      })
  });
    //con.end();
});
module.exports = router;
