const Router = require('koa-router');
const roleController = require('../controller/user').roleController

const router = new Router({
    prefix: '/role'
});

//用户注册
router.post('/create',roleController.create)

//获取用户信息
router.post('/getRoleInfo',roleController.getRoleInfo)
router.post('/setRole',roleController.setRole)

//修改
router.post('/update',roleController.update)

module.exports = router;