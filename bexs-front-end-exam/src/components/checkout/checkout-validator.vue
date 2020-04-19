<template>

  <div class="">
    <div class="checkout-validator">
      <div class="checkout-validator-left">
        <div class="left-infos">
          <leftTxts/>
          <customCard/>
        </div>
      </div>
      <div class="checkout-validator-right">
        <stepTitles/>
        <cardForm/>
      </div>
    </div>
    <purchaseDetails/>
  </div>
</template>



<script>

import customCard from './custom-card.vue'
import leftTxts from './left-card-texts.vue'
import stepTitles from './step-titles.vue'
import cardForm from './card-form.vue'
import purchaseDetails from './checkout-purchase-details.vue'

export default {
  components: {
    customCard,
    leftTxts,
    stepTitles,
    cardForm,
    purchaseDetails
  }
}
</script>

<style lang="sass">
.checkout-validator, .checkout-validator > div
  display: inline-block
  vertical-align: top
.checkout-validator
  width: 74.964%
  &-left
    width: 34.375%
    background-color: $main-color
    padding: 50px 16px 0 64px
    min-height: 596px
    p
      color: #fff
  &-right
    width: 65.625%
    height: 596px
    background: #fff
    padding: 50px 64px 50px 168px

</style>
