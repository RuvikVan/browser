<template>
  <div id="table">
    <el-table
      :data="tableData"
      style="width: 1000px">
      <el-table-column
        prop="height"
        label="Height"
        width="180">
      </el-table-column>
      <el-table-column
        prop="transactions[0].number"
        label="Transactions"
        width="180">
      </el-table-column>
      <el-table-column
        prop="timeStamp"
        label="Age">
      </el-table-column>
      <el-table-column
        prop="proposal"
        label="Proposer">
      </el-table-column>
      <el-table-column
        prop="round"
        label="NOD Used">
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
  name: 'blocktable',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    axios.post('http://47.99.236.226:8060/query/block/getBlocks', {pageNum: 0, pageSize: 10}).then((res) => {
      this.tableData = res.data.data.data
    })
  },
  methods: {
    handleCurrentChange (val) {
      axios.post('http://47.99.236.226:8060/query/block/getBlocks', {pageNum: val, pageSize: 10}).then((res) => {
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
