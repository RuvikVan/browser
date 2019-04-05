<template>
  <article>
    <div class="wrapper">
      <transactionstable></transactionstable>
    </div>
  </article>
</template>

<script>
import transactionstable from '../blockchain/transactionstable'

export default {
  name: 'transactions',
  components: {
    transactionstable
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
