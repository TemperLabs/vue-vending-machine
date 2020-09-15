import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const initialState = {
  user: {
    goods: {
      tea: null,
      coffee: null,
      juice: null
    },
    coins: [
      {
        cost: 1,
        amount: 10
      },
      {
        cost: 2,
        amount: 30
      },
      {
        cost: 5,
        amount: 20
      },
      {
        cost: 10,
        amount: 15
      }
    ]
  }
}
export default new Vuex.Store({
  state: {
    user: {
      goods: [
        {
          name: 'tea',
          cost: 13,
          amount: 0
        },
        {
          name: 'coffee',
          cost: 18,
          amount: 0
        },
        {
          name: 'coffeemilk',
          cost: 21,
          amount: 0
        },
        {
          name: 'juice',
          cost: 35,
          amount: 0
        }
      ],
      coins: [
        {
          cost: 1,
          amount: 10
        },
        {
          cost: 2,
          amount: 30
        },
        {
          cost: 5,
          amount: 20
        },
        {
          cost: 10,
          amount: 15
        }
      ]
    },
    payment: 0,
    cashier: {
      goods: [
        {
          name: 'tea',
          cost: 13,
          amount: 10
        },
        {
          name: 'coffee',
          cost: 18,
          amount: 20
        },
        {
          name: 'coffeemilk',
          cost: 21,
          amount: 20
        },
        {
          name: 'juice',
          cost: 35,
          amount: 15
        }
      ],
      coins: [
        {
          cost: 1,
          amount: 100
        },
        {
          cost: 2,
          amount: 100
        },
        {
          cost: 5,
          amount: 100
        },
        {
          cost: 10,
          amount: 100
        }
      ]
    }
  },
  getters: {
    userTotal: state => {
      return state.user.coins.reduce((total, currentAmount) => {
        return (total + currentAmount.amount * currentAmount.cost)
      }, 0)
    },
    cashierTotal: state => {
      return state.cashier.coins.reduce((total, currentAmount) => {
        return (total + currentAmount.amount * currentAmount.cost)
      }, 0)
    },
    userCoins: state => {
      return state.user.coins.sort((a, b) => b.cost - a.cost)
    },
    cashierCoins: state => {
      return state.cashier.coins.sort((a, b) => b.cost - a.cost)
    },
    userGoods: state => {
      return state.user.goods.filter((product) => product.amount > 0)
    },
    userTotalSpent: state => {
      return state.user.goods.reduce((total, currentAmount) => {
        return total + currentAmount.amount * currentAmount.cost
      }, 0)
    }
  },
  mutations: {
    INIT_STATE (state) {
      state.isInitialised = true
      state = initialState
    },
    INSERT_COIN (state, payload) {
      const userCoin = state.user.coins.find((el) => el.cost === payload)
      if (userCoin.amount > 0) {
        const vmachineCoin = state.cashier.coins.find((el) => el.cost === payload)
        userCoin.amount = userCoin.amount - 1
        state.payment = state.payment + payload
        vmachineCoin.amount = vmachineCoin.amount + 1
      }
    },
    BUY_PRODUCT (state, product) {
      if (state.payment < product.price) {
        console.log('недостаточно денег')
      } else if (state.payment >= product.price) {
        state.payment = state.payment - product.price
        const VMProduct = state.cashier.goods.find(el => el.name === product.name)
        VMProduct.amount = VMProduct.amount - 1
        const UserProduct = state.user.goods.find(el => el.name === product.name)
        UserProduct.amount = UserProduct.amount + 1
      }
    },
    GET_PAYBACK (state, payload) {
      state.payment = payload.paybackLocal
      state.cashier.coins = payload.cashierCoins
      state.user.coins = payload.userCoins
    }

  },
  actions: {
    initState ({ commit, state }) {
      if (!state.isInitialised) {
        commit('INIT_STATE')
      }
    },
    insertCoin ({ commit }, payload) {
      commit('INSERT_COIN', payload)
    },
    buyProduct ({ commit }, payload) {
      commit('BUY_PRODUCT', payload)
    },
    getPayback ({ commit, getters, state }) {
      let paybackLocal = state.payment
      const newUserCoins = getters.userCoins
      const newCashierCoins = getters.cashierCoins.map((cashierCoin) => {
        const coinSum = (cashierCoin.amount * cashierCoin.cost)
        const userCoin = newUserCoins.find((userCoin) => userCoin.cost === cashierCoin.cost)
        if (coinSum >= paybackLocal) {
          cashierCoin.amount = cashierCoin.amount - Math.floor(paybackLocal / cashierCoin.cost)
          userCoin.amount = userCoin.amount + Math.floor(paybackLocal / cashierCoin.cost)
          paybackLocal = paybackLocal - Math.floor(paybackLocal / cashierCoin.cost) * cashierCoin.cost
          return cashierCoin
        } else if (coinSum < state.payment) {
          userCoin.amount = userCoin.amount + cashierCoin.amount
          cashierCoin.amount = 0
          return cashierCoin
        }
      })
      commit('GET_PAYBACK', { cashierCoins: newCashierCoins, userCoins: newUserCoins, paybackLocal })
    }
  }
})
