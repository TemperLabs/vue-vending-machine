<template>
  <div class="payment">
    <h1 class="payment-h1">Внесенные средства</h1>
    <p>{{payment}}</p>
     </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'payment',
  computed: {
    ...mapState(['payment'])
  }
}
</script>

<style scoped>

</style>
