

<template>
  <div class="checkout-main">
    <div class="container">
      <checkoutValidator/>
    </div>
  </div>
</template>

<script>

import checkoutValidator from './checkout-validator.vue'

export default {
  name: 'checkout',
  components: {
    checkoutValidator
  },
  data: function(){
    return {

    }
  }
}
</script>


<style lang="sass">
  .checkout-main
    display: inline-block
    height: 90.4vh
    width: 100%
    position: relative
    background: #F7F7F7
    padding: 65px 00
</style>

<style scoped>

</style>
