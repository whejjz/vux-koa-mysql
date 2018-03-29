var mysql = require('mysql');
var config = require('../config/index.js')

var pool  = mysql.createPool({
  host     : config.database.HOST,
  user     : config.database.USERNAME,
  password : config.database.PASSWORD,
  database : config.database.DATABASE,
  port     : config.database.PORT
});

let query = ( sql, values ) => {
  return new Promise(( resolve, reject ) => {
    pool.getConnection( (err, connection) => {
      if (err) {
        reject( err )
      } else {
        console.log(sql, 4)
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            console.log(rows, 5)
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })
}

let users =
  `create table if not exists users(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     pass VARCHAR(100) NOT NULL,
     avator VARCHAR(100) NOT NULL,
     moment VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    );`


let createTable = ( sql ) => {
  console.log(sql, 0)
  return query( sql, [] )
}

// 建表
createTable(users)


// 查找用户
let findUserData = ( name ) => {
  console.log(name, 3)
  let _sql = `select * from users where name="${name}";`
  return query( _sql )
}

module.exports = {
  query,
  findUserData
}