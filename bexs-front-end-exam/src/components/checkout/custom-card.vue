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


export default {
  components: {

  },
  props:{
    clientNumberCard: {
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
  }
}
</script>

<style scoped lang="sass">
.custom-card
  display: inline-block
  vertical-align: top
  position: relative
  margin: 30px 0 0
  padding: 35px 24px 0 26px
  background: url('../../assets/img/elements/card-bg-empty.svg') no-repeat center
  z-index: 999999
  width: 133.82%
  height: 223px
  border-radius: 10px

  //Empty form styles
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
      margin: 48px 0 33px
      letter-spacing: 2.31px
      text-shadow: 0px 1px 2px #000000B3
      font-size: 1.375rem
      font-weight: 100
    &name
      font-size: 1rem
      text-shadow: 0px 1px 2px #000000B3
      letter-spacing: 0
      float: left
      text-transform: uppercase
    &valid
      float: right
      margin-right: 5px
</style>
