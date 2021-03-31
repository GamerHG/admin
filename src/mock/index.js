import Mock from 'mockjs'
import homeApi from './home'
import userApi from './user'

//设置200-1000延时
Mock.setup({
    timeout:'200-1000'
})
//首页相关
//拦截的是/home/getData
Mock.mock(/\/home\/getData/,'get',homeApi.getHomeData)
Mock.mock(/\/user\/del/,'get',userApi.delUser)
Mock.mock(/\/user\/batchremove/,'get',userApi.batchremove)
Mock.mock(/\/user\/add/,'post',userApi.addUser)
Mock.mock(/\/user\/edit/,'post',userApi.editUser)
Mock.mock(/\/user\/getUser/,'get',userApi.getUserList)

