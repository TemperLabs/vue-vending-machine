<template>
<div class="vmachine">
  <h1 class="vmachine-h1">Вендинговая машина</h1>
  <div class="goods-coins-wr">
  <ul class="cashier-goods">
    <li v-for="good in cashier.goods" :key="good.name" class="cashier-good">
      <div
      :class="`cashier-goods--${good.name}`"></div>
      <div>{{good.cost}} ₽</div>
      <div>{{good.amount}} шт.</div>
      <button @click="buyProduct({price:good.cost,name:good.name})">{{good.name}}</button>
    </li>
  </ul>
  <ul class="cashier-coins">
    <li v-for="(coin, key) in cashierCoins" :key="key" class="cashier-coin">
      <div class="coin_amount">{{coin.amount}} шт.</div>
      <div class="coin_round">{{coin.cost}} ₽</div>
    </li>
  </ul>
  </div>
  <div class="payment">
    <span>внесенная сумма</span>
    {{payment}}
  </div>
  <button type="button" class="payback-button" @click="getPayback">GetPayback</button>
  <div class="total-amount">Баланс в аппарате: {{this.cashierTotal}}</div>
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
    ...mapState(['payment']),
    ...mapGetters(['cashierCoins'])
  },
  methods: {
    ...mapActions(['acceptPayment']),
    ...mapActions(['buyProduct']),
    ...mapActions(['getPayback'])
  }
}
</script>

<style lang="scss">
  .vmachine-h1 {
    font-size: 24px;
    margin: 0.4em 0.5em;
  }
.vmachine {
  height: 540px;
  width: 540px;
  background: url('~@/assets/vm.svg') center center no-repeat;
  display: flex;
  flex-direction: column;
  padding: 0 90px;
}
.cashier-goods {
  padding-top: 50px;
  width: 300px;
  font-weight: 600;
  font-size: 16px;
  color: darkmagenta;
  padding-left: 44px;
}
.cashier-good {
  padding-bottom: 25px;
  background: #ffb826;
}
.cashier-coin {
  padding-bottom: 6px;
}
.coin_round {
  text-align: left;
  padding-left: 12px;
  color: #700114;
  font-size: 16px;
}
.cashier-coins {
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.goods-coins-wr {
  display: flex;
  height: 330px;
}

  .coin_amount {
    border: 2px solid #1f1e1d;
    background: #63D3FD;
    padding: 4px 5px;
    border-radius: 5px;
    width: 40px;
  }
  .payment {
    padding: 20px 15px;
  }
  .total-amount {
    margin-top: 40px;
  }
</style>
