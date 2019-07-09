//导入express
const express = require("express");
const Router = express.Router();

const goodsRouter = require("./goods");
const loginRouter = require("./login");
const regRouter = require("./reg");

const {formatData,token:{verify}} = require('../tools');

Router.use(express.urlencoded(),express.json());

let allowOrigin = ['http://127.0.0.1:1904','http://localhost:8080','http://localhost:1904','http://localhost:8081']
// 设置可跨域的
Router.use((req,res,next)=>{

    let idx;
    let has = allowOrigin.some((item,i)=>{
        idx = i;
        return item.includes(req.headers.origin)
    });

    if(has){
        res.header("Access-Control-Allow-Origin", allowOrigin[idx]);
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    }
    if(req.method=="OPTIONS"){
        res.sendStatus(200);
    }else{       
        next();      
    }
})


Router.use("/goods",goodsRouter);
Router.use("/login",loginRouter);
Router.use("/reg",regRouter);

// 校验token
Router.use('/verify',(req,res)=>{
    // 校验token
    // 成功：放行
    // 失败：
    let token = req.headers.authorization;
    if(!verify(token)){
        res.send(formatData({code:401,msg:'unauthorized'}))
    }else{
        res.send(formatData())
    }
});

module.exports = Router;