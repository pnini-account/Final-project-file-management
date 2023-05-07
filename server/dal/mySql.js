var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "srv2",
  password: "1234",
  database:'files_manegment'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});  
module.exports = con;  
// con.end();


