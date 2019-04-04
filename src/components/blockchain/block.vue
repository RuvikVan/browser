<template>
  <article>
    <div class="wrapper">
      <blocktable></blocktable>
    </div>
  </article>
</template>

<script>
import blocktable from '../blockchain/blocktable'

export default {
  name: 'block',
  components: {
    blocktable
  }
}
</script>

<style scoped>
  .wrapper {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
