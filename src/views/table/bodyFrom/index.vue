<template>
  <div class="from">
    <el-button class="button">
      <i class="el-icon-circle-plus-outline"></i>
      <span>新建</span>
    </el-button>
    <el-button type="warning" class="button1">
      <span>工单管理</span>
    </el-button>
    <div>
      <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="序号" width="80" />
      <el-table-column prop="name" label="工单编号" width="155" />
      <el-table-column prop="name" label="设备编号" width="155" />
      <el-table-column prop="name" label="工单编号" width="155" />
      <el-table-column prop="name" label="工单方式" width="155" />
      <el-table-column prop="name" label="工单状态" width="155" />
      <el-table-column prop="name" label="运营人员" width="155" />
      <el-table-column prop="name" label="创建日期" width="155" />
      <el-table-column prop="name" label="操作" width="155" />
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '1',
          name: '1066',
          address: '上海市普陀区金沙江路 151w38 弄',
        },
       
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.from {
  padding: 20px 15px 19px 17px;
  background-color: #fff;
  .button {
    background: linear-gradient(135deg, #ff9743, #ff5e20) !important;
    margin: 0px;
    padding: 0px;
    border: 0px;
    width: 80px !important;
    height: 36px;
    align-items: center;
    color: #fff;
  }
  .button1 {
    background-color: #fbf4f0 !important;
     margin: 0px;
    padding: 0px;
    border: 0px;
    width: 80px !important;
    height: 36px;
    align-items: center;
    margin-left: 10px;
    span {
      color: #655b56 !important;
    }
  }
}
</style>
