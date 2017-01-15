var express = require('express');
var router = express.Router();

const mysql  = require('mysql');
const dbconn = mysql.createConnection({
  host     : 'phpmyadmin.trochoid.hu',
  user     : 'fold1',
  password : 'zjtlh72a6yjl3nme',
  database : 'solar'
});

dbconn.connect(function(err){
  if(err){
    console.log('Database connection error: ' + err);
  }else{
    console.log('Database connection successful');
  }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  dbData = new Promise(
      (resolve, reject) => {
        dbconn.query('SELECT * FROM MERES',function(err, records){
          if(err) throw err;

          console.log('Data received from Db:n');
          console.log(records);
          resolve(records);
        });
      }
  );
  dbData.then(
      (val) => {
        res.send(val);
      }
  );
});

module.exports = router;
