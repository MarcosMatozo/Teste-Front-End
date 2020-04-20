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
        <cardForm />
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
import { eventBus } from './../../main';

export default {
  components: {
    customCard,
    leftTxts,
    stepTitles,
    cardForm,
    purchaseDetails
  },
  // methods: {
  //   passCustomCard: function(){
  //     eventBus.$emit('customNumber', '' )
  //   }
  // },
  mixins: {
    data: function () {
        return {
            eventBus: eventBus
        }
    }
  }
}
</script>

<style lang="sass">
.checkout-validator, .checkout-validator > div
  display: inline-block
  vertical-align: top
.checkout-validator
  &-left
    background-color: $main-color
    p
      color: #fff
  &-right
    background: #fff

.checkout-validator
  @media ( max-width: 929px )
    &-left
      width: 100%
      text-align: center
      height: 239px
      padding: 40px 0 113px
    &-right
      width: 100%
      height: 725px
      padding: 114px 40px 40px
  @media ( min-width: 930px )
    &-left
      width: 34.375%
      min-height: 596px
    &-right
      width: 65.625%
      height: 596px
  @media ( min-width: 1024px )
    width: 74.964%
    min-width: 1024px
  @media ( max-width: 1023px )
    width: 100%
  @media ( min-width: 1366px )
    &-left
      padding: 50px 1.56% 0 6.25%
    &-right
      padding: 50px 64px 50px 168px
  @media ( max-width: 1365px )
    display: block
    margin: 0 auto
  @media ( max-width: 1365px ) and (min-width: 930px)
    &-left
      padding: 50px 1.56% 0 2%
    &-right
      padding: 50px 64px 50px 120px

</style>
