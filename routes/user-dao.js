var express = require('express');
var router = express.Router();
var request = require('request');
var User = require('../models/user');

// 接受用户表单
router.post('/',function(req, res, next) {
    var username = req.body.username || '',
        password = req.body.password || '';
    console.log('用户名'+username+'密码'+password)
    if (username.length === 0 || password.length === 0) {
        return res.status(400).end('用户名或密码不合法');
    }

    User.create({username: username, password: password},
        function(err, user) {
            if (err) return next(err);    // 交给接下来的错误处理中间件
            res.status(201).end('注册成功');       // 存储成功
        });
});

module.exports = router;
