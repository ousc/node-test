var User = require('../models/user');
var create=function (user,next) {
    console.log(user)
    if (user.username.length === 0 || user.password.length === 0) {
        return false;
    }
    User.create(user,
        function(err) {
            if (err) return next(err);    // 交给接下来的错误处理中间件
            return true;
        });
}
