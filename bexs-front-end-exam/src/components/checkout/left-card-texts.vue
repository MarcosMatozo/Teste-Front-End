

<template>
  <div class="left-card-texts">
    <p class="top-txt">
      <i class="arrow"></i><span>Alterar forma de pagamento</span>
    </p>
    <p class="middle-txt">
      <i class="icon-card"></i><span>Adicione um novo cartão de crédito</span>
    </p>
  </div>

</template>



<script>
  export default {
    name: 'left-card-texts',
    components: {

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
    .arrow
      &:before
        border-color: #fff
  .middle-txt
    font-size: 1.25rem
    margin: 54px 0 0
    .icon-card, span
      display: inline-block
      vertical-align: top
    .icon-card
      width: 50px
      height: 50px
      background-image: url('../../assets/img/elements/icon-card.svg')
      margin: 0 15px 0 0
    span
      font-weight: bold
      width: 76.10%
      position: relative
      top: 4px


</style>
