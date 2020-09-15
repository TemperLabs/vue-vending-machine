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
      return state.user.coins
    },
    cashierCoins: state => {
      return state.cashier.coins
    },
    userGoods: state => {
      return state.user.goods.filter((product) => {
        console.log(product.amount)
        return product.amount > 0
      })
    },
    userTotalSpent: state => {
      return state.user.goods.reduce((total, currentAmount) => {
        return total + currentAmount.amount * currentAmount.cost
      }, 0)
    },
    vmachineCoins: state => {
      return state.cashier.coins.sort((a, b) => b.cost - a.cost)
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
        console.log('vmachineCoin')
        console.log('vmachineCoin.amount')
        console.log(vmachineCoin.amount)
        userCoin.amount = userCoin.amount - 1
        state.payment = state.payment + payload
        vmachineCoin.amount = vmachineCoin.amount + payload
        console.log(vmachineCoin)
      }
    },
    BUY_PRODUCT (state, product) {
      console.log(this.vmachineCoins)
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
      state.payment = state.payment - payload.payment
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
      getters.vmachineCoins.map((coin) => {
        const coinSum = (coin.amount * coin.cost)
        if (coinSum > state.payment) {
          const coinPaybackAmount = Math.floor(state.payment / coin.cost)
          console.log('coinPaybackAmount')
          console.log(coinPaybackAmount)
          commit('GET_PAYBACK', { payment: coinPaybackAmount })
        }
      })
    }
  }
})
