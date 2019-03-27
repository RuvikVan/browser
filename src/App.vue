<template>
  <div id="app">
    <v-header></v-header>
    <v-middle></v-middle>
    <v-rollData></v-rollData>
    <v-foot></v-foot>
  </div>
</template>

<script>
import header from './components/Header'
import middle from './components/Middle'
import rollData from './components/RollData'
import foot from './components/Foot'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-middle': middle,
    'v-rollData': rollData,
    'v-foot': foot
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  div{
    display: flex;
    flex-direction: column;
  }
  html{
    font-size: 16px;
    height: 100%;
  }
</style>
