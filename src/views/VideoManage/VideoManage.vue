<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-6">
          <h1>表单</h1>
          <hr>
          <div class="form-group">
            <label for="email">邮箱</label>
            <input type="text" id="email" class="form-control" v-model.trim="userInfo.email">
          </div>
          <div class="form-group">
            <label for="password">密码</label>
            <input type="password" id="password" class="form-control" v-model.lazy="userInfo.password">
          </div>
          <div class="form-group">
            <label for="age">年龄</label>
            <input type="number" id="age" class="form-control" v-model.number="userInfo.age">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6">
          <label for="message">信息</label>
          <br>
          <textarea id="message" rows="5" class="form-control" v-model="message"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6">
          <div class="form-group">
            <label for="sendmail">
              <input type="checkbox" id="sendmail" value="SendMail" v-model="sendMail"> 订阅邮箱
            </label>
            <label for="sendInfomail">
              <input type="checkbox" id="sendInfomail" value="SendInfoMail" v-model="sendMail"> 订阅短信
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6">
          <label for="male">
            <input type="radio" id="male" value="Male" v-model="sex"> 男
          </label>
          <label for="female">
            <input type="radio" id="female" value="Female" v-model="sex"> 女
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6">
          <label for="priority">下拉菜单</label>
          <select id="priority" class="form-control" v-model="selectItem">
            <option v-for="item in priorities" :key="item" :selected="item == '中'">{{ item }}</option>
          </select>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6">
          <button class="btn btn-primary" @click.prevent="submit">提交</button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="show">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>数据展示</h4>
          </div>
          <div class="panel-body">
            <p>邮箱: {{ userInfo.email.length }}</p>
            <p>密码: {{ userInfo.password}}</p>
            <p>年龄: {{ typeof userInfo.age }}</p>
            <p style="white-space:pre">信息: {{ message }}</p>
            <p><strong>订阅</strong></p>
            <ul>
              <li v-for="item in sendMail" :key="item">{{ item }}</li>
            </ul>
            <p>性别: {{ sex }}</p>
            <p>优先级: {{ selectItem }}</p>
            <p>开关: {{ switchKey }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

 // 导入模块
 export default {
 data() {
 return {
        userInfo: {
          email: '123@qq.com',
          password: '',
          age: 18,
        },
        message: '',
        sendMail: [],
        sex: '',
        selectItem: '低',
        switchKey: true,
 // 这里的布尔值用来往子组件中传值
        show: false,
        priorities: ['高', '中', '低'],
      }
    },
    methods: {
 submit: function() {
 // 整理后台接口
 this.show = true
 // 做了个简单的，使用show可以展示数据
      }
    }
  }
</script>

<style>

</style>