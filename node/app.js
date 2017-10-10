/**
 * Created by dllo on 16/11/28.
 */
const express =require("express");
const ejs =require("ejs");
const path =require("path");
const router =require("./controller/router");
var app = express();
//设置静态文件路径
app.use(express.static("public"));
//设置模板引擎
app.set("view engine", "ejs");
//设置模板所在路径 以后就不用一个个设置绝对路径 第一个参数(views)是固定的,第二个参数是自己新建的文件夹名称
app.set("views","self");
//主页
app.get("/",router.showAll);
//详情页
app.get("/detail/:id",router.showDetail);
//上传页
app.get("/upload",router.showUpload);
//表单提交
app.post("/upload",router.formSumit);
app.listen(8080);