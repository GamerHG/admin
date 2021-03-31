<template>
  <header>
    <div class="l-content">
      <el-button type="primary"><i class="el-icon-menu"></i></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if='current'>
          {{current.label}}
          </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <el-button type="primary">
          <img :src="Imgurl" class="userImg" />
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import {mapState} from "vuex"
export default {
  data() {
    return {
      Imgurl: require("../assets/images/logo.png"),
    };
  },
  computed: {
    ...mapState({
      current:state => state.tab.currentMenu  
    })
  }

};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: #333;
}
.l-content{
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-between;
}
.r-content {
  img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }
}

</style>
<style lang="scss">

.el-breadcrumb__item 
{
  .el-breadcrumb__inner.is-link{
  color: #606266;
} 
&:last-child{
  .el-breadcrumb__inner.is-link{
    color: #fff;
  }
}
} 

</style>