<template >
  <div id="app">

    <headerC/>
    <mainCheckout msg=""/>
  </div>
</template>

<script>
import 'reset-css'
import mainCheckout from './components/checkout/checkout.vue'
import headerC from './components/header/header.vue'

import { eventBus } from './main';

//Event bus
// eventBus.$on('i-got-clicked', isBlank => {
//   console.log('Type State', isBlank)
// });

//local register
export default {
  data: function(){
    return {
      //Steps
      stepCheckout: 0
    }
  },
  methods: {
    evBStepCheckout: function(){
      eventBus.$emit('step-checkout', this.stepCheckout )
    }
  },
  components: {
    mainCheckout,
    headerC
  },
  mounted: function(){
    this.evBStepCheckout();
  }
}
</script>

<style lang='sass'>
  @import './sass/main.sass'
</style>
