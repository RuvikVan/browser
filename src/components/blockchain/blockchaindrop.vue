<template>
  <div>
    <el-dropdown placement="bottom-start">
  <span class="el-dropdown-link">
        BLOCKCHAIN<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
      <el-dropdown-menu slot="dropdown">
        <router-link :to="{name:'Block'}">
          <el-dropdown-item>BLOCKS</el-dropdown-item>
        </router-link>
        <router-link :to="{name:'Transactions'}">
        <el-dropdown-item>TRANSACTIONS</el-dropdown-item>
        </router-link>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'blockchaindrop'
}
</script>

<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: white;
    text-decoration: none;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
  a {
    text-decoration: none;
  }

  .router-link-active {
    text-decoration: none;
  }
</style>
