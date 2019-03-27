<template>
  <article>
    <div class="wrapper">
      <div class="content-left">
        <div class="content-left-header">
          <div class="content-left-header-logo">
            <img src="../assets/block.png">
          </div>
          <div class="content-left-header-text">
            <span>BLOCKS</span>
          </div>
        </div>
        <div class="content-left-content">
          <p>
              <span>
                  Block Hash {{ block[0].hash }}
              </span>
          </p>
          <p>
              <span>
                  Transactions {{ block[0].transactions[0].number }}
              </span>
          </p>
          <p>
              <span>
                  Proposer {{ block[0].proposal }}
              </span>
          </p>
        </div>
        <div class="content-left-content">
          <p>
              <span>
                  Block Hash {{ block[1].hash }}
              </span>
          </p>
          <p>
              <span>
                  Transactions {{ block[1].transactions[0].number }}
              </span>
          </p>
          <p>
              <span>
                  Proposer {{ block[1].proposal }}
              </span>
          </p>
        </div>
        <div class="content-left-content">
          <p>
              <span>
                  Block Hash {{ block[2].hash }}
              </span>
          </p>
          <p>
              <span>
                  Transactions {{ block[2].transactions[0].number }}
              </span>
          </p>
          <p>
              <span>
                  Proposer {{ block[2].proposal }}
              </span>
          </p>
        </div>
        <div class="content-left-content">
          <p>
              <span>
                  Block Hash {{ block[3].hash }}
              </span>
          </p>
          <p>
              <span>
                  Transactions {{ block[3].transactions[0].number }}
              </span>
          </p>
          <p>
              <span>
                  Proposer {{ block[3].proposal }}
              </span>
          </p>
        </div>
      </div>
      <div class="content-right">
        <div class="content-right-header">
          <div class="content-right-header-logo">
            <img src="../assets/bottom-3.png">
          </div>
          <div class="content-right-header-text">
            <span>TRANSACTIONS</span>
          </div>
        </div>
        <div class="content-right-content">
          <p>
              <span>
                  Block Hash {{ block[0].hash }}
              </span>
          </p>
          <p>
              <span>
                  Transactions {{ block[0].transactions[0].number }}
              </span>
          </p>
          <p>
              <span>
                  Proposer {{ block[0].proposal }}
              </span>
          </p>
        </div>
        <div class="content-right-content">
          <p>
              <span>
                  Block Hash {{ block[1].hash }}
              </span>
          </p>
          <p>
              <span>
                  Transactions {{ block[1].transactions[0].number }}
              </span>
          </p>
          <p>
              <span>
                  Proposer {{ block[1].proposal }}
              </span>
          </p>
        </div>
        <div class="content-right-content">
          <p>
              <span>
                  Block Hash {{ block[2].hash }}
              </span>
          </p>
          <p>
              <span>
                  Transactions {{ block[2].transactions[0].number }}
              </span>
          </p>
          <p>
              <span>
                  Proposer {{ block[2].proposal }}
              </span>
          </p>
        </div>
        <div class="content-right-content">
          <p>
              <span>
                  Block Hash {{ block[3].hash }}
              </span>
          </p>
          <p>
              <span>
                  Transactions {{ block[3].transactions[0].number }}
              </span>
          </p>
          <p>
              <span>
                  Proposer {{ block[3].proposal }}
              </span>
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RollData',
  data () {
    return {
      block: []
    }
  },
  methods: {
    aysncData: function () {
      axios.get('http://47.99.236.226:8060/query/block/getMobileData').then((res) => {
        this.block = res.data.data.blockData
      })
    }
  },
  created () {
    this.aysncData()
  },
  mounted () {
    this.time = setInterval(() => {
      this.aysncData()
    }, 1800)
  }
}
</script>
<style scoped>
  @media screen and (min-width: 1000px) {
    article {
      width: 100%;
    }

    .wrapper {
      width: 1000px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .content-left {
      width: 47%;
      display: flex;
      margin-top: 30px;
      margin-bottom: 30px;
    }

    .content-right {
      width: 47%;
      display: flex;
      margin-top: 30px;
      margin-bottom: 30px;
    }

    .content-left-header {
      width: 100%;
      height: 50px;
      background: lightgrey;
      display: flex;
      flex-direction: row;
    }

    .content-left-header-logo {
      width: 30px;
      margin: 15px;
    }

    .content-left-header-logo img {
      width: 15px;
      height: 15px;
    }

    .content-left-header-text {
      width: 60px;
      margin-top: 12px;
    }

    .content-left-header-text span {
      color: white;
    }

    .content-left-content {
      display: flex;
    }

    .content-left-content p {
      width: 100%;
      margin-top: 10px;
    }

    .content-left-content p span {
      width: 100%;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: gray;
      font-size: 10px;
    }

    .content-right-header {
      width: 100%;
      height: 50px;
      background: lightgrey;
      display: flex;
      flex-direction: row;
    }

    .content-right-header-logo {
      width: 30px;
      margin: 15px;
    }

    .content-right-header-logo img {
      width: 15px;
      height: 15px;
    }

    .content-right-header-text {
      width: 60px;
      margin-top: 12px;
    }

    .content-right-header-text span {
      color: white;
    }

    .content-right-content {
      display: flex;
    }

    .content-right-content span {
      width: 100%;
      margin-top: 10px;
    }

    .content-right-content p span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: gray;
      font-size: 10px;
    }
  }
</style>
