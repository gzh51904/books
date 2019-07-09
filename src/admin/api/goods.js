const express = require('express');

const Router = express.Router();

const {formatData} = require('../tools')

const {mongo} = require('../db');

const {insert,delete:del,find,update,findId} =mongo;

//查询所有数据
Router.get("/",async (req, res) => {
    let data = await find('goods')
    if(!data) return res.send(formatData({code:250,data}))

    res.send(formatData({data}))
})
//查询某条数据
Router.get("/:id",async (req, res) => { 

    let data = await findId('goods',req.params.id)
    if(!data) return res.send(formatData({code:250,data}))

    res.send(formatData({data}))
})

//插入一条数据
Router.post('/',async (req,res)=>{
    
    let data = await insert('goods',req.body)

    res.send(formatData({data}))
})

Router.put('/',async (req,res)=>{
    //更新数据
    let data = await update('goods',req.query,req.body);

    if(!data) return res.send(formatData({code:250,data}))

    res.send(formatData({data}))
})

Router.delete('/',async (req,res)=>{
    //删除数据
    let data = await del('goods',req.query);

    if(!data) return res.send(formatData({code:250,data}))

    res.send(formatData({data}))
})

module.exports = Router;