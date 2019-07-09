//导入express
const express = require("express");
const Router = express.Router();

const {formatData,token} = require('../tools')

const {mongo:{find}} = require('../db');

Router.get("/",async (req,res)=>{
    let {username,password} = req.query;
    let data = await find('user',{username,password})
    
     
    if(data.length==0){
        //查不到结果，表示登录失败
        return res.send(formatData({code:250,msg:'login fail'}))     
    }else{
        //登录ok，生成token返回前端
        let Athorization = token.create(username);
        res.send(formatData({data:Athorization}))
    }
})

module.exports = Router;