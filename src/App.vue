<template>
  <div id="app">
    <div class="vm">
      <div>
        <user></user>
      </div>
      <div v-show="thxPayment" @click="toggleThxPayment">Спасибо</div>
    <vending-machine />
    </div>
  </div>
</template>

<script>
import user from './components/user'
import vendingMachine from './components/vmachine'
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  components: { vendingMachine, user },
  computed: {
    ...mapGetters(['userTotal']),
    ...mapState(['thxPayment'])
  },
  methods: {
    ...mapActions(['initState']),
    ...mapActions(['toggleThxPayment'])
  },
  created () {
    this.initState()
  }
}
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  ul,li,ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .vm {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
