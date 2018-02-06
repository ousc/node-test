var express = require('express');
var router = express.Router();
var request = require('request');
var userDao = require('../dao/user-dao')
// 接受用户表单
router.post('/',function(req, res, next) {
    console.log(typeof req.body);
    // var user=JSON.parse(req.body);
    if(userDao.create(req.body,next)) {
        res.status(201).end('注册成功');
    }else {
        res.status(400).end('用户名或密码不合法');
    }

});

module.exports = router;
