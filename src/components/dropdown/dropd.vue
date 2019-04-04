<template>
  <div>
    <el-dropdown placement="bottom-start">
  <span class="el-dropdown-link">
        {{mainTag}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
      <el-dropdown-menu slot="dropdown" v-for="tag in listTag" :key="tag">
        <el-dropdown-item>{{tag}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'dropd',
  props: {
    listTag: {
      type: Array
    },
    mainTag: {
      type: String
    }
  }
}
</script>

<style scoped>

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
