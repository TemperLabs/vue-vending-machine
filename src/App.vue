<template>
  <div id="app">
    <div class="vm">
      <div>
        {{userTotal}}
        <user></user>
      </div>
      <payment />
    <vending-machine />
    </div>
  </div>
</template>

<script>
import user from './components/user'
import vendingMachine from './components/vmachine'
import payment from './components/payment'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: { vendingMachine, user, payment },
  computed: {
    ...mapGetters([
      'userTotal'
    ])
  },
  created () {
    this.$store.dispatch('initState')
    console.log(this.userTotal)
  }
}
</script>

<style lang="scss">
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
</style>
