var express = require('express');
var router = express.Router();
var request = require('request');
var mongoose = require('mongoose');
var User = require('../models/user');
var ClassRoom = require('../models/classroom');
var Earnedachievement = require('../models/achievement');
var CourseInstance = require('../models/courseInstance')
var async = require('async');

// 接受用户表单
router.post('/',function(req, res, next) {
    // 用户插入
    var add_user=req.body;
    console.log(add_user);
    // 执行用户插入
    User.create(add_user,
        function(err,user) {
            if (err){
                console.log(err);
                return res.status(500).json({msg:'保存出错',err:err});}
            console.log('用户添加成功：' + user._id);
            async.series([
                // 执行成就更新
                Earnedachievement.create({user: user._id},function (err, doc) {
                    if(err) {
                        console.log(err);
                        return res.status(500).json({msg:'保存出错',err:err});
                    }
                    console.log('保存成就成功：'+doc);
                }),
                //执行班级信息修改
                ClassRoom.update({codeCamel: add_user.classId},{$push:{members:user._id}},function (err, doc) {
                    if(err) {
                        console.log(err);
                        return res.status(500).json({msg:'保存出错',err:err});
                    }
                    console.log('保存班级成功：'+doc);
                }),
                CourseInstance.update({classroomID: mongoose.Types.ObjectId('5adebd75ffac425159fe4f60')},{$push:{members:user._id}},{multi:true},function (err, doc) {
                    if(err) {
                        console.log(err);
                        return res.status(500).json({msg:'保存出错',err:err});
                    }
                    console.log('保存课程成功：'+doc);
                })
            ],function() {
                console.log("注册成功");
                res.status(201).json({msg:'注册成功',userId:user._id});       // 存储成功
            });
        });
});

module.exports = router;

