<template>
  <footer>
    <div class="content">
      <div class="content-img">
        <img src="../assets/icon-logo1.svg">
        <img src="../assets/icon-logo3.svg">
        <img src="../assets/icon-logo4.svg">
        <img src="../assets/icon-logo5.svg">
      </div>
      <div class="content-company">
        <p>杭州deep dark fantasy公司</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style scoped>
  @media screen and (min-width: 1000px) {
    * {
      padding: 0;
      margin: 0;
    }

    footer {
      display: flex;
      width: 100%;
      background: blue;
      height: 100px;
      justify-content: center;
    }

    .content {
      width: 75%;
      display: flex;
      justify-content: center;
    }

    .content-img {
      display: flex;
      flex-direction: row;
      height: 30%;
      justify-content: center;
    }

    .content-img img {
      width: 30px;
    }

    .content-company {
      display: flex;
      height: 30%;
      justify-content: center;
    }

    .content-company p {
      text-align: center;
      color: white;
    }
  }
</style>
