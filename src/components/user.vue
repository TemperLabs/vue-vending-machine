<template>
  <div class="user">
    {{userCoins}}
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
          <div>{{good.amount}} шт.</div>
        </li>
      </ul>
        Потрачено: {{userTotalSpent}}
      </div>
    </div>
<!--    <div class="user_goods">-->
<!--      Купленное-->
<!--      <ul>-->
<!--        <li v-for="item in user.goods" :key="item.name">-->
<!--          <div class="user_good" :class="[`user_good-${item.name}`]">-->
<!--            <div>{{item.name}}</div>-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
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
  .user_good-1 {
    transform: translate3d(0, 120px, 120px);
    background: midnightblue;
  }
 .user_good-2 {
   transform: translate3d(0, 249px, 120px);
   background: #700d14;
 }
 .user_good-3 {
   transform: translate3d(0, 360px, 120px);
   background: #4a7035;
 }
</style>
