<template>
  <div class="step-titles">
    <ul>
      <li v-for=" (step, index) in steps" :key="index" :class=" { active : stepCheckout == index } " >
          <span>{{index}}</span>
          <span>{{step}} <span class="arrow"></span> </span>
      </li>
    </ul>
  </div>
</template>

<script>

import { eventBus } from '../../main';

export default {
  data: function(){
    return {
      stepCheckout: '',
      steps: ['Carrinho', 'Pagamento', 'Confirmação']
    }
  },
  methods:{
    // step-checkout(){
    //
    // }
  },
  components: {

  },
  mounted: function(){
    //Event bus
    //step
    eventBus.$on('step-checkout', stepCheckout => {
      this.stepCheckout = stepCheckout;
    });
  }
}

</script>

<style scoped lang="sass">
@import './../../sass/elements'

.step-titles, .step-titles ul
  display: inline-block
  vertical-align: top
  width: 100%
.step-titles
  margin: 0 0 71px
  ul
    li
      display: inline-block
      vertical-align: top
      margin: 0 0 0 5.45%
      color: $main-color
      font-size: 0.8125rem
      &:last-child
        margin-right: 0
        span.arrow
          display: none
      &.active
        span:not(.arrow)
          &:first-child
            background: url('../../assets/img/elements/checked.png') no-repeat center $main-color
            background-size: 13px
            color: transparent
      span:not(.arrow)
        display: inline-block
        vertical-align: top
        &:first-child
          width: 22px
          height: 22px
          line-height: 15px
          text-align: center
          border-radius: 100%
          border: 2px solid $main-color
          font-weight: 500
        &:nth-child(2)
          font-weight: 100
          position: relative
          top: 3px
          margin: 0 0 0 5px
      //arrow
      span.arrow
        &:before
          transform: rotate(45deg)
          top: 4px


</style>
