<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" style="height: 290px">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">Nick</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2021-3-3</span></p>
          <p>上次登录地点:<span>武汉</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="height: 522px; margin-top: 20px">
        <el-table :data="tableData">
          <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in countData" :key="item.name">
          <i
            class="icon"
            :class="`el-icon-` + item.icon"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <echart style="height: 280px" :chartData="echartData.order"></echart>
      </el-card>
      <div class="graph">
        <el-card shadow="hover">
          <echart style="height: 260px;" :chartData="echartData.user"></echart>
        </el-card>
        <el-card shadow="hover">
          <echart style="height: 260px" :chartData="echartData.video"></echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>

import Echart from '../../components/Echart.vue';
export default {
    components: {
        Echart
    },
 
   data() {
    return {
      userImg: require("../../assets/images/logo.png"),
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "goods",
          color: "2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 1234,
          icon: "goods",
          color: "2ec7c9",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "goods",
          color: "2ec7c9",
        },
        {
          name: "今日销售订单",
          value: 1234,
          icon: "goods",
          color: "2ec7c9",
        },
        {
          name: "今日预定订单",
          value: 1234,
          icon: "goods",
          color: "2ec7c9",
        },
        {
          name: "今日完成订单",
          value: 1234,
          icon: "goods",
          color: "2ec7c9",
        },
      ],
      tableData: [],
      tableLabel: {
        name: "课程名",
        todayBuy: "今日购买",
        monthBuy: "月购买",
        totalBuy: "总购买",
      },
      echartData:{
        order:{
          xData:[],
          series:[]
        },
        user:{
          xData:[],
          series:[]
        },
        video:{
          series:[]
        }
      }
    };
  },
  mounted() {},
  methods: {
    getTableData() {
      this.$http.get("/home/getData").then((res) => {
        res = res.data;
        this.tableData = res.data.tableData;
        console.log(res);
        const order = res.data.orderData
        console.log(order.date)
        //折线图
        this.echartData.order.xData = order.date
        let keyArr = Object.keys(order.data[0])
        console.log(keyArr)
        keyArr.forEach(key =>{
          this.echartData.order.series.push({
            name:key,
            data:order.data.map(item =>item[key]),
            type:'line'
          })
        })
        //柱状图
        this.echartData.user.xData = res.data.userData.map(item => item.date)
        this.echartData.user.series.push({
          name:'新增用户',
          data:res.data.userData.map(item => item.new),
          type:'bar'
        })
        this.echartData.user.series.push({
          name:'活跃用户',
          data:res.data.userData.map(item => item.active),
          type:'bar'
        })
        //饼图
        this.echartData.video.series.push({
           data: res.data.reportData,
           type:'pie'
        })
      });
    },
  },
  created() {
    this.getTableData();
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/home.scss";
</style>