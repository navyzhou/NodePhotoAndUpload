var express=require('express');
var fs=require('fs'); //文件操作
var bodyParser = require('body-parser');

var app=express(); //创建web应用程序
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//获取所有数据
app.post("/uploadPics",function(req,res){
    var bitmap=new Buffer(req.body.imageData,'base64');
    fs.writeFile("./images/"+new Date().getTime()+".jpg",bitmap,function(err){
        if(err){
            res.send("0");
        }else {
            res.send("1");
        }
        res.end();
    });
});

//获取user下面的静态文件
app.get("/*",function(req,res){
    res.sendFile(__dirname+req.url);
});

app.listen(6666);