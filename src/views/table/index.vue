<template>
  <div class="app-container">
    <!-- 头部 -->
    <headSearch
      :dropDown="true"
      orderLabel="工单编号"
      stateLabel="工单状态"
      :dropDownList="dropDownList"
    ></headSearch>
    <bodyFrom></bodyFrom>
  </div>
</template>

<script>
import headSearch from '@/components/headSearch'
import bodyFrom from './bodyFrom'

export default {
  data() {
    return {
      formInline: {
        user: '',
        region: '',
      },
      // 下拉数据
      dropDownList: ['待办', '进行', '取消', '完成'],
    }
  },

  created() {},

  methods: {},
  components: {
    headSearch,
    bodyFrom
  },
}
</script>

<style scoped lang="scss"></style>
