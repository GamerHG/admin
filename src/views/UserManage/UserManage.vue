<template>
  <div class="manage">
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '编辑用户'"  :visible.sync="isShow">
      <CommonForm
        :form="operateForm"
        :formLabel="operateFormLabel"
      ></CommonForm>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="Confirm"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" style="height: 40px" @click="add">+ 新增</el-button>
      <CommonForm inline :formLabel="formLabel" :form="searchForm">
        <el-button type="primary">搜索</el-button>
      </CommonForm>
    </div>
    <CommonTable
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getUserList"
      @edit="editUser"
      @del="delUser"
    ></CommonTable>
  </div>
</template>

<script>
import CommonForm from "../../components/CommonForm";
import CommonTable from "../../components/CommonTable";
export default {
  components: {
    CommonForm,
    CommonTable,
  },
  data() {
    return {
      isShow: false,
      tableData: [],
      tableLabel: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "age",
          label: "年龄",
        },
        {
          prop: "sexLabel",
          label: "性别",
        },
        {
          prop: "birth",
          label: "出生日期",
        },
        {
          prop: "address",
          label: "地址",
        },
      ],
      operateType: "add",
      operateForm: {
        name: "",
        address: "",
        age: "",
        birth: "",
        sex: "",
      },
      operateFormLabel: [
        {
          model: "name",
          label: "姓名",
        },
        {
          model: "age",
          label: "年龄",
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          options: [
            {
              label: "男",
              value: "1",
            },
            {
              label: "女",
              value: "0",
            },
          ],
        },
        {
          model: "birth",
          label: "生日",
          type: "date",
        },
        {
          model: "address",
          label: "地址",
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false,
      },
      searchForm: {
        keyword: "",
      },
      formLabel: [
        {
          model: "keyword",
          label: "",
        },
      ],
    };
  },
  methods: {
    getUserList() {
      this.config.loading = true;
      this.$http
        .get("/api/user/getUser", {
          params: {
            page: this.config.page,
          },
        })
        .then((res) => {
          this.tableData = res.data.list.map((item) => {
            item.sexLabel = item.sex === 0 ? "女" : "男";
            return item;
          });
          this.config.total = res.data.count;
          this.config.loading = false;
        });
    },
    editUser(row) {
      this.operateType = "edit";
      this.isShow = true;
      this.operateForm = row;
    },
    delUser(row){
       this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let id =row.id
          this.$http.get('api/user/delUser',{
            params:{
              id
            }
          }).then(res=>{
            console.log(res.data)
            this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.getUserList()
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    Confirm(){
        if(this.operateType ==='edit'){
            this.$http.post('/api/user/editUser',this.operateForm).then(res=>{
                console.log(res.data)
            })
        }
        if(this.operateType ==='add'){
          this.$http.post('/api/user/addUser',this.operateForm).then(res=>{
            console.log(res.data)
          })
        }
        
        this.getUserList()
        this.isShow = false
    },
    add(){
      this.operateType ="add"
      this.isShow =true
    }
  },
  created() {
    this.getUserList();
  },
};
</script>

<style lang="scss" scoped>
.manage {
  height: 90%;
  padding-bottom: 20px;
  overflow: hidden;
  .manage-header {
    display: flex;
    justify-content: space-between;
  }
}
</style>