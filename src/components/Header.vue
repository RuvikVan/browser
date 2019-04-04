<template>
  <header>
    <div class="wrapper">
      <div class="content-left">
        <img src="../assets/logo.svg">
      </div>
      <div class="content-right">
        <ul>
          <li>
            <a href="#">
              <span>HOME</span>
            </a>
          </li>
          <li>
            <blockchaindrop></blockchaindrop>
          </li>
          <li>
            <a href="#">
              <span>INTERCHAIN</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>TOKENS</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import blockchaindrop from './blockchain/blockchaindrop'
export default {
  name: 'header',
  components: {
    blockchaindrop
  }
}
</script>

<style scoped>
  @media screen and (min-width: 1000px) {
    header {
      width: 100%;
      background: rebeccapurple;
      height: 100px;
    }

    img {
      width: 220px;
      height: 50px;
      margin-top: 25px;
    }

    .wrapper {
      width: 1000px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .content-right {
      display: flex;
      height: 100%;
    }

    ul {
      margin-top: 50px;
      margin-right: 20px;
    }

    li {
      float: left;
      width: 120px;
      list-style: none;
      line-height: 40px;
      margin-left: 40px;
    }

    a {
      text-decoration: none;
    }

    span {
      color: white;
    }
  }
</style>
