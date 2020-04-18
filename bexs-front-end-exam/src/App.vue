<template>
  <div id="app">

    <headerC/>
    <mainCheckout msg=""/>
  </div>
</template>

<script>
import 'reset-css'
import mainCheckout from './components/checkout/checkout.vue'
import headerC from './components/header/header.vue'

//local register
export default {
  name: 'bexs_test',
  components: {
    mainCheckout,
    headerC
  }
}
</script>

<style lang='sass'>
  @import './sass/main.sass'
</style>
