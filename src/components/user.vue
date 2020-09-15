<template>
  <div class="user">
    <div class="user_coins">
      <h1>Customer</h1>
      <ul>
      <li v-for="(item, key) in userCoins" :key="key">
        <div>{{item.cost}} ₽</div>
        <div class="user_coin_amount">{{item.amount}} шт.</div>
        <button class="insert_coin" @click="insertCoin(item.cost)">Insert Coin</button>
      </li>
      </ul>
      <div>
        <h3>Приобретенные товары</h3>
      <ul>
        <li v-for="(good, key) in userGoods" :key="key">
          <div>{{good.name}}</div>
          <div :class="`user-goods--${good.name}`">{{good.amount}} шт.</div>
        </li>
      </ul>
        Потрачено: {{userTotalSpent}}
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'user',
  computed: {
    ...mapState([
      'user'
    ]),
    ...mapGetters(['userCoins']),
    ...mapGetters(['userGoods']),
    ...mapGetters(['userTotalSpent'])
  },
  methods: {
    ...mapActions([
      'insertCoin'
    ])
  }
}
</script>

<style lang="scss">
 .user {
   background-color: darkseagreen;
 }
 .user_coin_amount {
   border: 2px solid #1f1e1d;
   background: #f7f7f7;
   padding: 8px 5px;
   border-radius: 7px;
 }
  .user-goods {
    background: lightgray;
    width: 40px;
    height: 40px;
  }

</style>
