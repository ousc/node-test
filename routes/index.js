var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
    //控制路由和转发
    var method = 'GET';
    var proxy_url = 'https://www.easy-mock.com/mock/5a5b5ba932a4fc7429df228a/user';
    var options = {
        connection:'keep-alive',
        url: proxy_url+(parseInt(Math.random()*3)+1),
        method: method,
        async : false
    };
    function callback(error, response, data) {
        console.log('正在请求'+options.url);
        if (!error && response.statusCode === 200) {
            console.log('------当前使用------\r\n','user',JSON.parse(data).code,'服务器的数据接口');
            // console.log('------接口数据------\r\n',JSON.parse(data).data);
            console.log('------当前使用------\r\n','user',JSON.parse(data).message);
            res.render('index', { title: 'userdemo','params':JSON.parse(data).data});
        }
    }
    request(options, callback);
});


module.exports = router;
