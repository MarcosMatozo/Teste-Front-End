

<template>
  <div class="left-card-texts">
    <p class="top-txt">
      <i class="arrow"></i>
      <span v-if=' stepCheckout == 0 ' >Alterar forma de pagamento</span>
      <span class="step" v-if=' stepCheckout != 0 ' > <span>Etapa {{stepCheckout}}</span> <span>de {{stepCheckoutMax}}</span> </span>
    </p>
    <p class="middle-txt">
      <i class="icon-card"></i><span>Adicione um novo cartão de crédito</span>
    </p>
  </div>

</template>



<script>

import { eventBus } from '../../main';

  export default {
    data: function(){
      return{
        stepCheckout : '',
        stepCheckoutMax : ''
      }
    },
    mounted: function(){
    //Event bus
    //step
      eventBus.$on('step-checkout', stepCheckout => {
        this.stepCheckout = stepCheckout.currentStep;
        this.stepCheckoutMax = stepCheckout.stepCheckoutMax;
      });
    }
  }
</script>

<style scoped lang="sass">

@import './../../sass/elements'

.left-card-texts
  display: inline-block
  vertical-align: top
  width: 100%
  span
    letter-spacing: -0.01px
  .top-txt
    font-size: .8125rem
    font-weight: 100
    span
      position: relative
      top: -2px
      margin: 0 0 0 10px
      &.step
        > span
          margin: 0
          &:first-child
            font-weight: 600
    .arrow
      &:before
        border-color: #fff
  .middle-txt
    font-size: 1.25rem
    position: relative
    padding: 0 0 0 65px
    .icon-card
      background-image: url('../../assets/img/elements/icon-card.svg')
      background-size: 100%
      margin: 0 15px 0 0
    span
      display: inline-block
      vertical-align: top
      font-weight: bold
      width: 100%
      position: relative
      top: 4px
      text-align: left

  @media ( max-width: 929px )
    .arrow
      float: left
      margin: 0 -15px 0 15px
      width: 12px
      height: 20px
      &:before
        width: 12px
        height: 12px
    .middle-txt
      margin: 30px 0 0
      padding: 0
      .icon-card
        display: inline-block
        vertical-align: top
        width: 40px
        height: 40px
      span
        max-width: 165px
        top: 3px
        font-size: 1rem
  @media ( min-width: 930px )
    .middle-txt
      margin: 54px 0 0
      min-height: 64px
      .icon-card
        position: absolute
        left: 0
        top: 0
        width: 50px
        height: 50px
        span
          top: 8px
  @media ( min-width: 1366px )
    .middle-txt
      font-size: 1.25rem
  @media ( max-width: 1365px )
    .middle-txt
      font-size: 1rem
      span
        width: auto

</style>
