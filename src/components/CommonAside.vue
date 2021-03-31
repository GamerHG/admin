<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
  <h3>课程后台管理系统</h3>
    <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
        <i :class="'el-icon-'+ item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
    <el-submenu index="1" v-for="(item,index) in hasChildren" :key="index">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{item.label}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">
            <i :class="'el-icon-'+ subItem.icon"></i>
      <template slot="title">      
            <span>{{subItem.label}}</span>
      </template>
            </el-menu-item>
 
      </el-menu-item-group>
      </el-submenu>
  </el-menu>
</template>

<script>
export default {
    computed: {
        noChildren() {
            return this.AsideMenu.filter(item => !item.children) 
        },
        hasChildren() {
            return this.AsideMenu.filter(item => item.children) 
        }
    },
    data() {
        return {
            AsideMenu: [
               {
                   path:'/',
                   label:'首页',
                   name:'home',
                   icon:'s-home'
               },
               {
                   path:'/video',
                   label:'视频管理',
                   name:'video',
                   icon:'video-play'
               },
               {
                   path:'/user',
                   label:'用户管理',
                   name:'user',
                   icon:'user'
               },
               {
                   label:'其他',
                   children:[
                       {
                           path:'page1',
                           label:'页面1',
                           name:'page1',
                           icon:'s-home'
                       },
                       {
                           path:'page2',
                           label:'页面2',
                           name:'page2',
                           icon:'s-home'
                       }
                   ]
               }

            ]
        }
    },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){

      this.$router.push({path: item.path})
      this.$store.commit('selectMenu',item)
    }
  },
};
</script>

<style lang="scss" scoped>
 .el-menu{
   h3{
     color: aqua;
     font-size: 20px;
     margin-left: 15px;
     margin-top: 20px;
   }
 }
</style>