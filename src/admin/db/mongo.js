const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let {
    mongourl: url,
    dbname
} = require("../config.json");

const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, (err, client) => {
            if (err) {
                return reject(err)
            }

            let db = client.db(dbname);
            resolve({
                db,
                client
            });
        });
    })
}

// 插入 1.集合名，2.数据
exports.insert = async (colName, data) => {
    let {
        db,
        client
    } = await connect();

    let col = db.collection(colName);

    return col.insertOne(data);

    client.close();
}

// 删除 1.集合名，2.条件
exports.delete = async (colName, query) => {
    let {
        db,
        client
    } = await connect();

    let col = db.collection(colName);
    return col.deleteMany(query);

    client.close();
}

// 改 1.集合名，2.条件 3.修改的内容
exports.update = async (colName, query, data) => {
    let {
        db,
        client
    } = await connect();

    let col = db.collection(colName);
    return col.updateMany(query, {
        $set: data
    });

    client.close();
}

// 查 1.集合名，2.条件 3.修改的内容
exports.find = async (colName, query, {limit,skip,sort} = {}) => {
    let {
        db,
        client
    } = await connect();

    let col = db.collection(colName);
    let res = col.find(query);

    // 跳过的数量
    if (skip) {
        res = res.skip(skip);
    }

    // 限制数量
    if (limit) {
        res = res.limit(limit);
    }

    if (sort) {
        res = res.sort(sort);
    }
    return res.toArray();

    client.close();
}

exports.findId = async (colName,id)=>{
    let {
        db,
        client
    } = await connect();
    
    var _id =new mongodb.ObjectId(id);
    var query = {
        _id
    };

    let col = db.collection(colName);
    let res = col.find(query);

    return res.toArray();
    client.close();
}