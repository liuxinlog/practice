/**
 * Created by dllo on 16/11/28.
 */
const express = require("express");
const app =express();
//post,get 必须严格匹配/ image ,后面再拼接/ xx 路径都不会处理
app.get("/image/:1",(req,res)=>{
    res.send("微微一笑");
});
//use/xx 后面可以继续拼接只要开头对就行
// app.use(express.static("public"));
app.use("/xx",(req,res)=>{
    res.send("啊啊");
});
//第三个参数next 如果本次条件不符合,找下一个路由,不写就会自动截住
app.get("/name/:name",(req,res,next) =>{
    // res.send(req.params.name);
    if (!/\d+/.test(req.params.name)){
     res.send("我知道了你的名字是"+req.params.name);
    }else{
        //第三个参数next 如果本次条件不符合,找下一个路由
        next();
    }
});
app.get("/name/:id",(req,res,next)=>{
    if (err){
     next();
    }
    res.send("你的学号是"+req.params.id);
});
//通过 use 函数,不传入路径参数,可以设置404页,即以上所有路由规则都不匹配
app.get((req,res)=>{
    res.send("404");
});
app.listen(9999);
