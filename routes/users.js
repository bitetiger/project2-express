var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
const app = require('../app');

// app.use(bodyParser.urlencoded({extended: true}))

var connection = mysql.createConnection({
  host     : 'd',
  user     : 'admin',
  password : '6',
  database : 'express_db'
});

connection.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {

  connection.query('SELECT * from users', function(err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });

});

router.post('/', function (req, res, next) {
  console.log("post했다.");
  const sql = "INSERT INTO users(name,email) VALUES(?, ?)";
  
  connection.query(sql,[req.body.name, req.body.email], function(err, result, fields){
    if(err) throw err;
    console.log(result)
    console.log("성공적으로 DB 입력됨")
  })
  res.send('Got a POST request');
});

//  connection.end();

module.exports = router;

