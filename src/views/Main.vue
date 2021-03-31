<template>
    <el-container style="height:100%">
  <el-header style="height:100px;"><CommonHeader/></el-header>
  <el-container>
    <el-aside width="200px" ><CommonAside/></el-aside>
    <el-main>
      <CommonTab/>
    <router-view/>
    </el-main>
  
  </el-container>
</el-container>
</template>

<script>
import CommonHeader from '../components/CommonHeader.vue';
import CommonAside from '../components/CommonAside.vue';
import CommonTab from '../components/CommonTab.vue'
export default {
    components:{
        CommonHeader,
        CommonAside,
        CommonTab
    }
}
</script>

<style lang="scss" scoped>
.el-header{
  padding: 0px;
}
.el-aside{
   background-color: #545c64;
}
.el-main{
  padding: 0px;
}
</style>