const mysql = require('mysql');
const {formatData} = require('../tools');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'bbf',
    multipleStatements : true
});

module.exports = (sql)=>{
    return new Promise((resolve,reject)=>{
        pool.query(sql,function(error,data){
            if(error){             
                reject(formatData({data:error,code:250}))
            }
            resolve(formatData({data}));
        });
    })
}