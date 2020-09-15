<template>
<div class="vmachine">
  <h1 class="vmachine-h1">Аппарат</h1>
  <div>vmachinecoins {{vmachineCoins}}</div>
  <ul>
    <li v-for="good in cashier.goods" :key="good.name">
      <div>{{good.name}}</div>
      <div>{{good.cost}} ₽</div>
      <div>{{good.amount}} шт.</div>
      <button @click="buyProduct({price:good.cost,name:good.name})">buyProduct</button>
    </li>
    <li><span>Баланс в аппарате: </span>{{this.cashierTotal}}</li>
  </ul>
  <span>Монеты аппарата:</span>
  <ul>
    <li v-for="(coin, key) in cashierCoins" :key="key">
      <div class="coin_round">{{coin.cost}} ₽</div>
      <div class="coin_amount">{{coin.amount}} шт.</div>
    </li>
  </ul>
  <button type="button" @click="getPayback">GetPayback</button>
</div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'vending-machine',
  computed: {
    ...mapGetters(['cashierTotal']),
    ...mapState(['cashier']),
    ...mapState(['payback']),
    ...mapGetters(['cashierCoins']),
    ...mapGetters(['vmachineCoins'])
  },
  methods: {
    ...mapActions(['acceptPayment']),
    ...mapActions(['buyProduct']),
    ...mapActions(['getPayback'])
  }
}
</script>

<style lang="scss">
.vmachine {
  background-color: lightcoral;
}
  .coin_round {
    background-color: coral;
    padding: 12px;
    border-radius: 50%;
  }
  .coin_amount {
    border: 2px solid #1f1e1d;
    background: #f7f7f7;
    padding: 8px 5px;
    border-radius: 7px;
  }
</style>
