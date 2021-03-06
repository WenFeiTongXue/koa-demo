const Router = require('koa-router');
const userController = require('../controller/user').userController

const router = new Router({
    prefix: '/user'
});

//用户注册
router.post('/regist',userController.create)

//密码登陆
router.post('/login',userController.login)

//获取用户信息
router.post('/getUserInfo',userController.getUserInfo)

//修改
router.post('/updateUserInfo',userController.update)

module.exports = router;