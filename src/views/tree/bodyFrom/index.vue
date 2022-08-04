<template>
  <div class="from">
    <el-button class="button">
      <i class="el-icon-circle-plus-outline"></i>
      <span>新建</span>
    </el-button>
    <el-table :data="tableData" style="width: 100%" >
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
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
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
}
</style>
