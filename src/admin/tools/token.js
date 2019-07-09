const jwt = require('jsonwebtoken');
const {
    pKey
} = require('../config.json');

exports.create = (data, expiresIn = 60*60*2) => {
    let token = jwt.sign({
        data
    }, pKey, {
        expiresIn
    });
    return token;
}

exports.verify = (token) => {
    let res = false;
    try {
        jwt.verify(token, pKey);
        res = true;
    } catch (err) {
        res = false;
    }
    return res;
}