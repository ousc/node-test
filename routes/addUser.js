var express = require('express');
var router = express.Router();
var request = require('request');
var mongoose = require('mongoose');
var User = require('../models/user');
var ClassRoom = require('../models/classroom');
var Earnedachievement = require('../models/achievement');

// 接受用户表单
router.post('/',function(req, res, next) {
    // 用户插入
    var add_user=req.body;
    console.log(add_user);
    // 执行用户插入
    User.create(add_user,
        function(err,user) {
            if (err) return next(err);    // 交给接下来的错误处理中间件
            console.log('保存成功：' + user);
            // 执行成就更新
            Earnedachievement.create({user: user._id},function (err, doc) {
                if(err) console.log(err);
                console.log('保存成功3：'+doc);
                res.status(201).json({msg:'注册成功',userId:user._id});       // 存储成功
            });
            // // 查找用户所属班级
            // ClassRoom.findOne({codeCamel: add_user.classId},function (err, classroom) {
            //     if(err) console.log(err);
            //     //将学生id添加进班级
            //     classroom.members.push(user._id);
            //     //执行班级信息修改
            //     ClassRoom.update({codeCamel: add_user.classId},{$set:{members:classroom.members}},function (err, doc) {
            //         if(err) console.log(err);
            //         console.log('保存成功2：'+doc);
            //
            //     })
            // });
    });




});

module.exports = router;

