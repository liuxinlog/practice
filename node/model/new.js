/**
 * Created by dllo on 16/11/28.
 */

//在模块内部,可以省略 module 关键字
//module.exports(module 就是关键字)
const mysql = require("mysql");
var connect = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database:"0811"
});
connect.connect();
//从数据库中查找所有数据,给主页显示

exports.selectAllNews = (callback) =>{
    connect.query("SELECT * FROM news",(err,rows,field)=>{
         callback(err,rows);
    })

};
//根据 id 查找具体某一条数据,给 detail 页显示
exports.selectNewById = (id,callback) =>{
     connect.query(`SELECT * FROM news WHERE id=${id}`,(err,rows,field)=>{
         callback(err,rows[0]);
     })
};
//上传一条新闻
exports.uploadNew = (newObj,callback) =>{
    connect.query(`INSERT INTO news(title,content,imgpath) VALUE ("${newObj.title}","${newObj.content}","${newObj.imgpath}")`,(err,field)=>{
        //受影响的行数
        callback(err,field.affectedRows);
    })
};