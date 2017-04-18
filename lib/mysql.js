var mysql      = require('mysql');
// app.use(require('body-parser')());
// app.use(require('method-override')());
// app.use(require(__dirname+'/config/router')(express.Router()));
var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : 'user',
    database : 'EYEGUARD',
    debug    :  false
});

pool.getConnection(function(err,connection){
        if (err) {
          console.log("Error: Connection to PostgreSQL was not established!");
          return;
        }else{
        	console.log("Success: Connection to PostgreSQL was established!");
       		console.log('connected as id ' + connection.threadId);
        }

        }
  });

// module.exports = pool;