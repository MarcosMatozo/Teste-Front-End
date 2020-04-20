<template>
  <div class="custom-card" :class=" { onType : !isBlank } " >
    <i class="card-flag"></i>
    <p class="card-number">
      <template v-if="isBlank" >
        <span>**** </span><span>**** </span><span>**** </span><span>**** </span>
      </template>
      <template v-else>
        {{clientNumberCard}}
      </template>
    </p>
    <p class="card-name">
      {{clientName}}
    </p>
    <p class="card-valid">{{clientValidCard}}</p>
    <!-- <p @click=" globalClick() " >CLIC</p> -->
  </div>
</template>


<script>
import { eventBus } from './../../main';

export default {
  components: {

  },
  props:{
    clientNumberCard2: {
      type: String,
      default: '**** **** **** ****'
    },
    clientName: {
      type: String,
      default : 'Nome do titular'
    },
    clientValidCard: {
      type: String,
      default: '00/00'
    }
  },
  data: function(){
    return {
      isBlank : true,
      clientNumberCard: ''
    }
  },
  methods: {
    // globalClick(){
    //   eventBus.$emit('i-got-clicked', this.isBlank )
    // }
  },
  computed : {
    onType: function(){
      return this.isBlank
    }
  },
  mounted: function(){
    eventBus.$on('cardNumber', data => {
      console.log('BUS', data);
      console.log('this', this);
    })
  }
}
</script>

<style scoped lang="sass">
.custom-card
  display: inline-block
  vertical-align: top
  position: relative
  padding: 35px 24px 0 26px
  background: url('../../assets/img/elements/card-bg-empty.svg') no-repeat center
  background-size: 100%
  z-index: 999999
  height: 223px
  border-radius: 10px
  @media ( min-width: 930px )
    width: 133.82%
    margin: 30px 0 0
    p.card-
      &number
        margin: 48px 0 33px
      &name, &valid
        font-size: 1rem
  @media ( max-width: 929px )
    width: 80%
    margin: 15px 0 0
    p.card-
      &number
        margin: 78px 0 25px
      &name, &valid
        font-size: .75rem
  @media ( min-width: 1366px )
    min-height: 223px
  @media ( max-width: 929px )
    min-height: 172px
    padding: 0 14px
    max-width: 350px
    max-height: 172px
    &:not(.onType)
      .card-flag
        display: none

  /* Empty form styles 1,1875 */
  &:not(.onType)
    .card-flag
      background: none

    p.card-
      &number
        font-size: 1.5rem
        letter-spacing: 3.3px
        display: flex
        justify-content: space-between
        span
          &:not(:last-child)
            margin-right: 10px


  .card-flag
    display: inline-block
    vertical-align: top
    min-height: 22px
    min-width: 70px
    background: url('../../assets/img/elements/card-flag.png') no-repeat center


  p
    font-family: $font-family-sec
    display: inline-block
    vertical-align: top
  p.card-
    &number
      width: 100%
      letter-spacing: 2.31px
      text-shadow: 0 1px 2px #000000B3
      font-size: 1.375rem
      font-weight: 100
    &name
      text-shadow: 0 1px 2px #000000B3
      letter-spacing: 0
      float: left
      text-transform: uppercase
    &valid
      float: right
      margin-right: 5px
</style>
