<template>
  <div id="table">
    <el-table
      :data="tableData"
      style="width: 1000px">
      <el-table-column
        prop="blockHash"
        label="blockHash"
        width="180">
      </el-table-column>
      <el-table-column
        prop="blockNumber"
        label="height"
        width="180">
      </el-table-column>
      <el-table-column
        prop="blockTime"
        label="Age">
      </el-table-column>
      <el-table-column
        prop="value"
        label="value">
      </el-table-column>
      <el-table-column
        prop="quotaPrice"
        label="quotaPrice">
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="1000"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'transactionstable',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    axios.post('http://47.99.236.226:8060/query/block/getTransactions', {pageNum: 0, pageSize: 10}).then((res) => {
      this.tableData = res.data.data.data
    })
  },
  methods: {
    handleCurrentChange (val) {
      axios.post('http://47.99.236.226:8060/query/block/getTransactions', {pageNum: val, pageSize: 10}).then((res) => {
        this.tableData = res.data.data.data
      })
    }
  }
}
</script>

<style scoped>
  #table{
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .pagination {
    float: right;
    margin-top: 30px;
  }
</style>
