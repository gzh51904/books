const express = require('express');

const Router = express.Router();

const {formatData} = require('../tools')

const {mongo} = require('../db');

const {insert,delete:del,find,update} =mongo;

//注册插入一条数据
Router.post('/',async (req,res)=>{
    
    let data = await insert('user',req.body)

    res.send(formatData({data}))
})

Router.put('/',async (req,res)=>{
    //更新数据
    let data = await update('user',req.query,req.body);

    if(!data) return res.send(formatData({code:250,data}))

    res.send(formatData({data}))
})

Router.delete('/',async (req,res)=>{
    //删除数据
    let data = await del('user',req.query);

    if(!data) return res.send(formatData({code:250,data}))

    res.send(formatData({data}))
})

Router.get('/check',async (req,res)=>{
    let {username} = req.query;
    let result = await find('user',{username})
    //查到结果，表示已经注册过
    if(result.length>0){
        return res.send(formatData({code:250}))
    }
    return res.send(formatData({result}))
})

module.exports = Router;