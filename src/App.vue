<template>
  <div id="app">
    <v-header></v-header>
    <router-view ></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './components/Header'
import foot from './components/Foot'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-footer': foot
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  html {
    font-size: 16px;
    height: 100%;
  }
</style>
